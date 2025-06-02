<script setup>
import { computed, onMounted, onUnmounted, watch } from 'vue';

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

watch(() => props.show, () => {
    if (props.show) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = null;
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
                    <div v-show="show" class="fixed inset-0 transform transition-all backdrop-blur-[2px]" @click="close">
                        <div class="absolute inset-0 bg-gray-500 dark:bg-muted opacity-75" />
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
                    <div v-show="show" class="bg-default fixed top-0 right-0 h-screen shadow-xl transform transition-all w-[300px] sm:w-[400px] sm:mx-auto">
                        <div class="flex flex-col h-full">
                            <div class="p-4 border-b border-accented flex items-center justify-between">
                                <slot v-if="show" name="header" />
                                <button @click="close" class="p-2 rounded-md duration-200 hover:bg-gray-50 dark:hover:bg-stone-700 text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
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