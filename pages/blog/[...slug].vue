<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const { data: post } = await useAsyncData('blog', () =>
  queryCollection('blog').path(route.path).first()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

const { data: sorroundLinks } = await useAsyncData('blogSorround', () => {
  return queryCollectionItemSurroundings('blog', route.path)
    .order('date', 'DESC')
})

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
</script>


<template>
  <main class="flex min-h-screen flex-col">
    <div class="relative isolate mx-auto w-full max-w-[1440px]">
      <!-- Grid container with custom column widths -->
      <div class="grid lg:grid-cols-[16px_1fr_16px] gap-6">
        <!-- Left border decoration -->
        <div class="h-full max-2xl:hidden text-muted/20 border-l border-dashed border-current bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] bg-fixed" />

        <div>
          <div v-if="post" class="grid justify-center max-w-4xl">
            <div class="my-8">
              <div class="flex items-center gap-x-4 text-xs">
                <time class="text-gray-500 dark:text-muted">{{ formatDate(post.date) }}</time>
                <UBadge>{{ post.category }}</UBadge>
              </div>
              <div class="mt-4">
                <h1 class="text-4xl font-bold">{{ post.title }}</h1>
                <p class="mt-2 line-clamp-1 text-sm/6 text-muted">{{ post.description }}</p>
              </div>
              <div class="relative mt-8 flex items-center gap-x-4">
                <NuxtImg :src="post.author.imageUrl" alt="Author Profile Picture" class="size-10 rounded-full bg-gray-50" />
                <div class="text-sm/6">
                  <p class="font-semibold">
                    <a :href="post.author.href">
                      <span class="absolute inset-0" />
                      {{ post.author.name }}
                    </a>
                  </p>
                  <p class="text-muted">{{ post.author.role }}</p>
                </div>
              </div>
            </div>
            <NuxtImg :src="post.image" class="rounded-lg object-cover" alt="Cover image for this blog post" />
          </div>
          <article class="mt-12 max-w-4xl">
            <ContentRenderer v-if="post" :value="post" :prose="true" class="content" />
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