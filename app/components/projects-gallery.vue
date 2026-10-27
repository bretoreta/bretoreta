<template>
  <div class="mx-auto max-w-7xl pb-24">
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
      <NuxtLink
        :to="item.path"
        class="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white/60 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_60px_-30px_rgba(16,185,129,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-primary/40 dark:focus-visible:ring-offset-[#050807]"
      >
        <div class="relative aspect-16/10 overflow-hidden bg-gray-100 dark:bg-white/5">
          <ResponsiveImage
            :src="item.image"
            :alt="item.title"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 46vw, 92vw"
            class="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          <div
            class="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"
            aria-hidden="true"
          />

          <div class="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
            <span class="rounded-full border border-white/15 bg-black/35 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
              {{ item.category }}
            </span>
            <span
              class="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition duration-300 group-hover:border-primary group-hover:bg-primary"
              aria-hidden="true"
            >
              <Icon name="lucide:arrow-up-right" class="size-4" />
            </span>
          </div>

          <div class="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
            <span class="line-clamp-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
              {{ item.client_name }}
            </span>
          </div>
        </div>

        <div class="flex flex-1 flex-col p-5 sm:p-6">
          <h3 class="line-clamp-2 text-lg font-extrabold leading-snug tracking-tight transition-colors group-hover:text-primary">
            {{ item.title }}
          </h3>
          <p class="mt-2.5 line-clamp-2 text-sm leading-relaxed text-muted">
            {{ item.description }}
          </p>

          <div class="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
            <div class="flex items-center gap-1">
              <span class="mr-1 text-[10px] font-bold uppercase tracking-[0.16em] text-muted">Stack</span>
              <span
                v-for="stackItem in item.stack"
                :key="stackItem"
                class="grid size-6 place-items-center rounded-md border border-black/5 bg-white/90 shadow-sm dark:border-white/10 dark:bg-white/90"
              >
                <img
                  :src="`/svg/${stackItem}.svg`"
                  width="14"
                  height="14"
                  :alt="`${stackItem} logo`"
                  loading="lazy"
                  class="size-3.5 object-contain"
                />
              </span>
            </div>

            <span class="ml-auto inline-flex items-center gap-1 text-xs font-bold text-primary">
              Case study
              <Icon
                name="lucide:arrow-right"
                class="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </div>
      </NuxtLink>
    </UCarousel>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: 'Case Studies' },
  description: { type: String, default: 'Discover how leading companies...' },
  items: { type: Array, required: true }
})
</script>
