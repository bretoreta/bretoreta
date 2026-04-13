<template>
  <section id="cta" aria-labelledby="cta-title" class="py-14 sm:py-20">
    <div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">
      <div class="relative overflow-hidden rounded-3xl border border-black/10 bg-white/50 p-6 backdrop-blur dark:border-white/10 dark:bg-black/20 sm:p-10">
        <div aria-hidden="true" class="pointer-events-none absolute -inset-24">
          <div class="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.18),transparent_70%)] blur-3xl" />
        </div>

        <div class="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div class="lg:col-span-6">
            <div class="mb-4" v-motion-slide-visible-once-bottom>
              <UBadge>Green is the brand. Growth is the outcome.</UBadge>
            </div>
            <h2 id="cta-title" class="text-3xl font-extrabold tracking-tight sm:text-4xl" v-motion-slide-visible-once-bottom :delay="100">
              Ready to turn your website into a
              <span class="relative px-1">
                <span class="absolute inset-x-0 bottom-0 h-3 -skew-x-12 bg-primary/20"></span>
                <span class="relative inline-block text-primary">sales system</span>
              </span>
              ?
            </h2>
            <p class="mt-3 text-base text-muted md:text-lg" v-motion-slide-visible-once-bottom :delay="150">
              If you want Awwwards-level craft without sacrificing clarity and conversions, let's map the plan and ship it.
            </p>

            <div class="mt-6 grid gap-3 text-sm" v-motion-slide-visible-once-bottom :delay="200">
              <div class="flex items-start gap-3">
                <span class="mt-1 size-1.5 rounded-full bg-primary" />
                <span class="text-gray-800 dark:text-white/80">Clear messaging + hierarchy that makes the CTA obvious.</span>
              </div>
              <div class="flex items-start gap-3">
                <span class="mt-1 size-1.5 rounded-full bg-primary" />
                <span class="text-gray-800 dark:text-white/80">Speed, SEO fundamentals, and analytics that actually answer questions.</span>
              </div>
              <div class="flex items-start gap-3">
                <span class="mt-1 size-1.5 rounded-full bg-primary" />
                <span class="text-gray-800 dark:text-white/80">Automation where it matters: lead handling, follow-up, ops.</span>
              </div>
            </div>

            <div class="mt-8" v-motion-slide-visible-once-bottom :delay="250">
              <StartTrialButton size="lg" />
            </div>
          </div>

          <div class="lg:col-span-6" v-motion-slide-visible-once-bottom :delay="300">
            <div class="relative overflow-hidden rounded-2xl border border-black/10 bg-white/40 p-1 shadow-sm backdrop-blur dark:border-white/10 dark:bg-black/20">
              <div class="relative rounded-[0.95rem] bg-[linear-gradient(135deg,rgba(16,185,129,0.10),rgba(255,255,255,0)_60%)] dark:bg-[linear-gradient(135deg,rgba(16,185,129,0.14),rgba(0,0,0,0)_60%)]">
                <div aria-hidden="true" class="pointer-events-none absolute inset-0">
                  <div class="absolute inset-0 bg-[radial-gradient(700px_380px_at_50%_20%,rgba(16,185,129,0.20),transparent_60%)]" />
                </div>

                <div class="relative p-6">
                  <NuxtImg src="/images/looney-analytics-and-statistics-guy.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
