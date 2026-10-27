<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { PullCord } from "pullcord-vue";
import "pullcord-vue/pullcord.css";

const colorMode = useColorMode();
const isLight = computed(() => colorMode.value === "light");

const HINT_DURATION = 10_000;

const showHint = ref(false);
let appearTimer: ReturnType<typeof setTimeout> | undefined;
let hideTimer: ReturnType<typeof setTimeout> | undefined;

function hideHint() {
  showHint.value = false;
  if (appearTimer) clearTimeout(appearTimer);
  if (hideTimer) clearTimeout(hideTimer);
}

function toggle() {
  colorMode.preference = isLight.value ? "dark" : "light";
  hideHint();
}

onMounted(() => {
  // Show on every page load, after the cord drops in, then fade away.
  appearTimer = setTimeout(() => {
    showHint.value = true;
    hideTimer = setTimeout(() => {
      showHint.value = false;
    }, HINT_DURATION);
  }, 1400);
});

onUnmounted(() => {
  hideHint();
});
</script>

<template>
  <ClientOnly>
    <PullCord
      class="hidden lg:block [--pullcord-right:1.25rem] [--pullcord-top:0.5rem] [--pullcord-z:30] [--pullcord-ink:rgba(24,24,27,0.38)] dark:[--pullcord-ink:rgba(255,255,255,0.34)]"
      :pulled="isLight"
      aria-label="Pull the cord to switch between light and dark"
      @pull="toggle"
    />

    <!-- Decorative, non-interactive hint. Shows once per session. -->
    <Transition name="hint">
      <div
        v-if="showHint"
        aria-hidden="true"
        class="pointer-events-none fixed right-3 top-[13rem] z-30 hidden w-20 select-none lg:block"
      >
        <svg
          class="mx-auto h-6 w-6 -rotate-6 text-gray-400 dark:text-white/35"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 22c-3.4-5.6-4.6-10.4-3.2-15.4"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
          />
          <path
            d="M6.7 9.2 8.6 5l3.7 2"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span
          class="font-hand mt-0.5 block -rotate-6 text-center text-[22px] leading-none text-gray-500 dark:text-white/60"
        >
          pull me
        </span>
      </div>
    </Transition>
  </ClientOnly>
</template>

<style scoped>
.hint-enter-active,
.hint-leave-active {
  transition: opacity 500ms ease, transform 500ms ease;
}

.hint-enter-from,
.hint-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

@media (prefers-reduced-motion: reduce) {
  .hint-enter-active,
  .hint-leave-active {
    transition: none;
  }
}
</style>
