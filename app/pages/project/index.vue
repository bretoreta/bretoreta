<template>
  <div data-character-section="projects-archive">
    <PageHero
      eyebrow="Portfolio"
      description="Conversion-first websites, AI agents, and automation systems built for businesses that need the work to perform — not just look good."
    >
      <template #default>
        Projects that prove the
        <span class="relative px-1">
          <span class="absolute inset-x-0 bottom-0 h-3 -skew-x-12 bg-primary/20"></span>
          <span class="relative text-primary">point</span>
        </span>.
      </template>

      <template #actions>
        <div role="group" aria-label="Filter projects by category" class="flex flex-wrap gap-2">
          <button
            v-for="c in categories"
            :key="c"
            type="button"
            :aria-pressed="activeCategory === c"
            class="rounded-full border px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.12em] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#050807]"
            :class="activeCategory === c
              ? 'border-primary/30 bg-primary/15 text-primary'
              : 'border-black/10 bg-white/50 text-gray-700 hover:border-primary/20 hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-white/75 dark:hover:bg-white/10'"
          >
            {{ c }}
          </button>
        </div>
      </template>

      <template #aside>
        <div class="rounded-3xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.04] sm:p-7">
          <div class="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            <span class="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            Start here
          </div>
          <p class="mt-4 text-xl font-extrabold tracking-tight">Want results like this?</p>
          <p class="mt-2 text-sm leading-relaxed text-muted">
            Book a free 15-minute call. I’ll give you a clear plan for the site, the automation, or both.
          </p>
          <div class="mt-5">
            <StartTrialButton size="lg" />
          </div>
          <p class="mt-3 text-[11px] font-medium text-muted">No pitch deck. Just a clear next step.</p>
        </div>
      </template>
    </PageHero>

    <div class="pb-16 pt-10 sm:pb-24 sm:pt-14">
      <section
        class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10"
        aria-labelledby="case-studies-title"
      >
        <div class="flex flex-wrap items-end justify-between gap-4 border-t border-dashed border-black/10 pt-10 dark:border-white/10">
          <div>
            <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Case studies</p>
            <h2 id="case-studies-title" class="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Selected work, shipped.
            </h2>
          </div>
          <p class="text-xs font-semibold uppercase tracking-[0.14em] text-muted" aria-live="polite">
            {{ filtered?.length || 0 }} {{ (filtered?.length || 0) === 1 ? 'project' : 'projects' }}
          </p>
        </div>

        <div v-if="filtered?.length" class="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <ProjectCard v-for="project in filtered" :key="project.id" :project="project" />
        </div>

        <div
          v-else
          class="mt-8 rounded-2xl border border-dashed border-black/10 bg-white/40 p-10 text-center text-sm text-muted backdrop-blur dark:border-white/10 dark:bg-white/[0.04]"
        >
          No projects found for this category.
        </div>

        <div class="mt-16">
          <div class="relative overflow-hidden rounded-3xl border border-black/10 bg-white/40 p-8 backdrop-blur dark:border-white/10 dark:bg-white/[0.04] sm:p-10">
            <div aria-hidden="true" class="pointer-events-none absolute inset-0">
              <div class="absolute inset-0 bg-[radial-gradient(600px_220px_at_15%_0%,rgba(16,185,129,0.16),transparent_70%)]" />
            </div>
            <div class="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div class="max-w-xl">
                <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Next step</p>
                <h2 class="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">Have a different project in mind?</h2>
                <p class="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  I design and build systems that move real metrics. Tell me what you’re trying to fix, and we’ll map the shortest path to shipping it.
                </p>
              </div>
              <div class="flex shrink-0 flex-col gap-3 sm:flex-row">
                <StartTrialButton size="lg" />
                <NuxtLink
                  to="/contact"
                  class="inline-flex items-center justify-center gap-2 rounded-lg border border-black/10 bg-white/50 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  Contact me
                  <Icon name="lucide:arrow-up-right" class="size-4" aria-hidden="true" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const { data: projects } = await useAsyncData('projects', () => {
  return queryCollection('project').order('date', 'DESC').all()
})

useSeoMeta({
  title: 'Projects | Web Development & AI Automation in Kenya',
  ogTitle: 'Projects | Web Development & AI Automation in Kenya',
  description: 'Selected case studies: conversion-first websites, AI agents, and automation systems built by Bret Oreta for businesses in Kenya and beyond.',
  ogDescription: 'Selected case studies: conversion-first websites, AI agents, and automation systems built by Bret Oreta for businesses in Kenya and beyond.',
  ogType: 'website',
})

defineOgImage('NuxtSeo.takumi', {
  title: 'Projects: Websites, AI Agents & Automation',
  description: 'Conversion-first websites, AI agents, and automation systems shipped to production.'
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
</script>
