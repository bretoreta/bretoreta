<script setup>
defineProps({
    color: {
        type: String,
        default: "neutral"
    },
    variant: {
        type: String,
        default: "ghost",
    },
    size: {
        type: String,
        default: "md"
    }
})
</script>
<template>
    <UButton color="neutral" variant="ghost">Contact Me</UButton>
</template>