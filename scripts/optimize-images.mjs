#!/usr/bin/env node
/**
 * Build-time image optimisation.
 *
 * Cloudflare Workers cannot run sharp/ipx per request, so we pre-generate
 * responsive AVIF/WebP variants into public/images/opt and ship them as
 * static assets. `app/components/responsive-image.vue` reads the manifest
 * and emits a <picture> with srcset.
 *
 * Run automatically by `dev`, `build` and `generate` (see package.json).
 */
import sharp from "sharp";
import { mkdir, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, "public");
const OUT_ROOT = path.join(PUBLIC, "images", "opt");
const MANIFEST_PATH = path.join(ROOT, "app", "data", "image-manifest.json");

const GROUPS = [
  { dir: "images/project", out: "project", widths: [480, 768, 1200, 1600], formats: ["avif", "webp"] },
  { dir: "images/blog", out: "blog", widths: [480, 768, 1200, 1600], formats: ["avif", "webp"] },
  { dir: "images/blog/1125", out: "blog/1125", widths: [720, 1200], formats: ["webp"] },
  { dir: "images/testimonials", out: "testimonials", widths: [96, 192], formats: ["avif", "webp"] },
  { dir: "images", out: "", only: ["bret_oreta.png"], widths: [480, 720, 960], formats: ["avif", "webp"] },
];

const AVIF = { quality: 62, effort: 5 };
const WEBP = { quality: 76, effort: 4 };
const RASTER = /\.(png|jpe?g|webp|avif)$/i;

async function exists(file) {
  try {
    await stat(file);
    return true;
  } catch {
    return false;
  }
}

async function processFile(group, file) {
  const sourcePath = path.join(PUBLIC, group.dir, file);
  const publicSource = "/" + path.posix.join(group.dir, file);
  const name = file.replace(RASTER, "");
  const outDir = path.join(OUT_ROOT, group.out);
  const publicBase = "/images/opt/" + path.posix.join(group.out, name);

  const meta = await sharp(sourcePath).metadata();
  const sourceWidth = meta.width ?? 0;
  if (!sourceWidth) return null;

  // Never upscale: only keep widths below the source width.
  const widths = group.widths.filter((w) => w < sourceWidth);
  if (!widths.length) widths.push(sourceWidth);

  const generated = {};
  let regenerated = false;

  for (const format of group.formats) {
    generated[format] = [];
    for (const width of widths) {
      const target = path.join(outDir, `${name}-${width}.${format}`);
      const fresh =
        (await exists(target)) &&
        (await stat(target)).mtimeMs >= (await stat(sourcePath)).mtimeMs;

      if (!fresh) {
        await mkdir(outDir, { recursive: true });
        let pipeline = sharp(sourcePath).resize({ width, withoutEnlargement: true });
        pipeline = format === "avif" ? pipeline.avif(AVIF) : pipeline.webp(WEBP);
        await pipeline.toFile(target);
        regenerated = true;
      }
      generated[format].push(width);
    }
  }

  return {
    publicSource,
    regenerated,
    entry: {
      base: publicBase,
      width: sourceWidth,
      height: meta.height ?? 0,
      formats: generated,
      bytes: Math.round((await stat(sourcePath)).size / 1024),
    },
  };
}

async function main() {
  const manifest = {};
  let generated = 0;
  let skipped = 0;
  let sourceBytes = 0;
  let outputBytes = 0;

  for (const group of GROUPS) {
    const dir = path.join(PUBLIC, group.dir);
    if (!(await exists(dir))) continue;

    const files = (await readdir(dir, { withFileTypes: true }))
      .filter((d) => d.isFile() && RASTER.test(d.name))
      .map((d) => d.name)
      .filter((f) => !group.only || group.only.includes(f))
      .sort();

    for (const file of files) {
      const result = await processFile(group, file);
      if (!result) continue;
      sourceBytes += result.entry.bytes;

      // Sum the largest variant of each format to report the realistic saving.
      for (const format of Object.keys(result.entry.formats)) {
        const width = result.entry.formats[format].at(-1);
        const variant = path.join(
          OUT_ROOT,
          group.out,
          `${file.replace(RASTER, "")}-${width}.${format}`,
        );
        if (await exists(variant))
          outputBytes += Math.round((await stat(variant)).size / 1024);
      }

      if (result.regenerated) generated++;
      else skipped++;

      manifest[result.publicSource] = result.entry;
    }
  }

  // A small square avatar for blog author bylines (was a 1080x1078, 101 KB image
  // rendered at 40 px).
  const avatarSource = path.join(PUBLIC, "images", "bret_oreta.png");
  if (await exists(avatarSource) && manifest["/images/bret_oreta.png"]) {
    const avatarOut = path.join(OUT_ROOT, "avatar-96.webp");
    if (!(await exists(avatarOut))) {
      await mkdir(OUT_ROOT, { recursive: true });
      await sharp(avatarSource)
        .resize({ width: 192, height: 192, fit: "cover", position: "top" })
        .webp(WEBP)
        .toFile(avatarOut);
    }
    manifest["/images/bret_oreta.png"].avatar = "/images/opt/avatar-96.webp";
  }

  const sorted = Object.fromEntries(
    Object.keys(manifest)
      .sort()
      .map((k) => [k, manifest[k]]),
  );

  await mkdir(path.dirname(MANIFEST_PATH), { recursive: true });
  await writeFile(MANIFEST_PATH, JSON.stringify(sorted, null, 2) + "\n", "utf8");

  const kb = (n) => `${(n / 1024).toFixed(1)} MB`;
  console.log(
    `[images] ${generated} processed, ${skipped} cached · ${kb(sourceBytes)} source → ${kb(outputBytes)} largest variants`,
  );
}

main().catch((error) => {
  console.error("[images] failed:", error);
  process.exit(1);
});
