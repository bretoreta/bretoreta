<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const props = defineProps(['orientation']);

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Home',
    icon: 'i-lucide-house',
    to: '/',
  },
  {
    label: 'Projects',
    icon: 'i-lucide-briefcase-business',
    to: '/project'
  },
  {
    label: 'Blog',
    icon: 'i-lucide-notebook-text',
    to: '/blog'
  },
  {
    label: 'About',
    icon: 'i-lucide-book-user',
    to: '/about'
  },
  {
    label: 'Contact',
    icon: 'i-lucide-send',
    to: '/contact'
  }
])
</script>

<template>
  <UNavigationMenu :items="items" color="neutral" :orientation="orientation" class="w-full justify-center gap-4" />
</template>