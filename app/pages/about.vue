<template>
  <div>
    <PageHero
      eyebrow="About"
      description="I’m Bret Oreta, a full-stack developer and AI automation specialist based in Mombasa, Kenya. I help founders and teams ship websites that look premium, load fast, rank well, and convert consistently."
    >
      <template #default>
        Design-led engineering for
        <span class="relative px-1">
          <span class="absolute inset-x-0 bottom-0 h-3 -skew-x-12 bg-primary/20"></span>
          <span class="relative text-primary">growth</span>
        </span>.
      </template>

      <template #actions>
        <StartTrialButton size="lg" />
        <NuxtLink
          to="/project"
          class="inline-flex items-center justify-center gap-2 rounded-lg border border-black/10 bg-white/50 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
        >
          See projects
          <Icon name="lucide:arrow-up-right" class="size-4" aria-hidden="true" />
        </NuxtLink>
      </template>

      <template #aside>
        <div class="relative mx-auto max-w-115">
          <div
            aria-hidden="true"
            class="absolute -inset-8 -z-10 rounded-[2.5rem] bg-[radial-gradient(closest-side,rgba(16,185,129,0.22),transparent_70%)] blur-2xl"
          />
          <div class="relative overflow-hidden rounded-3xl border border-black/10 bg-white/50 p-1.5 shadow-[0_30px_80px_-35px_rgba(0,0,0,0.45)] backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
            <div class="relative rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(16,185,129,0.10),rgba(255,255,255,0)_55%)] dark:bg-[linear-gradient(135deg,rgba(16,185,129,0.12),rgba(0,0,0,0)_55%)]">
              <div class="absolute inset-0 bg-[radial-gradient(700px_300px_at_50%_20%,rgba(16,185,129,0.20),transparent_55%)]" />
              <div class="relative p-6 sm:p-7">
                <div class="flex items-center justify-between gap-3">
                  <div class="text-[11px] font-bold uppercase tracking-[0.2em] text-muted">Bret Oreta</div>
                  <div class="inline-flex items-center gap-2 text-[11px] font-semibold text-muted">
                    <span class="size-2 rounded-full bg-primary" aria-hidden="true" />
                    Available
                  </div>
                </div>

                <div class="mt-1 text-sm text-muted">Websites • AI Agents • Automation</div>

                <div class="relative mt-5 flex h-80 items-end justify-center overflow-hidden rounded-2xl">
                  <div class="absolute inset-0 bg-[radial-gradient(600px_380px_at_50%_75%,rgba(16,185,129,0.25),transparent_70%)]" />
                  <ResponsiveImage
                    src="/images/bret_oreta.png"
                    alt="Portrait of Bret Oreta"
                    sizes="(min-width: 1024px) 420px, 80vw"
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
                  <UButton color="neutral" variant="subtle" size="sm" icon="i-lucide-github" to="https://github.com/bretoreta" target="_blank">GitHub</UButton>
                  <UButton color="neutral" variant="subtle" size="sm" icon="i-lucide-linkedin" to="https://linkedin.com/in/bretoreta" target="_blank">LinkedIn</UButton>
                  <UButton color="neutral" variant="subtle" size="sm" icon="i-lucide-mail" to="mailto:bretoreta@gmail.com" target="_blank">Email</UButton>
                  <UButton color="neutral" variant="subtle" size="sm" icon="i-lucide-message-circle" to="https://wa.me/254740821859" target="_blank">WhatsApp</UButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </PageHero>

    <div class="pb-16 sm:pb-24">
      <section
        class="mx-auto w-full max-w-7xl px-2 py-14 sm:px-6 sm:py-20 lg:px-10"
        aria-labelledby="principles-title"
      >
        <div class="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div class="lg:col-span-4">
            <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Principles</p>
            <h2 id="principles-title" class="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Clarity first.
              <span class="text-primary">Production always.</span>
            </h2>
            <p class="mt-3 text-base leading-relaxed text-muted md:text-lg">
              Design and engineering decisions should make the business easier to understand and the product harder to break.
            </p>
          </div>

          <div class="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            <div
              v-for="p in principles"
              :key="p.title"
              class="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-primary/30 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-primary/40"
            >
              <div class="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Icon :name="'lucide:' + p.icon" class="size-5" aria-hidden="true" />
              </div>
              <h3 class="mt-4 text-lg font-extrabold tracking-tight">{{ p.title }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-muted">{{ p.copy }}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="what-i-do"
        class="mx-auto w-full max-w-7xl px-2 py-14 sm:px-6 sm:py-20 lg:px-10"
        aria-labelledby="what-i-do-title"
        data-character-section="about"
      >
        <div class="flex flex-col gap-5 border-t border-dashed border-black/10 pt-12 md:flex-row md:items-end md:justify-between dark:border-white/10">
          <div class="max-w-2xl">
            <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">How I help</p>
            <h2 id="what-i-do-title" class="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Work that compounds.
              <span class="text-primary">Systems that scale.</span>
            </h2>
          </div>
          <p class="max-w-md text-base leading-relaxed text-muted md:text-right">
            Whether you need a premium website, an automation layer, or production-grade delivery, the goal is the same: more leads, less friction.
          </p>
        </div>

        <div class="mt-8 grid gap-5 md:grid-cols-3">
          <div
            v-for="c in capabilities"
            :key="c.title"
            class="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_24px_60px_-30px_rgba(16,185,129,0.45)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-primary/40"
          >
            <div aria-hidden="true" class="pointer-events-none absolute -inset-24 opacity-0 transition duration-500 group-hover:opacity-100">
              <div class="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.16),transparent_70%)] blur-2xl" />
            </div>
            <div class="relative">
              <div class="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Icon :name="'lucide:' + c.icon" class="size-5" aria-hidden="true" />
              </div>
              <h3 class="mt-4 text-lg font-extrabold tracking-tight">{{ c.title }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-muted">{{ c.copy }}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="stack"
        class="mx-auto w-full max-w-7xl px-2 py-14 sm:px-6 sm:py-20 lg:px-10"
        aria-labelledby="stack-title"
        data-character-section="skills"
      >
        <div class="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div class="lg:col-span-5">
            <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Stack</p>
            <h2 id="stack-title" class="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Battle-tested,
              <span class="text-primary">not trend-chasing.</span>
            </h2>
            <p class="mt-3 text-base leading-relaxed text-muted md:text-lg">
              I’m fluent across front-end, back-end, automation, and deployment. The goal is not trendy tech — it’s reliable results.
            </p>

            <div class="mt-6 grid grid-cols-2 gap-3">
              <div
                v-for="s in stack"
                :key="s.label"
                class="flex items-center gap-3 rounded-2xl border border-black/10 bg-white/60 p-4 backdrop-blur dark:border-white/10 dark:bg-white/[0.04]"
              >
                <div class="flex size-10 items-center justify-center rounded-xl bg-primary/15">
                  <Icon :name="s.icon" class="size-5 text-primary" aria-hidden="true" />
                </div>
                <div class="text-sm font-semibold">{{ s.label }}</div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7">
            <div class="rounded-3xl border border-black/10 bg-white/40 p-6 backdrop-blur dark:border-white/10 dark:bg-white/[0.04] sm:p-8">
              <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">How I work</p>
              <h3 class="mt-2 text-xl font-extrabold tracking-tight sm:text-2xl">A three-week sprint to launch.</h3>

              <div class="mt-5 grid gap-3 sm:grid-cols-3">
                <div class="rounded-2xl border border-black/10 bg-white/60 p-5 dark:border-white/10 dark:bg-white/[0.04]">
                  <div class="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">Week 1</div>
                  <div class="mt-2 text-sm font-bold">Strategy</div>
                  <div class="mt-1 text-xs leading-relaxed text-muted">Offer, positioning, and page structure.</div>
                </div>
                <div class="rounded-2xl border border-black/10 bg-white/60 p-5 dark:border-white/10 dark:bg-white/[0.04]">
                  <div class="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">Week 2</div>
                  <div class="mt-2 text-sm font-bold">Build</div>
                  <div class="mt-1 text-xs leading-relaxed text-muted">Design, motion, performance, and copy.</div>
                </div>
                <div class="rounded-2xl border border-black/10 bg-white/60 p-5 dark:border-white/10 dark:bg-white/[0.04]">
                  <div class="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">Week 3</div>
                  <div class="mt-2 text-sm font-bold">Launch</div>
                  <div class="mt-1 text-xs leading-relaxed text-muted">SEO basics, analytics, QA, and handoff.</div>
                </div>
              </div>

              <div class="mt-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                <StartTrialButton size="lg" />
                <NuxtLink
                  to="/contact"
                  class="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 underline-offset-4 hover:underline dark:text-white"
                >
                  Prefer email? Contact me
                  <Icon name="lucide:arrow-up-right" class="size-4" aria-hidden="true" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">
        <div class="relative overflow-hidden rounded-3xl border border-black/10 bg-white/40 p-8 backdrop-blur dark:border-white/10 dark:bg-white/[0.04] sm:p-10">
          <div aria-hidden="true" class="pointer-events-none absolute inset-0">
            <div class="absolute inset-0 bg-[radial-gradient(600px_220px_at_15%_0%,rgba(16,185,129,0.16),transparent_70%)]" />
          </div>
          <div class="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div class="max-w-xl">
              <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Next step</p>
              <h2 class="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">Let’s build something that compounds.</h2>
              <p class="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                If you want a site that sells, an automation that saves time, or both, let’s map the plan and ship it.
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
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'About | Web Developer & AI Automation Expert in Kenya',
  ogTitle: 'About | Web Developer & AI Automation Expert in Kenya',
  description: 'Meet Bret Oreta, a Mombasa-based full-stack developer and AI automation expert building high-converting websites, AI agents, and reliable systems.',
  ogDescription: 'Meet Bret Oreta, a Mombasa-based full-stack developer and AI automation expert building high-converting websites, AI agents, and reliable systems.',
  ogType: 'website',
})

defineOgImage('NuxtSeo.takumi', {
  title: 'About Bret Oreta: Web Developer & AI Automation Expert',
  description: 'Design-led engineering for conversion-first websites, AI agents, and automation systems.'
});

const principles = [
  {
    title: 'Clarity beats cleverness',
    copy: 'If people cannot understand your offer fast, they will not buy. Design should reduce confusion, not add it.',
    icon: 'target',
  },
  {
    title: 'Ship like it is production',
    copy: 'Performance, accessibility, and SEO fundamentals are the baseline. Reliability is the multiplier.',
    icon: 'shield-check',
  },
]

const capabilities = [
  {
    title: 'High-converting websites',
    copy: 'Marketing sites, landing pages, and funnels built to book meetings and close deals.',
    icon: 'layout-template',
  },
  {
    title: 'AI agents + automations',
    copy: 'Lead handling, inbox triage, reminders, ops workflows, reporting, and integrations.',
    icon: 'bot',
  },
  {
    title: 'DevOps + reliability',
    copy: 'Deployments, monitoring, and guardrails so your launch stays fast and stable.',
    icon: 'server',
  },
]

const stack = [
  { label: 'Nuxt/Vue', icon: 'logos:vue' },
  { label: 'Laravel', icon: 'logos:laravel' },
  { label: 'Node', icon: 'logos:nodejs-icon' },
  { label: 'PostgreSQL', icon: 'logos:postgresql' },
  { label: 'Docker', icon: 'logos:docker-icon' },
  { label: 'Cloud', icon: 'lucide:cloud' },
]
</script>
