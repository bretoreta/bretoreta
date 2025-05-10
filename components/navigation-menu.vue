<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Home',
    icon: 'i-lucide-layout-panel-left',
    to: '/',
  },
  {
    label: 'Portfolio',
    icon: 'i-lucide-shopping-bag',
    to: '/portfolio'
  },
  {
    label: 'About',
    icon: 'i-lucide-package',
    to: '/about'
  },
  {
    label: 'Contact',
    icon: 'i-lucide-refresh-cw',
    to: '/contact'
  }
])
</script>

<template>
  <UNavigationMenu :items="items" color="neutral" variant="pill" highlight class="w-full justify-center gap-4" />
</template>