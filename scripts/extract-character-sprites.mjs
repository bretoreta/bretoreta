#!/usr/bin/env node
/**
 * Offline sprite-sheet extraction for Chibi, the portfolio companion.
 *
 * The supplied sheet is an illustrated sprite sheet, not a uniform atlas.
 * It has four rows of artwork separated by transparent gutters, with label
 * text below every row. This script:
 *
 *   1. Detects real character bounds from the alpha channel (never splits by
 *      fixed tile size).
 *   2. Segments each row into sprites using vertical gaps.
 *   3. Excludes the header/label bands from every crop.
 *   4. Crops each sprite with a 1px soft-edge margin, scales it to a common
 *      character height, and places it on a shared transparent canvas so feet
 *      stay on the same baseline between frames.
 *   5. Writes the individual PNGs plus a manifest with file paths, dimensions,
 *      anchors, categories and recommended durations.
 *
 * Run by `dev`, `build`, `build:worker` and `generate` through package.json.
 * Kept out of the browser on purpose: extraction at runtime would be wasteful.
 */
import sharp from "sharp";
import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const SOURCE = path.join(ROOT, "public", "images", "Chibi Character Pixel Sprite Sheet.png");
const OUT_ROOT = path.join(ROOT, "public", "assets", "character");
const MANIFEST_PATH = path.join(ROOT, "app", "data", "character-manifest.json");

/** Shared body canvas. All full-body frames use these exact dimensions. */
const BODY = { width: 144, height: 176, baseline: 168 };
/** Talking sprites are bust portraits, shown inside the speech bubble. */
const PORTRAIT = { width: 112, height: 136, baseline: 132 };

const ALPHA_THRESHOLD = 12;
const CROP_MARGIN = 1;

/**
 * The four artwork rows. Y ranges come from alpha projections of the sheet and
 * deliberately stop before the label text underneath each row.
 */
const ROWS = [
  { key: "row1", y0: 44, y1: 210 },
  { key: "row2", y0: 312, y1: 459 },
  { key: "row3", y0: 558, y1: 719 },
  { key: "row4", y0: 813, y1: 962 },
];

/**
 * Sprite definitions in left-to-right order, exactly matching the sheet.
 *
 * `scale` values normalise the slightly different drawing scales the sheet uses
 * per row. `fitHeight` additionally equalises blink/look frames with idle so a
 * blink does not visibly resize or drop the character.
 */
const GROUPS = [
  {
    dir: "walking",
    category: "walking",
    fps: 10,
    loop: true,
    row: "row1",
    canvas: BODY,
    scale: 150 / 151,
    names: ["walk_1", "walk_2", "walk_3", "walk_4", "walk_5", "walk_6", "walk_7", "walk_8"],
  },
  {
    dir: "talking",
    category: "talking",
    fps: 6,
    loop: true,
    row: "row1",
    canvas: PORTRAIT,
    scale: 1,
    names: ["talk_1", "talk_2", "talk_3", "talk_4", "talk_5", "talk_6"],
  },
  {
    dir: "idle",
    category: "idle",
    fps: 3,
    loop: true,
    row: "row2",
    canvas: BODY,
    scale: 150 / 136,
    fitHeight: 150,
    names: ["idle_1", "idle_2", "idle_3", "idle_4"],
  },
  {
    dir: "blink",
    category: "blink",
    fps: 8,
    loop: false,
    row: "row2",
    canvas: BODY,
    scale: 1,
    fitHeight: 150,
    names: ["blink_1", "blink_2"],
  },
  {
    dir: "look",
    category: "look",
    fps: 2.5,
    loop: false,
    row: "row2",
    canvas: BODY,
    scale: 1,
    fitHeight: 150,
    names: ["look_left", "look_center", "look_right"],
  },
  {
    dir: "emotions",
    category: "emotions",
    fps: 2,
    loop: false,
    row: "row2",
    canvas: BODY,
    scale: 150 / 136,
    names: ["happy", "excited", "thinking", "confused", "sad"],
  },
  {
    dir: "laptop",
    category: "laptop",
    fps: 8,
    loop: true,
    row: "row3",
    canvas: BODY,
    scale: 150 / 146,
    names: ["sit_idle", "type_1", "type_2", "type_3", "type_4", "look_up", "hold_laptop", "read", "type_stand"],
  },
  {
    dir: "dragging",
    category: "dragging",
    fps: 9,
    loop: true,
    row: "row3",
    canvas: BODY,
    scale: 150 / 146,
    names: ["drag_1", "drag_2", "drag_3"],
  },
  {
    dir: "jumping",
    category: "jumping",
    fps: 6,
    loop: false,
    row: "row3",
    canvas: BODY,
    scale: 150 / 146,
    names: ["jump", "air", "land"],
  },
  {
    dir: "interactions",
    category: "interactions",
    fps: 2,
    loop: false,
    row: "row4",
    canvas: BODY,
    scale: 150 / 137,
    names: [
      "wave",
      "point",
      "thumbs_up",
      "shrug",
      "facepalm",
      "laugh",
      "sleep",
      "stretch",
      "celebrate",
      "scared",
      "angry",
      "cool",
    ],
  },
];

const EXPECTED_RUNS = { row1: 14, row2: 14, row3: 15, row4: 12 };

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function readSheet() {
  const { data, info } = await sharp(SOURCE).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  assert(info.width === 1536 && info.height === 1024, `Unexpected sheet size ${info.width}x${info.height}`);
  return { data, info };
}

function alphaAt(sheet, x, y) {
  const { data, info } = sheet;
  return data[(y * info.width + x) * info.channels + 3];
}

/** Column runs of foreground pixels inside a row band. */
function findColumnRuns(sheet, y0, y1) {
  const { info } = sheet;
  const runs = [];
  let start = null;

  for (let x = 0; x < info.width; x += 1) {
    let occupied = false;
    for (let y = y0; y <= y1; y += 1) {
      if (alphaAt(sheet, x, y) > ALPHA_THRESHOLD) {
        occupied = true;
        break;
      }
    }
    if (occupied && start === null) start = x;
    if (!occupied && start !== null) {
      runs.push({ x0: start, x1: x - 1 });
      start = null;
    }
  }
  if (start !== null) runs.push({ x0: start, x1: info.width - 1 });

  // Drop slivers caused by stray anti-aliasing.
  return runs.filter((run) => run.x1 - run.x0 >= 8);
}

/** Tight alpha bounds for one sprite candidate. */
function findBounds(sheet, x0, x1, y0, y1) {
  let minX = x1;
  let maxX = x0;
  let minY = y1;
  let maxY = y0;

  for (let y = y0; y <= y1; y += 1) {
    for (let x = x0; x <= x1; x += 1) {
      if (alphaAt(sheet, x, y) <= ALPHA_THRESHOLD) continue;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }

  assert(maxX >= minX && maxY >= minY, "Could not find sprite bounds");
  return { x: minX, y: minY, width: maxX - minX + 1, height: maxY - minY + 1 };
}

async function extractSprite(sheet, group, name, run, index) {
  const bounds = findBounds(sheet, run.x0, run.x1, ROWS.find((r) => r.key === group.row).y0, ROWS.find((r) => r.key === group.row).y1);

  const left = Math.max(0, bounds.x - CROP_MARGIN);
  const top = Math.max(0, bounds.y - CROP_MARGIN);
  const width = Math.min(sheet.info.width - left, bounds.width + CROP_MARGIN * 2);
  const height = Math.min(sheet.info.height - top, bounds.height + CROP_MARGIN * 2);

  const cropped = await sharp(SOURCE)
    .ensureAlpha()
    .extract({ left, top, width, height })
    .toBuffer();

  const targetHeight = group.fitHeight ?? Math.round((height - CROP_MARGIN * 2) * group.scale);
  const resized = await sharp(cropped)
    .resize({ height: Math.max(1, targetHeight), kernel: "lanczos3", fit: "inside" })
    .toBuffer({ resolveWithObject: true });

  const scaledW = resized.info.width;
  const scaledH = resized.info.height;

  assert(scaledW <= group.canvas.width, `${name}: scaled width ${scaledW} exceeds canvas ${group.canvas.width}`);
  assert(scaledH <= group.canvas.baseline, `${name}: scaled height ${scaledH} exceeds baseline ${group.canvas.baseline}`);

  const canvasLeft = Math.round((group.canvas.width - scaledW) / 2);
  const canvasTop = group.canvas.baseline - scaledH;
  const file = path.posix.join(
    "/assets/character",
    group.dir,
    `${name}.png`,
  );

  const outDir = path.join(OUT_ROOT, group.dir);
  await mkdir(outDir, { recursive: true });
  await sharp({
    create: {
      width: group.canvas.width,
      height: group.canvas.height,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: resized.data, left: canvasLeft, top: canvasTop }])
    .png({ compressionLevel: 9, palette: false })
    .toFile(path.join(ROOT, "public", file));

  return {
    name,
    file,
    category: group.category,
    index,
    width: group.canvas.width,
    height: group.canvas.height,
    anchor: { x: Math.round(group.canvas.width / 2), y: group.canvas.baseline },
    duration: Math.round(1000 / group.fps),
    fps: group.fps,
    loop: group.loop,
    source: {
      x: left,
      y: top,
      width,
      height,
    },
    bounds,
  };
}

async function main() {
  const sheet = await readSheet();
  const rowRuns = {};

  for (const row of ROWS) {
    const runs = findColumnRuns(sheet, row.y0, row.y1);
    assert(
      runs.length === EXPECTED_RUNS[row.key],
      `${row.key}: expected ${EXPECTED_RUNS[row.key]} sprites, found ${runs.length}. ` +
        "The sheet layout changed — update the extraction bands or verify manually.",
    );
    rowRuns[row.key] = runs;
  }

  // Clean generated output so renamed/removed sprites do not linger.
  await rm(OUT_ROOT, { recursive: true, force: true });
  await mkdir(OUT_ROOT, { recursive: true });

  const sprites = {};
  const categories = {};
  const cursor = { row1: 0, row2: 0, row3: 0, row4: 0 };

  for (const group of GROUPS) {
    categories[group.category] ??= {
      fps: group.fps,
      loop: group.loop,
      canvas: group.canvas,
      frames: [],
    };

    for (const name of group.names) {
      const run = rowRuns[group.row][cursor[group.row]];
      assert(run, `${name}: no source sprite available`);
      const sprite = await extractSprite(sheet, group, name, run, cursor[group.row]);
      cursor[group.row] += 1;
      sprites[name] = sprite;
      categories[group.category].frames.push(name);
    }
  }

  for (const row of ROWS) {
    assert(
      cursor[row.key] === rowRuns[row.key].length,
      `${row.key}: ${rowRuns[row.key].length - cursor[row.key]} source sprites were not mapped`,
    );
  }

  const manifest = {
    source: "/images/Chibi Character Pixel Sprite Sheet.png",
    canvas: BODY,
    portraitCanvas: PORTRAIT,
    categories,
    sprites,
  };

  await writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

  const count = Object.keys(sprites).length;
  console.log(`[chibi] extracted ${count} sprites → public/assets/character`);
  console.log(`[chibi] manifest → ${path.relative(ROOT, MANIFEST_PATH)}`);
}

await main();
