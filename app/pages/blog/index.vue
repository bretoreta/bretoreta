<template>
  <div data-character-section="blog">
    <PageHero
      eyebrow="Journal"
      description="Practical notes on conversion-first web design, SEO, AI automation, and building systems that keep working after launch."
    >
      <template #default>
        Notes from the
        <span class="relative px-1">
          <span class="absolute inset-x-0 bottom-0 h-3 -skew-x-12 bg-primary/20"></span>
          <span class="relative text-primary">build.</span>
        </span>
      </template>

      <template #actions>
        <div role="group" aria-label="Filter articles by category" class="flex flex-wrap gap-2">
          <button
            v-for="c in categories"
            :key="c"
            type="button"
            :aria-pressed="activeCategory === c"
            class="rounded-full border px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.12em] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#050807]"
            :class="activeCategory === c
              ? 'border-primary/30 bg-primary/15 text-primary'
              : 'border-black/10 bg-white/50 text-gray-700 hover:border-primary/20 hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-white/75 dark:hover:bg-white/10'"
          >
            {{ c }}
          </button>
        </div>
      </template>

      <template #aside>
        <div class="rounded-3xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.04] sm:p-7">
          <div class="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            <span class="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            Want the shortcut?
          </div>
          <p class="mt-4 text-xl font-extrabold tracking-tight">Skip the reading.</p>
          <p class="mt-2 text-sm leading-relaxed text-muted">
            Book a free call and I’ll tailor a plan to your website, your workflow, or both.
          </p>
          <div class="mt-5">
            <StartTrialButton size="lg" />
          </div>
          <p class="mt-3 text-[11px] font-medium text-muted">Bring the messy problem. I’ll bring the plan.</p>
        </div>
      </template>
    </PageHero>

    <div class="pb-16 pt-10 sm:pb-24 sm:pt-14">
      <section
        class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10"
        aria-labelledby="latest-title"
      >
        <div class="flex flex-wrap items-end justify-between gap-4 border-t border-dashed border-black/10 pt-10 dark:border-white/10">
          <div>
            <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Writing</p>
            <h2 id="latest-title" class="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Latest notes
            </h2>
          </div>
          <p class="text-xs font-semibold uppercase tracking-[0.14em] text-muted" aria-live="polite">
            {{ filtered?.length || 0 }} {{ (filtered?.length || 0) === 1 ? 'article' : 'articles' }}
          </p>
        </div>

        <article
          v-if="featured"
          class="group mt-8 overflow-hidden rounded-3xl border border-black/10 bg-white/60 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_60px_-30px_rgba(16,185,129,0.5)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-primary/40"
        >
          <NuxtLink :to="featured.path" class="grid lg:grid-cols-12">
            <div class="relative aspect-16/10 overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[440px]">
              <ResponsiveImage
                v-if="featured.image"
                :src="featured.image"
                :alt="featured.title"
                sizes="(min-width: 1024px) 58vw, 92vw"
                priority
                class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div aria-hidden="true" class="absolute inset-0 bg-linear-to-t from-black/65 via-black/5 to-transparent" />
            </div>

            <div class="flex flex-col p-6 sm:p-8 lg:col-span-5">
              <div class="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                <time :datetime="isoDate(featured.date)">{{ formatDate(featured.date) }}</time>
                <span class="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-primary">
                  {{ featured.category }}
                </span>
                <span class="size-1 rounded-full bg-primary" aria-hidden="true" />
                <span>Featured</span>
              </div>
              <h2 class="mt-4 text-2xl font-extrabold leading-tight tracking-tight transition-colors group-hover:text-primary sm:text-3xl">
                {{ featured.title }}
              </h2>
              <p class="mt-3 line-clamp-4 text-sm leading-relaxed text-muted sm:text-base">
                {{ featured.description }}
              </p>
              <div class="mt-auto flex items-center justify-between gap-4 pt-8">
                <span class="inline-flex items-center gap-1 text-xs font-bold text-primary">
                  Read featured article
                  <Icon name="lucide:arrow-right" class="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
                <span class="flex size-9 items-center justify-center rounded-full border border-black/10 bg-white/60 text-primary dark:border-white/10 dark:bg-white/5" aria-hidden="true">
                  <Icon name="lucide:arrow-up-right" class="size-4" />
                </span>
              </div>
            </div>
          </NuxtLink>
        </article>

        <div v-if="rest?.length" class="mt-14">
          <h2 class="text-xl font-extrabold tracking-tight sm:text-2xl">More notes</h2>
          <div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <BlogCard v-for="post in rest" :key="post.id" :post="post" />
          </div>
        </div>

        <div
          v-if="!featured"
          class="mt-8 rounded-2xl border border-dashed border-black/10 bg-white/40 p-10 text-center text-sm text-muted backdrop-blur dark:border-white/10 dark:bg-white/[0.04]"
        >
          No articles found for this category.
        </div>

        <div class="mt-16">
          <div class="relative overflow-hidden rounded-3xl border border-black/10 bg-white/40 p-8 backdrop-blur dark:border-white/10 dark:bg-white/[0.04] sm:p-10">
            <div aria-hidden="true" class="pointer-events-none absolute inset-0">
              <div class="absolute inset-0 bg-[radial-gradient(600px_220px_at_15%_0%,rgba(16,185,129,0.16),transparent_70%)]" />
            </div>
            <div class="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div class="max-w-xl">
                <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Next step</p>
                <h2 class="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">Reading is useful. Shipping is better.</h2>
                <p class="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  If you want help applying any of this to your own site or workflow, let’s talk about the shortest path from idea to launch.
                </p>
              </div>
              <div class="flex shrink-0 flex-col gap-3 sm:flex-row">
                <StartTrialButton size="lg" />
                <NuxtLink
                  to="/project"
                  class="inline-flex items-center justify-center gap-2 rounded-lg border border-black/10 bg-white/50 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  See the work
                  <Icon name="lucide:arrow-up-right" class="size-4" aria-hidden="true" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const { data: posts } = await useAsyncData('blog-posts', () => {
  return queryCollection('blog').order('date', 'DESC').all()
})

useSeoMeta({
  title: 'Blog | Web Design, SEO & AI Automation Notes',
  ogTitle: 'Blog | Web Design, SEO & AI Automation Notes',
  description: 'Practical notes on conversion-first web design, SEO, AI automation, and building production-ready systems that grow businesses.',
  ogDescription: 'Practical notes on conversion-first web design, SEO, AI automation, and building production-ready systems that grow businesses.',
  ogType: 'website',
})

defineOgImage('NuxtSeo.takumi', {
  title: 'Blog: Web Design, SEO & Automation Notes',
  description: 'Practical notes on conversion, automation, SEO, and building production-ready systems.'
});

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

function formatDate(dateStr: string | Date) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

function isoDate(dateStr: string | Date) {
  return new Date(dateStr).toISOString()
}
</script>
