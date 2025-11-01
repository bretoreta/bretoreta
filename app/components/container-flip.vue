<template>
  <Motion
    :key="words[currentWordIndex]"
    as="p"
    :layout-id="`words-here-${id}`"
    :animate="{ width }"
    :transition="{ duration: props.animationDuration / 2000 }"
    :class="
      cn(
        'relative inline-block rounded-lg pt-2 pb-3 px-4 text-center text-4xl font-bold text-black md:text-6xl dark:text-green-400',
        
        // Light mode: soft green gradient background
        '[background:linear-gradient(to_bottom,#e6f4ea,#ccf0d6)]',
        'shadow-[inset_0_-1px_#a7e7b7,inset_0_0_0_1px_#34d399,_0_4px_8px_rgba(52,211,153,0.2)]',

        // Dark mode: deeper green tones
        'dark:[background:linear-gradient(to_bottom,#064e3b,#052e2b)]',
        'dark:shadow-[inset_0_-1px_#022c22,inset_0_0_0_1px_#16a34a,_0_4px_8px_rgba(22,163,74,0.25)]',

        props.class
        )
    "
  >
    <Motion
      ref="textRef"
      as="div"
      :transition="{
        duration: animationDuration / 1000,
        ease: 'easeInOut',
      }"
      :class="cn('inline-block', props.textClass)"
      :layout-id="`word-div-${words[currentWordIndex]}-${id}`"
    >
      <Motion
        as="div"
        class="inline-block"
      >
        <Motion
          v-for="(letter, index) in words[currentWordIndex]"
          :key="index"
          as="span"
          :initial="{
            opacity: 0,
            filter: 'blur(10px)',
          }"
          :animate="{
            opacity: 1,
            filter: 'blur(0px)',
          }"
          :transition="{
            delay: index * 0.02,
          }"
        >
          {{ letter }}
        </Motion>
      </Motion>
    </Motion>
  </Motion>
</template>

<script lang="ts" setup>
import { cn } from "@sglara/cn";
import { Motion } from "motion-v";
import { templateRef, useIntervalFn } from "@vueuse/core";

const props = withDefaults(
  defineProps<{
    words?: string[];
    interval?: number;
    animationDuration?: number;
    class?: string;
    textClass?: string;
  }>(),
  {
    words: () => ["better", "modern", "beautiful", "awesome"],
    interval: 3000,
    animationDuration: 700,
  },
);

const id = useId();

const currentWordIndex = ref(0);
const textRef = templateRef<HTMLDivElement>("textRef", null);

const width = computed(() => {
  if (textRef.value) {
    return textRef.value.scrollWidth + 30;
  }
  return 100;
});

useIntervalFn(() => {
  currentWordIndex.value = (currentWordIndex.value + 1) % props.words.length;
}, props.interval);
</script>