<script setup lang="ts">

useSeoMeta({
  title: 'Contact Me | A web developer and AI automation expert',
  ogTitle: 'Contact Me | A web developer and AI automation expert',
  description: 'Design-led engineering for conversion-first websites, AI agents, and automation systems.',
  ogDescription: 'Design-led engineering for conversion-first websites, AI agents, and automation systems.',
})

defineOgImage('NuxtSeo.takumi', {
  title: 'Contact Me | A web developer and AI automation expert',
  description: "Hire Bret Oreta — a web developer and AI automation expert helping startups and solo founders launch stunning websites and automate repetitive tasks with AI."
});

</script>

<template>
  <div class="mt-10 px-5 relative py-14 md:py-20">
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
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-8">
          <div class="p-4 rounded-2xl bg-muted/70">
            <p class="font-semibold">Email</p>
            <p class="text-sm text-muted mb-3">Best for detailed inquiries</p>
            <UButton block to="mailto:bretoreta@gmail.com" icon="i-lucide-mail">
              Send Email
            </UButton>
          </div>

          <div class="p-4 rounded-2xl bg-muted/70">
            <p class="font-semibold">WhatsApp</p>
            <p class="text-sm text-muted mb-3">Quick chats & fast replies</p>
            <UButton block to="https://wa.me/254740821859">
              Message Me
            </UButton>
          </div>

          <div class="p-4 rounded-2xl bg-muted/70">
            <p class="font-semibold">LinkedIn</p>
            <p class="text-sm text-muted mb-3">Professional networking</p>
            <UButton block to="https://linkedin.com/in/bretoreta" target="_blank">
              Connect
            </UButton>
          </div>

          <div class="p-4 rounded-2xl bg-muted/70">
            <p class="font-semibold">GitHub</p>
            <p class="text-sm text-muted mb-3">Check my work & projects</p>
            <UButton block to="https://github.com/bretoreta" target="_blank">
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