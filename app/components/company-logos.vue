<template>
  <section id="clients" aria-labelledby="clients-title" class="py-14 sm:py-20">
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
                class="h-12 mx-8 grayscale hover:grayscale-0 transition-opacity"
                format="webp,avif"
                alt="Fairdeal Furniture's Logo"
                src="/images/logo/fairdealfurniture.webp"
              />
              <NuxtImg
                class="h-12 mx-8 grayscale hover:grayscale-0 transition-opacity"
                format="webp,avif"
                alt="Craftex's Logo"
                src="/images/logo/craftex.png"
              />
              <NuxtImg
                class="h-12 mx-8 grayscale hover:grayscale-0 transition-opacity"
                format="webp,avif"
                alt="Inkpot Group's Logo"
                src="/images/logo/inkpotgroup.png"
              />
              <NuxtImg
                class="h-12 mx-8 grayscale invert-100 hover:grayscale-0 hover:invert-0 transition-opacity"
                format="webp,avif"
                alt="Zurika by Wambui's Logo"
                src="/images/logo/zurikabywambui.webp"
              />
              <NuxtImg
                class="h-12 mx-8 grayscale hover:grayscale-0 transition-opacity"
                format="webp,avif"
                alt="Craft Catalyst's Logo"
                src="/images/logo/thecraftcatalyst.png"
              />
              <NuxtImg
                class="h-12 mx-8 grayscale hover:grayscale-0 transition-opacity"
                format="webp,avif"
                alt="Ashley Furniture's Logo"
                src="/images/logo/ashleyfurniture.webp"
              />
              <NuxtImg
                class="h-12 mx-8 grayscale hover:grayscale-0 transition-opacity"
                format="webp,avif"
                alt="Koggs Adventures' Logo"
                src="/images/logo/koggsadventures.png"
              />
              <NuxtImg
                class="h-12 mx-8 grayscale invert-100 hover:grayscale-0 transition-opacity"
                format="webp,avif"
                alt="Infinity Labs' Logo"
                src="/images/logo/infinitylabs.png"
              />
              <NuxtImg
                class="h-12 mx-8 grayscale hover:grayscale-0 transition-opacity"
                format="webp,avif"
                alt="XIMI Vogue's Logo"
                src="/images/logo/ximivogue.png"
              />
              <NuxtImg
                class="h-12 mx-8 grayscale hover:grayscale-0 transition-opacity"
                format="webp,avif"
                alt="Emerge Global's Logo"
                src="/images/logo/emergeglobal.jpg"
              />
              <NuxtImg
                class="h-12 mx-8 grayscale hover:grayscale-0 transition-opacity"
                format="webp,avif"
                alt="Crafted's Logo"
                src="/images/logo/crafted.png"
              />
            </div>

            <div class="flex shrink-0 items-center justify-around min-w-full animate-scroll" aria-hidden="true">
              <NuxtImg
                class="h-12 mx-8 grayscale hover:grayscale-0 transition-opacity"
                format="webp,avif"
                alt="Fairdeal Furniture's Logo"
                src="/images/logo/fairdealfurniture.webp"
              />
              <NuxtImg
                class="h-12 mx-8 grayscale hover:grayscale-0 transition-opacity"
                format="webp,avif"
                alt="Craftex's Logo"
                src="/images/logo/craftex.png"
              />
              <NuxtImg
                class="h-12 mx-8 grayscale hover:grayscale-0 transition-opacity"
                format="webp,avif"
                alt="Inkpot Group's Logo"
                src="/images/logo/inkpotgroup.png"
              />
              <NuxtImg
                class="h-12 mx-8 grayscale invert-100 hover:grayscale-0 hover:invert-0 transition-opacity"
                format="webp,avif"
                alt="Zurika by Wambui's Logo"
                src="/images/logo/zurikabywambui.webp"
              />
              <NuxtImg
                class="h-12 mx-8 grayscale hover:grayscale-0 transition-opacity"
                format="webp,avif"
                alt="Craft Catalyst's Logo"
                src="/images/logo/thecraftcatalyst.png"
              />
              <NuxtImg
                class="h-12 mx-8 grayscale hover:grayscale-0 transition-opacity"
                format="webp,avif"
                alt="Ashley Furniture's Logo"
                src="/images/logo/ashleyfurniture.webp"
              />
              <NuxtImg
                class="h-12 mx-8 grayscale hover:grayscale-0 transition-opacity"
                format="webp,avif"
                alt="Koggs Adventures' Logo"
                src="/images/logo/koggsadventures.png"
              />
              <NuxtImg
                class="h-12 mx-8 grayscale invert-100 hover:grayscale-0 transition-opacity"
                format="webp,avif"
                alt="Infinity Labs' Logo"
                src="/images/logo/infinitylabs.png"
              />
              <NuxtImg
                class="h-12 mx-8 grayscale hover:grayscale-0 transition-opacity"
                format="webp,avif"
                alt="XIMI Vogue's Logo"
                src="/images/logo/ximivogue.png"
              />
              <NuxtImg
                class="h-12 mx-8 grayscale hover:grayscale-0 transition-opacity"
                format="webp,avif"
                alt="Emerge Global's Logo"
                src="/images/logo/emergeglobal.jpg"
              />
              <NuxtImg
                class="h-12 mx-8 grayscale hover:grayscale-0 transition-opacity"
                format="webp,avif"
                alt="Crafted's Logo"
                src="/images/logo/crafted.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
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

    @media (prefers-reduced-motion: reduce) {
      .animate-scroll {
        animation: none !important;
        transform: translateX(0) !important;
      }
    }
  </style>
