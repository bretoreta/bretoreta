<template>
  <section id="services" aria-labelledby="services-title" class="py-14 sm:py-20" data-character-section="services">
    <div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">
      <div class="border-t border-dashed border-black/10 pt-12 dark:border-white/10">
        <div class="grid gap-5 lg:grid-cols-12 lg:items-end">
          <div class="lg:col-span-8">
            <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Services</p>
            <h2 id="services-title" class="mt-2 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              Design-forward execution.
              <span class="relative px-1">
                <span class="absolute inset-x-0 bottom-0 h-3 -skew-x-12 bg-primary/20"></span>
                <span class="relative text-primary">Business-first</span>
              </span>
              outcomes.
            </h2>
          </div>
          <p class="max-w-md text-base leading-relaxed text-muted md:text-right lg:col-span-4">
            If your site looks good but doesn’t convert — or your team is drowning in repetitive tasks — this is the upgrade path.
          </p>
        </div>

        <div class="mt-8 grid gap-5 md:grid-cols-3">
          <div
            v-for="service in services"
            :key="service.title"
            class="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_24px_60px_-30px_rgba(16,185,129,0.45)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-primary/40"
          >
            <div aria-hidden="true" class="pointer-events-none absolute -inset-24 opacity-0 transition duration-500 group-hover:opacity-100">
              <div class="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.18),transparent_70%)] blur-2xl" />
            </div>

            <div class="relative">
              <div class="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Icon :name="'lucide:' + service.icon" class="size-5" aria-hidden="true" />
              </div>
              <h3 class="mt-4 text-lg font-extrabold tracking-tight">{{ service.title }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-muted">{{ service.description }}</p>

              <ul class="mt-5 space-y-2 text-sm">
                <li v-for="b in service.bullets" :key="b" class="flex items-start gap-2">
                  <span class="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span class="text-gray-800 dark:text-white/80">{{ b }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <StartTrialButton size="lg" />
          <NuxtLink
            to="/about"
            class="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 underline-offset-4 hover:underline dark:text-white"
          >
            See how I work
            <Icon name="lucide:arrow-up-right" class="size-4" aria-hidden="true" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    title: 'Websites That Sell',
    description:
      'Cinematic, fast, and conversion-first marketing sites and landing pages built to turn attention into booked calls.',
    icon: 'sparkles',
    bullets: ['Positioning + copy hierarchy', 'Performance + accessibility', 'Analytics + SEO basics'],
  },
  {
    title: 'AI Agents + Automations',
    description:
      'Agents that handle support, ops, and data work so your team can stop babysitting spreadsheets and inboxes.',
    icon: 'bot',
    bullets: ['Workflow mapping', 'Integrations (CRM, email, APIs)', 'Human-in-the-loop safety'],
  },
  {
    title: 'DevOps + Reliability',
    description:
      'Production-ready deployments with monitoring, sane CI/CD, and guardrails so launches stay launched.',
    icon: 'shield-check',
    bullets: ['Secure deployments', 'Uptime + observability', 'Cost-aware scaling'],
  },
]
</script>
