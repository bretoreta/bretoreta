<script setup>
    import { Link } from '@inertiajs/inertia-vue3';
    import PrimaryButton from '@/Components/PrimaryButton.vue'
    import { Inertia } from '@inertiajs/inertia';

    const goToContactMe = () => {
        Inertia.visit(route('contact_me'));
    }
</script>

<template>
    <header class="bg-white w-full py-4 lg:py-6 px-5 md:px-10 lg:px-32 sticky top-0 z-50 border-b border-gray-200 shadow">
        <div class="flex items-center justify-between">
            <div class="flex items-center w-full lg:w-fit justify-between lg:justify-start space-x-14">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 text-sky-600">
                        <path fill-rule="evenodd" d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="flex lg:hidden">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                        </svg>
                    </button>
                </div>
                <div class="hidden lg:flex items-center space-x-12">
                    <Link :href="route('home')" class="text-sm" :class="route().current('home') ? 'font-semibold text-sky-600' : 'text-gray-500'">Home</Link>
                    <Link :href="route('about_me')" class="text-sm" :class="route().current('about_me') ? 'font-semibold text-sky-600' : 'text-gray-500'">About Me</Link>
                    <Link :href="route('what_i_do')" class="text-sm" :class="route().current('what_i_do') ? 'font-semibold text-sky-600' : 'text-gray-500'">What I Do</Link>
                    <Link :href="route('projects')" class="text-sm" :class="route().current('projects') ? 'font-semibold text-sky-600' : 'text-gray-500'">Projects</Link>
                    <Link :href="route('testimonials')" class="text-sm" :class="route().current('testimonials') ? 'font-semibold text-sky-600' : 'text-gray-500'">Testimonials</Link>
                </div>
            </div>
            <div class="hidden lg:flex">
                <PrimaryButton @click="goToContactMe" class="bg-lime-500">Contact Me</PrimaryButton>
            </div>
        </div>
    </header>
</template>