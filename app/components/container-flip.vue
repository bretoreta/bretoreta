<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";

const props = withDefaults(
  defineProps<{
    words?: string[];
    interval?: number;
  }>(),
  {
    words: () => ["AI Automations", "Websites that Sell", "SaaS Products", "AI Agents"],
    interval: 2800,
  },
);

const index = ref(0);
let timer: ReturnType<typeof setInterval> | undefined;

onMounted(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  timer = setInterval(() => {
    index.value = (index.value + 1) % props.words.length;
  }, props.interval);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<template>
  <span
    class="relative inline-grid overflow-hidden rounded-lg px-4 pt-2 pb-3 text-left align-bottom text-4xl font-bold text-black sm:text-5xl xl:text-6xl dark:text-green-400 [background:linear-gradient(to_bottom,#e6f4ea,#ccf0d6)] shadow-[inset_0_-1px_#a7e7b7,inset_0_0_0_1px_#34d399,0_4px_8px_rgba(52,211,153,0.2)] dark:[background:linear-gradient(to_bottom,#064e3b,#052e2b)] dark:shadow-[inset_0_-1px_#022c22,inset_0_0_0_1px_#16a34a,0_4px_8px_rgba(22,163,74,0.25)]"
  >
    <span
      v-for="(word, i) in words"
      :key="word"
      :aria-hidden="i === index ? undefined : 'true'"
      class="col-start-1 row-start-1 whitespace-nowrap transition-all duration-300 ease-out motion-reduce:transition-none"
      :class="i === index
        ? 'translate-y-0 opacity-100'
        : 'pointer-events-none translate-y-2 opacity-0'"
    >
      {{ word }}
    </span>
  </span>
</template>
