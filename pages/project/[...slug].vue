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
  <main class="flex min-h-screen flex-col">
    <div class="relative isolate mx-auto w-full max-w-[1440px]">
      <!-- Grid container with custom column widths -->
      <div class="grid lg:grid-cols-[16px_1fr_16px] gap-6">
        <!-- Left border decoration -->
        <div class="h-full max-2xl:hidden text-muted/20 border-l border-dashed border-current bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] bg-fixed" />

        <div>
          <div v-if="project" class="grid justify-center max-w-4xl">
            <div class="my-8">
              <div class="flex items-center gap-x-4 text-xs">
                <time class="text-gray-500 dark:text-muted">{{ new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric'}) }}</time>
                <UBadge>{{ project.category }}</UBadge>
              </div>
              <div class="mt-4">
                <h1 class="text-4xl font-bold">{{ project.title }}</h1>
                <p class="mt-2 line-clamp-1 text-sm/6 text-muted">{{ project.description }}</p>
              </div>
              <div class="relative mt-8 flex items-center gap-x-4">
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

         <!-- Right border decoration -->
        <div class="h-full max-2xl:hidden text-muted/20 border-r border-dashed border-current bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] bg-fixed" />
      </div>
    </div>
  </main>
</template>