<script setup lang="ts">
import manifest from "~/data/image-manifest.json";

interface ManifestEntry {
  base: string;
  width: number;
  height: number;
  formats: Record<string, number[]>;
  avatar?: string;
}

const entries = manifest as Record<string, ManifestEntry>;

const props = withDefaults(
  defineProps<{
    src: string;
    alt: string;
    /** Responsive sizes hint; defaults to full width. */
    sizes?: string;
    class?: string;
    loading?: "lazy" | "eager";
    decoding?: "async" | "sync" | "auto";
    /** Marks the LCP image: eager + high fetch priority. */
    priority?: boolean;
    width?: number | string;
    height?: number | string;
  }>(),
  {
    sizes: "100vw",
    loading: "lazy",
    decoding: "async",
    priority: false,
  },
);

const entry = computed(() => entries[props.src]);

function srcset(format: string) {
  const item = entry.value;
  const widths = item?.formats?.[format];
  if (!item || !widths?.length) return undefined;
  return widths.map((w) => `${item.base}-${w}.${format} ${w}w`).join(", ");
}

const fallback = computed(() => {
  const item = entry.value;
  if (!item) return props.src;
  const webp = item.formats.webp;
  const avif = item.formats.avif;
  const widths = webp ?? avif ?? [];
  const width = widths.at(-1);
  if (!width) return props.src;
  return `${item.base}-${width}.${webp ? "webp" : "avif"}`;
});

const intrinsicWidth = computed(() => props.width ?? entry.value?.width);
const intrinsicHeight = computed(() => props.height ?? entry.value?.height);
</script>

<template>
  <picture class="contents">
    <source
      v-if="srcset('avif')"
      type="image/avif"
      :srcset="srcset('avif')"
      :sizes="sizes"
    />
    <source
      v-if="srcset('webp')"
      type="image/webp"
      :srcset="srcset('webp')"
      :sizes="sizes"
    />
    <img
      :src="fallback"
      :alt="alt"
      :sizes="sizes"
      :width="intrinsicWidth"
      :height="intrinsicHeight"
      :class="props.class"
      :loading="priority ? 'eager' : loading"
      :fetchpriority="priority ? 'high' : undefined"
      :decoding="decoding"
    />
  </picture>
</template>
