<script setup lang="ts">
import type { SpriteRecord } from "~/data/character-animations";

withDefaults(
  defineProps<{
    sprite?: SpriteRecord;
    mirror?: boolean;
  }>(),
  { mirror: false },
);
</script>

<template>
  <span class="chibi-frame" :class="{ 'is-mirrored': mirror }" aria-hidden="true">
    <img
      v-if="sprite"
      :src="sprite.file"
      :width="sprite.width"
      :height="sprite.height"
      alt=""
      draggable="false"
      decoding="async"
      class="chibi-frame-img"
    />
  </span>
</template>
