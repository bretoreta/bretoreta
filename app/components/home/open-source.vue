<script setup lang="ts">
const install = "bun add pullcord-vue";
</script>

<template>
  <section id="open-source" aria-labelledby="open-source-title" class="py-14 sm:py-20" data-character-section="open-source">
    <div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">
      <div class="relative overflow-hidden rounded-3xl border border-black/10 bg-white/40 backdrop-blur dark:border-white/10 dark:bg-black/20">
        <div aria-hidden="true" class="pointer-events-none absolute inset-0">
          <div class="absolute inset-0 bg-[radial-gradient(900px_520px_at_15%_0%,rgba(16,185,129,0.14),transparent_60%)]" />
        </div>

        <div class="relative grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-12 lg:gap-12">
          <div class="lg:col-span-8">
            <div class="flex flex-wrap items-center gap-3">
              <UBadge>Open source</UBadge>
              <span class="text-xs font-semibold text-muted">MIT · Vue 3 · zero dependencies</span>
            </div>

            <h2
              id="open-source-title"
              v-motion-slide-visible-once-bottom
              class="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl"
            >
              Built for the
              <span class="relative px-1">
                <span class="absolute inset-x-0 bottom-0 h-3 -skew-x-12 bg-primary/20"></span>
                <span class="relative text-primary">community.</span>
              </span>
            </h2>

            <p class="mt-3 max-w-2xl text-base text-muted md:text-lg">
              <span class="font-semibold text-gray-900 dark:text-white/90">pullcord-vue</span>
              is a ceiling pull-cord theme switch with a real verlet rope. Grab it,
              pull it, and it swings back. It runs this site's theme toggle.
            </p>

            <div class="mt-6 flex flex-wrap items-center gap-3">
              <code class="rounded-lg border border-black/10 bg-white/60 px-3 py-2 font-mono text-xs text-gray-800 dark:border-white/10 dark:bg-black/30 dark:text-white/80">{{ install }}</code>
              <UButton
                to="https://www.npmjs.com/package/pullcord-vue"
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                icon="i-lucide-package"
              >
                npm
              </UButton>
              <UButton
                to="https://github.com/bretoreta/pullcord-vue"
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                color="neutral"
                variant="subtle"
                icon="i-lucide-github"
              >
                GitHub
              </UButton>
            </div>

            <div class="mt-6">
              <NuxtLink
                to="/open-source"
                class="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                Browse open source
                <Icon name="lucide:arrow-right" class="size-4" aria-hidden="true" />
              </NuxtLink>
            </div>
          </div>

          <div class="lg:col-span-4">
            <div class="relative mx-auto h-64 w-40 lg:h-72">
              <div aria-hidden="true" class="absolute inset-0 bg-[radial-gradient(closest-side,rgba(16,185,129,0.18),transparent_70%)] blur-2xl" />
              <PullCordArt class="relative h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
