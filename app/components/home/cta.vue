<template>
  <section id="cta" aria-labelledby="cta-title" class="py-14 sm:py-20" data-character-section="cta">
    <div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">
      <div class="relative overflow-hidden rounded-3xl border border-black/10 bg-white/40 p-8 backdrop-blur dark:border-white/10 dark:bg-white/[0.04] sm:p-10">
        <div aria-hidden="true" class="pointer-events-none absolute inset-0">
          <div class="absolute inset-0 bg-[radial-gradient(700px_300px_at_15%_0%,rgba(16,185,129,0.18),transparent_70%)]" />
        </div>

        <div class="relative grid gap-8 lg:grid-cols-12 lg:items-center">
          <div class="lg:col-span-7">
            <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Next step</p>
            <h2 id="cta-title" class="mt-2 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready to turn your website into a
              <span class="relative px-1">
                <span class="absolute inset-x-0 bottom-0 h-3 -skew-x-12 bg-primary/20"></span>
                <span class="relative inline-block text-primary">sales system?</span>
              </span>
            </h2>
            <p class="mt-3 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              If you want premium craft without sacrificing clarity and conversions, let’s map the plan and ship it.
            </p>
            <div class="mt-6 flex flex-col gap-3 sm:flex-row">
              <StartTrialButton size="lg" />
              <NuxtLink
                to="/project"
                class="inline-flex items-center justify-center gap-2 rounded-lg border border-black/10 bg-white/50 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                See the work
                <Icon name="lucide:arrow-up-right" class="size-4" aria-hidden="true" />
              </NuxtLink>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="rounded-2xl border border-black/10 bg-white/60 p-5 backdrop-blur dark:border-white/10 dark:bg-white/[0.03]">
              <p class="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">What you get</p>
              <ul class="mt-4 space-y-3 text-sm">
                <li class="flex items-start gap-3">
                  <span class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Icon name="lucide:check" class="size-3" aria-hidden="true" />
                  </span>
                  <span class="text-gray-800 dark:text-white/80">Clear messaging + hierarchy that makes the CTA obvious.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Icon name="lucide:check" class="size-3" aria-hidden="true" />
                  </span>
                  <span class="text-gray-800 dark:text-white/80">Speed, SEO fundamentals, and analytics that answer real questions.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Icon name="lucide:check" class="size-3" aria-hidden="true" />
                  </span>
                  <span class="text-gray-800 dark:text-white/80">Automation where it matters: lead handling, follow-up, and ops.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
