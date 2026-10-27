<script setup lang="ts">
import { ref } from "vue";

useSeoMeta({
  title: "Open Source",
  ogTitle: "Open Source",
  description:
    "MIT-licensed Vue components and tools by Bret Oreta, built for the community. No paywalls, no telemetry.",
  ogDescription:
    "MIT-licensed Vue components and tools by Bret Oreta, built for the community. No paywalls, no telemetry.",
});

defineOgImage("NuxtSeo.takumi", {
  title: "Open Source: Vue components for the community",
  description: "MIT-licensed Vue components and tools by Bret Oreta.",
});

useSchemaOrg([
  {
    "@type": "SoftwareSourceCode",
    name: "pullcord-vue",
    description:
      "A ceiling pull-cord theme switch for Vue 3 with a real verlet rope.",
    codeRepository: "https://github.com/bretoreta/pullcord-vue",
    programmingLanguage: "TypeScript",
    license: "https://opensource.org/licenses/MIT",
    author: { "@type": "Person", name: "Bret Oreta" },
  },
]);

const copied = ref(false);

function copyInstall() {
  copyToClipboard("bun add pullcord-vue");
  copied.value = true;
  window.setTimeout(() => (copied.value = false), 2000);
}

const features = [
  {
    title: "A real rope",
    icon: "i-lucide-waves",
    copy: "Verlet nodes and distance constraints. It hangs under gravity, swings when grabbed, and goes to sleep when it settles — so an idle cord costs nothing.",
  },
  {
    title: "Accessible by default",
    icon: "i-lucide-accessibility",
    copy: "A real button with click and Enter support, aria-pressed state, and a focus ring. The drop-in and the pull gesture are disabled under reduced motion.",
  },
  {
    title: "Small surface area",
    icon: "i-lucide-package",
    copy: "One component, one CSS file, zero runtime dependencies. Vue 3.5+ is the only peer dependency. MIT licensed, forever.",
  },
];

const badges = ["v0.1.0", "MIT", "Vue 3.5+", "0 dependencies"];
</script>

<template>
  <div class="py-10 sm:py-14" data-character-section="open-source">
    <!-- HERO -->
    <section class="relative overflow-hidden">
      <div aria-hidden="true" class="pointer-events-none absolute inset-0">
        <div class="absolute inset-0 bg-[radial-gradient(900px_520px_at_50%_0%,rgba(16,185,129,0.14),transparent_60%)]" />
        <div class="absolute inset-0 opacity-60 mask-[radial-gradient(ellipse_at_center,black_55%,transparent_78%)]">
          <InteractiveGrid
            className="border-black/10 dark:border-white/10"
            squaresClassName="stroke-black/10 dark:stroke-white/10"
            :width="44"
            :height="44"
            :squares="[18, 10]"
          />
        </div>
      </div>

      <div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">
        <div class="grid items-center gap-10 py-6 lg:grid-cols-12 lg:gap-12">
          <div class="relative z-10 lg:col-span-7">
            <div class="mb-5">
              <UBadge>Open source</UBadge>
            </div>

            <h1 class="text-4xl font-extrabold tracking-tight sm:text-6xl">
              Tools I build for the
              <span class="relative px-1">
                <span class="absolute inset-x-0 bottom-0 h-3 -skew-x-12 bg-primary/20"></span>
                <span class="relative text-primary">community.</span>
              </span>
            </h1>

            <p class="mt-5 max-w-2xl text-base text-muted md:text-lg">
              Focused packages I use in production, shared under MIT. No paywalls,
              no telemetry, no open-core bait — just components I wanted to exist.
            </p>

            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="badge in badges"
                :key="badge"
                class="rounded-full border border-black/10 bg-white/50 px-3 py-1.5 text-xs font-semibold text-gray-800 backdrop-blur dark:border-white/10 dark:bg-black/20 dark:text-white/80"
              >
                {{ badge }}
              </span>
            </div>
          </div>

          <div class="relative z-10 lg:col-span-5">
            <div class="relative overflow-hidden rounded-3xl border border-black/10 bg-white/40 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-black/20">
              <div class="flex items-start justify-between">
                <div>
                  <div class="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                    Package
                  </div>
                  <div class="mt-2 text-2xl font-extrabold tracking-tight">pullcord-vue</div>
                  <div class="mt-1 text-sm text-muted">A ceiling pull-cord theme switch</div>
                </div>
                <span class="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                  <span class="size-1.5 rounded-full bg-primary" />
                  v0.1.0
                </span>
              </div>

              <div class="mx-auto mt-8 h-52 w-32">
                <PullCordArt class="h-full w-full" />
              </div>

              <div class="mt-4 rounded-xl border border-black/10 bg-white/60 px-3 py-2 font-mono text-xs text-gray-800 dark:border-white/10 dark:bg-black/30 dark:text-white/80">
                bun add pullcord-vue
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PACKAGE -->
    <section class="mt-12 sm:mt-16" aria-labelledby="package-title">
      <div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">
        <div class="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div class="lg:col-span-7">
            <h2 id="package-title" class="text-3xl font-extrabold tracking-tight sm:text-4xl">
              pullcord-vue
            </h2>
            <p class="mt-3 max-w-2xl text-base text-muted md:text-lg">
              A ceiling pull-cord for Vue 3 with a real rope. Grab it, pull it, and it
              swings back — a theme switch with actual physics. This site uses it.
            </p>

            <div class="mt-8 grid gap-4 sm:grid-cols-3">
              <div
                v-for="feature in features"
                :key="feature.title"
                class="rounded-2xl border border-black/10 bg-white/50 p-5 backdrop-blur dark:border-white/10 dark:bg-black/20"
              >
                <div class="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon :name="feature.icon" class="size-5" aria-hidden="true" />
                </div>
                <h3 class="mt-3 text-sm font-extrabold tracking-tight">{{ feature.title }}</h3>
                <p class="mt-2 text-sm leading-relaxed text-muted">{{ feature.copy }}</p>
              </div>
            </div>

            <div class="mt-6 rounded-2xl border border-black/10 bg-white/50 p-5 text-sm text-muted backdrop-blur dark:border-white/10 dark:bg-black/20">
              <span class="font-semibold text-gray-900 dark:text-white/90">Credit:</span>
              a Vue port of
              <a
                href="https://github.com/mortspace/pullcord"
                target="_blank"
                rel="noopener noreferrer"
                class="font-semibold text-primary underline-offset-4 hover:underline"
              >pullcord</a>
              by iisac. The physics, geometry and timing are carried over; the Vue
              plumbing, pointer handling and per-instance SVG ids are new.
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="rounded-3xl border border-black/10 bg-white/40 p-6 backdrop-blur dark:border-white/10 dark:bg-black/20 sm:p-8">
              <div class="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Install
              </div>
              <div class="mt-3 flex items-center gap-2 overflow-hidden rounded-xl border border-black/10 bg-white/60 px-3 py-2 dark:border-white/10 dark:bg-black/30">
                <code class="min-w-0 flex-1 truncate font-mono text-sm">bun add pullcord-vue</code>
                <button
                  type="button"
                  class="shrink-0 rounded-md px-2 py-1 text-xs font-semibold text-primary transition hover:bg-primary/10"
                  :aria-label="copied ? 'Install command copied' : 'Copy install command'"
                  @click="copyInstall"
                >
                  {{ copied ? "Copied" : "Copy" }}
                </button>
              </div>

              <div class="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Use it
              </div>
              <pre v-pre class="mt-3 overflow-x-auto rounded-xl border border-black/10 bg-white/60 p-4 text-xs leading-relaxed text-gray-800 dark:border-white/10 dark:bg-black/30 dark:text-white/80"><code>&lt;script setup lang="ts"&gt;
import { PullCord } from 'pullcord-vue'
import 'pullcord-vue/pullcord.css'

const light = ref(false)
&lt;/script&gt;

&lt;template&gt;
  &lt;PullCord :pulled="light" @pull="light = !light" /&gt;
&lt;/template&gt;</code></pre>

              <div class="mt-6 flex flex-col gap-3 sm:flex-row">
                <UButton
                  to="https://www.npmjs.com/package/pullcord-vue"
                  target="_blank"
                  rel="noopener noreferrer"
                  icon="i-lucide-package"
                >
                  View on npm
                </UButton>
                <UButton
                  to="https://github.com/bretoreta/pullcord-vue"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="neutral"
                  variant="subtle"
                  icon="i-lucide-github"
                >
                  Source
                </UButton>
              </div>

              <p class="mt-5 text-xs text-muted">
                Desktop note: this portfolio uses the package as its theme switch.
                Pull the cord in the top-right corner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="mt-16">
      <div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">
        <div class="relative overflow-hidden rounded-3xl border border-black/10 bg-white/40 p-8 text-center backdrop-blur dark:border-white/10 dark:bg-black/20 sm:p-10">
          <div class="absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(16,185,129,0.12),transparent_70%)]" />
          <div class="relative">
            <h2 class="text-2xl font-bold">Need something custom?</h2>
            <p class="mx-auto mt-3 max-w-xl text-muted">
              I build production components and design systems for teams. If you need
              a piece that does not exist yet, let's talk.
            </p>
            <div class="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <StartTrialButton size="lg" />
              <NuxtLink
                to="/contact"
                class="text-sm font-semibold underline-offset-4 hover:underline"
              >
                Or send an email
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
