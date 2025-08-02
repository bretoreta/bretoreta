<template>
  <div
    role="group"
    aria-roledescription="slide"
    :class="['min-w-0 shrink-0 grow-0 basis-full', orientation === 'horizontal' ? 'pl-4' : 'pt-4', $attrs.class]"
  >
    <slot />
  </div>
</template>
<script setup>
import { inject } from 'vue'
const orientation = inject('carouselOrientation', 'horizontal')
</script>