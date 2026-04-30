<script setup lang="ts">
import { ref } from 'vue';

const showSidebar = ref(false);

useHead({
  title: 'Websites & AI Agents That Drive Growth',
  meta: [
    { name: 'description', content: 'A web developer and AI automation expert helping businesses launch stunning websites and automate repetitive tasks with AI' }
  ]
})

useSeoMeta({
  title: 'Websites & AI Agents That Drive Growth',
  description: 'A web developer and AI automation expert helping businesses launch stunning websites and automate repetitive tasks with AI',
})
</script>

<template>
  <div class="relative bg-gray-50 text-gray-950 dark:bg-[#050807] dark:text-white">
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 left-1/2 h-168 w-2xl -translate-x-1/2 rounded-full bg-green-500/15 blur-3xl" />
      <div class="absolute top-[55%] -left-40 h-152 w-152 rounded-full bg-emerald-400/10 blur-3xl" />
      <div class="absolute -bottom-40 right-0 h-176 w-176 rounded-full bg-lime-400/10 blur-3xl" />
      <div class="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_0%,rgba(16,185,129,0.08),transparent_55%)]" />
      <div class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.00),rgba(0,0,0,0.06))] dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,0.35))]" />
    </div>

    <header class="flex items-center py-4 md:py-2 justify-between px-4 sm:px-20 md:px-20 xl:px-32 border-b border-default sticky top-0 z-40 bg-gray-50/70 dark:bg-[#050807]/70 backdrop-blur-xl">
      <div class="flex items-center divide-x divide-accented">
        <div class="pr-5 flex items-center">
          <Logo />
        </div>
        <div class="hidden lg:block ml-5">
          <NavigationMenu orientation="horizontal" />
        </div>
      </div>
      <div class="hidden lg:flex items-center lg:gap-x-3 shrink-0">
        <UColorModeButton />
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
    </header>

    <div class="relative px-4 sm:px-10 md:px-20 xl:px-32">
      <main class="flex flex-col">
        <div class="grid grid-cols-1 lg:grid-cols-[16px_1fr_16px]">
          <div class="h-full hidden lg:block text-muted/20 border-l border-dashed border-current bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed" />
          <slot />
          <div class="h-full hidden lg:block text-muted/20 border-r border-dashed border-current bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed" />
        </div>
      </main>
    </div>

    <Footer />
  </div>
</template>
