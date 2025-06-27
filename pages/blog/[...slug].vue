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
</script>


<template>
  <div class="px-5">
    <div v-if="post" class="grid justify-center max-w-4xl">
      <div class="my-8">
        <div v-motion-slide-visible-once-bottom class="flex items-center gap-x-4 text-xs">
          <time class="text-gray-500 dark:text-muted">{{ new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric'}) }}</time>
          <UBadge>{{ post.category }}</UBadge>
        </div>
        <div v-motion-slide-visible-once-bottom :delay="100" class="mt-4">
          <h1 class="text-4xl font-bold">{{ post.title }}</h1>
          <p class="mt-2 line-clamp-1 text-sm/6 text-muted">{{ post.description }}</p>
        </div>
        <div v-motion-slide-visible-once-bottom :delay="200" class="relative mt-8 flex items-center gap-x-4">
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
      <NuxtImg width="1000px" :src="post.image" class="rounded-lg object-cover" alt="Cover image for this blog post" />
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
</template>