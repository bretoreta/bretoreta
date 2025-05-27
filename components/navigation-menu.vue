<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Home',
    icon: 'i-lucide-house',
    to: '/',
  },
  {
    label: 'Blog',
    icon: 'i-lucide-notebook-text',
    to: '/blog'
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
  <UNavigationMenu :items="items" highlight class="w-full justify-center gap-4" />
</template>