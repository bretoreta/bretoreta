<script setup lang="ts">
const year = new Date().getFullYear();

const socials = [
  { label: "GitHub", href: "https://github.com/bretoreta" },
  { label: "LinkedIn", href: "https://linkedin.com/in/bretoreta" },
  { label: "X", href: "https://x.com/bret_oreta" },
  { label: "Instagram", href: "https://instagram.com/bret_oreta" },
];
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-[16px_1fr_16px] relative px-4 sm:px-10 md:px-20 xl:px-32">
    <div class="h-full hidden lg:block text-muted/20 border-l border-dashed border-current bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed" />
    <footer class="mx-auto w-full max-w-7xl border-t border-dashed border-default px-2 pt-16 pb-8 sm:px-6 lg:px-10">
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div class="sm:col-span-2">
          <Logo />
          <p class="mt-6 max-w-sm text-sm text-muted">
            I help founders and small teams ship fast, conversion-first websites and AI automations — designed, built, and maintained end to end.
          </p>
          <div class="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="text-muted transition-colors hover:text-primary"
            >
              {{ social.label }}
            </a>
          </div>
        </div>

        <div>
          <p class="text-base font-bold tracking-wide">Contact</p>
          <ul class="mt-3 space-y-2 text-sm">
            <li>
              <a href="tel:+254740821859" class="text-muted transition-colors hover:text-primary">+254 740 821 859</a>
            </li>
            <li>
              <a href="mailto:bretoreta@gmail.com" class="text-muted transition-colors hover:text-primary">bretoreta@gmail.com</a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Mombasa,Kenya"
                target="_blank"
                rel="noopener noreferrer"
                class="text-muted transition-colors hover:text-primary"
              >
                Mombasa, Kenya
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Footer">
          <p class="text-base font-bold tracking-wide">Explore</p>
          <ul class="mt-3 space-y-2 text-sm">
            <li>
              <NuxtLink to="/project" class="text-muted transition-colors hover:text-primary">Projects</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blog" class="text-muted transition-colors hover:text-primary">Blog</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="text-muted transition-colors hover:text-primary">About</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/open-source" class="text-muted transition-colors hover:text-primary">Open source</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="text-muted transition-colors hover:text-primary">Contact</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <div class="mt-10 flex flex-col gap-2 border-t border-default pt-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ year }} Bret Oreta. All rights reserved.</p>
        <p>Built with Nuxt. Hosted on Cloudflare.</p>
      </div>
    </footer>
    <div class="h-full hidden lg:block text-muted/20 border-r border-dashed border-current bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed" />
  </div>
</template>
