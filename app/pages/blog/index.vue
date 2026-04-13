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
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<template>
  <div class="py-10 sm:py-14">
    
    <!-- HERO -->
    <section class="relative overflow-hidden">
      <div aria-hidden="true" class="pointer-events-none absolute inset-0">
        <div class="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_0%,rgba(16,185,129,0.14),transparent_58%)]" />
        <div class="absolute inset-0 opacity-60 mask-[radial-gradient(ellipse_at_center,black_55%,transparent_78%)]">
          <InteractiveGrid
            className="border-black/10 dark:border-white/10"
            squaresClassName="stroke-black/10 dark:stroke-white/10"
            :width="44"
            :height="44"
            :squares="[18, 10]"
          />
        </div>
      </div>

      <div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">
        <div class="grid items-end gap-8 lg:grid-cols-12 py-4">
          
          <div class="relative z-10 lg:col-span-8">
            <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Blog
            </h1>
            <p class="mt-3 max-w-2xl text-base text-muted md:text-lg">
              Notes on design that converts, systems that scale, and automations that buy your time back.
            </p>

            <div class="mt-6 flex flex-wrap items-center gap-2">
              <button
                v-for="c in categories"
                :key="c"
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
            <div class="rounded-2xl border border-black/10 bg-white/50 p-6 backdrop-blur dark:border-white/10 dark:bg-black/20">
              <div class="text-xs font-semibold uppercase tracking-wider">
                Want the shortcut?
              </div>
              <p class="mt-2 text-sm text-muted">
                Skip the reading. Book a free call and I’ll tailor a plan to your business.
              </p>
              <div class="mt-5">
                <StartTrialButton size="lg" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="mt-10 sm:mt-14">
      <div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">

        <!-- FEATURED -->
        <div v-if="featured" class="grid gap-6 lg:grid-cols-12">
          <article class="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/40 backdrop-blur transition hover:shadow-xl dark:border-white/10 dark:bg-black/20 lg:col-span-12">
            <NuxtLink :href="featured.path" class="grid lg:grid-cols-12">
              
              <div class="relative aspect-16/10 overflow-hidden lg:col-span-7">
                <NuxtImg
                  v-if="featured.image"
                  :src="featured.image"
                  class="absolute inset-0 h-full w-full object-cover transition group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-linear-to-b from-transparent to-black/70" />
              </div>

              <div class="p-6 lg:col-span-5">
                <div class="text-xs uppercase text-muted">
                  {{ formatDate(featured.date) }}
                </div>
                <h2 class="mt-3 text-2xl font-extrabold">
                  {{ featured.title }}
                </h2>
                <p class="mt-3 text-sm text-muted">
                  {{ featured.description }}
                </p>
              </div>

            </NuxtLink>
          </article>
        </div>

        <!-- GRID -->
        <div v-if="rest?.length" class="mt-10">
          <div class="relative rounded-3xl border border-black/10 dark:border-white/10 p-4 sm:p-6">
            
            <!-- subtle overlay -->
            <div class="absolute inset-0 opacity-30 pointer-events-none">
              <div class="h-full w-full bg-[linear-gradient(to_right,transparent,rgba(0,0,0,0.05),transparent)] dark:bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.05),transparent)]" />
            </div>

            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative">
              
              <article
                v-for="(post, index) in rest"
                :key="post.id"
                class="group relative overflow-hidden rounded-2xl bg-white/40 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-black/20"
              >
                <NuxtLink :href="post.path" class="block p-5 z-10">
                  <div class="relative aspect-16/10 overflow-hidden">
                    <NuxtImg
                      v-if="post.image"
                      :src="post.image"
                      class="absolute inset-0 h-full w-full object-cover transition group-hover:scale-105"
                    />
                    <div class="absolute inset-0 bg-linear-to-b from-transparent to-black/70" />
                  </div>
                  <div class="flex items-center gap-x-3 text-xs mt-3">
                    <time class="text-muted">{{ formatDate(post.date) }}</time>
                    <span class="rounded-full bg-primary/15 px-2 py-1 text-primary font-semibold">
                      {{ post.category }}
                    </span>
                  </div>

                  <h2 class="mt-3 text-lg font-extrabold group-hover:text-primary transition">
                    {{ post.title }}
                  </h2>

                  <p class="mt-2 text-sm text-muted line-clamp-3">
                    {{ post.description }}
                  </p>

                  <div class="mt-6 flex items-center justify-between text-xs font-semibold text-primary">
                    Read →
                  </div>

                </NuxtLink>
                <!-- inner border -->
                <div class="absolute inset-0 pointer-events-none rounded-2xl border border-black/10 dark:border-white/10" />

                <!-- hover glow -->
                <div class="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(400px_200px_at_50%_0%,rgba(16,185,129,0.12),transparent_60%)]" />

                
              </article>

            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="mt-16">
          <div class="relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/20 p-10 text-center backdrop-blur">
            
            <div class="absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(16,185,129,0.12),transparent_70%)]" />

            <div class="relative">
              <h3 class="text-2xl font-bold">
                Want help applying this?
              </h3>
              <p class="mt-3 text-muted max-w-xl mx-auto">
                Reading is great — but execution is everything. Let’s talk about your project and how to actually implement this.
              </p>

              <div class="mt-6 flex justify-center">
                <StartTrialButton size="lg" />
              </div>
            </div>

          </div>
        </div>

        <!-- EMPTY -->
        <div v-if="!featured" class="mt-10 text-center text-muted">
          No posts found.
        </div>

      </div>
    </section>

  </div>
</template>