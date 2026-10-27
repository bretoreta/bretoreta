<template>
  <section id="results" aria-labelledby="results-title" class="py-14 sm:py-20" data-character-section="results">
    <div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">
      <div class="border-t border-dashed border-black/10 pt-12 dark:border-white/10">
        <div class="grid gap-5 lg:grid-cols-12 lg:items-end">
          <div class="lg:col-span-8">
            <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Proof, not promises</p>
            <h2 id="results-title" class="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Outcomes that move the
              <span class="relative px-1">
                <span class="absolute inset-x-0 bottom-0 h-3 -skew-x-12 bg-primary/20"></span>
                <span class="relative text-primary">numbers.</span>
              </span>
            </h2>
          </div>
          <p class="max-w-md text-base leading-relaxed text-muted md:text-right lg:col-span-4">
            Clean design is the entry fee. The real win is measurable growth and time saved.
          </p>
        </div>

        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="s in stats"
            :key="s.label"
            class="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_24px_60px_-30px_rgba(16,185,129,0.45)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-primary/40"
          >
            <div aria-hidden="true" class="pointer-events-none absolute -inset-24 opacity-0 transition duration-500 group-hover:opacity-100">
              <div class="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.18),transparent_70%)] blur-2xl" />
            </div>
            <div class="relative">
              <div class="text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl dark:text-white">{{ s.value }}</div>
              <div class="mt-2 text-sm font-bold text-gray-900 dark:text-white/85">{{ s.label }}</div>
              <div class="mt-2 text-sm leading-relaxed text-muted">{{ s.detail }}</div>
            </div>
          </div>
        </div>

        <div class="mt-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p class="text-xs text-muted">* numbers vary by business and baseline.</p>
          <NuxtLink
            to="/project"
            class="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            See the work behind them
            <Icon name="lucide:arrow-up-right" class="size-4" aria-hidden="true" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  {
    value: '2.4M',
    label: 'Money saved',
    detail: 'Average annual cost reduction reported by ops-heavy teams after automation.',
  },
  {
    value: '35%',
    label: 'Conversion lift',
    detail: 'Typical improvement after rebuilding the hero, offer clarity, and funnel friction.',
  },
  {
    value: '98%',
    label: 'Uptime mindset',
    detail: 'Monitoring + guardrails so your business doesn’t go dark when traffic spikes.',
  },
  {
    value: '15h/wk',
    label: 'Time returned',
    detail: 'Automation that removes manual work without losing control or quality.',
  },
]
</script>
