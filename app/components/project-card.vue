<template>
  <article class="group h-full">
    <NuxtLink
      :to="project.path"
      class="flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white/60 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_60px_-30px_rgba(16,185,129,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-primary/40 dark:focus-visible:ring-offset-[#050807]"
    >
      <div class="relative aspect-16/10 overflow-hidden bg-gray-100 dark:bg-white/5">
        <ResponsiveImage
          v-if="project.image"
          :src="project.image"
          :alt="project.title"
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 92vw"
          class="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        <div
          class="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"
          aria-hidden="true"
        />

        <div class="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
          <span class="rounded-full border border-white/15 bg-black/35 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
            {{ project.category }}
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
            {{ project.client_name }}
          </span>
        </div>
      </div>

      <div class="flex flex-1 flex-col p-5 sm:p-6">
        <h3 class="line-clamp-2 text-lg font-extrabold leading-snug tracking-tight transition-colors group-hover:text-primary">
          {{ project.title }}
        </h3>
        <p class="mt-2.5 line-clamp-2 text-sm leading-relaxed text-muted">
          {{ project.description }}
        </p>

        <div class="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
          <div v-if="visibleStack.length" class="flex items-center gap-1">
            <span class="mr-1 text-[10px] font-bold uppercase tracking-[0.16em] text-muted">Stack</span>
            <span
              v-for="stackItem in visibleStack"
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
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  project: {
    path: string
    image?: string
    title: string
    description: string
    category: string
    client_name: string
    stack?: string[]
  }
}>()

const availableStackIcons = new Set([
  'docker',
  'elementor',
  'givewp',
  'laravel',
  'mailchimp',
  'mariadb',
  'nginx',
  'php',
  'redis',
  'vuejs',
  'woocommerce',
  'wordpress',
])

const visibleStack = computed(() =>
  (props.project.stack ?? []).filter((item) => availableStackIcons.has(item)),
)
</script>
