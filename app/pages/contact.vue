<script setup lang="ts">

useSeoMeta({
  title: 'Contact',
  ogTitle: 'Contact',
  description: 'Start a project or ask a question. Reach me by email, WhatsApp, LinkedIn, or GitHub.',
  ogDescription: 'Start a project or ask a question. Reach me by email, WhatsApp, LinkedIn, or GitHub.',
})

defineOgImage('NuxtSeo.takumi', {
  title: 'Contact Bret Oreta',
  description: "Start a project or ask a question. Reach me by email, WhatsApp, LinkedIn, or GitHub."
});

</script>

<template>
  <div class="relative mt-10 py-14 md:py-20" data-character-section="contact">
    <div class="page-grid-top"></div>
    <div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">
      <div class="max-w-3xl">
        <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Contact Me
        </h1>
        <p class="mt-4 text-lg text-muted">
          Let’s build something meaningful. Whether you have a project idea,
          need help scaling a system, or just want to talk tech — I’m always open.
        </p>
      </div>

      <div class="mt-10">
        <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div class="rounded-2xl border border-black/10 bg-white/50 p-5 backdrop-blur dark:border-white/10 dark:bg-black/20">
            <p class="font-semibold">Email</p>
            <p class="mb-3 text-sm text-muted">Best for detailed inquiries</p>
            <UButton block to="mailto:bretoreta@gmail.com" icon="i-lucide-mail">
              Send Email
            </UButton>
          </div>

          <div class="rounded-2xl border border-black/10 bg-white/50 p-5 backdrop-blur dark:border-white/10 dark:bg-black/20">
            <p class="font-semibold">WhatsApp</p>
            <p class="mb-3 text-sm text-muted">Quick chats & fast replies</p>
            <UButton block to="https://wa.me/254740821859">
              Message Me
            </UButton>
          </div>

          <div class="rounded-2xl border border-black/10 bg-white/50 p-5 backdrop-blur dark:border-white/10 dark:bg-black/20">
            <p class="font-semibold">LinkedIn</p>
            <p class="mb-3 text-sm text-muted">Professional networking</p>
            <UButton block to="https://linkedin.com/in/bretoreta" target="_blank" rel="noopener noreferrer">
              Connect
            </UButton>
          </div>

          <div class="rounded-2xl border border-black/10 bg-white/50 p-5 backdrop-blur dark:border-white/10 dark:bg-black/20">
            <p class="font-semibold">GitHub</p>
            <p class="mb-3 text-sm text-muted">Check my work & projects</p>
            <UButton block to="https://github.com/bretoreta" target="_blank" rel="noopener noreferrer">
              View Profile
            </UButton>
          </div>

        </div>

        <!-- WHAT I CAN HELP WITH -->
        <div class="mt-12">
          <h3 class="text-xl font-semibold">What I can help with</h3>
          <ul class="mt-4 space-y-2 text-muted">
            <li>• Full-stack web development</li>
            <li>• Full Server Management</li>
            <li>• AI integrations & automation workflows</li>
            <li>• POS & business systems</li>
            <li>• Performance optimization & scaling</li>
            <li>• Product strategy & technical consulting</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>