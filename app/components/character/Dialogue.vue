<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { ANIMATIONS, SPRITES } from "~/data/character-animations";

const props = withDefaults(
  defineProps<{
    text: string;
    tone?: "speech" | "terminal";
    hold?: number;
    reducedMotion?: boolean;
    placement?: "above" | "below";
  }>(),
  {
    tone: "speech",
    hold: 0,
    reducedMotion: false,
    placement: "above",
  },
);

const emit = defineEmits<{ dismiss: [] }>();

const visibleText = ref("");
const typing = ref(false);
let typeTimer: ReturnType<typeof setInterval> | undefined;
let dismissTimer: ReturnType<typeof setTimeout> | undefined;

function clearTimers() {
  if (typeTimer) clearInterval(typeTimer);
  if (dismissTimer) clearTimeout(dismissTimer);
  typeTimer = undefined;
  dismissTimer = undefined;
}

function readingTime() {
  if (props.hold > 0) return props.hold;
  return Math.min(8500, Math.max(3200, 2100 + props.text.length * 38));
}

function scheduleDismiss() {
  if (dismissTimer) clearTimeout(dismissTimer);
  dismissTimer = setTimeout(() => emit("dismiss"), readingTime());
}

function typeText() {
  clearTimers();
  visibleText.value = "";
  typing.value = true;

  if (props.reducedMotion) {
    visibleText.value = props.text;
    typing.value = false;
    scheduleDismiss();
    return;
  }

  let index = 0;
  // Keep long terminal lines from feeling slow; short quips still type out.
  const interval = props.text.length > 60 ? 16 : 22;
  typeTimer = setInterval(() => {
    index += 1;
    visibleText.value = props.text.slice(0, index);
    if (index >= props.text.length) {
      if (typeTimer) clearInterval(typeTimer);
      typeTimer = undefined;
      typing.value = false;
      scheduleDismiss();
    }
  }, interval);
}

watch(() => [props.text, props.reducedMotion], typeText, { immediate: true });

// Animated talking portrait inside the bubble. The full-body sprite stays
// grounded while this bust does the mouth-sync, which is how the source art is
// drawn (bust portraits, not full-body mouth frames).
const portraitFrames = ANIMATIONS.TALKING.frames;
const portraitIndex = ref(0);
let portraitTimer: ReturnType<typeof setInterval> | undefined;

const portraitSprite = computed(() => SPRITES[portraitFrames[portraitIndex.value]]);

function startPortrait() {
  if (portraitTimer || props.reducedMotion) return;
  portraitTimer = setInterval(() => {
    portraitIndex.value = (portraitIndex.value + 1) % portraitFrames.length;
  }, 160);
}

watch(
  () => props.reducedMotion,
  (reduced) => {
    if (!reduced) {
      startPortrait();
      return;
    }
    if (portraitTimer) clearInterval(portraitTimer);
    portraitTimer = undefined;
    portraitIndex.value = 0;
  },
);

onMounted(() => {
  startPortrait();
});

onUnmounted(() => {
  clearTimers();
  if (portraitTimer) clearInterval(portraitTimer);
});
</script>

<template>
  <div
    class="chibi-bubble"
    :class="[`chibi-bubble--${tone}`, { 'is-typing': typing, 'is-below': placement === 'below' }]"
    @click="emit('dismiss')"
  >
    <div class="chibi-bubble-head">
      <span class="chibi-bubble-avatar" aria-hidden="true">
        <img
          v-if="portraitSprite"
          :src="portraitSprite.file"
          alt=""
          draggable="false"
          class="chibi-bubble-avatar-img"
        />
      </span>
      <span class="chibi-bubble-identity">
        <span class="chibi-bubble-name">CHIBI</span>
        <span class="chibi-bubble-status">{{ typing ? "talking" : "online" }}</span>
      </span>
      <button
        type="button"
        class="chibi-bubble-close"
        aria-label="Dismiss Chibi's message"
        @click.stop="emit('dismiss')"
      >
        ×
      </button>
    </div>

    <p class="sr-only" aria-live="polite">{{ text }}</p>
    <p class="chibi-bubble-text" aria-hidden="true">
      {{ visibleText }}<span v-if="typing" class="chibi-caret" />
    </p>

    <span class="chibi-bubble-tail" aria-hidden="true" />
  </div>
</template>
