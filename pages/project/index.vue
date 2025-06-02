<script setup>
const { data: projects } = await useAsyncData('projects', () => {
  return queryCollection('project').order('date', 'DESC').all()
})
</script>

<template>
  <main class="flex min-h-screen flex-col">
    <div class="relative isolate mx-auto w-full max-w-[1440px]">
      <div class="grid lg:grid-cols-[16px_1fr_16px] gap-6">
        <div class="h-full max-2xl:hidden text-muted/20 border-l border-dashed border-current bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] bg-fixed" />

        <!-- Main Content -->
        <div class="mt-10">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-4xl font-bold tracking-tight text-pretty sm:text-5xl">From the projects</h2>
            <p class="mt-2 text-lg/8 text-muted">Welcome to my digital workshop! This is where I share the projects that fuel my curiosity—each one a stepping stone in my journey as a creator. From elegant code to thoughtful design, these experiments capture what happens when problem-solving meets passion. Dive in and explore!</p>
          </div>
          <div v-if="projects?.length" class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 dark:border-muted border-dashed pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article v-for="project in projects" :key="project.id" class="flex max-w-xl flex-col items-start justify-between border rounded-md border-accented p-4">
              <div class="flex items-center gap-x-4 text-xs">
                <time class="text-gray-500 dark:text-muted">{{ new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric'}) }}</time>
                <span class="relative z-10 rounded-full bg-gray-50 dark:bg-primary/20 px-3 py-1.5 font-medium text-primary hover:bg-gray-100">{{ project.category }}</span>
              </div>
              <div class="group relative">
                <h3 class="mt-3 text-lg/6 font-bold group-hover:text-muted">
                  <NuxtLink :href="project.path">
                    {{ project.title }}
                  </NuxtLink>
                </h3>
                <NuxtImg :src="project.image" class="mt-4 rounded-md" />
                <p class="mt-5 line-clamp-3 text-sm/6 text-muted">{{ project.description }}</p>
              </div>
              <div class="relative mt-8 flex items-center gap-x-4 w-full">
                <NuxtImg :src="project.client_logo" alt="Author Profile Picture" class="size-10 object-contain rounded-full bg-gray-50" />
                <div class="text-sm/6">
                  <p class="font-semibold">
                    {{ project.client_name }}
                  </p>
                </div>
                <div class="ml-auto">
                  <UButton icon="i-lucide-arrow-up-right" variant="ghost" :to="project.link" target="_blank">
                    Visit Project
                  </UButton>
                </div>
              </div>
            </article>
          </div>
          <div class="bg-black mt-20 border-accented border rounded-t-md">
            <Footer />
          </div>
        </div>

        <div class="h-full max-2xl:hidden text-muted/20 border-r border-dashed border-current bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] bg-fixed" />
      </div>
    </div>
  </main>
</template>
