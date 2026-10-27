<template>
  <article class="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white/60 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_60px_-30px_rgba(16,185,129,0.5)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-primary/40">
    <NuxtLink :to="post.path" class="flex h-full flex-col">
      <div class="relative aspect-16/10 overflow-hidden bg-gray-100 dark:bg-white/5">
        <ResponsiveImage
          v-if="post.image"
          :src="post.image"
          :alt="post.title"
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
          class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div aria-hidden="true" class="absolute inset-0 bg-linear-to-t from-black/55 via-black/5 to-transparent" />
      </div>

      <div class="flex flex-1 flex-col p-5">
        <div class="flex flex-wrap items-center gap-2">
          <time :datetime="isoDate(post.date)" class="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
            {{ formatDate(post.date) }}
          </time>
          <span class="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-primary">
            {{ post.category }}
          </span>
        </div>
        <h3 class="mt-2 line-clamp-2 text-lg font-extrabold leading-snug tracking-tight transition-colors group-hover:text-primary">
          {{ post.title }}
        </h3>
        <p class="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
          {{ post.description }}
        </p>

        <div class="mt-auto flex items-center justify-between gap-4 pt-5">
          <div class="flex min-w-0 items-center gap-2">
            <img
              :src="avatarSrc"
              alt=""
              width="28"
              height="28"
              loading="lazy"
              decoding="async"
              class="size-7 shrink-0 rounded-full bg-gray-100 object-cover"
            />
            <span class="truncate text-[11px] font-semibold text-muted">{{ post.author?.name }}</span>
          </div>
          <span class="inline-flex shrink-0 items-center gap-1 text-xs font-bold text-primary">
            Read
            <Icon
              name="lucide:arrow-right"
              class="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  post: {
    path: string
    image?: string
    title: string
    description: string
    category: string
    date: string | Date
    author?: {
      name: string
      role: string
      imageUrl: string
    }
  }
}>()

const avatarSrc = computed(() => {
  const url = props.post.author?.imageUrl
  if (!url) return '/images/opt/avatar-96.webp'
  try {
    const parsed = new URL(url)
    if (parsed.hostname === 'bretoreta.me') return parsed.pathname
  } catch {
    // Relative URL; use it as-is.
  }
  return url
})

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
