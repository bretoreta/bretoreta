<template>
  <div
    ref="carouselRoot"
    :class="['relative', $attrs.class]"
    role="region"
    aria-roledescription="carousel"
    tabindex="0"
    @keydown.left.prevent="scrollPrev"
    @keydown.right.prevent="scrollNext"
  >
    <slot
      :carouselApi="carouselApi"
      :scrollPrev="scrollPrev"
      :scrollNext="scrollNext"
      :canScrollPrev="canScrollPrev"
      :canScrollNext="canScrollNext"
      :currentSlide="currentSlide"
      :scrollTo="scrollTo"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import useEmblaCarousel from 'embla-carousel-vue'

const props = defineProps({
  opts: Object,
  orientation: {
    type: String,
    default: 'horizontal'
  },
  plugins: Array,
  setApi: Function,
  itemsCount: Number // for dot nav
})

const carouselRoot = ref(null)
const [emblaRef, emblaApi] = useEmblaCarousel({
  axis: props.orientation === 'vertical' ? 'y' : 'x',
  ...props.opts
}, props.plugins)

const canScrollPrev = ref(false)
const canScrollNext = ref(false)
const currentSlide = ref(0)

function update() {
  if (!emblaApi.value) return
  canScrollPrev.value = emblaApi.value.canScrollPrev()
  canScrollNext.value = emblaApi.value.canScrollNext()
  currentSlide.value = emblaApi.value.selectedScrollSnap()
}

function scrollPrev() {
  emblaApi.value?.scrollPrev()
}
function scrollNext() {
  emblaApi.value?.scrollNext()
}
function scrollTo(idx) {
  emblaApi.value?.scrollTo(idx)
}

onMounted(() => {
  watch(emblaApi, (api) => {
    if (api) {
      props.setApi?.(api)
      update()
      api.on('select', update)
      api.on('reInit', update)
    }
  }, { immediate: true })
})

onUnmounted(() => {
  emblaApi.value?.off('select', update)
  emblaApi.value?.off('reInit', update)
})

defineExpose({ emblaRef })
</script>