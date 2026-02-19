<template>
  <section id="bento" aria-labelledby="bento-title" class="py-14 sm:py-20">
    <div class="mx-auto w-full max-w-7xl px-0 sm:px-6 lg:px-10">
      <div class="relative overflow-hidden border-t border-black/10 bg-white/40 p-2 md:p-6 backdrop-blur dark:border-white/10 dark:bg-black/20 sm:p-10">
        <div aria-hidden="true" class="pointer-events-none absolute inset-0">
          <div class="absolute inset-0 bg-[radial-gradient(900px_520px_at_50%_0%,rgba(16,185,129,0.16),transparent_60%)]" />
          <div class="absolute inset-0 opacity-70 mask-[radial-gradient(ellipse_at_center,black_55%,transparent_80%)]">
            <InteractiveGrid className="border-black/10 dark:border-white/10" squaresClassName="stroke-black/10 dark:stroke-white/10" :width="46" :height="46" :squares="[18, 10]" />
          </div>
        </div>

        <div class="relative">
          <div class="flex justify-center">
            <div class="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-700 backdrop-blur dark:border-white/10 dark:bg-black/25 dark:text-white/70">
              <span class="inline-flex size-2 rounded-full bg-primary" />
              What This Site Is Built For
            </div>
          </div>

          <h2 id="bento-title" class="mt-6 text-center text-3xl font-extrabold tracking-tight sm:text-4xl" v-motion-slide-visible-once-bottom>
            Solid strategy //
            <span class="relative px-1">
              <span class="absolute inset-x-0 bottom-0 h-3 -skew-x-12 bg-primary/20"></span>
              <span class="relative text-primary">Conversion</span>
            </span>
            discipline.
          </h2>
          <p class="mx-auto mt-3 max-w-2xl text-center text-base text-muted md:text-lg" v-motion-slide-visible-once-bottom :delay="80">
            This portfolio isn’t just pretty. It’s a demo of how I build: clear hierarchy, deliberate motion, and systems that make booking a call the obvious next step.
          </p>

          <div class="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
            <!-- Card: Conversion system -->
            <article
              ref="kpiCardEl"
              class="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/55 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-black/25 lg:col-span-7"
              v-motion
              :initial="{ opacity: 0, y: 18, filter: 'blur(10px)' }"
              :visibleOnce="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: 'easeOut' } }"
            >
              <div aria-hidden="true" class="pointer-events-none absolute -inset-24 opacity-0 transition duration-500 group-hover:opacity-100">
                <div class="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.18),transparent_70%)] blur-2xl" />
              </div>

              <div class="relative">
                <div class="flex items-center justify-between gap-4">
                  <div class="flex items-center gap-3">
                    <div class="flex size-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <Icon name="lucide:trending-up" class="size-5" />
                    </div>
                    <div>
                      <div class="text-xs font-semibold tracking-[0.18em] uppercase text-muted">Conversion System</div>
                      <h3 class="mt-1 text-lg font-extrabold tracking-tight">Make the CTA inevitable</h3>
                    </div>
                  </div>
                  <span class="hidden md:block rounded-full border border-black/10 bg-white/60 px-3 py-1.5 text-xs font-semibold text-gray-900 dark:border-white/10 dark:bg-black/20 dark:text-white/85">
                    Built for booked calls
                  </span>
                </div>

                <p class="mt-4 text-sm leading-relaxed text-muted">
                  Messaging, layout, and proof arranged like a funnel: attention → trust → action. No guessing. No noise.
                </p>

                <div class="mt-6 rounded-2xl border border-black/10 bg-white/60 p-5 dark:border-white/10 dark:bg-black/20">
                  <div class="flex items-center justify-between">
                    <div class="text-xs font-semibold tracking-[0.18em] uppercase text-muted">Signals</div>
                  </div>

                  <div class="mt-4 space-y-4">
                    <div v-for="row in kpiRows" :key="row.label" class="grid gap-2">
                      <div class="flex items-center justify-between text-sm">
                        <span class="font-semibold text-gray-900 dark:text-white/90">{{ row.label }}</span>
                        <span class="text-muted">{{ row.valueLabel }}</span>
                      </div>
                      <div class="h-2 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                        <div class="h-full rounded-full bg-primary" :style="{ width: row.width }" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <!-- Card: Automation -->
            <article
              class="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/55 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-black/25 lg:col-span-5"
              v-motion
              :initial="{ opacity: 0, y: 18, filter: 'blur(10px)' }"
              :visibleOnce="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: 'easeOut', delay: 0.05 } }"
            >
              <div aria-hidden="true" class="pointer-events-none absolute -inset-24 opacity-0 transition duration-500 group-hover:opacity-100">
                <div class="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.16),transparent_70%)] blur-2xl" />
              </div>

              <div class="relative">
                <div class="flex items-center gap-3">
                  <div class="flex size-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <Icon name="lucide:bot" class="size-5" />
                  </div>
                  <div>
                    <div class="text-xs font-semibold tracking-[0.18em] uppercase text-muted">AI Agents</div>
                    <h3 class="mt-1 text-lg font-extrabold tracking-tight">Automate follow-up and ops</h3>
                  </div>
                </div>

                <p class="mt-4 text-sm leading-relaxed text-muted">
                  Agents handle repetitive work (with guardrails): lead routing, inbox triage, reminders, reporting.
                </p>

                <div class="mt-6">
                  <div class="flex items-center justify-between px-4 py-3 bg-zinc-200 dark:bg-white/20 rounded-t-xl">
                    <div class="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground">Activity</div>
                  </div>
                  <div class="overflow-hidden rounded-b-xl border border-black/10 bg-white/60 dark:border-white/10 dark:bg-black/20">
                    <div class="h-40">
                      <ul class="bento-ticker px-4 py-3" :class="allowMotion ? 'bento-ticker--on' : ''">
                        <li v-for="(l, idx) in ticker" :key="idx" class="flex items-start gap-3 py-2">
                          <span class="mt-1 inline-flex size-2 rounded-full bg-primary" />
                          <div>
                            <div class="text-sm font-semibold text-gray-900 dark:text-white/90">{{ l.title }}</div>
                            <div class="text-xs text-muted">{{ l.meta }}</div>
                          </div>
                        </li>
                        <li aria-hidden="true" v-for="(l, idx) in ticker" :key="`dup-${idx}`" class="flex items-start gap-3 py-2">
                          <span class="mt-1 inline-flex size-2 rounded-full bg-primary" />
                          <div>
                            <div class="text-sm font-semibold text-gray-900 dark:text-white/90">{{ l.title }}</div>
                            <div class="text-xs text-muted">{{ l.meta }}</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <!-- Card: SEO -->
            <article
              class="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/55 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-black/25 lg:col-span-5"
              v-motion
              :initial="{ opacity: 0, y: 18, filter: 'blur(10px)' }"
              :visibleOnce="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: 'easeOut' } }"
            >
              <div aria-hidden="true" class="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div class="absolute inset-0 bento-scan" />
              </div>

              <div class="relative">
                <div class="flex items-center gap-3">
                  <div class="flex size-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <Icon name="lucide:search" class="size-5" />
                  </div>
                  <div>
                    <div class="text-xs font-semibold tracking-[0.18em] uppercase text-muted">SEO</div>
                    <h3 class="mt-1 text-lg font-extrabold tracking-tight">Make the site findable</h3>
                  </div>
                </div>
                <p class="mt-4 text-sm leading-relaxed text-muted">
                  Structured pages, tight metadata, and content that matches intent. SEO is a system, not a plugin.
                </p>

                <div class="mt-6 rounded-2xl border border-black/10 bg-white/60 p-5 dark:border-white/10 dark:bg-black/20">
                  <div class="text-xs font-semibold tracking-[0.18em] uppercase text-muted">Checklist</div>
                  <div class="mt-4 grid gap-2 text-sm">
                    <div class="flex items-center gap-2">
                      <Icon name="lucide:check" class="size-4 text-primary" />
                      <span class="text-gray-800 dark:text-white/80">Semantic sections + internal links</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <Icon name="lucide:check" class="size-4 text-primary" />
                      <span class="text-gray-800 dark:text-white/80">Fast images + clean page speed</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <Icon name="lucide:check" class="size-4 text-primary" />
                      <span class="text-gray-800 dark:text-white/80">Metadata that matches the offer</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <!-- Card: Reliability -->
            <article
              class="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/55 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-black/25 lg:col-span-7"
              v-motion
              :initial="{ opacity: 0, y: 18, filter: 'blur(10px)' }"
              :visibleOnce="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: 'easeOut', delay: 0.05 } }"
            >
              <div aria-hidden="true" class="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div class="absolute inset-0 bento-scan" />
              </div>
              <div aria-hidden="true" class="pointer-events-none absolute -inset-24 opacity-0 transition duration-500 group-hover:opacity-100">
                <div class="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.14),transparent_70%)] blur-2xl" />
              </div>

              <div class="relative">
                <div class="flex items-center justify-between gap-4">
                  <div class="flex items-center gap-3">
                    <div class="flex size-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <Icon name="lucide:shield-check" class="size-5" />
                    </div>
                    <div>
                      <div class="text-xs font-semibold tracking-[0.18em] uppercase text-muted">Reliability</div>
                      <h3 class="mt-1 text-lg font-extrabold tracking-tight">Ship like it’s production</h3>
                    </div>
                  </div>
                  <span class="hidden md:inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1.5 text-xs font-semibold text-gray-900 dark:border-white/10 dark:bg-black/20 dark:text-white/85">
                    <span class="inline-flex size-2 rounded-full bg-primary" />
                    monitoring-ready
                  </span>
                </div>

                <p class="mt-4 text-sm leading-relaxed text-muted">
                  Great design is fragile without solid engineering. I build guardrails so the site stays fast and stable.
                </p>

                <div class="mt-6 grid gap-3 sm:grid-cols-3">
                  <div class="rounded-2xl border border-black/10 bg-white/60 p-5 dark:border-white/10 dark:bg-black/20">
                    <div class="text-xs font-semibold tracking-[0.18em] uppercase text-muted">Deploy</div>
                    <div class="mt-2 text-sm font-semibold text-gray-900 dark:text-white/90">CI/CD</div>
                    <div class="mt-1 text-xs text-muted">Repeatable releases, minimal risk.</div>
                  </div>
                  <div class="rounded-2xl border border-black/10 bg-white/60 p-5 dark:border-white/10 dark:bg-black/20">
                    <div class="text-xs font-semibold tracking-[0.18em] uppercase text-muted">Observe</div>
                    <div class="mt-2 text-sm font-semibold text-gray-900 dark:text-white/90">Metrics</div>
                    <div class="mt-1 text-xs text-muted">Know what users feel.</div>
                  </div>
                  <div class="rounded-2xl border border-black/10 bg-white/60 p-5 dark:border-white/10 dark:bg-black/20">
                    <div class="text-xs font-semibold tracking-[0.18em] uppercase text-muted">Protect</div>
                    <div class="mt-2 text-sm font-semibold text-gray-900 dark:text-white/90">Security</div>
                    <div class="mt-1 text-xs text-muted">Sane defaults and hardening.</div>
                  </div>
                </div>
              </div>
            </article>

            <!-- Card: Timeline -->
            <article
              class="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/55 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-black/25 lg:col-span-12"
              v-motion
              :initial="{ opacity: 0, y: 18, filter: 'blur(10px)' }"
              :visibleOnce="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: 'easeOut' } }"
            >
              <div aria-hidden="true" class="pointer-events-none absolute -inset-24 opacity-0 transition duration-500 group-hover:opacity-100">
                <div class="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.12),transparent_70%)] blur-2xl" />
              </div>

              <div class="relative grid gap-6 lg:grid-cols-12 lg:items-center">
                <div class="lg:col-span-5">
                  <div class="flex items-center gap-3">
                    <div class="flex size-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <Icon name="lucide:route" class="size-5" />
                    </div>
                    <div>
                      <div class="text-xs font-semibold tracking-[0.18em] uppercase text-muted">Delivery</div>
                      <h3 class="mt-1 text-lg font-extrabold tracking-tight">A clear path from idea to launch</h3>
                    </div>
                  </div>
                  <p class="mt-4 text-sm leading-relaxed text-muted">
                    Tight feedback loops, shippable milestones, and a site that’s ready to market the minute it goes live.
                  </p>
                </div>

                <div class="lg:col-span-7">
                  <div class="grid gap-3 sm:grid-cols-3">
                    <div class="rounded-2xl border border-black/10 bg-white/60 p-5 dark:border-white/10 dark:bg-black/20">
                      <div class="text-xs font-semibold tracking-[0.18em] uppercase text-muted">Week 1</div>
                      <div class="mt-2 text-sm font-semibold text-gray-900 dark:text-white/90">Strategy</div>
                      <div class="mt-1 text-xs text-muted">Offer, messaging, and structure.</div>
                    </div>
                    <div class="rounded-2xl border border-black/10 bg-white/60 p-5 dark:border-white/10 dark:bg-black/20">
                      <div class="text-xs font-semibold tracking-[0.18em] uppercase text-muted">Week 2</div>
                      <div class="mt-2 text-sm font-semibold text-gray-900 dark:text-white/90">Design + Build</div>
                      <div class="mt-1 text-xs text-muted">Motion, components, performance.</div>
                    </div>
                    <div class="rounded-2xl border border-black/10 bg-white/60 p-5 dark:border-white/10 dark:bg-black/20">
                      <div class="text-xs font-semibold tracking-[0.18em] uppercase text-muted">Week 3</div>
                      <div class="mt-2 text-sm font-semibold text-gray-900 dark:text-white/90">Launch</div>
                      <div class="mt-1 text-xs text-muted">SEO basics + analytics + QA.</div>
                    </div>
                  </div>

                  <div class="mt-5 flex flex-col items-center justify-between gap-3 sm:flex-row">
                    <StartTrialButton size="lg" />
                    <NuxtLink to="/project" class="text-sm font-semibold text-gray-900 underline-offset-4 hover:underline dark:text-white">
                      See projects
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { usePreferredReducedMotion } from '@vueuse/core'

type TickerLine = { title: string; meta: string }
type KpiRow = { label: string; valueLabel: string; current: number; target: number }

const reduced = usePreferredReducedMotion()
const allowMotion = computed(() => reduced.value === 'no-preference')

const kpiCardEl = ref<HTMLElement | null>(null)

const kpis = ref<KpiRow[]>([
  { label: 'Offer clarity', valueLabel: 'above-the-fold', current: 0, target: 92 },
  { label: 'Performance', valueLabel: 'ship fast', current: 0, target: 86 },
  { label: 'Trust', valueLabel: 'proof + story', current: 0, target: 88 }
])

const kpiRows = computed(() =>
  kpis.value.map(k => ({
    label: k.label,
    valueLabel: k.valueLabel,
    width: `${k.current}%`
  }))
)

const ticker = ref<TickerLine[]>([
  { title: 'Lead captured and routed', meta: 'Form submission -> CRM -> calendar link' },
  { title: 'Follow-up sent automatically', meta: 'Personalized email within 60 seconds' },
  { title: 'No-show reminder triggered', meta: 'SMS/email reminder with reschedule link' },
  { title: 'Weekly report generated', meta: 'Traffic, conversion, and pipeline snapshot' }
])

let io: IntersectionObserver | null = null
let raf = 0

function animateKpis() {
  if (!allowMotion.value) {
    kpis.value = kpis.value.map(k => ({ ...k, current: k.target }))
    return
  }

  const duration = 900
  const start = performance.now()
  const easeOutCubic = (x: number) => 1 - Math.pow(1 - x, 3)

  const step = (now: number) => {
    const t = Math.min(1, (now - start) / duration)
    const e = easeOutCubic(t)
    kpis.value = kpis.value.map(k => ({ ...k, current: Math.round(k.target * e) }))
    if (t < 1) raf = requestAnimationFrame(step)
  }

  raf = requestAnimationFrame(step)
}

onMounted(() => {
  const el = kpiCardEl.value
  if (!el) return

  io = new IntersectionObserver(
    entries => {
      const hit = entries.some(e => e.isIntersecting)
      if (!hit) return
      animateKpis()
      if (io) io.disconnect()
      io = null
    },
    { threshold: 0.4 }
  )
  io.observe(el)
})

onBeforeUnmount(() => {
  if (io) io.disconnect()
  io = null
  if (raf) cancelAnimationFrame(raf)
})
</script>

<style scoped>
.bento-ticker {
  transform: translateY(0);
}

.bento-ticker--on {
  animation: bentoTicker 14s linear infinite;
}

.bento-ticker--on:hover {
  animation-play-state: paused;
}

@keyframes bentoTicker {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}

.bento-scan {
  background: linear-gradient(120deg, transparent 0%, rgba(16, 185, 129, 0.14) 18%, transparent 36%);
  transform: translateX(-40%);
  animation: scan 2.8s ease-in-out infinite;
}

@keyframes scan {
  0% {
    transform: translateX(-60%);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    transform: translateX(60%);
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .bento-ticker--on {
    animation: none !important;
  }
  .bento-scan {
    animation: none !important;
    transform: none !important;
    opacity: 0 !important;
  }
}
</style>
