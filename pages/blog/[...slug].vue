<script lang="ts" setup>
import type { Collections } from '@nuxt/content'

const route = useRoute()

const collection = computed(() => 'blog' as keyof Collections)

const { data: page } = await useAsyncData('blog', async () =>
  await queryCollection(collection.value).path(route.path).first() as Collections['blog'],
)

if (!page.value) throw createError({ statusCode: 404, statusMessage: 'Page not found' })
</script>

<template>
  <div v-if="page" class="my-4">
    <NuxtImg :src="page.image" class="h-[30rem] w-full rounded-lg object-cover" />
    <article class="mx-auto px-4 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mt-12">
        <h1 class="text-4xl font-bold">
            {{ page.title }}
        </h1>
        <div class="info-section mt-1 flex flex-col gap-2 sm:flex-row sm:gap-4">
            <p>{{ page.date }}</p>
        </div>
        <ContentRenderer v-if="page.date" :value="page" />
    </article>
  </div>
</template>