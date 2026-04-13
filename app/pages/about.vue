<script setup lang="ts">
useSeoMeta({
  title: 'About | Bret Oreta',
  ogTitle: 'About | Bret Oreta',
  description: 'Design-led engineering for conversion-first websites, AI agents, and automation systems.',
  ogDescription: 'Design-led engineering for conversion-first websites, AI agents, and automation systems.',
  ogImage: '/images/og-image.webp',
  twitterCard: 'summary_large_image',
  ogType: 'website'
})

const principles = [
  {
    title: 'Clarity beats cleverness',
    copy: 'If people cannot understand your offer fast, they will not buy. Design should reduce confusion, not add it.',
    icon: 'target'
  },
  {
    title: 'Ship like it is production',
    copy: 'Performance, accessibility, and SEO fundamentals are the baseline. Reliability is the multiplier.',
    icon: 'shield-check'
  }
]

const capabilities = [
  {
    title: 'High-converting websites',
    copy: 'Marketing sites, landing pages, and funnels built to book meetings and close deals.',
    icon: 'layout-template'
  },
  {
    title: 'AI agents + automations',
    copy: 'Lead handling, inbox triage, reminders, ops workflows, reporting, and integrations.',
    icon: 'bot'
  },
  {
    title: 'DevOps + reliability',
    copy: 'Deployments, monitoring, and guardrails so your launch stays fast and stable.',
    icon: 'server'
  }
]

const stack = [
  { label: 'Nuxt/Vue', icon: 'logos:vue' },
  { label: 'Laravel', icon: 'logos:laravel' },
  { label: 'Node', icon: 'logos:nodejs-icon' },
  { label: 'PostgreSQL', icon: 'logos:postgresql' },
  { label: 'Docker', icon: 'logos:docker-icon' },
  { label: 'Cloud', icon: 'lucide:cloud' }
]
</script>

<template>
  <div class="py-10 sm:py-14">
    <header class="relative overflow-hidden">
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
        <div class="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 py-6">
          <div class="relative z-10 lg:col-span-7">
            <Availability :available="true" v-motion-slide-bottom />

            <h1 v-motion-slide-visible-once-bottom class="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
              Design-led engineering for
              <span class="relative px-1">
                <span class="absolute inset-x-0 bottom-0 h-3 -skew-x-12 bg-primary/20"></span>
                <span class="relative text-primary">growth</span>
              </span>
              .
            </h1>

            <p v-motion-slide-visible-once-bottom :delay="90" class="mt-4 max-w-2xl text-base text-muted md:text-lg">
              I’m Bret Oreta, a full-stack developer and automation specialist based in Mombasa, Kenya. I help founders ship sites that look premium,
              load fast, rank well, and convert consistently.
            </p>

            <div v-motion-slide-visible-once-bottom :delay="140" class="mt-7 flex flex-col gap-3 sm:flex-row">
              <StartTrialButton size="lg" />
              <NuxtLink
                to="/project"
                class="inline-flex items-center justify-center gap-2 rounded-lg border border-black/10 bg-white/50 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-white/70 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              >
                See projects
                <Icon name="lucide:arrow-up-right" class="size-4" />
              </NuxtLink>
            </div>

            <div v-motion-slide-visible-once-bottom :delay="180" class="mt-8 grid gap-5 sm:grid-cols-2">
              <div
                v-for="p in principles"
                :key="p.title"
                class="rounded-2xl border border-black/10 bg-white/50 p-5 backdrop-blur dark:border-white/10 dark:bg-black/20"
              >
                <div class="flex items-center gap-3">
                  <div class="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon :name="'lucide:' + p.icon" class="size-5" />
                  </div>
                  <div class="text-sm font-extrabold tracking-tight">{{ p.title }}</div>
                </div>
                <div class="mt-3 text-sm text-muted">{{ p.copy }}</div>
              </div>
            </div>
          </div>

          <div class="relative z-10 lg:col-span-5">
            <div class="relative mx-auto max-w-[460px]">
              <div
                aria-hidden="true"
                class="absolute -inset-10 -z-10 rounded-[2.5rem] bg-[radial-gradient(closest-side,rgba(16,185,129,0.22),transparent_70%)] blur-2xl"
              />
              <div class="relative overflow-hidden rounded-[2.25rem] border border-black/10 bg-white/40 p-1 shadow-[0_30px_80px_-35px_rgba(0,0,0,0.45)] backdrop-blur dark:border-white/10 dark:bg-black/20">
                <div class="relative rounded-[1.95rem] bg-[linear-gradient(135deg,rgba(16,185,129,0.10),rgba(255,255,255,0)_55%)] dark:bg-[linear-gradient(135deg,rgba(16,185,129,0.12),rgba(0,0,0,0)_55%)]">
                  <div class="absolute inset-0 bg-[radial-gradient(700px_300px_at_50%_20%,rgba(16,185,129,0.20),transparent_55%)]" />
                  <div class="relative p-7">
                    <div class="flex items-center justify-between">
                      <div class="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-700 dark:text-white/70">About</div>
                      <div class="flex items-center gap-2 text-xs text-gray-700 dark:text-white/70">
                        <span class="inline-flex size-2 rounded-full bg-primary" />
                        Available
                      </div>
                    </div>

                    <div class="mt-3 text-lg font-extrabold tracking-tight text-gray-950 dark:text-white">Bret Oreta</div>
                    <div class="mt-1 text-sm text-muted">Websites • AI Agents • Automation</div>

                    <div class="mt-5 relative flex h-80 items-end justify-center overflow-hidden rounded-2xl">
                      <div class="absolute inset-0 bg-[radial-gradient(600px_380px_at_50%_75%,rgba(16,185,129,0.25),transparent_70%)]" />
                      <NuxtImg
                        src="/images/bret_oreta.png"
                        format="webp,avif"
                        alt="Bret Oreta"
                        height="800px"
                        class="relative z-10 h-full w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
                      />

                      <OrbitComponent class="items-center justify-center" :radius="135" :duration="18" :delay="2" path>
                        <div class="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">CRO</div>
                      </OrbitComponent>
                      <OrbitComponent class="items-center justify-center" :radius="170" :duration="26" :delay="7" path>
                        <div class="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">AI Agents</div>
                      </OrbitComponent>
                      <OrbitComponent class="items-center justify-center" :radius="205" :duration="32" :delay="11" path>
                        <div class="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">SEO</div>
                      </OrbitComponent>
                    </div>

                    <div class="mt-6 flex flex-wrap gap-2">
                      <UButton color="neutral" variant="subtle" icon="i-lucide-github" to="https://github.com/bretoreta" target="_blank">GitHub</UButton>
                      <UButton color="neutral" variant="subtle" icon="i-lucide-linkedin" to="https://linkedin.com/in/bretoreta" target="_blank">LinkedIn</UButton>
                      <UButton color="neutral" variant="subtle" icon="i-lucide-mail" to="mailto:bretoreta@gmail.com" target="_blank">Email</UButton>
                      <UButton color="neutral" variant="subtle" icon="i-lucide-message-circle" to="https://wa.me/254740821859" target="_blank">WhatsApp</UButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="mt-12 sm:mt-16">
      <section id="what-i-do" aria-labelledby="what-i-do-title" class="py-14 sm:py-20">
        <div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">
          <div class="mx-auto max-w-2xl text-center">
            <div class="mb-4" v-motion-slide-visible-once-bottom>
              <UBadge>How I help</UBadge>
            </div>
            <h2 id="what-i-do-title" v-motion-slide-visible-once-bottom :delay="80" class="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Work that compounds.
              <span class="relative px-1">
                <span class="absolute inset-x-0 bottom-0 h-3 -skew-x-12 bg-primary/20"></span>
                <span class="relative text-primary">Systems</span>
              </span>
              that scale.
            </h2>
            <p v-motion-slide-visible-once-bottom :delay="130" class="mt-3 text-base text-muted md:text-lg">
              Whether you need a premium website, an automation layer, or production-grade delivery, the goal is the same: more leads, less friction.
            </p>
          </div>

          <div class="mt-10 grid gap-5 md:grid-cols-3" v-motion-slide-visible-once-bottom :delay="180">
            <div
              v-for="c in capabilities"
              :key="c.title"
              class="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/50 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-xl dark:border-white/10 dark:bg-black/20"
            >
              <div aria-hidden="true" class="pointer-events-none absolute -inset-24 opacity-0 transition duration-500 group-hover:opacity-100">
                <div class="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.16),transparent_70%)] blur-2xl" />
              </div>
              <div class="relative">
                <div class="flex items-center gap-3">
                  <div class="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon :name="'lucide:' + c.icon" class="size-5" />
                  </div>
                  <h3 class="text-lg font-extrabold tracking-tight">{{ c.title }}</h3>
                </div>
                <p class="mt-3 text-sm leading-relaxed text-muted">{{ c.copy }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stack" aria-labelledby="stack-title" class="py-14 sm:py-20">
        <div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">
          <div class="grid items-center gap-8 lg:grid-cols-12">
            <div class="lg:col-span-5">
              <h2 id="stack-title" class="text-3xl font-extrabold tracking-tight sm:text-4xl" v-motion-slide-visible-once-bottom>
                My stack,
                <span class="relative px-1">
                  <span class="absolute inset-x-0 bottom-0 h-3 -skew-x-12 bg-primary/20"></span>
                  <span class="relative text-primary">battle-tested</span>
                </span>
                .
              </h2>
              <p class="mt-3 text-base text-muted md:text-lg" v-motion-slide-visible-once-bottom :delay="90">
                I’m fluent across front-end, back-end, automation, and deployment. The goal is not trendy tech — it’s reliable results.
              </p>

              <div class="mt-6 grid grid-cols-2 gap-3" v-motion-slide-visible-once-bottom :delay="130">
                <div
                  v-for="s in stack"
                  :key="s.label"
                  class="flex items-center gap-3 rounded-2xl border border-black/10 bg-white/50 p-4 backdrop-blur dark:border-white/10 dark:bg-black/20"
                >
                  <div class="flex size-10 items-center justify-center rounded-xl bg-primary/15">
                    <Icon :name="s.icon" class="size-5 text-primary" />
                  </div>
                  <div class="text-sm font-semibold">{{ s.label }}</div>
                </div>
              </div>
            </div>

            <div class="lg:col-span-7" v-motion-slide-visible-once-bottom :delay="160">
              <div class="rounded-3xl border border-black/10 bg-white/40 p-6 backdrop-blur dark:border-white/10 dark:bg-black/20 sm:p-10">
                <div class="text-xs font-semibold tracking-[0.18em] uppercase text-muted">How I work</div>
                <div class="mt-3 grid gap-3 sm:grid-cols-3">
                  <div class="rounded-2xl border border-black/10 bg-white/60 p-5 dark:border-white/10 dark:bg-black/20">
                    <div class="text-xs font-semibold tracking-[0.18em] uppercase text-muted">Week 1</div>
                    <div class="mt-2 text-sm font-semibold text-gray-900 dark:text-white/90">Strategy</div>
                    <div class="mt-1 text-xs text-muted">Offer, positioning, and page structure.</div>
                  </div>
                  <div class="rounded-2xl border border-black/10 bg-white/60 p-5 dark:border-white/10 dark:bg-black/20">
                    <div class="text-xs font-semibold tracking-[0.18em] uppercase text-muted">Week 2</div>
                    <div class="mt-2 text-sm font-semibold text-gray-900 dark:text-white/90">Build</div>
                    <div class="mt-1 text-xs text-muted">Design, motion, performance, and copy.</div>
                  </div>
                  <div class="rounded-2xl border border-black/10 bg-white/60 p-5 dark:border-white/10 dark:bg-black/20">
                    <div class="text-xs font-semibold tracking-[0.18em] uppercase text-muted">Week 3</div>
                    <div class="mt-2 text-sm font-semibold text-gray-900 dark:text-white/90">Launch</div>
                    <div class="mt-1 text-xs text-muted">SEO basics, analytics, QA, and handoff.</div>
                  </div>
                </div>

                <div class="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
                  <StartTrialButton size="lg" />
                  <NuxtLink to="/contact" class="text-sm font-semibold text-gray-900 underline-offset-4 hover:underline dark:text-white">
                    Prefer email? Contact me
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    
  </div>
</template>
