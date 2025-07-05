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
        class="bg-green-600 hover:bg-green-700 text-white transition flex items-center justify-center cursor-pointer" :class="size == 'md' ? 'px-3 py-1.5 text-sm rounded-md gap-1.5' : 'px-6 py-3 font-semibold rounded-lg gap-2'">
        <LucideRocket :class="size == 'md' ? 'size-4' : 'size-5'" />
        Book a free call
    </button>
</template>