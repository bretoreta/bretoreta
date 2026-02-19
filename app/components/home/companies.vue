<script setup lang="ts">
const services = [
  {
    title: 'Websites That Sell',
    description:
      'Cinematic, fast, and conversion-first marketing sites and landing pages built to turn attention into booked calls.',
    icon: 'sparkles',
    bullets: ['Positioning + copy hierarchy', 'Performance + accessibility', 'Analytics + SEO basics']
  },
  {
    title: 'AI Agents + Automations',
    description:
      'Agents that handle support, ops, and data work so your team can stop babysitting spreadsheets and inboxes.',
    icon: 'bot',
    bullets: ['Workflow mapping', 'Integrations (CRM, email, APIs)', 'Human-in-the-loop safety']
  },
  {
    title: 'DevOps + Reliability',
    description:
      'Production-ready deployments with monitoring, sane CI/CD, and guardrails so launches stay launched.',
    icon: 'shield-check',
    bullets: ['Secure deployments', 'Uptime + observability', 'Cost-aware scaling']
  }
]
</script>

<template>
  <section id="services" aria-labelledby="services-title" class="py-14 sm:py-20">
    <div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">
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
              Built for founders who hate fluff
            </div>
          </div>

          <h2 id="bento-title" class="mt-6 text-center text-3xl font-extrabold tracking-tight sm:text-4xl" v-motion-slide-visible-once-bottom>
            Design-forward execution. //
            <span class="relative px-1">
              <span class="absolute inset-x-0 bottom-0 h-3 -skew-x-12 bg-primary/20"></span>
              <span class="relative text-primary">Business-first</span>
            </span>
            outcomes.
          </h2>
          <p class="mx-auto mt-3 max-w-2xl text-center text-base text-muted md:text-lg" v-motion-slide-visible-once-bottom :delay="80">
            If your site looks good but doesn't convert (or your team is drowning in repetitive tasks), this is the upgrade path.
          </p>
        </div>

        <div class="mt-10 grid gap-5 md:grid-cols-3" v-motion-slide-visible-once-bottom :delay="200">
          <div
            v-for="service in services"
            :key="service.title"
            class="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/50 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-xl dark:border-white/10 dark:bg-black/20"
          >
            <div aria-hidden="true" class="pointer-events-none absolute -inset-24 opacity-0 transition duration-500 group-hover:opacity-100">
              <div class="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.18),transparent_70%)] blur-2xl" />
            </div>

            <div class="relative">
              <div class="flex items-center gap-3">
                <div class="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon :name="'lucide:' + service.icon" class="size-5" />
                </div>
                <h3 class="text-lg font-extrabold tracking-tight">{{ service.title }}</h3>
              </div>
              <p class="mt-3 text-sm leading-relaxed text-muted">{{ service.description }}</p>

              <ul class="mt-5 space-y-2 text-sm">
                <li v-for="b in service.bullets" :key="b" class="flex items-start gap-2">
                  <span class="mt-1 size-1.5 rounded-full bg-primary" />
                  <span class="text-gray-800 dark:text-white/80">{{ b }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <StartTrialButton size="lg" />
          <NuxtLink to="/about" class="text-sm font-semibold text-gray-900 underline-offset-4 hover:underline dark:text-white">
            See how I work
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>