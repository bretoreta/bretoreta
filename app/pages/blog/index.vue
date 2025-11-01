<script setup>
const { data: posts } = await useAsyncData('blog-posts', () => {
  return queryCollection('blog').order('date', 'DESC').all()
})

useSeoMeta({
  title: 'Digital Garden | Bret Oreta',
  ogTitle: 'Digital Garden | Bret Oreta',
  description: "Welcome to my little corner of the web! I'm excited to share what I've learned about building amazing products and growing as both a engineer and developer.",
  ogDescription: "Welcome to my little corner of the web! I'm excited to share what I've learned about building amazing products and growing as both a engineer and developer.",
  ogImage: "/images/og-image.webp",
  twitterCard: 'summary_large_image',
  ogType: "website",
})
</script>

<template>
  <!-- Main Content -->
  <div class="mt-10 px-5 relative md:pt-20">
    <div class="page-grid-top"></div>
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 v-motion-slide-visible-once-bottom class="text-4xl font-bold tracking-tight text-pretty sm:text-5xl">From the blog</h2>
      <p v-motion-slide-visible-once-bottom :delay="100" class="mt-2 text-lg/8 text-muted">Welcome to my little corner of the web! I'm excited to share what I've learned about building amazing products and growing as both a engineer and developer. Hope you find something useful and inspiring!</p>
    </div>
    <div v-if="posts?.length" class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 dark:border-muted border-dashed pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <article v-for="(post, index) in posts" :key="post.id" class="flex max-w-xl flex-col items-start justify-between" v-motion-slide-visible-once-bottom :delay="100 * index">
        <div class="flex items-center gap-x-4 text-xs">
          <time class="text-gray-500 dark:text-muted">{{ new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric'}) }}</time>
          <span class="relative z-10 rounded-full bg-gray-50 dark:bg-primary/20 px-3 py-1.5 font-medium text-primary">{{ post.category }}</span>
        </div>
        <div class="group relative">
          <h3 class="mt-3 text-lg/6 font-bold group-hover:text-muted">
            <NuxtLink :href="post.path">
              <span class="absolute inset-0" />
              {{ post.title }}
            </NuxtLink>
          </h3>
          <p class="mt-5 line-clamp-3 text-sm/6 text-muted">{{ post.description }}</p>
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
      </article>
    </div>
    <div class="bg-black mt-20 border-accented border rounded-t-md">
      <Footer />
    </div>
  </div>
</template>
