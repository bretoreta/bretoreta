<template>
  <div ref="emblaRef" class="overflow-hidden">
    <div :class="['flex', orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', $attrs.class]">
      <slot />
    </div>
  </div>
</template>
<script setup>
import { inject } from 'vue'
const orientation = inject('carouselOrientation', 'horizontal')
</script>