<script setup>
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
    <UButton :color="color" :size="size" :variant="variant" icon="i-lucide-rocket">Start Your Free Trial</UButton>
</template>