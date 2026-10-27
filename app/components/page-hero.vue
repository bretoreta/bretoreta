<template>
  <section class="relative overflow-hidden">
    <div aria-hidden="true" class="pointer-events-none absolute inset-0">
      <div class="absolute inset-0 bg-[radial-gradient(900px_520px_at_50%_0%,rgba(16,185,129,0.14),transparent_60%)]" />
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
      <div class="grid items-center gap-8 py-8 sm:py-10 lg:grid-cols-12 lg:gap-12">
        <div
          class="relative z-10"
          :class="$slots.aside ? 'lg:col-span-7' : 'lg:col-span-9'"
        >
          <div
            class="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary"
            v-motion-slide-bottom
          >
            <span class="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            {{ eyebrow }}
          </div>

          <h1
            class="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl"
            v-motion-slide-bottom
            :delay="80"
          >
            <slot>{{ title }}</slot>
          </h1>

          <p
            v-if="description"
            class="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
            v-motion-slide-bottom
            :delay="120"
          >
            {{ description }}
          </p>

          <div v-if="$slots.actions" class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <slot name="actions" />
          </div>
        </div>

        <div v-if="$slots.aside" class="relative z-10 lg:col-span-5">
          <slot name="aside" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow: string
    title?: string
    description?: string
  }>(),
  {
    title: '',
    description: '',
  },
)
</script>
