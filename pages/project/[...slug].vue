<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { cn } from '@sglara/cn'
import { AlignLeft } from 'lucide-vue-next'

// Active section state
const activeSection = ref(null)
let observer = null
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

useSeoMeta({
  title: `${project.value.title} | Bret Oreta`,
  ogTitle: `${project.value.title} | Bret Oreta`,
  description: project.value.description,
  ogDescription: project.value.description,
  ogImage: project.value.image,
  twitterCard: 'summary_large_image',
  ogType: "post",
})

// Smooth scroll function
const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 80,
      behavior: 'smooth',
    })
  }
}

// Setup Intersection Observer after content render
onMounted(() => {
  nextTick(() => {
    // Use all headings with IDs in toc
    if (!project.value?.body?.toc?.links) return
    const ids = project.value.body.toc.links.map(link => link.id)
    const sectionElements = ids
      .map(id => document.getElementById(id))
      .filter(Boolean)

    observer = new window.IntersectionObserver(
      (entries) => {
        // Sort by boundingClientRect.top so the section closest to top gets picked
        const visibleSections = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visibleSections.length > 0) {
          activeSection.value = visibleSections[0].target.id
        } else {
          // Optionally: Find the section just above the viewport
          const aboveSections = entries
            .filter(entry => entry.boundingClientRect.top < 80) // 80 = offset
            .sort((a, b) => b.boundingClientRect.top - a.boundingClientRect.top)
          if (aboveSections.length > 0) {
            activeSection.value = aboveSections[0].target.id
          }
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -70% 0px', // top margin for header offset
        threshold: 0.1,
      }
    )

    sectionElements.forEach(el => observer.observe(el))
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>


<template>
  <div class="px-5">
    <div v-if="project" class="grid justify-center">
      <div class="relative grid-cols-3 gap-20 lg:grid md:pt-20">
        <div class="page-grid-top"></div>
        <div class="lg:col-span-2">
          <div>
            <div v-motion-slide-visible-once-bottom class="flex items-center gap-x-4 text-xs">
              <time class="text-gray-500 dark:text-muted">{{ new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric'}) }}</time>
              <UBadge>{{ project.category }}</UBadge>
            </div>
            <div v-motion-slide-visible-once-bottom :delay="100" class="mt-4">
              <h1 class="text-4xl font-bold">{{ project.title }}</h1>
              <p class="mt-2 line-clamp-1 text-sm/6 text-muted">{{ project.description }}</p>
            </div>
            <div v-motion-slide-visible-once-bottom :delay="200" class="relative my-8 flex items-center gap-x-4">
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

            <NuxtImg height="42rem" v-motion-slide-visible-once-bottom :delay="400" :src="project.image" class="rounded-lg object-cover" alt="Cover image for this blog project" />
          </div>

          <article class="mt-12">
            <ContentRenderer v-if="project" :value="project" :prose="true" class="content" />
          </article>

          <div class="mt-32 mb-4">
            <BlogPagination :prev="sorroundLinks[0]" :next="sorroundLinks[1]" />
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
                <template v-for="(link, index) in project.body.toc.links" :key="link.id">
                  <li v-motion-pop-visible :delay="index * 50">
                    <div class="relative">
                      <!-- Animated highlight using v-motion -->
                      <div
                        v-motion
                        v-if="activeSection === link.id"
                        :initial="{
                          opacity: 0,
                          scaleX: 0.5
                        }"
                        :enter="{
                          opacity: 1,
                          scaleX: 1,
                          transition: {
                            type: 'spring',
                            stiffness: 300,
                            damping: 25,
                          }
                        }"
                        class="absolute left-0 top-1/2 -translate-y-1/2 h-7 w-full rounded bg-primary/20 z-0"
                        style="pointer-events:none"
                      />
                      <!-- TOC Link -->
                      <a
                        :id="`toc-${link.id}`"
                        :href="`#${link.id}`"
                        @click.prevent="scrollToSection(link.id)"
                        :class="cn(
                          'block relative pl-3 border-l-2 -ml-px transition-all duration-200 ease-in-out text-xs z-10 line-clamp-1',
                          activeSection === link.id
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
        </div>
      </div>

      <div class="bg-black mt-20 border-accented border rounded-t-md">
        <Footer />
      </div>
    </div>
  </div>
</template>
<style>
.page-grid-top {
  position: absolute;
  left: 0;
  top:0;
  background-image: url('/svg/grid-top.svg');
  background-repeat: repeat-x;
  height: 24.625rem;
  width: 100%;
  z-index: 0;
  margin-top: -60px;
}
</style>