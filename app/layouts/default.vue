<script setup lang="ts">
import { ref } from 'vue';

const showSidebar = ref(false);

// Site-wide fallbacks. Pages override these with their own useSeoMeta().
useSeoMeta({
  description: 'A web developer and AI automation expert helping businesses launch stunning websites and automate repetitive tasks with AI',
  ogImage: '/images/og-default.png',
  twitterImage: '/images/og-default.png',
})
</script>

<template>
  <div class="relative bg-gray-50 text-gray-950 dark:bg-[#050807] dark:text-white">
    <a href="#main-content" class="skip-link">Skip to content</a>
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 left-1/2 h-168 w-2xl -translate-x-1/2 rounded-full bg-green-500/15 blur-3xl" />
      <div class="absolute top-[55%] -left-40 h-152 w-152 rounded-full bg-emerald-400/10 blur-3xl" />
      <div class="absolute -bottom-40 right-0 h-176 w-176 rounded-full bg-lime-400/10 blur-3xl" />
      <div class="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_0%,rgba(16,185,129,0.08),transparent_55%)]" />
      <div class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.00),rgba(0,0,0,0.06))] dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,0.35))]" />
    </div>

    <header class="sticky top-0 z-40 border-b border-black/5 bg-gray-50/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#050807]/80">
      <div class="grid h-16 w-full grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-10 md:px-20 xl:px-32">
        <div class="justify-self-start">
          <Logo />
        </div>

        <div class="justify-self-center">
          <NavigationMenu orientation="horizontal" />
        </div>

        <div class="flex items-center justify-self-end gap-2">
          <div class="hidden min-[880px]:block">
            <StartTrialButton />
          </div>
          <div class="min-[820px]:hidden">
            <UButton
              icon="i-lucide-menu"
              variant="ghost"
              color="neutral"
              size="md"
              class="min-h-10 min-w-10 rounded-full border border-black/10 bg-white/50 backdrop-blur hover:bg-white/70 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              aria-label="Open menu"
              aria-controls="mobile-menu"
              :aria-expanded="showSidebar"
              @click="showSidebar = true"
            />
          </div>
        </div>
      </div>
    </header>

    <PullCordTheme />

    <SlideOver id="mobile-menu" :show="showSidebar" @close="showSidebar = false">
      <template #header>
        <Logo @click="showSidebar = false" />
      </template>
      <template #content>
        <div class="flex h-full flex-col">
          <NavigationMenu orientation="vertical" @navigate="showSidebar = false" />

          <div class="mt-8 space-y-5">
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-muted">Theme</span>
              <UColorModeButton />
            </div>

            <StartTrialButton size="lg" class="w-full" />

            <div class="flex flex-wrap gap-x-5 gap-y-2 border-t border-default pt-5 text-sm font-semibold">
              <a href="mailto:bretoreta@gmail.com" class="text-muted transition-colors hover:text-primary">Email</a>
              <a href="https://github.com/bretoreta" target="_blank" rel="noopener noreferrer" class="text-muted transition-colors hover:text-primary">GitHub</a>
              <a href="https://linkedin.com/in/bretoreta" target="_blank" rel="noopener noreferrer" class="text-muted transition-colors hover:text-primary">LinkedIn</a>
            </div>
          </div>
        </div>
      </template>
    </SlideOver>

    <div class="relative px-4 sm:px-10 md:px-20 xl:px-32">
      <main id="main-content" tabindex="-1" class="flex flex-col focus:outline-none">
        <div class="grid grid-cols-1 lg:grid-cols-[16px_1fr_16px]">
          <div class="h-full hidden lg:block text-muted/20 border-l border-dashed border-current bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed" />
          <div class="min-w-0">
            <slot />
          </div>
          <div class="h-full hidden lg:block text-muted/20 border-r border-dashed border-current bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed" />
        </div>
      </main>
    </div>

    <Footer />
  </div>
</template>
