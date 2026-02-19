<template>
  <!-- Main Content -->
  <div class="mt-10 px-5 relative md:pt-20">
    <div class="page-grid-top"></div>
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h1 v-motion-slide-visible-once-bottom class="text-4xl font-extrabold tracking-tight text-pretty sm:text-5xl">Contact Me</h1>
      <p v-motion-slide-visible-once-bottom :delay="100" class="mt-2 text-lg/8 text-muted">Let's build something together! I'm always open to discussing projects, partnerships, or just geeking out about tech. Reach out below—I respond to every thoughtful message.</p>
    </div>
    <div class="mx-auto mt-10 pb-10 border-t border-gray-200 dark:border-muted border-dashed pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
      <div>
        <Availability :available="true" v-motion-slide-visible-once-bottom :delay="150" />
        <div class="mt-4">
          <h5 v-motion-slide-visible-once-bottom :delay="150" class="text-3xl font-bold">Reach Out</h5>
          <p v-motion-slide-visible-once-bottom :delay="200">Have a project in mind or need expert guidance? Let’s talk.</p>
        </div>
        <div v-motion-slide-visible-once-bottom :delay="300" class="inline-flex gap-3 mt-6 flex-wrap">
          <UButton color="neutral" variant="subtle" icon="i-lucide-github" to="https://github.com/bretoreta" target="_blank">GitHub</UButton>
          <UButton color="neutral" variant="subtle" icon="i-lucide-linkedin" to="https://linkedin.com/in/bretoreta" target="_blank">LinkedIn</UButton>
          <UButton color="neutral" variant="subtle" to="https://www.tiktok.com/@bretoreta?_t=ZM-8wpz1YEWFh0&_r=1" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"/><path d="M10.536 11.008c-.82-.116-2.69.075-3.606 1.77s.007 3.459.584 4.129c.569.627 2.378 1.814 4.297.655c.476-.287 1.069-.502 1.741-2.747l-.078-8.834c-.13.973.945 3.255 4.004 3.525"/></g></svg>
              TikTok
          </UButton>
          <UButton color="neutral" variant="subtle" icon="i-lucide-mail" to="mailto:bretoreta@gmail.com" target="_blank">Email</UButton>
          <UButton color="neutral" variant="subtle" to="https://wa.me/254740821859" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
              </svg>
              WhatsApp
          </UButton>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
