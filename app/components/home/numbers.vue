<script setup lang="ts">
const stats = [
  {
    value: '2.4M',
    label: 'Money saved',
    detail: 'Average annual cost reduction reported by ops-heavy teams after automation.'
  },
  {
    value: '35%',
    label: 'Conversion lift',
    detail: 'Typical improvement after rebuilding the hero, offer clarity, and funnel friction.'
  },
  {
    value: '98%',
    label: 'Uptime mindset',
    detail: 'Monitoring + guardrails so your business doesn\'t go dark when traffic spikes.'
  },
  {
    value: '15h/wk',
    label: 'Time returned',
    detail: 'Automation that removes manual work without losing control or quality.'
  }
]
</script>

<template>
  <section id="results" aria-labelledby="results-title" class="py-14 sm:py-20">
    <div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">
      <div class="relative overflow-hidden border-t border-black/10 bg-white/40 p-2 md:p-6 backdrop-blur dark:border-white/10 dark:bg-black/20 sm:p-10">
        <div aria-hidden="true" class="pointer-events-none absolute inset-0">
          <div class="absolute inset-0 bg-[radial-gradient(900px_520px_at_50%_0%,rgba(16,185,129,0.16),transparent_60%)]" />
          <div class="absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_80%)]">
            <InteractiveGrid className="border-black/10 dark:border-white/10" squaresClassName="stroke-black/10 dark:stroke-white/10" :width="46" :height="46" :squares="[18, 10]" />
          </div>
        </div>

        <div class="relative">
          <div class="flex justify-center">
            <div class="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-700 backdrop-blur dark:border-white/10 dark:bg-black/25 dark:text-white/70">
              <span class="inline-flex size-2 rounded-full bg-primary" />
              Proof, not promises
            </div>
          </div>

          <h2 id="bento-title" class="mt-6 text-center text-3xl font-extrabold tracking-tight sm:text-4xl" v-motion-slide-visible-once-bottom>
            Outcomes that move the
            <span class="relative px-1">
              <span class="absolute inset-x-0 bottom-0 h-3 -skew-x-12 bg-primary/20"></span>
              <span class="relative text-primary">numbers</span>
            </span>
            .
          </h2>
          <p class="mx-auto mt-3 max-w-2xl text-center text-base text-muted md:text-lg" v-motion-slide-visible-once-bottom :delay="80">
            Clean design is the entry fee. The real win is measurable growth and time saved.
          </p>
        </div>

        <div class="mt-4 md:mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4" v-motion-slide-visible-once-bottom :delay="200">
          <div
            v-for="s in stats"
            :key="s.label"
            class="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/50 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-xl dark:border-white/10 dark:bg-black/20"
          >
            <div aria-hidden="true" class="pointer-events-none absolute -inset-24 opacity-0 transition duration-500 group-hover:opacity-100">
              <div class="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.18),transparent_70%)] blur-2xl" />
            </div>

            <div class="relative">
              <div class="text-4xl font-extrabold tracking-tight text-gray-950 dark:text-white">{{ s.value }}</div>
              <div class="mt-1 text-sm font-semibold text-gray-900 dark:text-white/85">{{ s.label }}</div>
              <div class="mt-2 text-sm leading-relaxed text-muted">{{ s.detail }}</div>
            </div>
          </div>
        </div>

        <p class="mx-auto mt-8 max-w-2xl text-center text-xs text-muted">
          * numbers vary by business and baseline.
        </p>
      </div>
    </div>
  </section>
</template>
