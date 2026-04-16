<script setup>
import { computed } from "vue";
const props = defineProps({
  colorMode: { type: String, required: false, default: "light" },
  title: { type: String, required: false, default: "title" },
  description: { type: String, required: false },
  isPro: { type: Boolean, required: false }
});
const themeColor = computed(() => props.isPro ? "124, 58, 237" : "34, 197, 94");
</script>

<template>
  <div
    class="w-full h-full justify-center items-center relative p-10 lg:p-[60px] bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50"
  >
    <!-- Gradient background -->
    <div
      class="absolute top-0 left-0 right-0 bottom-0" :style="{
  backgroundImage: `radial-gradient(ellipse 100% 100% at 100% 100%, rgba(${themeColor}, 0.15) 0%, transparent 60%)`
}"
    />
    <div
      class="absolute top-0 left-0 right-0 bottom-0" :style="{
  backgroundImage: `radial-gradient(ellipse 100% 100% at 0.1% 0.1%, rgba(${themeColor}, 0.1) 0%, transparent 50%)`
}"
    />

    <div class="w-full flex-col justify-center relative items-center text-center gap-5 lg:gap-8">
      <!-- Logo -->
      <div class="flex items-center gap-1 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-10 text-green-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"/><path d="M10 21.9V14L2.1 9.1"/><path d="m10 14 11.9-6.9"/><path d="M14 19.8v-8.1"/><path d="M18 17.5V9.4"/>
        </svg>
        <p class="text-[24px] lg:text-[32px] font-bold tracking-tight">
          BRET <span class="text-green-500"> ORETA</span>
        </p>
      </div>

      <!-- Title -->
      <h1
        class="w-full justify-center text-left text-[48px] lg:text-[80px] font-bold m-0 leading-tight max-w-[700px] lg:max-w-[1000px]"
        style="display: block; line-clamp: 3; text-overflow: ellipsis; text-wrap: balance;"
      >
        {{ title }}
      </h1>

      <!-- Description -->
      <p v-if="description" class="text-[24px] lg:text-[32px] text-left opacity-70 max-w-[650px] lg:max-w-[900px] leading-relaxed" style="display: block; line-clamp: 2; text-overflow: ellipsis;">
        {{ description }}
      </p>
    </div>
  </div>
</template>
