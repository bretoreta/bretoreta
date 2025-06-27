<template>
  <div class="pb-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-10">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 v-motion-slide-visible-once-bottom class="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">From the blog</h2>
        <p v-motion-slide-visible-once-bottom :delay="100" class="mt-2 text-lg/8 text-muted">Learn how to grow your business with our expert advice.</p>
      </div>
      <div class="mx-auto mt-6 md:mt-14 grid max-w-2xl grid-cols-1 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="(post, index) in data" :key="post.id" class="flex max-w-xl flex-col items-start justify-between" v-motion-slide-visible-once-bottom :delay="100 * index">
          <div class="flex items-center gap-x-4 text-xs">
            <time class="text-gray-500 dark:text-muted">{{ formatDate(post.date) }}</time>
            <span class="relative z-10 rounded-full bg-gray-50 dark:bg-primary/20 px-3 py-1.5 font-medium text-primary">{{ post.category }}</span>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg/6 font-semibold group-hover:text-muted">
              <NuxtLink :href="post.path">
                <span class="absolute inset-0" />
                {{ post.title }}
              </NuxtLink>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm/6 text-muted">{{ post.description }}</p>
          </div>
          <div class="relative mt-8 flex items-center gap-x-4">
            <NuxtImg :src="post.author.imageUrl" alt="Author Profile Picture" class="size-10 rounded-full object-cover bg-gray-50" />
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
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useAsyncData('/', () => {
  return queryCollection('blog').order('date', 'DESC').limit(3).all()
})

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
</script>