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
                  <div class="flex items-center justify-between">
                    <div class="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-700 dark:text-white/70">What you get</div>
                    <div class="flex items-center gap-2 text-xs text-gray-700 dark:text-white/70">
                      <span class="inline-flex size-2 rounded-full bg-primary" />
                      Conversion-ready
                    </div>
                  </div>

                  <div class="mt-4 grid grid-cols-2 gap-4">
                    <div class="group relative overflow-hidden rounded-xl border border-black/10 bg-white/50 p-2 dark:border-white/10 dark:bg-black/20">
                      <NuxtImg
                        src="/images/project/fairdealfurniture.png"
                        format="webp,avif"
                        alt="Project preview: Fairdeal Furniture"
                        class="aspect-[4/3] w-full rounded-lg object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <div class="mt-2 flex items-center justify-between">
                        <div class="text-xs font-semibold">Case study</div>
                        <div class="text-[11px] text-muted">E-commerce</div>
                      </div>
                    </div>

                    <div class="group relative overflow-hidden rounded-xl border border-black/10 bg-white/50 p-2 dark:border-white/10 dark:bg-black/20">
                      <NuxtImg
                        src="/images/project/ximivogue.png"
                        format="webp,avif"
                        alt="Project preview: XIMI Vogue"
                        class="aspect-4/3 w-full rounded-lg object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <div class="mt-2 flex items-center justify-between">
                        <div class="text-xs font-semibold">Case study</div>
                        <div class="text-[11px] text-muted">Ops + UX</div>
                      </div>
                    </div>
                  </div>

                  <div class="mt-5 rounded-xl border border-black/10 bg-white/50 p-4 dark:border-white/10 dark:bg-black/20">
                    <div class="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white/90">
                      <Icon name="lucide:calendar-check" class="size-4 text-primary" />
                      Bookings pipeline
                    </div>
                    <div class="mt-2 grid gap-2 text-xs text-muted">
                      <div class="flex items-center justify-between rounded-lg bg-black/5 px-3 py-2 dark:bg-white/5">
                        <span class="font-semibold text-gray-900 dark:text-white/85">Lead captured</span>
                        <span>instant</span>
                      </div>
                      <div class="flex items-center justify-between rounded-lg bg-black/5 px-3 py-2 dark:bg-white/5">
                        <span class="font-semibold text-gray-900 dark:text-white/85">Follow-up</span>
                        <span>&lt; 60s</span>
                      </div>
                      <div class="flex items-center justify-between rounded-lg bg-black/5 px-3 py-2 dark:bg-white/5">
                        <span class="font-semibold text-gray-900 dark:text-white/85">Booked call</span>
                        <span>scheduled</span>
                      </div>
                    </div>
                  </div>

                  <div class="mt-6 flex items-center justify-between">
                    <div class="text-xs font-semibold tracking-[0.18em] uppercase text-primary">Premium craft</div>
                    <NuxtLink to="/project" class="text-sm font-semibold text-gray-900 underline-offset-4 hover:underline dark:text-white">
                      View case studies
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
