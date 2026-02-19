<template>
  <section id="process" aria-labelledby="process-title" class="py-14 sm:py-20">
    <div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">
      <div class="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div class="mb-8 lg:mt-0" v-motion-slide-visible-once-bottom :delay="200">
          <NuxtPicture
            format="webp,avif"
            class="cover rounded-2xl border border-black/10 bg-white/40 shadow-sm backdrop-blur dark:border-white/10 dark:bg-black/20"
            src="/images/pro-juggler.webp"
            alt="Juggling roles for efficiency illustration"
          />
        </div>
        <div>
          <h2 id="process-title" class="text-3xl font-extrabold tracking-tight sm:text-4xl" v-motion-slide-visible-once-bottom>
            A process that moves at
            <span class="relative px-1">
              <span class="absolute inset-x-0 bottom-0 h-3 -skew-x-12 bg-primary/20"></span>
              <span class="relative inline-block text-primary">your pace</span>
            </span>
            .
          </h2>
          <p class="mt-3 text-base text-muted md:text-lg" v-motion-slide-visible-once-bottom :delay="80">
            You get speed without chaos: clear milestones, tight feedback loops, and production-quality output.
          </p>

          <div class="mt-8 grid gap-3 row-gap-3 lg:grid-cols-2" v-motion-slide-visible-once-bottom :delay="120">
                <ul class="space-y-3">
                    <li class="flex items-start">
                        <span class="mr-1">
                        <svg class="w-5 h-5 mt-px text-primary" stroke="currentColor" viewBox="0 0 52 52">
                            <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                        </svg>
                        </span>
                        Build modularly so upgrades are painless.
                    </li>
                    <li class="flex items-start">
                        <span class="mr-1">
                        <svg class="w-5 h-5 mt-px text-primary" stroke="currentColor" viewBox="0 0 52 52">
                            <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                        </svg>
                        </span>
                        Integrate with your existing tools without downtime.
                    </li>
                    <li class="flex items-start">
                        <span class="mr-1">
                        <svg class="w-5 h-5 mt-px text-primary" stroke="currentColor" viewBox="0 0 52 52">
                            <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                        </svg>
                        </span>
                        Prototype fast, then harden for production.
                    </li>
                </ul>
                <ul class="space-y-3">
                    <li class="flex items-start">
                        <span class="mr-1">
                        <svg class="w-5 h-5 mt-px text-primary" stroke="currentColor" viewBox="0 0 52 52">
                            <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                        </svg>
                        </span>
                        Practical today, scalable tomorrow.
                    </li>
                    <li class="flex items-start">
                        <span class="mr-1">
                        <svg class="w-5 h-5 mt-px text-primary" stroke="currentColor" viewBox="0 0 52 52">
                            <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                        </svg>
                        </span>
                        Simple documentation that your team actually uses.
                    </li>
                    <li class="flex items-start">
                        <span class="mr-1">
                        <svg class="w-5 h-5 mt-px text-primary" stroke="currentColor" viewBox="0 0 52 52">
                            <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                        </svg>
                        </span>
                        Continuous improvement without breaking what works.
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>
