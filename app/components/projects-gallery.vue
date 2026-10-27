<template>
  <section class="mx-auto max-w-7xl pb-24" aria-labelledby="featured-projects-title">
    <div class="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between md:mb-14">
      <div class="max-w-2xl">
        <div
          class="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary"
          v-motion-fade-visible-once
        >
          <span class="size-1.5 rounded-full bg-primary" aria-hidden="true" />
          Selected work
        </div>
        <h2
          id="featured-projects-title"
          class="max-w-lg text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none"
          v-motion-slide-visible-once-bottom
          :delay="100"
        >
          {{ title }}
        </h2>
        <p
          class="mt-3 max-w-2xl text-base text-muted md:text-lg"
          v-motion-slide-visible-once-bottom
          :delay="150"
        >
          {{ description }}
        </p>
      </div>

      <NuxtLink
        to="/project"
        class="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-black/10 bg-white/50 px-4 py-2 text-xs font-bold text-gray-900 backdrop-blur transition hover:border-primary/30 hover:bg-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:focus-visible:ring-offset-[#050807]"
        v-motion-fade-visible-once
        :delay="200"
      >
        View all projects
        <Icon
          name="lucide:arrow-up-right"
          class="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </NuxtLink>
    </div>

    <UCarousel
      :items="items"
      v-slot="{ item }"
      :ui="{ item: 'basis-1/1 md:basis-1/2 lg:basis-1/3' }"
      dots
      :autoplay="{ stopOnInteraction: true }"
    >
      <ProjectCard :project="item" />
    </UCarousel>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, default: 'Case Studies' },
  description: { type: String, default: 'Discover how leading companies...' },
  items: { type: Array, required: true }
})
</script>
