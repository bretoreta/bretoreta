<template>
  <section class="relative isolate pt-10 sm:pt-14">
    <div aria-hidden="true" class="pointer-events-none absolute inset-0">
      <div class="absolute inset-0 bg-[radial-gradient(900px_520px_at_50%_0%,rgba(16,185,129,0.14),transparent_62%)]" />
      <div class="absolute inset-0 opacity-70 mask-[radial-gradient(ellipse_at_center,black_55%,transparent_78%)]">
        <InteractiveGrid
          className="border-black/10 dark:border-white/10"
          squaresClassName="stroke-black/10 dark:stroke-white/10"
          :width="44"
          :height="44"
          :squares="[18, 14]"
        />
      </div>
      <div class="absolute -top-40 left-1/2 h-144 w-xl -translate-x-1/2 rounded-full bg-green-500/12 blur-3xl" />
      <div class="absolute top-[55%] -left-40 h-136 w-136 rounded-full bg-emerald-400/8 blur-3xl" />
    </div>

    <div class="mx-auto w-full px-2 sm:px-6 lg:px-10">
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-center">
        <div class="relative z-10 lg:col-span-6">
          <div class="flex flex-wrap items-center gap-3">
            <Availability :available="true" v-motion-slide-bottom />
          </div>

          <h1
            class="mt-6 text-[2.7rem] font-extrabold leading-[0.95] tracking-tight text-gray-950 sm:text-6xl dark:text-white"
            v-motion-slide-bottom
            :delay="110"
          >
            Your business probably sucks online. I help you build
            <ContainerFlip :words="['Automations', 'Websites', 'SaaS', 'AI Agents']" />
          </h1>

          <p
            class="mt-5 max-w-xl text-base leading-relaxed text-gray-700 sm:text-lg dark:text-white/75"
            v-motion-slide-bottom
            :delay="160"
          >
            I build production-grade websites that stay usable, load fast, and convert with automation pipelines that run while you sleep.
          </p>

          <div class="mt-7 flex flex-col gap-3 sm:flex-row" v-motion-slide-bottom :delay="210">
            <StartTrialButton size="lg" />
            <NuxtLink
              to="/project"
              class="inline-flex items-center justify-center gap-2 rounded-lg border border-black/10 bg-white/50 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-white/70 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            >
              See proof
              <Icon name="lucide:arrow-up-right" class="size-4" />
            </NuxtLink>
          </div>

          <div class="mt-7">
            <div class="flex flex-wrap gap-2" v-motion-slide-bottom :delay="260">
              <button
                v-for="f in focusOptions"
                :key="f.id"
                type="button"
                @click="focus = f.id"
                class="rounded border px-3 py-1.5 text-xs font-semibold transition"
                :class="focus === f.id
                  ? 'border-primary/30 bg-primary/15 text-primary'
                  : 'border-black/10 bg-white/40 text-gray-800 hover:bg-white/60 dark:hover:bg-white/10 dark:border-white/10 dark:bg-black/20 dark:text-white/80'"
              >
                {{ f.label }}
              </button>
            </div>

            <div class="mt-4 grid gap-3" v-motion-slide-bottom :delay="300">
              <div class="rounded-2xl border border-black/10 bg-white/50 p-5 backdrop-blur dark:border-white/10 dark:bg-black/20">
                <div class="flex items-start gap-3">
                  <div class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon :name="activeFocus.icon" class="size-5" />
                  </div>
                  <div>
                    <div class="text-sm font-extrabold tracking-tight text-gray-950 dark:text-white">
                      {{ activeFocus.title }}
                    </div>
                    <div class="mt-1 text-sm text-muted">{{ activeFocus.copy }}</div>
                  </div>
                </div>

                <div class="mt-4 grid gap-2 text-sm">
                  <div v-for="b in activeFocus.bullets" :key="b" class="flex items-start gap-3">
                    <span class="mt-2 size-1.5 rounded-full bg-primary" />
                    <span class="text-gray-800 dark:text-white/80">{{ b }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="relative z-10 lg:col-span-6">
          <div class="relative overflow-hidden rounded-3xl border border-black/10 bg-white/40 p-1 shadow-[0_30px_80px_-35px_rgba(0,0,0,0.45)] backdrop-blur dark:border-white/10 dark:bg-black/20" v-motion-slide-bottom :delay="220">
            <div class="relative rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(16,185,129,0.10),rgba(255,255,255,0)_55%)] dark:bg-[linear-gradient(135deg,rgba(16,185,129,0.14),rgba(0,0,0,0)_55%)]">
              <div aria-hidden="true" class="pointer-events-none absolute inset-0">
                <div class="absolute inset-0 bg-[radial-gradient(700px_340px_at_50%_15%,rgba(16,185,129,0.18),transparent_58%)]" />
              </div>

              <div class="relative p-6 sm:p-7">
                <div class="flex items-center justify-between">
                  <div class="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-700 dark:text-white/70">Live pipeline</div>
                </div>

                <div class="mt-4 rounded-2xl border border-black/10 bg-white/60 p-5 dark:border-white/10 dark:bg-black/20">
                  <div class="flex items-center justify-between gap-4">
                    <div>
                      <div class="text-sm font-extrabold tracking-tight text-gray-950 dark:text-white">From visit to booked call</div>
                      <div class="mt-1 text-sm text-muted">A site that tells one story and makes one action obvious.</div>
                    </div>
                    <div class="hidden sm:flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-muted">
                      <span class="inline-flex size-2 rounded-full bg-primary" />
                      Optimized
                    </div>
                  </div>

                  <div class="mt-5">
                    <div class="relative grid grid-cols-5 items-center gap-2">
                      <div class="absolute left-[10%] right-[10%] top-1/2 -translate-y-1/2 h-[2px] rounded-full bg-black/10 dark:bg-white/10" />
                      <div class="absolute left-[10%] right-[10%] top-1/2 -translate-y-1/2 h-[2px] rounded-full bg-[linear-gradient(90deg,rgba(16,185,129,0.0),rgba(16,185,129,0.85),rgba(16,185,129,0.0))] bg-[length:200%_100%]" :class="allowMotion ? 'hero-flow' : ''" />

                      <div v-for="s in flow" :key="s" class="relative flex flex-col items-center gap-2">
                        <div class="relative">
                          <span class="absolute -inset-2 rounded-full bg-primary/15 blur-sm" />
                          <span class="relative inline-flex size-3 rounded-full bg-primary" :class="allowMotion ? 'hero-pulse' : ''" />
                        </div>
                        <div class="text-[11px] font-semibold tracking-[0.12em] uppercase text-gray-800 dark:text-white/80">{{ s }}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-5 grid gap-4 sm:grid-cols-2">
                  <div class="rounded-2xl border border-black/10 bg-white/60 p-5 dark:border-white/10 dark:bg-black/20">
                    <div class="flex items-center gap-2 text-sm font-extrabold tracking-tight text-gray-950 dark:text-white">
                      <Icon name="lucide:wand-2" class="size-4 text-primary" />
                      Automation layer
                    </div>
                    <div class="mt-3 space-y-2 text-sm">
                      <div class="flex items-center justify-between rounded-lg bg-black/5 px-3 py-2 dark:bg-white/5">
                        <span class="font-semibold">Lead routing</span>
                        <span class="text-xs text-muted">instant</span>
                      </div>
                      <div class="flex items-center justify-between rounded-lg bg-black/5 px-3 py-2 dark:bg-white/5">
                        <span class="font-semibold">Follow-up</span>
                        <span class="text-xs text-muted">&lt; 60s</span>
                      </div>
                      <div class="flex items-center justify-between rounded-lg bg-black/5 px-3 py-2 dark:bg-white/5">
                        <span class="font-semibold">Reporting</span>
                        <span class="text-xs text-muted">weekly</span>
                      </div>
                    </div>
                  </div>

                  <div class="rounded-2xl border border-black/10 bg-white/60 p-5 dark:border-white/10 dark:bg-black/20">
                    <div class="flex items-center gap-2 text-sm font-extrabold tracking-tight text-gray-950 dark:text-white">
                      <Icon name="lucide:gauge" class="size-4 text-primary" />
                      Performance mindset
                    </div>
                    <div class="mt-3 grid gap-3">
                      <div v-for="m in meters" :key="m.label" class="grid gap-2">
                        <div class="flex items-center justify-between text-xs text-muted">
                          <span class="font-semibold text-gray-900 dark:text-white/85">{{ m.label }}</span>
                          <span>{{ m.value }}</span>
                        </div>
                        <div class="h-2 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                          <div class="h-full rounded-full bg-primary" :style="{ width: m.width }" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 pb-12 sm:pb-16">
        <div class="flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase text-gray-600 dark:text-white/55">
          <div class="h-px flex-1 bg-black/10 dark:bg-white/10" />
          <div>Scroll</div>
          <div class="h-px flex-1 bg-black/10 dark:bg-white/10" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { usePreferredReducedMotion } from '@vueuse/core'

type FocusId = 'cro' | 'agents' | 'seo'

const reduced = usePreferredReducedMotion()
const allowMotion = computed(() => reduced.value === 'no-preference')

const focusOptions = [
  { id: 'cro' as const, label: 'Conversion' },
  { id: 'agents' as const, label: 'AI Agents' },
  { id: 'seo' as const, label: 'SEO' }
]

const focus = ref<FocusId>('cro')

const focusMap: Record<FocusId, { icon: string; title: string; copy: string; bullets: string[] }> = {
  cro: {
    icon: 'lucide:mouse-pointer-click',
    title: 'Conversion-first hierarchy',
    copy: 'One message, one path, one obvious CTA. No “scroll forever and hope”.',
    bullets: ['Offer clarity in the first 5 seconds', 'Proof where it reduces doubt', 'CTA placement that feels natural']
  },
  agents: {
    icon: 'lucide:bot',
    title: 'Automation that buys time back',
    copy: 'Agents handle repetitive ops so your team can focus on closing and delivery.',
    bullets: ['Lead routing + follow-up', 'Inbox triage + summaries', 'Reports and reminders on autopilot']
  },
  seo: {
    icon: 'lucide:search',
    title: 'SEO as a system',
    copy: 'Structure, speed, and intent-aligned content. Not keyword confetti.',
    bullets: ['Semantic sections + metadata', 'Performance and image hygiene', 'Internal links that make sense']
  }
}

const activeFocus = computed(() => focusMap[focus.value])

const flow = ['Visit', 'Story', 'Proof', 'CTA', 'Booked']
const meters = [
  { label: 'Speed', value: 'fast', width: '86%' },
  { label: 'Clarity', value: 'tight', width: '92%' },
  { label: 'Trust', value: 'high', width: '88%' }
]
</script>

<style scoped>
.hero-flow {
  animation: heroFlow 2.2s linear infinite;
}

@keyframes heroFlow {
  0% {
    background-position: 0% 50%;
    opacity: 0.35;
  }
  50% {
    opacity: 1;
  }
  100% {
    background-position: 200% 50%;
    opacity: 0.35;
  }
}

.hero-pulse {
  animation: heroPulse 1.8s ease-in-out infinite;
}

@keyframes heroPulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.18);
    opacity: 0.75;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-flow,
  .hero-pulse {
    animation: none !important;
  }
}
</style>
