<script setup lang="ts">
import { ref } from 'vue';

const showSidebar = ref(false);

useHead({
  title: 'AI Automations Expert and Website Developer',
  meta: [
    { name: 'description', content: 'Let AI do the heavy-lifting, you deserve a vacation' }
  ]
})

useSeoMeta({
  title: 'AI Automations Expert and Website Developer',
  ogTitle: 'AI Automations Expert and Website Developer',
  description: 'Let AI do the heavy-lifting, you deserve a vacation',
  ogDescription: 'Let AI do the heavy-lifting, you deserve a vacation',
  ogImage: "/images/og-image.webp",
  twitterCard: 'summary_large_image',
})
</script>

<template>
    <div class="flex items-center py-4 md:py-2 justify-between px-4 sm:px-20 md:px-20 xl:px-36 border-b border-default sticky top-0 z-40 bg-gray-50 dark:bg-[#0d1117]/80 backdrop-blur-sm">
        <div class="flex items-center divide-x divide-accented">
          <div class="pr-5 flex items-center">
            <Logo />
          </div>
          <div class="hidden lg:block ml-5">
              <NavigationMenu orientation="horizontal" />
          </div>
        </div>
        <div class="hidden lg:flex items-center lg:gap-x-3 srhink-0">
            <!-- <ColorModeToggle /> -->
            <SideMenuOptions />
        </div>
        <div class="block md:hidden">
          <UButton icon="i-lucide-menu" variant="subtle" color="neutral" @click="showSidebar = true">Menu</UButton>
          <SlideOver :show="showSidebar" @close="showSidebar = false">
            <template #header>
              Menu Items
            </template>
            <template #content>
              <div>
                <NavigationMenu orientation="vertical" />
              </div>
            </template>
          </SlideOver>
        </div>
    </div>
    <div class="px-4 sm:px-20 md:px-20 xl:px-36 relative bg-gray-50 dark:bg-[#0d1117]">
        <slot />
    </div>
</template>