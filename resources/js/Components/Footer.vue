<script setup>
    import { Link } from '@inertiajs/inertia-vue3';
</script>

<template>
    <footer class="bg-gray-900 w-full px-10 md:px-20 lg:px-40 pt-20 lg:pt-48 pb-32">
        <div class="grid grid-cols-7 pb-10">
            <div class="col-span-7 lg:col-span-3">
                <div class="flex flex-col justify-between h-full">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 text-sky-600">
                            <path fill-rule="evenodd" d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z" clip-rule="evenodd" />
                        </svg>
                        <h4 class="font-bold text-3xl text-white">Bret Oreta</h4>
                        <div class="mt-2">
                            <p class="text-gray-500">Copyright &copy; 2020. All Rights Reserved.</p>
                        </div>
                    </div>
                    <div class="flex space-x-4 lg:space-x-8 mt-4 lg:mt-0">
                        <Link class="text-gray-600 uppercase text-sm font-semibold">Privacy Policy</Link>
                        <Link class="text-gray-600 uppercase text-sm font-semibold">Terms and Conditions</Link>
                    </div>
                </div>
            </div>
            <div class="col-span-7 lg:col-span-2 mt-10 lg:mt-0">
                <h4 class="text-lg text-white font-bold uppercase">Useful Links</h4>
                <div class="flex flex-col space-y-4 mt-5 lg:mt-10">
                    <Link :href="route('home')" class="text-sm font-semibold" :class="route().current('home') ? 'font-semibold text-sky-600' : 'text-gray-600'">Home</Link>
                    <Link :href="route('about_me')" class="text-sm font-semibold" :class="route().current('about_me') ? 'font-semibold text-sky-600' : 'text-gray-600'">About Me</Link>
                    <!-- <Link :href="route('what_i_do')" class="text-sm font-semibold" :class="route().current('what_i_do') ? 'font-semibold text-sky-600' : 'text-gray-600'">What I Do</Link> -->
                    <Link :href="route('projects')" class="text-sm font-semibold" :class="route().current('projects') ? 'font-semibold text-sky-600' : 'text-gray-600'">Projects</Link>
                    <Link :href="route('testimonials')" class="text-sm font-semibold" :class="route().current('testimonials') ? 'font-semibold text-sky-600' : 'text-gray-600'">Testimonials</Link>
                    <Link :href="route('contact_me')" class="text-sm font-semibold" :class="route().current('contact_me') ? 'font-semibold text-sky-600' : 'text-gray-600'">Contact Me</Link>
                </div>
            </div>
            <div class="col-span-7 lg:col-span-2 mt-10 lg:mt-0">
                <h4 class="text-lg text-white font-bold uppercase">Community - Coming Soon!</h4>
                <div class="flex flex-col space-y-4 mt-5 lg:mt-10">
                    <Link class="text-gray-600 text-sm font-semibold">Forum</Link>
                    <Link class="text-gray-600 text-sm font-semibold">Guidelines</Link>
                    <Link class="text-gray-600 text-sm font-semibold">Blog</Link>
                    <Link class="text-gray-600 text-sm font-semibold">Donate</Link>
                    <Link class="text-gray-600 text-sm font-semibold">Foundation</Link>
                </div>
            </div>
        </div>
        <div class="w-full border-t border-gray-700 p-5">
            <div class="flex w-full items-center justify-end">
                <p class="text-sm text-white font-semibold">SVG Social Icons</p>
            </div>
        </div>
    </footer>
</template>