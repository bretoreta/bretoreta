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
  ogImage: '/images/og-image.webp',
  twitterCard: 'summary_large_image',
  ogType: 'website'
})

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
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}
</script>

<template>
  <div class="py-10 sm:py-14">
    <section class="relative overflow-hidden">
      <div aria-hidden="true" class="pointer-events-none absolute inset-0">
        <div class="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_0%,rgba(16,185,129,0.14),transparent_58%)]" />
        <div class="absolute inset-0 opacity-60 mask-[radial-gradient(ellipse_at_center,black_55%,transparent_78%)]">
          <InteractiveGrid className="border-black/10 dark:border-white/10" squaresClassName="stroke-black/10 dark:stroke-white/10" :width="44" :height="44" :squares="[18, 10]" />
        </div>
      </div>

      <div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">
        <div class="grid items-end gap-8 lg:grid-cols-12 py-4">
          <div class="relative z-10 lg:col-span-8">
            <h1 v-motion-slide-visible-once-bottom class="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Projects that prove the point.
            </h1>
            <p v-motion-slide-visible-once-bottom :delay="90" class="mt-3 max-w-2xl text-base text-muted md:text-lg">
              Conversion-first websites, AI agents, and automation systems shipped with taste, speed, and reliability.
            </p>

            <div v-motion-slide-visible-once-bottom :delay="140" class="mt-6 flex flex-wrap items-center gap-2">
              <button
                v-for="c in categories"
                :key="c"
                type="button"
                @click="activeCategory = c"
                class="rounded-full border px-3 py-1.5 text-xs font-semibold transition"
                :class="activeCategory === c
                  ? 'border-primary/30 bg-primary/15 text-primary'
                  : 'border-black/10 bg-white/40 text-gray-800 hover:bg-white/60 dark:border-white/10 dark:bg-black/20 dark:text-white/80'"
              >
                {{ c }}
              </button>
            </div>
          </div>

          <div class="relative z-10 lg:col-span-4">
            <div class="rounded-2xl border border-black/10 bg-white/50 p-6 backdrop-blur dark:border-white/10 dark:bg-black/20" v-motion-slide-visible-once-bottom :delay="170">
              <div class="text-xs font-semibold tracking-[0.18em] uppercase text-gray-700 dark:text-white/70">Want results like this?</div>
              <div class="mt-2 text-sm text-muted">Book a free 15-minute call. I’ll give you a clear plan.</div>
              <div class="mt-5">
                <StartTrialButton size="lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-10 sm:mt-14">
      <div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">
        <div v-if="filtered?.length" class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="(project, index) in filtered"
            :key="project.id"
            v-motion
            :initial="{ opacity: 0, y: 18, filter: 'blur(10px)' }"
            :visibleOnce="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.65, ease: 'easeOut', delay: index * 0.06 } }"
            class="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/40 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-xl dark:border-white/10 dark:bg-black/20"
          >
            <NuxtLink :href="project.path" class="block">
              <div class="relative aspect-16/10 overflow-hidden">
                <NuxtImg
                  v-if="project.image"
                  :src="project.image"
                  :alt="project.title"
                  format="webp,avif"
                  class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div class="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.0)_20%,rgba(0,0,0,0.65)_95%)]" />
                <div class="absolute left-4 top-4 flex items-center gap-2">
                  <span class="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[11px] font-semibold text-white/85 backdrop-blur">
                    {{ project.category }}
                  </span>
                  <span class="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[11px] font-semibold text-white/85 backdrop-blur">
                    {{ formatDate(project.date) }}
                  </span>
                </div>
              </div>

              <div class="p-5">
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <h2 class="text-lg font-extrabold tracking-tight">{{ project.title }}</h2>
                    <p class="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{{ project.description }}</p>
                  </div>

                  <NuxtImg
                    v-if="project.client_logo"
                    :src="project.client_logo"
                    :alt="`${project.client_name || project.title} logo`"
                    format="webp,avif"
                    class="mt-0.5 size-10 shrink-0 rounded-full bg-white/70 object-contain p-1 dark:bg-white/10"
                  />
                </div>

                <div class="mt-5 flex items-center justify-between">
                  <div class="text-xs font-semibold tracking-[0.18em] uppercase text-primary">View case study</div>
                  <div class="text-xs text-muted">{{ project.client_name }}</div>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink
              v-if="project.link"
              :to="project.link"
              target="_blank"
              class="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/85 backdrop-blur transition hover:bg-black/40"
              aria-label="Visit project website"
              title="Visit project website"
            >
              <Icon name="lucide:arrow-up-right" class="size-4" />
            </NuxtLink>
          </article>
        </div>

        <div v-else class="rounded-2xl border border-black/10 bg-white/40 p-8 text-center text-sm text-muted backdrop-blur dark:border-white/10 dark:bg-black/20">
          No projects found for this category.
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>
