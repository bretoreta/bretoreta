<script setup lang="ts">
withDefaults(
  defineProps<{
    orientation?: "horizontal" | "vertical";
  }>(),
  { orientation: "horizontal" },
);

const emit = defineEmits<{ navigate: [] }>();

const route = useRoute();

const items = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/project" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function isActive(to: string) {
  return to === "/" ? route.path === "/" : route.path === to || route.path.startsWith(`${to}/`);
}
</script>

<template>
  <nav
    v-if="orientation === 'horizontal'"
    aria-label="Main"
    class="hidden items-center gap-0.5 rounded-full border border-black/10 bg-white/50 p-1 shadow-[0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-md min-[820px]:flex dark:border-white/10 dark:bg-white/[0.04]"
  >
    <NuxtLink
      v-for="item in items"
      :key="item.to"
      :to="item.to"
      :aria-current="isActive(item.to) ? 'page' : undefined"
      class="rounded-full px-3.5 py-1.5 text-[13px] font-semibold tracking-tight transition-colors"
      :class="isActive(item.to)
        ? 'bg-gray-950 text-white shadow-sm dark:bg-white dark:text-gray-950'
        : 'text-gray-600 hover:bg-gray-950/5 hover:text-gray-950 dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white'"
    >
      {{ item.label }}
    </NuxtLink>
  </nav>

  <nav v-else aria-label="Mobile" class="flex flex-col">
    <NuxtLink
      v-for="(item, index) in items"
      :key="item.to"
      :to="item.to"
      :aria-current="isActive(item.to) ? 'page' : undefined"
      class="group flex items-center justify-between gap-4 border-b border-black/5 py-4 last:border-b-0 dark:border-white/10"
      @click="emit('navigate')"
    >
      <span class="flex items-baseline gap-3">
        <span class="font-mono text-[11px] tabular-nums text-muted">0{{ index + 1 }}</span>
        <span
          class="text-2xl font-extrabold tracking-tight transition-colors"
          :class="isActive(item.to)
            ? 'text-primary'
            : 'text-gray-950 group-hover:text-primary dark:text-white'"
        >
          {{ item.label }}
        </span>
      </span>
      <Icon
        name="lucide:arrow-up-right"
        class="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        :class="isActive(item.to) ? 'text-primary' : 'text-muted'"
        aria-hidden="true"
      />
    </NuxtLink>
  </nav>
</template>
