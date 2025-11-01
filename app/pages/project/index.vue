<script setup>
const { data: projects } = await useAsyncData('projects', () => {
  return queryCollection('project').order('date', 'DESC').all()
})
</script>

<template>
  <!-- Main Content -->
  <div class="mt-10 px-5 relative md:pt-20">
    <div class="page-grid-top"></div>
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 v-motion-slide-visible-once-bottom class="text-4xl font-bold tracking-tight text-pretty sm:text-5xl">From the projects</h2>
      <p v-motion-slide-visible-once-bottom :delay="100" class="mt-2 text-lg/8 text-muted">Welcome to my digital workshop! This is where I share the projects that fuel my curiosity—each one a stepping stone in my journey as a creator. From elegant code to thoughtful design, these experiments capture what happens when problem-solving meets passion. Dive in and explore!</p>
    </div>
    <div v-if="projects?.length" class="mx-auto mt-10 grid max-w-2xl grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16 border-t border-gray-200 dark:border-muted border-dashed pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
      <article v-for="(project, index) in projects" :key="project.id" class="flex max-w-xl flex-col items-start justify-between border rounded-md border-accented p-4" v-motion-slide-visible-once-bottom :delay="100 * index">
        <div class="flex items-center gap-x-4 text-xs">
          <time class="text-gray-500 dark:text-muted">{{ new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric'}) }}</time>
          <span class="relative z-10 rounded-full bg-gray-50 dark:bg-primary/20 px-3 py-1.5 font-medium text-primary">{{ project.category }}</span>
        </div>
        <div class="group relative">
          <h3 class="mt-3 text-lg/6 font-bold group-hover:text-muted">
            <NuxtLink :href="project.path">
              {{ project.title }}
            </NuxtLink>
          </h3>
          <NuxtImg height="200px" :src="project.image" class="mt-4 rounded-md" />
          <p class="mt-5 line-clamp-3 text-sm/6 text-muted">{{ project.description }}</p>
        </div>
        <div class="relative mt-8 flex items-center gap-x-4 w-full">
          <NuxtImg :src="project.client_logo" alt="Author Profile Picture" class="size-10 object-contain" />
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
</template>
<style>
.page-grid-top {
  position: absolute;
  left: 0;
  top:0;
  background-image: url('/svg/grid-top.svg');
  background-repeat: repeat-x;
  height: 24.625rem;
  width: 100%;
  z-index: 0;
  margin-top: -60px;
}
</style>
