<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';

const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
    maxWidth: {
        type: String,
        default: '2xl',
    },
    closeable: {
        type: Boolean,
        default: true,
    },
});

const emit = defineEmits(['close']);

const panel = ref(null);
let lastFocused = null;

watch(() => props.show, async (open) => {
    if (import.meta.server) return;
    if (open) {
        lastFocused = document.activeElement;
        document.body.style.overflow = 'hidden';
        await nextTick();
        panel.value?.focus();
    } else {
        document.body.style.overflow = '';
        lastFocused?.focus?.();
        lastFocused = null;
    }
});

const close = () => {
    if (props.closeable) {
        emit('close');
    }
};

const closeOnEscape = (e) => {
    if (e.key === 'Escape' && props.show) {
        close();
    }
};

onMounted(() => document.addEventListener('keydown', closeOnEscape));

onUnmounted(() => {
    document.removeEventListener('keydown', closeOnEscape);
    document.body.style.overflow = null;
});

const maxWidthClass = computed(() => {
    return {
        'sm': 'sm:max-w-sm',
        'md': 'sm:max-w-md',
        'lg': 'sm:max-w-lg',
        'xl': 'sm:max-w-xl',
        '2xl': 'sm:max-w-2xl',
    }[props.maxWidth];
});
</script>

<template>
    <teleport to="body">
        <transition appear leave-active-class="duration-200">
            <div v-show="show" class="fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-[70]" scroll-region>
                <transition
                    enter-active-class="ease-out duration-300"
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="ease-in duration-200"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <div v-show="show" class="fixed inset-0 transform transition-all backdrop-blur-sm" @click="close">
                        <div class="absolute inset-0 bg-gray-950/40 dark:bg-black/60" />
                    </div>
                </transition>

                <transition
                    enter-active-class="ease-out duration-300"
                    enter-from-class="translate-x-full"
                    enter-to-class="translate-x-0"
                    leave-active-class="ease-in duration-200"
                    leave-from-class="translate-x-0"
                    leave-to-class="translate-x-full"
                >
                    <div
                        v-show="show"
                        ref="panel"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Menu"
                        tabindex="-1"
                        class="bg-default fixed top-0 right-0 h-dvh w-full max-w-[420px] border-l border-black/10 shadow-2xl transform transition-all focus:outline-none dark:border-white/10"
                    >
                        <div class="flex flex-col h-full">
                            <div class="flex items-center justify-between border-b border-accented px-5 py-4">
                                <slot v-if="show" name="header" />
                                <button type="button" aria-label="Close menu" @click="close" class="flex size-9 items-center justify-center rounded-full border border-black/10 bg-white/50 text-gray-600 transition hover:bg-white/70 hover:text-gray-900 dark:border-white/10 dark:bg-white/5 dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div class="flex-1 overflow-y-auto p-6">
                                <slot v-if="show" name="content" />
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </transition>
    </teleport>
</template>