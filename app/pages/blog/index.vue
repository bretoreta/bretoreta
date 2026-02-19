<script setup lang="ts">
import { computed, ref } from 'vue'

const { data: posts } = await useAsyncData('blog-posts', () => {
  return queryCollection('blog').order('date', 'DESC').all()
})

useSeoMeta({
  title: 'Blog | Bret Oreta',
  ogTitle: 'Blog | Bret Oreta',
  description: 'Practical notes on conversion, automation, SEO, and building production-ready systems.',
  ogDescription: 'Practical notes on conversion, automation, SEO, and building production-ready systems.',
  ogImage: '/images/og-image.webp',
  twitterCard: 'summary_large_image',
  ogType: 'website'
})

const activeCategory = ref<string>('All')

const categories = computed(() => {
  const list = (posts.value || []).map((p: any) => p.category).filter(Boolean)
  return ['All', ...Array.from(new Set(list))]
})

const filtered = computed(() => {
  const list = posts.value || []
  if (activeCategory.value === 'All') return list
  return list.filter((p: any) => p.category === activeCategory.value)
})

const featured = computed(() => filtered.value?.[0])
const rest = computed(() => filtered.value?.slice(1) || [])

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}
</script>

<template>
  <div class="py-10 sm:py-14">
    <section class="relative overflow-hidden">
      <div aria-hidden="true" class="pointer-events-none absolute inset-0">
        <div class="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_0%,rgba(16,185,129,0.14),transparent_58%)]" />
        <div class="absolute inset-0 opacity-60 mask-[radial-gradient(ellipse_at_center,black_55%,transparent_78%)]">
          <InteractiveGrid className="border-black/10 dark:border-white/10" squaresClassName="stroke-black/10 dark:stroke-white/10" :width="44" :height="44" :squares="[18, 10]" />
        </div>
      </div>

      <div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">
        <div class="grid items-end gap-8 lg:grid-cols-12 py-4">
          <div class="relative z-10 lg:col-span-8">
            <h1 v-motion-slide-visible-once-bottom class="text-4xl font-extrabold tracking-tight sm:text-5xl">Blog</h1>
            <p v-motion-slide-visible-once-bottom :delay="90" class="mt-3 max-w-2xl text-base text-muted md:text-lg">
              Notes on design that converts, systems that scale, and automations that buy your time back.
            </p>
            <div v-motion-slide-visible-once-bottom :delay="140" class="mt-6 flex flex-wrap items-center gap-2">
              <button
                v-for="c in categories"
                :key="c"
                type="button"
                @click="activeCategory = c"
                class="rounded-full border px-3 py-1.5 text-xs font-semibold transition"
                :class="activeCategory === c
                  ? 'border-primary/30 bg-primary/15 text-primary'
                  : 'border-black/10 bg-white/40 text-gray-800 hover:bg-white/60 dark:border-white/10 dark:bg-black/20 dark:text-white/80'"
              >
                {{ c }}
              </button>
            </div>
          </div>

          <div class="relative z-10 lg:col-span-4">
            <div class="rounded-2xl border border-black/10 bg-white/50 p-6 backdrop-blur dark:border-white/10 dark:bg-black/20" v-motion-slide-visible-once-bottom :delay="170">
              <div class="text-xs font-semibold tracking-[0.18em] uppercase text-gray-700 dark:text-white/70">Want the shortcut?</div>
              <div class="mt-2 text-sm text-muted">Skip the reading. Book a free call and I’ll tailor a plan to your business.</div>
              <div class="mt-5">
                <StartTrialButton size="lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-10 sm:mt-14">
      <div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">
        <div v-if="featured" class="grid gap-6 lg:grid-cols-12" v-motion-slide-visible-once-bottom>
          <article class="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/40 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-xl dark:border-white/10 dark:bg-black/20 lg:col-span-12">
            <NuxtLink :href="featured.path" class="grid gap-0 lg:grid-cols-12">
              <div class="relative aspect-16/10 overflow-hidden lg:col-span-7 lg:aspect-auto">
                <NuxtImg
                  v-if="featured.image"
                  :src="featured.image"
                  :alt="featured.title"
                  format="webp,avif"
                  class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div class="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.0)_10%,rgba(0,0,0,0.75)_95%)]" />
                <div class="absolute left-5 top-5 flex items-center gap-2">
                  <span class="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[11px] font-semibold text-white/85 backdrop-blur">Featured</span>
                  <span class="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[11px] font-semibold text-white/85 backdrop-blur">{{ featured.category }}</span>
                </div>
              </div>
              <div class="p-6 sm:p-8 lg:col-span-5">
                <div class="text-xs font-semibold tracking-[0.18em] uppercase text-muted">{{ formatDate(featured.date) }}</div>
                <h2 class="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">{{ featured.title }}</h2>
                <p class="mt-3 text-sm leading-relaxed text-muted">{{ featured.description }}</p>
                <div class="mt-6 flex items-center gap-3">
                  <NuxtImg
                    v-if="featured.author?.imageUrl"
                    :src="featured.author.imageUrl"
                    :alt="featured.author?.name || 'Author'"
                    class="size-10 rounded-full object-cover bg-gray-50"
                  />
                  <div class="text-sm">
                    <div class="font-semibold">{{ featured.author?.name }}</div>
                    <div class="text-muted">{{ featured.author?.role }}</div>
                  </div>
                </div>
                <div class="mt-6 text-xs font-semibold tracking-[0.18em] uppercase text-primary">Read article</div>
              </div>
            </NuxtLink>
          </article>
        </div>

        <div v-if="rest?.length" class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(post, index) in rest"
            :key="post.id"
            v-motion
            :initial="{ opacity: 0, y: 18, filter: 'blur(10px)' }"
            :visibleOnce="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.65, ease: 'easeOut', delay: index * 0.06 } }"
            class="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/40 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-xl dark:border-white/10 dark:bg-black/20"
          >
            <NuxtLink :href="post.path" class="block p-5">
              <div class="flex items-center gap-x-3 text-xs">
                <time class="text-muted">{{ formatDate(post.date) }}</time>
                <span class="rounded-full bg-primary/15 px-2.5 py-1 font-semibold text-primary">{{ post.category }}</span>
              </div>
              <h2 class="mt-3 text-lg font-extrabold tracking-tight">{{ post.title }}</h2>
              <p class="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{{ post.description }}</p>
              <div class="mt-6 flex items-center gap-3">
                <NuxtImg
                  v-if="post.author?.imageUrl"
                  :src="post.author.imageUrl"
                  :alt="post.author?.name || 'Author'"
                  class="size-9 rounded-full object-cover bg-gray-50"
                />
                <div class="text-sm">
                  <div class="font-semibold">{{ post.author?.name }}</div>
                  <div class="text-xs text-muted">{{ post.author?.role }}</div>
                </div>
                <div class="ml-auto text-xs font-semibold tracking-[0.18em] uppercase text-primary">Read</div>
              </div>
            </NuxtLink>
          </article>
        </div>

        <div v-if="!featured" class="rounded-2xl border border-black/10 bg-white/40 p-8 text-center text-sm text-muted backdrop-blur dark:border-white/10 dark:bg-black/20">
          No posts found for this category.
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>
