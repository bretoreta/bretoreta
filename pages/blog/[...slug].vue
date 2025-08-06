<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import { cn } from '@sglara/cn'
import { AlignLeft } from 'lucide-vue-next'

// Active section state
const activeSection = ref(null)
let observer = null
const route = useRoute()
const tocLinks = ref([])

// Nuxt Content fetch (your code)
const { data: post } = await useAsyncData('blog', () =>
  queryCollection('blog').path(route.path).first()
)
if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}
const { data: sorroundLinks } = await useAsyncData('blogSorround', () =>
  queryCollectionItemSurroundings('blog', route.path).order('date', 'DESC')
)

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
    if (!post.value?.body?.toc?.links) return
    
    // Store TOC links for easier access
    tocLinks.value = post.value.body.toc.links
    
    const ids = tocLinks.value.map(link => link.id)
    const sectionElements = ids
      .map(id => document.getElementById(id))
      .filter(Boolean)
    
    // Create a more precise intersection observer
    observer = new window.IntersectionObserver(
      (entries) => {
        // Find the section that's most visible in the viewport
        let bestEntry = null
        let maxVisibility = 0
        
        entries.forEach(entry => {
          // Calculate visibility percentage
          const visibility = entry.intersectionRatio
          
          // Prioritize sections that are closer to the top of the viewport
          const topScore = 1 - Math.min(1, Math.abs(entry.boundingClientRect.top) / window.innerHeight)
          
          // Combined score
          const score = visibility * 0.7 + topScore * 0.3
          
          if (score > maxVisibility) {
            maxVisibility = score
            bestEntry = entry
          }
        })
        
        if (bestEntry) {
          activeSection.value = bestEntry.target.id
        }
      },
      {
        root: null,
        rootMargin: '-100px 0px -60% 0px', // Adjusted for better section detection
        threshold: [0, 0.1, 0.5, 0.8, 1], // Multiple thresholds for better tracking
      }
    )
    
    sectionElements.forEach(el => observer.observe(el))
    
    // Set initial active section if none is detected
    if (sectionElements.length > 0 && !activeSection.value) {
      activeSection.value = sectionElements[0].id
    }
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})

// Watch for active section changes to update highlight animation
watch(activeSection, (newSection) => {
  if (!newSection) return
  
  // Add a small delay to ensure DOM is updated
  nextTick(() => {
    const activeElement = document.getElementById(`toc-${newSection}`)
  })
})
</script>

<template>
  <div class="px-5 pt-14">
    <div v-if="post" class="grid justify-center">
      <div class="relative grid-cols-3 gap-20 lg:grid">
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
            <BlogPagination :prev="sorroundLinks[0]" :next="sorroundLinks[1]" />
          </div>
        </div>
        
        <!-- TOC SIDEBAR -->
        <div class="sticky top-20 hidden h-fit lg:block">
          <div v-motion-slide-visible-once-bottom :delay="400">
            <span class="flex items-center gap-2 text-sm font-medium">
              <AlignLeft class="h-4 w-4" />
              Table of Contents
            </span>
            <nav class="mt-4">
              <ul class="space-y-4 pl-4">
                <template v-for="(link, index) in tocLinks" :key="link.id">
                  <li>
                    <div class="relative">
                      <!-- Animated highlight using custom animation -->
                      <div
                        v-if="activeSection === link.id"
                        class="absolute left-0 top-1/2 -translate-y-1/2 h-7 w-full rounded-md bg-primary/20 z-0 transition-all duration-500 ease-out"
                        style="pointer-events:none"
                      />
                      
                      <!-- TOC Link with enhanced animation -->
                      <a
                        :id="`toc-${link.id}`"
                        :href="`#${link.id}`"
                        @click.prevent="scrollToSection(link.id)"
                        :class="cn(
                          'block relative pl-3 border-l-2 -ml-px transition-all duration-300 ease-in-out text-xs z-10',
                          activeSection === link.id
                            ? 'border-primary text-primary font-bold scale-[1.02]'
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