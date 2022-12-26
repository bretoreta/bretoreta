<script setup>
    import { Head, Link } from '@inertiajs/inertia-vue3';
    import Header from '@/Components/Header.vue';
    import Footer from '@/Components/Footer.vue';
    import PrimaryButton from '@/Components/PrimaryButton.vue'
</script>

<template>
    <Head title="Testimonials" />

    <div class="relative bg-gray-100">
        <Header />

        <div class="hero px-6 md:px-20 lg:px-40 w-full py-28 bg-customBlue">
            <div class="grid grid-cols-4">
                <div class="col-span-4">
                    <div class="flex flex-col items-center relative">
                        <div class="bg-gray-900/60 rounded-full w-40 h-40 absolute -top-12 left-72 -z-10" />
                        <div class="text-sm font-semibold text-white">Recomendations &middot; Encouragements &middot; Support &middot; Community</div>
                        <h4 class="text-6xl lg:text-display font-bold text-white leading-tight">Testimonials</h4>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-gray-100 p-40 w-full">
            <h4 class="text-7xl text-gray-700 font-bold">What Peple Say</h4>
            <div class="mt-10">
                <h4 class="text-2xl font-semibold text-gray-600">Current Employers</h4>
                <div class="grid grid-cols-3 gap-6 mt-4">
                    <div class="col-span-1">
                        <div class="bg-white rounded-md shadow-md p-6 my-2">
                            <div class="text-gray-800">``Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat itaque consequuntur nisi aliquid optio atque, saepe a incidunt eius.</div>
                            <div class="flex items-center space-x-4 mt-5">
                                <div>
                                    <img src="../../assets/logos/clockstribute_logo.webp" alt="Clickstribute Logo" class="w-12 h-12 rounded-full">
                                </div>
                                <div>
                                    <p class="text-gray-700 font-semibold">Nicholas Nicholas</p>
                                    <p class="text-gray-500">CEO at ClicksTribute</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white rounded-md shadow-md p-6 my-2">
                            <div class="text-gray-800">``Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat itaque consequuntur nisi aliquid optio atque, saepe a incidunt eius.</div>
                            <div class="flex items-center space-x-4 mt-5">
                                <div>
                                    <img src="../../assets/logos/clockstribute_logo.webp" alt="Clickstribute Logo" class="w-12 h-12 rounded-full">
                                </div>
                                <div>
                                    <p class="text-gray-700 font-semibold">Nicholas Nicholas</p>
                                    <p class="text-gray-500">CEO at ClicksTribute</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-1 pt-10">
                        <div class="bg-white rounded-md shadow-md p-6 my-2">
                            <div class="text-gray-800">``Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat itaque consequuntur nisi aliquid optio atque, saepe a incidunt eius.</div>
                            <div class="flex items-center space-x-4 mt-5">
                                <div>
                                    <img src="../../assets/logos/clockstribute_logo.webp" alt="Clickstribute Logo" class="w-12 h-12 rounded-full">
                                </div>
                                <div>
                                    <p class="text-gray-700 font-semibold">Nicholas Nicholas</p>
                                    <p class="text-gray-500">CEO at ClicksTribute</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white rounded-md shadow-md p-6 my-2">
                            <div class="text-gray-800">``Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat itaque consequuntur nisi aliquid optio atque, saepe a incidunt eius.</div>
                            <div class="flex items-center space-x-4 mt-5">
                                <div>
                                    <img src="../../assets/logos/clockstribute_logo.webp" alt="Clickstribute Logo" class="w-12 h-12 rounded-full">
                                </div>
                                <div>
                                    <p class="text-gray-700 font-semibold">Nicholas Nicholas</p>
                                    <p class="text-gray-500">CEO at ClicksTribute</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-1 pt-4">
                        <div class="bg-white rounded-md shadow-md p-6 my-2">
                            <div class="text-gray-800">``Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat itaque consequuntur nisi aliquid optio atque, saepe a incidunt eius.</div>
                            <div class="flex items-center space-x-4 mt-5">
                                <div>
                                    <img src="../../assets/logos/clockstribute_logo.webp" alt="Clickstribute Logo" class="w-12 h-12 rounded-full">
                                </div>
                                <div>
                                    <p class="text-gray-700 font-semibold">Nicholas Nicholas</p>
                                    <p class="text-gray-500">CEO at ClicksTribute</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white rounded-md shadow-md p-6 my-2">
                            <div class="text-gray-800">``Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat itaque consequuntur nisi aliquid optio atque, saepe a incidunt eius.</div>
                            <div class="flex items-center space-x-4 mt-5">
                                <div>
                                    <img src="../../assets/logos/clockstribute_logo.webp" alt="Clickstribute Logo" class="w-12 h-12 rounded-full">
                                </div>
                                <div>
                                    <p class="text-gray-700 font-semibold">Nicholas Nicholas</p>
                                    <p class="text-gray-500">CEO at ClicksTribute</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-20">
                <h4 class="text-2xl font-semibold text-gray-600">Past Employers</h4>
                <div class="grid grid-cols-3 gap-6 mt-4">
                    <div class="col-span-1">
                        <div class="bg-white rounded-md shadow-md p-6 my-2">
                            <div class="text-gray-800">``Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat itaque consequuntur nisi aliquid optio atque, saepe a incidunt eius.</div>
                            <div class="flex items-center space-x-4 mt-5">
                                <div>
                                    <img src="../../assets/logos/clockstribute_logo.webp" alt="Clickstribute Logo" class="w-12 h-12 rounded-full">
                                </div>
                                <div>
                                    <p class="text-gray-700 font-semibold">Nicholas Nicholas</p>
                                    <p class="text-gray-500">CEO at ClicksTribute</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white rounded-md shadow-md p-6 my-2">
                            <div class="text-gray-800">``Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat itaque consequuntur nisi aliquid optio atque, saepe a incidunt eius.</div>
                            <div class="flex items-center space-x-4 mt-5">
                                <div>
                                    <img src="../../assets/logos/clockstribute_logo.webp" alt="Clickstribute Logo" class="w-12 h-12 rounded-full">
                                </div>
                                <div>
                                    <p class="text-gray-700 font-semibold">Nicholas Nicholas</p>
                                    <p class="text-gray-500">CEO at ClicksTribute</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-1 pt-10">
                        <div class="bg-white rounded-md shadow-md p-6 my-2">
                            <div class="text-gray-800">``Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat itaque consequuntur nisi aliquid optio atque, saepe a incidunt eius.</div>
                            <div class="flex items-center space-x-4 mt-5">
                                <div>
                                    <img src="../../assets/logos/clockstribute_logo.webp" alt="Clickstribute Logo" class="w-12 h-12 rounded-full">
                                </div>
                                <div>
                                    <p class="text-gray-700 font-semibold">Nicholas Nicholas</p>
                                    <p class="text-gray-500">CEO at ClicksTribute</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white rounded-md shadow-md p-6 my-2">
                            <div class="text-gray-800">``Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat itaque consequuntur nisi aliquid optio atque, saepe a incidunt eius.</div>
                            <div class="flex items-center space-x-4 mt-5">
                                <div>
                                    <img src="../../assets/logos/clockstribute_logo.webp" alt="Clickstribute Logo" class="w-12 h-12 rounded-full">
                                </div>
                                <div>
                                    <p class="text-gray-700 font-semibold">Nicholas Nicholas</p>
                                    <p class="text-gray-500">CEO at ClicksTribute</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-1 pt-4">
                        <div class="bg-white rounded-md shadow-md p-6 my-2">
                            <div class="text-gray-800">``Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat itaque consequuntur nisi aliquid optio atque, saepe a incidunt eius.</div>
                            <div class="flex items-center space-x-4 mt-5">
                                <div>
                                    <img src="../../assets/logos/clockstribute_logo.webp" alt="Clickstribute Logo" class="w-12 h-12 rounded-full">
                                </div>
                                <div>
                                    <p class="text-gray-700 font-semibold">Nicholas Nicholas</p>
                                    <p class="text-gray-500">CEO at ClicksTribute</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white rounded-md shadow-md p-6 my-2">
                            <div class="text-gray-800">``Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat itaque consequuntur nisi aliquid optio atque, saepe a incidunt eius.</div>
                            <div class="flex items-center space-x-4 mt-5">
                                <div>
                                    <img src="../../assets/logos/clockstribute_logo.webp" alt="Clickstribute Logo" class="w-12 h-12 rounded-full">
                                </div>
                                <div>
                                    <p class="text-gray-700 font-semibold">Nicholas Nicholas</p>
                                    <p class="text-gray-500">CEO at ClicksTribute</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-20">
                <h4 class="text-2xl font-semibold text-gray-600">Fellow Developers</h4>
                <div class="grid grid-cols-3 gap-6 mt-4">
                    <div class="col-span-1">
                        <div class="bg-white rounded-md shadow-md p-6 my-2">
                            <div class="text-gray-800">``Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat itaque consequuntur nisi aliquid optio atque, saepe a incidunt eius.</div>
                            <div class="flex items-center space-x-4 mt-5">
                                <div>
                                    <img src="../../assets/logos/clockstribute_logo.webp" alt="Clickstribute Logo" class="w-12 h-12 rounded-full">
                                </div>
                                <div>
                                    <p class="text-gray-700 font-semibold">Nicholas Nicholas</p>
                                    <p class="text-gray-500">CEO at ClicksTribute</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white rounded-md shadow-md p-6 my-2">
                            <div class="text-gray-800">``Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat itaque consequuntur nisi aliquid optio atque, saepe a incidunt eius.</div>
                            <div class="flex items-center space-x-4 mt-5">
                                <div>
                                    <img src="../../assets/logos/clockstribute_logo.webp" alt="Clickstribute Logo" class="w-12 h-12 rounded-full">
                                </div>
                                <div>
                                    <p class="text-gray-700 font-semibold">Nicholas Nicholas</p>
                                    <p class="text-gray-500">CEO at ClicksTribute</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-1 pt-10">
                        <div class="bg-white rounded-md shadow-md p-6 my-2">
                            <div class="text-gray-800">``Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat itaque consequuntur nisi aliquid optio atque, saepe a incidunt eius.</div>
                            <div class="flex items-center space-x-4 mt-5">
                                <div>
                                    <img src="../../assets/logos/clockstribute_logo.webp" alt="Clickstribute Logo" class="w-12 h-12 rounded-full">
                                </div>
                                <div>
                                    <p class="text-gray-700 font-semibold">Nicholas Nicholas</p>
                                    <p class="text-gray-500">CEO at ClicksTribute</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white rounded-md shadow-md p-6 my-2">
                            <div class="text-gray-800">``Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat itaque consequuntur nisi aliquid optio atque, saepe a incidunt eius.</div>
                            <div class="flex items-center space-x-4 mt-5">
                                <div>
                                    <img src="../../assets/logos/clockstribute_logo.webp" alt="Clickstribute Logo" class="w-12 h-12 rounded-full">
                                </div>
                                <div>
                                    <p class="text-gray-700 font-semibold">Nicholas Nicholas</p>
                                    <p class="text-gray-500">CEO at ClicksTribute</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-1 pt-4">
                        <div class="bg-white rounded-md shadow-md p-6 my-2">
                            <div class="text-gray-800">``Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat itaque consequuntur nisi aliquid optio atque, saepe a incidunt eius.</div>
                            <div class="flex items-center space-x-4 mt-5">
                                <div>
                                    <img src="../../assets/logos/clockstribute_logo.webp" alt="Clickstribute Logo" class="w-12 h-12 rounded-full">
                                </div>
                                <div>
                                    <p class="text-gray-700 font-semibold">Nicholas Nicholas</p>
                                    <p class="text-gray-500">CEO at ClicksTribute</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white rounded-md shadow-md p-6 my-2">
                            <div class="text-gray-800">``Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat itaque consequuntur nisi aliquid optio atque, saepe a incidunt eius.</div>
                            <div class="flex items-center space-x-4 mt-5">
                                <div>
                                    <img src="../../assets/logos/clockstribute_logo.webp" alt="Clickstribute Logo" class="w-12 h-12 rounded-full">
                                </div>
                                <div>
                                    <p class="text-gray-700 font-semibold">Nicholas Nicholas</p>
                                    <p class="text-gray-500">CEO at ClicksTribute</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="cta bg-customBlue w-full px-10 md:px-20 lg:px-40 pt-20 pb-10 lg:pt-40 lg:pb-20">
            <div class="relative text-center">
                <div class="bg-gray-900/60 rounded-full w-40 h-40 absolute -top-20 left-60 -z-10" />
                <h4 class="text-5xl lg:text-7xl font-bold text-white">Convinced Yet?</h4>
                <p class="text-white font-light mt-5">Let's discuss your next big project idea and let me do all the hard work for you.</p>
            </div>
            <div class="mt-10 flex items-center justify-center">
                <PrimaryButton class="px-8 py-3">Hire Me</PrimaryButton>
            </div>
        </div>

        <Footer />
    </div>
</template>
<style scoped>
    .hero {
        clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
    }
    .cta {
        clip-path: polygon(45% 3%, 64% 10%, 100% 10%, 100% 70%, 100% 100%, 0 100%, 0% 70%, 0 10%);
    }
</style>