<script setup lang="ts">
import { computed, ref } from 'vue'

const { data: projects } = await useAsyncData('projects', () => {
  return queryCollection('project').order('date', 'DESC').all()
})

useSeoMeta({
  title: 'Projects | Bret Oreta',
  ogTitle: 'Projects | Bret Oreta',
  description: 'Selected work: conversion-first websites, AI agents, and automation systems shipped to production.',
  ogDescription: 'Selected work: conversion-first websites, AI agents, and automation systems shipped to production.',
})

defineOgImage('NuxtSeo.takumi', {
  title: 'Projects | A web developer and AI automation expert',
  description: "Selected work: conversion-first websites, AI agents, and automation systems shipped to production."
});

const activeCategory = ref<string>('All')

const categories = computed(() => {
  const list = (projects.value || []).map((p: any) => p.category).filter(Boolean)
  return ['All', ...Array.from(new Set(list))]
})

const filtered = computed(() => {
  const list = projects.value || []
  if (activeCategory.value === 'All') return list
  return list.filter((p: any) => p.category === activeCategory.value)
})

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<template>
  <div class="py-10 sm:py-14">

    <!-- HERO -->
    <section class="relative overflow-hidden">
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_0%,rgba(16,185,129,0.14),transparent_58%)]" />
        <div class="absolute inset-0 opacity-60 mask-[radial-gradient(ellipse_at_center,black_55%,transparent_78%)]">
          <InteractiveGrid
            className="border-black/10 dark:border-white/10"
            squaresClassName="stroke-black/10 dark:stroke-white/10"
            :width="44"
            :height="44"
            :squares="[18, 10]"
          />
        </div>
      </div>

      <div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">
        <div class="grid items-end gap-8 lg:grid-cols-12 py-4">

          <div class="relative z-10 lg:col-span-8">
            <h1 class="text-4xl font-extrabold sm:text-5xl">
              Projects that prove the point.
            </h1>

            <p class="mt-3 max-w-2xl text-base text-muted md:text-lg">
              Conversion-first websites, AI agents, and automation systems shipped with taste, speed, and reliability.
            </p>

            <div class="mt-6 flex flex-wrap gap-2">
              <button
                v-for="c in categories"
                :key="c"
                @click="activeCategory = c"
                class="rounded-full border px-3 py-1.5 text-xs font-semibold transition"
                :class="activeCategory === c
                  ? 'border-primary/30 bg-primary/15 text-primary'
                  : 'border-black/10 bg-white/40 hover:bg-white/60 dark:border-white/10 dark:bg-black/20'"
              >
                {{ c }}
              </button>
            </div>
          </div>

          <div class="relative z-10 lg:col-span-4">
            <div class="rounded-2xl border border-black/10 bg-white/50 p-6 backdrop-blur dark:border-white/10 dark:bg-black/20">
              <div class="text-xs font-semibold uppercase tracking-wider">
                Want results like this?
              </div>
              <p class="mt-2 text-sm text-muted">
                Book a free 15-minute call. I’ll give you a clear plan.
              </p>
              <div class="mt-5">
                <StartTrialButton size="lg" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- GRID -->
    <section class="mt-10 sm:mt-14">
      <div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">

        <div v-if="filtered?.length" class="mt-8">
          <div class="relative rounded-3xl border border-black/10 dark:border-white/10 p-4 sm:p-6">

            <!-- subtle overlay -->
            <div class="absolute inset-0 opacity-30 pointer-events-none">
              <div class="h-full w-full bg-[linear-gradient(to_right,transparent,rgba(0,0,0,0.05),transparent)] dark:bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.05),transparent)]" />
            </div>

            <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 relative">

              <article
                v-for="(project, index) in filtered"
                :key="project.id"
                class="group relative overflow-hidden rounded-2xl bg-white/40 backdrop-blur transition duration-300 hover:shadow-2xl dark:bg-black/20"
              >
                <!-- INNER BORDER -->
                <div class="absolute inset-0 rounded-2xl border border-black/10 dark:border-white/10 pointer-events-none" />

                <!-- HOVER GLOW -->
                <div class="absolute inset-0 opacity-0  pointer-events-none group-hover:opacity-100 transition bg-[radial-gradient(400px_200px_at_50%_0%,rgba(16,185,129,0.12),transparent_60%)]" />

                <NuxtLink :to="project.path" class="block">

                  <!-- IMAGE -->
                  <div class="relative aspect-16/10 overflow-hidden">
                    <NuxtImg
                      v-if="project.image"
                      :src="project.image"
                      format="avif,webp"
                      quality="80"
                      class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <!-- overlay -->
                    <div class="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent to-black/70" />

                    <!-- badges -->
                    <div class="absolute left-4 top-4 flex gap-2 pointer-events-none">
                      <span class="rounded-full bg-black/30 px-2 py-1 text-[11px] text-white backdrop-blur">
                        {{ project.category }}
                      </span>
                      <span class="rounded-full bg-black/30 px-2 py-1 text-[11px] text-white backdrop-blur">
                        {{ formatDate(project.date) }}
                      </span>
                    </div>
                  </div>

                  <!-- CONTENT -->
                  <div class="p-5">
                    <h2 class="text-lg font-extrabold group-hover:text-primary transition">
                      {{ project.title }}
                    </h2>

                    <p class="mt-2 text-sm text-muted line-clamp-2">
                      {{ project.description }}
                    </p>

                    <div class="mt-5 flex items-center justify-between">
                      <span class="text-xs font-semibold uppercase text-primary">
                        View case study →
                      </span>
                      <span class="text-xs text-muted">
                        {{ project.client_name }}
                      </span>
                    </div>
                  </div>

                </NuxtLink>

                <!-- EXTERNAL LINK -->
                <NuxtLink
                  v-if="project.link"
                  :to="project.link"
                  target="_blank"
                  class="absolute right-4 top-4 z-20 flex size-9 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur hover:bg-black/40"
                >
                  <Icon name="lucide:arrow-up-right" class="size-4" />
                </NuxtLink>

              </article>

            </div>
          </div>
        </div>

        <!-- EMPTY -->
        <div v-else class="rounded-2xl border border-black/10 bg-white/40 p-8 text-center text-sm text-muted backdrop-blur dark:border-white/10 dark:bg-black/20">
          No projects found for this category.
        </div>

        <!-- CTA -->
        <div class="mt-16">
          <div class="relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/20 p-10 text-center backdrop-blur">
            
            <div class="absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(16,185,129,0.12),transparent_70%)]" />

            <div class="relative">
              <h3 class="text-2xl font-bold">
                Want something like this?
              </h3>
              <p class="mt-3 text-muted max-w-xl mx-auto">
                I design and build systems that actually move metrics. Let’s talk about yours.
              </p>

              <div class="mt-6 flex justify-center">
                <StartTrialButton size="lg" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  </div>
</template>