<script setup>
defineProps({
    available: {
        type: Boolean,
        default: () => false
    }
})
</script>

<template>
    <div>
        <div v-if="available" class="p-2 rounded-lg bg-green-500/10 flex items-center gap-3 w-fit">
            <div class="relative">
                <div class="size-2.5 bg-green-500 rounded-full" />
                <div class="size-2.5 bg-green-500 rounded-full absolute top-0 left-0 animate-ping" />
            </div>
            <span class="text-xs font-semibold">Available for new Opportunities</span>
        </div>
        <div v-else class="p-2 rounded-lg bg-yellow-500/20 flex items-center gap-3 w-fit">
            <div class="relative">
                <div class="size-2.5 bg-yellow-500 rounded-full" />
                <div class="size-2.5 bg-yellow-500 rounded-full absolute top-0 left-0 animate-ping" />
            </div>
            <span class="text-xs font-semibold">Accepting Members-only bookings</span>
        </div>
    </div>
</template>