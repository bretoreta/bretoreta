<template>
  <section id="clients" aria-labelledby="clients-title" class="py-14 sm:py-20" data-character-section="clients">
    <div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">
      <div class="grid gap-10">
        <div class="mx-auto max-w-2xl text-center">
          <h2
            id="clients-title"
            v-motion-slide-visible-once-bottom
            class="text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            Trusted by teams who want
            <span class="relative px-1">
              <span class="absolute inset-x-0 bottom-0 h-3 -skew-x-12 bg-primary/20"></span>
              <span class="relative text-primary">results</span>
            </span>
          </h2>
          <p v-motion-slide-visible-once-bottom :delay="100" class="mt-3 text-base text-muted md:text-lg">
            A few of the brands I've helped ship faster, automate smarter, and convert better.
          </p>
        </div>

        <div class="group relative overflow-hidden" v-motion-fade-visible-once :delay="200">
          <div class="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-linear-to-r from-gray-50 dark:from-[#050807] to-transparent"></div>
          <div class="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-linear-to-l from-gray-50 dark:from-[#050807] to-transparent"></div>

          <div class="flex items-center px-2">
            <div class="flex shrink-0 items-center justify-around min-w-full animate-scroll">
              <NuxtImg
                v-for="logo in logos"
                :key="logo.name"
                :src="logo.src"
                :alt="`${logo.name} logo`"
                format="webp,avif"
                loading="lazy"
                decoding="async"
                draggable="false"
                class="trusted-logo mx-6 h-10 w-auto max-w-36 object-contain sm:mx-8 sm:h-12"
                :class="`trusted-logo--${logo.tone}`"
              />
            </div>

            <div class="flex shrink-0 items-center justify-around min-w-full animate-scroll" aria-hidden="true">
              <NuxtImg
                v-for="logo in logos"
                :key="`duplicate-${logo.name}`"
                :src="logo.src"
                alt=""
                format="webp,avif"
                loading="lazy"
                decoding="async"
                draggable="false"
                class="trusted-logo mx-6 h-10 w-auto max-w-36 object-contain sm:mx-8 sm:h-12"
                :class="`trusted-logo--${logo.tone}`"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * Logo assets fall into three families:
 * - light: white artwork made for dark backgrounds, inverted in light mode.
 * - dark: dark/white-background artwork made for light backgrounds, inverted in dark mode.
 * - color: artwork that remains legible in both themes; colour is revealed on hover.
 */
const logos = [
  { name: 'Fairdeal Furniture', src: '/images/logo/fairdealfurniture.webp', tone: 'light' },
  { name: 'Craftex', src: '/images/logo/craftex.png', tone: 'light' },
  { name: 'Inkpot Group', src: '/images/logo/inkpotgroup.png', tone: 'dark' },
  { name: 'Zurika by Wambui', src: '/images/logo/zurikabywambui.webp', tone: 'dark' },
  { name: 'The Craft Catalyst', src: '/images/logo/thecraftcatalyst.png', tone: 'light' },
  { name: 'Ashley Furniture', src: '/images/logo/ashleyfurniture.webp', tone: 'light' },
  { name: 'Koggs Adventures', src: '/images/logo/koggsadventures.webp', tone: 'light' },
  { name: 'Infinity Labs', src: '/images/logo/infinitylabs.png', tone: 'dark' },
  { name: 'XIMI Vogue', src: '/images/logo/ximivogue.png', tone: 'color' },
  { name: 'Emerge Global', src: '/images/logo/emergeglobal.jpg', tone: 'dark' },
  { name: 'Crafted', src: '/images/logo/crafted.png', tone: 'dark' },
] as const
</script>

<style>
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  .animate-scroll {
    animation: scroll 60s linear infinite;
  }

  .group:hover .animate-scroll {
    animation-play-state: paused;
  }

  /* Logo wall: keep every mark legible in both themes. */
  .trusted-logo {
    filter: grayscale(1);
    opacity: 0.82;
    transition: opacity 200ms ease, filter 200ms ease;
  }

  .trusted-logo:hover {
    opacity: 1;
  }

  /* White artwork: invert it for the light theme. */
  .trusted-logo--light {
    filter: grayscale(1) invert(1);
  }

  .dark .trusted-logo--light {
    filter: grayscale(1);
  }

  /* Dark artwork (and white-background exports): invert it for the dark theme. */
  .trusted-logo--dark {
    filter: grayscale(1);
  }

  .dark .trusted-logo--dark {
    filter: grayscale(1) invert(1);
  }

  /* Coloured marks: show their real colours on hover. */
  .trusted-logo--color {
    filter: grayscale(1);
  }

  .trusted-logo--color:hover {
    filter: grayscale(0);
  }

  @media (prefers-reduced-motion: reduce) {
    .animate-scroll {
      animation: none !important;
      transform: translateX(0) !important;
    }
  }
</style>
