<template>
  <section class="relative isolate pt-10 sm:pt-14 overflow-hidden">
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
            Your competitors are stealing your customers while you sleep. I build
            <ContainerFlip :words="['AI Automations', 'Websites that Sell', 'SaaS Products', 'AI Agents']" class="mt-3" />
          </h1>

          <p
            class="mt-5 max-w-xl text-base leading-relaxed text-gray-700 sm:text-lg dark:text-white/75"
            v-motion-slide-bottom
            :delay="160"
          >
            Your broken tech is costing you sales every minute. I build production-grade websites + automation pipelines that bring in real customers and drive real results.
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
        </div>

        <div class="relative z-10 lg:col-span-6 place-items-center">
          <div class="relative overflow-hidden rounded-3xl border border-black/10 bg-white/40 p-1 shadow-[0_30px_80px_-35px_rgba(0,0,0,0.45)] backdrop-blur dark:border-white/10 dark:bg-black/20" v-motion-slide-bottom :delay="220">
            <div class="relative rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(16,185,129,0.10),rgba(255,255,255,0)_55%)] dark:bg-[linear-gradient(135deg,rgba(16,185,129,0.14),rgba(0,0,0,0)_55%)]">
              <div aria-hidden="true" class="pointer-events-none absolute inset-0">
                <div class="absolute inset-0 bg-[radial-gradient(700px_340px_at_50%_15%,rgba(16,185,129,0.18),transparent_58%)]" />
              </div>

              <div class="relative p-6 sm:p-7">
                <NuxtImg src="images/looney_blowing_whistle.svg" class="w-150" />
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
