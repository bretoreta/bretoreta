<script setup>
import { LucideRocket } from 'lucide-vue-next';

defineProps({
    color: {
        type: String,
        default: "primary"
    },
    variant: {
        type: String,
        default: "subtle",
    },
    size: {
        type: String,
        default: "md"
    }
})
</script>

<template>
    <button data-cal-link="bretoreta/15min" data-cal-namespace="15min" data-cal-config='{"layout":"month_view"}'
        class="group relative inline-flex items-center justify-center cursor-pointer overflow-hidden bg-green-600 text-white transition-all hover:bg-green-700 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500/60 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#050807]"
        :class="size == 'md'
          ? 'px-3 py-1.5 text-sm rounded-md gap-1.5 shadow-[0_12px_32px_-18px_rgba(16,185,129,0.85)]'
          : 'px-6 py-3 font-semibold rounded-lg gap-2 shadow-[0_18px_44px_-20px_rgba(16,185,129,0.85)] hover:-translate-y-0.5'">
        <span aria-hidden="true" class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span class="absolute -inset-24 bg-[radial-gradient(closest-side,rgba(255,255,255,0.35),transparent_65%)]" />
        </span>
        <LucideRocket :class="size == 'md' ? 'size-4' : 'size-5'" class="relative" />
        <span class="relative">Book a free call</span>
    </button>
</template>
