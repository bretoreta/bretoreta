<template>
  <section id="process" aria-labelledby="process-title" class="py-14 sm:py-20" data-character-section="process">
    <div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">
      <div class="grid gap-8 border-t border-dashed border-black/10 pt-12 lg:grid-cols-12 lg:items-center dark:border-white/10">
        <div class="order-2 lg:order-1 lg:col-span-5">
          <div class="relative overflow-hidden rounded-3xl border border-black/10 bg-white/50 p-1.5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
            <div class="relative rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(16,185,129,0.10),rgba(255,255,255,0)_60%)] p-4 dark:bg-[linear-gradient(135deg,rgba(16,185,129,0.14),rgba(0,0,0,0)_60%)] sm:p-6">
              <div aria-hidden="true" class="pointer-events-none absolute inset-0">
                <div class="absolute inset-0 bg-[radial-gradient(700px_380px_at_50%_20%,rgba(16,185,129,0.20),transparent_60%)]" />
              </div>
              <NuxtPicture
                format="webp,avif"
                src="/images/pro-juggler.webp"
                alt="Illustration of balancing multiple workstreams"
                class="relative mx-auto w-full max-w-md"
              />
            </div>
          </div>
        </div>

        <div class="order-1 lg:order-2 lg:col-span-7">
          <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Process</p>
          <h2 id="process-title" class="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            A process that moves at
            <span class="relative px-1">
              <span class="absolute inset-x-0 bottom-0 h-3 -skew-x-12 bg-primary/20"></span>
              <span class="relative inline-block text-primary">your pace.</span>
            </span>
          </h2>
          <p class="mt-3 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            You get speed without chaos: clear milestones, tight feedback loops, and production-quality output.
          </p>

          <div class="mt-6 space-y-3">
            <div
              v-for="(step, index) in steps"
              :key="step.title"
              class="flex gap-4 rounded-2xl border border-black/10 bg-white/60 p-4 backdrop-blur dark:border-white/10 dark:bg-white/[0.04]"
            >
              <span class="flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-xs font-extrabold text-primary">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <div>
                <h3 class="text-sm font-extrabold tracking-tight">{{ step.title }}</h3>
                <p class="mt-1 text-sm leading-relaxed text-muted">{{ step.copy }}</p>
              </div>
            </div>
          </div>

          <NuxtLink
            to="/about"
            class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            See how I work
            <Icon name="lucide:arrow-right" class="size-4" aria-hidden="true" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Clarify the goal',
    copy: 'Positioning, offer, and page structure before pixels — so the work has a job to do.',
  },
  {
    title: 'Build in modules',
    copy: 'Fast prototypes, clean integrations, and production hardening that don’t create future traps.',
  },
  {
    title: 'Launch and improve',
    copy: 'Simple documentation, monitoring, and continuous improvements without breaking what works.',
  },
]
</script>
