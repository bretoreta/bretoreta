<template>
  <div v-if="activeTestimonial" class="w-full text-center">
    <div class="mx-auto size-16 overflow-hidden rounded-full border border-black/10 bg-primary/10 dark:border-white/10">
      <ResponsiveImage
        :src="activeTestimonial.img"
        :alt="activeTestimonial.name"
        sizes="64px"
        class="h-full w-full object-cover"
      />
    </div>

    <blockquote
      aria-live="polite"
      aria-atomic="true"
      class="mx-auto mt-5 min-h-28 max-w-md text-base font-bold leading-relaxed text-gray-950 dark:text-white sm:text-lg"
    >
      “{{ activeTestimonial.quote }}”
    </blockquote>

    <div class="mt-4 flex items-center justify-between gap-4">
      <button
        type="button"
        aria-label="Previous testimonial"
        class="flex size-9 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/60 transition-colors hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
        @click="handlePrev"
      >
        <Icon name="lucide:arrow-left" aria-hidden="true" class="size-4" />
      </button>

      <div class="min-w-0">
        <p class="truncate text-sm font-bold">{{ activeTestimonial.name }}</p>
        <p class="truncate text-xs text-muted">{{ activeTestimonial.role }}</p>
      </div>

      <button
        type="button"
        aria-label="Next testimonial"
        class="flex size-9 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/60 transition-colors hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
        @click="handleNext"
      >
        <Icon name="lucide:arrow-right" aria-hidden="true" class="size-4" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

interface Testimonial {
  img: string
  quote: string
  name: string
  role: string
}

const props = withDefaults(
  defineProps<{
    testimonials?: Testimonial[]
    autoRotate?: boolean
    duration?: number
  }>(),
  {
    autoRotate: true,
    duration: 5,
    testimonials: () => [],
  },
)

const active = ref(0)
const autorotate = ref(props.autoRotate)
let intervalId: number | null = null

const activeTestimonial = computed(() => props.testimonials[active.value])

function startAutorotate() {
  intervalId = window.setInterval(() => {
    active.value = active.value + 1 === props.testimonials.length ? 0 : active.value + 1
  }, props.duration * 1000)
}

function resetAutorotate() {
  if (intervalId) clearInterval(intervalId)
  if (autorotate.value) startAutorotate()
}

function setActiveIndex(index: number) {
  active.value = index
  autorotate.value = false
  resetAutorotate()
}

function handleNext() {
  setActiveIndex((active.value + 1) % props.testimonials.length)
}

function handlePrev() {
  setActiveIndex((active.value - 1 + props.testimonials.length) % props.testimonials.length)
}

onMounted(() => {
  if (autorotate.value && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    startAutorotate()
  }
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>
