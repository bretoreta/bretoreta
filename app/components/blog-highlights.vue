<template>
  <section id="blog" class="py-14 sm:py-20" aria-labelledby="blog-highlights-title" data-character-section="blog">
    <div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">
      <div class="flex flex-col gap-5 border-t border-dashed border-black/10 pt-12 md:flex-row md:items-end md:justify-between dark:border-white/10">
        <div class="max-w-2xl">
          <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Writing</p>
          <h2 id="blog-highlights-title" class="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            From the blog
          </h2>
          <p class="mt-3 text-base leading-relaxed text-muted md:text-lg">
            Practical notes on design, SEO, AI automation, and building systems that keep working after launch.
          </p>
        </div>

        <NuxtLink
          to="/blog"
          class="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-black/10 bg-white/50 px-4 py-2 text-xs font-bold text-gray-900 backdrop-blur transition hover:border-primary/30 hover:bg-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:focus-visible:ring-offset-[#050807]"
        >
          View all articles
          <Icon
            name="lucide:arrow-up-right"
            class="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </NuxtLink>
      </div>

      <div v-if="data?.length" class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <BlogCard v-for="post in data" :key="post.id" :post="post" />
      </div>
    </div>
  </section>
</template>

<script setup>
const { data } = await useAsyncData('home-blog-highlights', () => {
  return queryCollection('blog').order('date', 'DESC').limit(3).all()
})
</script>
