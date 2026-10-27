<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import type { CharacterMenuItem } from "~/data/character-dialogues";

const props = defineProps<{
  items: CharacterMenuItem[];
  paused: boolean;
  systemReduced?: boolean;
}>();

const emit = defineEmits<{
  close: [restoreFocus?: boolean];
  select: [item: CharacterMenuItem];
}>();

const panel = ref<HTMLElement | null>(null);

const resolvedItems = computed(() =>
  props.items.map((item) => {
    if (item.action !== "toggle-pause") return item;
    if (props.systemReduced) {
      return {
        ...item,
        label: "Animations reduced by system",
        icon: "lucide:accessibility",
        disabled: true,
      };
    }
    return {
      ...item,
      label: props.paused ? "Resume animations" : "Pause animations",
      icon: props.paused ? "lucide:play" : "lucide:pause",
    };
  }),
);

function focusFirst() {
  const first = panel.value?.querySelector<HTMLButtonElement>("button[role='menuitem']");
  first?.focus({ preventScroll: true });
}

function onDocumentPointerDown(event: PointerEvent) {
  const target = event.target as Element | null;
  if (!target) return;
  if (panel.value?.contains(target)) return;
  // The toggle owns the open/close cycle; ignore its pointerdown so it does
  // not close and immediately reopen the menu.
  if (target.closest("[data-chibi-menu-toggle]")) return;
  emit("close", false);
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") {
    event.preventDefault();
    emit("close", true);
    return;
  }

  if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
  const buttons = Array.from(
    panel.value?.querySelectorAll<HTMLButtonElement>("button[role='menuitem']") ?? [],
  );
  if (!buttons.length) return;
  event.preventDefault();
  const current = buttons.indexOf(document.activeElement as HTMLButtonElement);
  const delta = event.key === "ArrowDown" ? 1 : -1;
  const next = (current + delta + buttons.length) % buttons.length;
  buttons[next]?.focus({ preventScroll: true });
}

onMounted(() => {
  focusFirst();
  document.addEventListener("pointerdown", onDocumentPointerDown);
});

onUnmounted(() => {
  document.removeEventListener("pointerdown", onDocumentPointerDown);
});
</script>

<template>
  <div
    id="chibi-menu"
    ref="panel"
    class="chibi-menu"
    role="menu"
    aria-label="Chibi's menu"
    @keydown="onKeydown"
  >
    <div class="chibi-menu-head">
      <span class="chibi-menu-title">CHIBI // MENU</span>
      <span class="chibi-menu-hint">Esc to close</span>
    </div>

    <div class="chibi-menu-items">
      <button
        v-for="item in resolvedItems"
        :key="item.id"
        type="button"
        role="menuitem"
        class="chibi-menu-item"
        :class="{ 'is-danger': item.action === 'hide' }"
        :disabled="item.disabled"
        @click="emit('select', item)"
      >
        <Icon :name="item.icon" class="chibi-menu-icon" aria-hidden="true" />
        <span>{{ item.label }}</span>
      </button>
    </div>

    <p class="chibi-menu-foot">Tab to browse. Escape to close.</p>
  </div>
</template>
