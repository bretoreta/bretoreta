<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>

<template>
    <button :type="type" class="inline-flex items-center px-4 py-2 bg-lime-600 border border-transparent shadow-md rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-lime-700 active:bg-lime-900 focus:border-transparent focus:outline-none focus:border-lime-900 focus:ring focus:ring-lime-300 disabled:opacity-25 transition">
        <slot />
    </button>
</template>
