<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { cn } from '@sglara/cn'
import { AlignLeft } from 'lucide-vue-next'

/** Track ALL visible sections */
const activeSections = ref(new Set())
let observer;
const route = useRoute()

// Nuxt Content fetch (your code)
const { data: post } = await useAsyncData(route.path, () =>
  queryCollection('blog').path(route.path).first()
)
if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}
const { data: sorroundLinks } = await useAsyncData(`${route.path}-surround`, () =>
  queryCollectionItemSurroundings('blog', route.path).order('date', 'DESC')
)

useSeoMeta({
  title: `${post.value.title} | Bret Oreta`,
  ogTitle: `${post.value.title} | Bret Oreta`,
  description: post.value.description,
  ogDescription: post.value.description,
  ogImage: post.value.image,
  twitterCard: 'summary_large_image',
  ogType: "post",
})


const links = computed(() => [{
  icon: 'i-lucide-file-pen',
  label: 'Edit this page',
  to: `https://github.com/bretoreta/bretoreta/edit/main/content/${post?.value?.stem}.md`,
  target: '_blank'
}, {
  icon: 'i-lucide-star',
  label: 'Star on GitHub',
  to: 'https://github.com/bretoreta/bretoreta',
  target: '_blank'
}, {
  label: 'Contact Me',
  icon: 'i-lucide-rocket',
  to: '/contact'
}])

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  nextTick(() => {
    const links = post.value?.body?.toc?.links ?? []
    if (!links.length) return

    const sectionEls = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean)

    /** 
     * Use multiple thresholds for stable visibility,
     * and shrink bottom with rootMargin so “near bottom” headings don’t flicker.
     */
    observer = new IntersectionObserver(
      (entries) => {
        // batch updates in a single RAF to avoid layout thrash
        requestAnimationFrame(() => {
          const next = new Set(activeSections.value)
          for (const entry of entries) {
            const id = (entry.target).id
            // consider it “active” if it actually intersects some portion
            // and its top isn’t hidden behind the sticky header
            const headerOffset = 80
            const topVisible = entry.boundingClientRect.top >= headerOffset || entry.isIntersecting

            if (entry.isIntersecting && topVisible && entry.intersectionRatio > 0) {
              next.add(id)
            } else {
              next.delete(id)
            }
          }
          // only replace if changed (prevents needless reactivity churn)
          const changed =
            next.size !== activeSections.value.size ||
            [...next].some((v) => !activeSections.value.has(v))
          if (changed) activeSections.value = next
        })
      },
      {
        root: null,
        // top: keep 80px clear for sticky header; bottom: shrink to avoid early activation
        rootMargin: '-80px 0px -35% 0px',
        threshold: [0, 0.05, 0.1, 0.25, 0.5, 0.75, 1],
      }
    )

    sectionEls.forEach((el) => observer.observe(el))
  })
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <div class="px-5 pt-14">
    <div v-if="post" class="grid justify-center">
      <div class="relative grid-cols-3 gap-20 lg:grid md:pt-20">
        <div class="page-grid-top"></div>
        <!-- MAIN BLOG CONTENT -->
        <div class="lg:col-span-2">
          <div>
            <div v-motion-slide-visible-once-bottom class="flex items-center gap-x-4 text-xs">
              <time class="text-gray-500 dark:text-muted">
                {{ new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) }}
              </time>
              <UBadge>{{ post.category }}</UBadge>
            </div>
            <div v-motion-slide-visible-once-bottom :delay="100" class="my-4">
              <h1 class="text-4xl font-bold">{{ post.title }}</h1>
              <p class="mt-2 line-clamp-1 text-sm/6 text-muted">{{ post.description }}</p>
            </div>
            <NuxtImg height="42rem" :src="post.image" class="rounded-lg w-full object-cover" alt="Cover image for this blog post" placeholder />
          </div>
          <article class="mt-12 max-w-4xl">
            <ContentRenderer v-if="post" :value="post" :prose="true" class="content" />
          </article>
          <div class="mt-32 mb-4">
            <UContentSurround :surround="sorroundLinks" />
            <!-- <BlogPagination :prev="sorroundLinks[0]" :next="sorroundLinks[1]" /> -->
          </div>
        </div>
        
        <!-- TOC SIDEBAR -->
        <div class="sticky top-20 hidden h-fit lg:block">
          <div>
            <span v-motion-pop-visible class="flex items-center gap-2 text-sm font-medium">
              <AlignLeft class="h-4 w-4" />
              Table of Contents
            </span>
            <nav class="mt-4">
              <ul class="space-y-4 pl-4">
                <template v-for="(link, index) in post.body.toc.links" :key="link.id">
                  <li v-motion-pop-visible :delay="index * 50">
                    <div class="relative">
                      <div
                        v-motion
                        v-if="activeSections.has(link.id)"
                        :initial="{ opacity: 0, scaleX: 0.5 }"
                        :enter="{ opacity: 1, scaleX: 1, transition: { type: 'spring', stiffness: 300, damping: 25 } }"
                        class="absolute left-0 top-1/2 -translate-y-1/2 h-7 w-full rounded bg-primary/20 z-0"
                        style="pointer-events:none"
                      />

                      <!-- link classes -->
                      <a
                        :id="`toc-${link.id}`"
                        :href="`#${link.id}`"
                        @click.prevent="scrollToSection(link.id)"
                        :class="cn(
                          'block relative pl-3 border-l-2 -ml-px transition-all duration-200 ease-in-out text-xs z-10 line-clamp-1',
                          activeSections.has(link.id)
                            ? 'border-primary text-primary font-bold'
                            : 'text-muted border-transparent hover:border-muted hover:text-primary'
                        )"
                      >
                        {{ link.text }}
                      </a>
                    </div>
                  </li>
                </template>
              </ul>
            </nav>
          </div>

          <div class="mt-6 border-t pt-6 pl-6 border-accented">
            <UPageLinks v-motion-slide-visible-once-bottom :delay="400" title="Community" :links="links" />
          </div>
        </div>
      </div>
      
      <!-- Footer -->
      <div class="mt-20 rounded-t-md border border-accented bg-black">
        <Footer />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Enhanced transition for TOC links */
nav a {
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

nav a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  border-radius: 0.375rem;
  transition: width 0.3s ease-out;
  z-index: -1;
}

nav a:hover::before {
  width: 100%;
}

nav a.border-primary::before {
  width: 100%;
}

/* Smooth transition for highlight bar */
nav > div > div {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>