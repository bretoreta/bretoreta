<template>
  <div data-character-section="contact">
    <PageHero
      eyebrow="Contact"
      description="Tell me what you’re building, what’s slowing you down, or what you want to automate. I’ll reply with a clear next step — not a sales script."
    >
      <template #default>
        Let’s build something
        <span class="relative px-1">
          <span class="absolute inset-x-0 bottom-0 h-3 -skew-x-12 bg-primary/20"></span>
          <span class="relative text-primary">meaningful.</span>
        </span>
      </template>

      <template #actions>
        <StartTrialButton size="lg" />
        <a
          href="mailto:bretoreta@gmail.com"
          class="inline-flex items-center justify-center gap-2 rounded-lg border border-black/10 bg-white/50 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
        >
          Send an email
          <Icon name="lucide:mail" class="size-4" aria-hidden="true" />
        </a>
      </template>

      <template #aside>
        <div class="rounded-3xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.04] sm:p-7">
          <div class="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            <span class="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            Available for new projects
          </div>
          <p class="mt-3 text-sm leading-relaxed text-muted">
            Based in Mombasa, Kenya, working with teams across Africa and remotely.
          </p>

          <div class="mt-5 rounded-2xl border border-black/10 bg-primary/5 p-4 dark:border-white/10 dark:bg-primary/10">
            <p class="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">Typical response</p>
            <p class="mt-1 text-sm font-bold">Within one business day</p>
          </div>

          <div class="mt-4 flex items-center gap-2 text-xs font-medium text-muted">
            <Icon name="lucide:map-pin" class="size-4 text-primary" aria-hidden="true" />
            Mombasa, Kenya · EAT
          </div>
        </div>
      </template>
    </PageHero>

    <div class="pb-16 sm:pb-24">
      <section
        id="contact-options"
        class="mx-auto w-full max-w-7xl px-2 py-14 sm:px-6 sm:py-20 lg:px-10"
        aria-labelledby="contact-options-title"
      >
        <div class="flex flex-col gap-4 border-t border-dashed border-black/10 pt-10 md:flex-row md:items-end md:justify-between dark:border-white/10">
          <div class="max-w-xl">
            <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Ways to reach me</p>
            <h2 id="contact-options-title" class="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Pick the channel that fits.
            </h2>
          </div>
          <p class="max-w-md text-sm leading-relaxed text-muted md:text-right">
            Email is best for detail. WhatsApp is fastest. LinkedIn and GitHub work too.
          </p>
        </div>

        <div class="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <a
            v-for="method in contactMethods"
            :key="method.label"
            :href="method.href"
            :target="method.external ? '_blank' : undefined"
            :rel="method.external ? 'noopener noreferrer' : undefined"
            class="group flex h-full flex-col rounded-2xl border border-black/10 bg-white/60 p-5 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_20px_50px_-30px_rgba(16,185,129,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-primary/40 dark:focus-visible:ring-offset-[#050807]"
          >
            <div class="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Icon :name="method.icon" class="size-5" aria-hidden="true" />
            </div>
            <h3 class="mt-4 text-lg font-extrabold tracking-tight">{{ method.label }}</h3>
            <p class="mt-1 text-xs font-semibold text-primary">{{ method.value }}</p>
            <p class="mt-2 text-sm leading-relaxed text-muted">{{ method.description }}</p>
            <span class="mt-auto inline-flex items-center gap-1 pt-5 text-xs font-bold text-primary">
              {{ method.cta }}
              <Icon
                name="lucide:arrow-up-right"
                class="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </a>
        </div>
      </section>

      <section class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">
        <div class="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div class="lg:col-span-7">
            <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">What I can help with</p>
            <h2 class="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Websites, agents, and the systems behind them.
            </h2>
            <p class="mt-3 max-w-xl text-base leading-relaxed text-muted">
              You do not need a perfect brief. A link, a workflow, or a frustrating bottleneck is enough to start.
            </p>

            <ul class="mt-6 grid gap-3 sm:grid-cols-2">
              <li
                v-for="item in helpItems"
                :key="item"
                class="flex items-start gap-3 rounded-2xl border border-black/10 bg-white/60 p-4 backdrop-blur dark:border-white/10 dark:bg-white/[0.04]"
              >
                <span class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Icon name="lucide:check" class="size-3" aria-hidden="true" />
                </span>
                <span class="text-sm font-semibold leading-relaxed">{{ item }}</span>
              </li>
            </ul>
          </div>

          <div class="lg:col-span-5">
            <div class="rounded-3xl border border-black/10 bg-white/40 p-6 backdrop-blur dark:border-white/10 dark:bg-white/[0.04] sm:p-8">
              <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">What happens next</p>
              <h2 class="mt-2 text-xl font-extrabold tracking-tight sm:text-2xl">A simple, three-step start.</h2>

              <ol class="mt-6 space-y-5">
                <li v-for="(step, index) in steps" :key="step.title" class="flex gap-4">
                  <span class="flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-xs font-extrabold text-primary">
                    {{ index + 1 }}
                  </span>
                  <div>
                    <h3 class="text-sm font-extrabold tracking-tight">{{ step.title }}</h3>
                    <p class="mt-1 text-sm leading-relaxed text-muted">{{ step.copy }}</p>
                  </div>
                </li>
              </ol>

              <div class="mt-7 border-t border-dashed border-black/10 pt-5 dark:border-white/10">
                <StartTrialButton size="lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto mt-14 w-full max-w-7xl px-2 sm:px-6 lg:px-10">
        <div class="flex flex-col items-start justify-between gap-4 rounded-2xl border border-black/10 bg-white/40 p-5 backdrop-blur sm:flex-row sm:items-center dark:border-white/10 dark:bg-white/[0.04]">
          <p class="text-sm font-semibold">Want to see the work before we talk?</p>
          <div class="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
            <NuxtLink to="/project" class="text-primary underline-offset-4 hover:underline">Projects</NuxtLink>
            <NuxtLink to="/about" class="text-primary underline-offset-4 hover:underline">About</NuxtLink>
            <NuxtLink to="/blog" class="text-primary underline-offset-4 hover:underline">Writing</NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Contact | Web Developer & AI Automation Expert in Kenya',
  ogTitle: 'Contact | Web Developer & AI Automation Expert in Kenya',
  description: 'Start a project or ask a question. Reach Bret Oreta by email, WhatsApp, LinkedIn, or GitHub. Based in Mombasa, Kenya.',
  ogDescription: 'Start a project or ask a question. Reach Bret Oreta by email, WhatsApp, LinkedIn, or GitHub. Based in Mombasa, Kenya.',
  ogType: 'website',
})

defineOgImage('NuxtSeo.takumi', {
  title: 'Contact Bret Oreta',
  description: 'Start a project or ask a question. Reach Bret Oreta by email, WhatsApp, LinkedIn, or GitHub.'
});

const contactMethods = [
  {
    label: 'Email',
    value: 'bretoreta@gmail.com',
    description: 'Best for detailed project inquiries, scopes, and introductions.',
    href: 'mailto:bretoreta@gmail.com',
    icon: 'lucide:mail',
    external: false,
    cta: 'Send email',
  },
  {
    label: 'WhatsApp',
    value: '+254 740 821 859',
    description: 'Quick questions, fast replies, and a more direct conversation.',
    href: 'https://wa.me/254740821859',
    icon: 'lucide:message-circle',
    external: true,
    cta: 'Message me',
  },
  {
    label: 'LinkedIn',
    value: 'in/bretoreta',
    description: 'Professional networking and longer-form conversations.',
    href: 'https://linkedin.com/in/bretoreta',
    icon: 'lucide:linkedin',
    external: true,
    cta: 'Connect',
  },
  {
    label: 'GitHub',
    value: '@bretoreta',
    description: 'Code, open-source work, and the things I am currently building.',
    href: 'https://github.com/bretoreta',
    icon: 'lucide:github',
    external: true,
    cta: 'View profile',
  },
]

const helpItems = [
  'Full-stack web development',
  'AI integrations & automation',
  'POS & business systems',
  'Performance optimization & scaling',
  'Server management & DevOps',
  'Product strategy & technical consulting',
]

const steps = [
  {
    title: 'Tell me the goal',
    copy: 'Send a short brief, a link, or the problem you are stuck on.',
  },
  {
    title: 'Get a clear plan',
    copy: 'We map scope, timeline, and the shortest path to value.',
  },
  {
    title: 'Build and launch',
    copy: 'I design, build, test, and hand over a system you can run.',
  },
]
</script>
