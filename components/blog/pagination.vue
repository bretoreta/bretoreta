<template>
  <div class="grid grid-cols-1 gap-4 mt-16 md:grid-cols-2">
    <NuxtLink
      v-if="prev"
      :to="prev.path"
      class="relative p-5 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:border-primary-500/30 overflow-hidden bg-white dark:bg-gray-800/50 group"
    >
      <div class="flex items-center gap-4">
        <Icon name="lucide:chevron-left" class="w-5 h-5 text-gray-400 flex-shrink-0 transition-colors duration-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
        <div class="flex-1">
          <span class="block text-sm text-gray-500 dark:text-gray-400 mb-1 transition-colors duration-300 group-hover:text-primary-600 dark:group-hover:text-primary-400">Previous</span>
          <span class="font-medium text-gray-900 dark:text-white line-clamp-2 transition-colors duration-300">{{ prev.title }}</span>
        </div>
      </div>
    </NuxtLink>

    <NuxtLink
      v-if="next"
      :to="next.path"
      class="relative p-5 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:border-primary-500/30 overflow-hidden bg-white dark:bg-gray-800/50 group md:text-right"
    >
      <div class="flex items-center gap-4 flex-row-reverse">
        <Icon name="lucide:chevron-right" class="w-5 h-5 text-gray-400 flex-shrink-0 transition-colors duration-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
        <div class="flex-1">
          <span class="block text-sm text-gray-500 dark:text-gray-400 mb-1 transition-colors duration-300 group-hover:text-primary-600 dark:group-hover:text-primary-400">Next</span>
          <span class="font-medium text-gray-900 dark:text-white line-clamp-2 transition-colors duration-300">{{ next.title }}</span>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  prev: {
    type: Object,
    default: () => null
  },
  next: {
    type: Object,
    default: () => null
  }
})
</script>