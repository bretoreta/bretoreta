<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const { data: project } = await useAsyncData('project', () =>
  queryCollection('project').path(route.path).first()
)

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

const { data: sorroundLinks } = await useAsyncData('projectSorround', () => {
  return queryCollectionItemSurroundings('project', route.path)
    .order('date', 'DESC')
})
</script>


<template>
  <div class="px-5">
    <div v-if="project" class="grid justify-center max-w-4xl">
      <div class="my-8">
        <div v-motion-slide-visible-once-bottom class="flex items-center gap-x-4 text-xs">
          <time class="text-gray-500 dark:text-muted">{{ new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric'}) }}</time>
          <UBadge>{{ project.category }}</UBadge>
        </div>
        <div v-motion-slide-visible-once-bottom :delay="100" class="mt-4">
          <h1 class="text-4xl font-bold">{{ project.title }}</h1>
          <p class="mt-2 line-clamp-1 text-sm/6 text-muted">{{ project.description }}</p>
        </div>
        <div v-motion-slide-visible-once-bottom :delay="200" class="relative mt-8 flex items-center gap-x-4">
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
      </div>
      <NuxtImg :src="project.image" class="rounded-lg object-cover" alt="Cover image for this blog project" />
    </div>
    <article class="mt-12 max-w-4xl">
      <ContentRenderer v-if="project" :value="project" :prose="true" class="content" />
    </article>
    
    <div class="mt-32 mb-4">
      <BlogPagination :prev="sorroundLinks[0]" :next="sorroundLinks[1]" />
    </div>

    <div class="bg-black mt-20 border-accented border rounded-t-md">
      <Footer />
    </div>
  </div>
</template>