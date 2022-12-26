<script setup>
    import { Head, Link } from '@inertiajs/inertia-vue3';
    import Header from '@/Components/Header.vue';
    import Footer from '@/Components/Footer.vue';
    import PrimaryButton from '@/Components/PrimaryButton.vue'
</script>

<template>
    <Head title="Welcome" />

    <div class="relative bg-gray-100">
        <Header />

        <div class="hero px-6 md:px-20 lg:px-40 w-full py-28 bg-customBlue">
            <div class="grid grid-cols-4">
                <div class="col-span-4 lg:col-span-3">
                    <div class="flex flex-col relative">
                        <div class="bg-gray-900/60 rounded-full w-40 h-40 absolute -top-12 -left-20 -z-10" />
                        <div class="text-sm font-semibold text-white">Laravel &middot; Vue JS &middot; Tailwind CSS</div>
                        <h4 class="text-6xl lg:text-display font-bold text-white leading-tight">Hello, I am <br> Bret Oreta</h4>
                        <p class="text-white font-light max-w-lg">
                            I have expertise in developing production-ready, scalable and fast web applications using Laravel + Vue Js stack. Need to hire me?
                        </p>
                        <div class="mt-8">
                            <PrimaryButton class="px-8 py-3">Hire Me</PrimaryButton>
                        </div>
                    </div>
                </div>
                <div class="hidden lg:grid lg:col-span-1">
                    <div class="block -ml-20">
                        <img src="../../assets/images/hero_doodle.svg" alt="Hero Area Doodle" class="w-72">
                    </div>
                </div>
            </div>
        </div>

        <div class="about_me bg-gray-100 w-full px-10 md:px-20 lg:p-40">
            <div class="grid grid-cols-4">
                <div class="hidden lg:grid lg:col-span-2">
                    <div class="flex items-center w-full justify-center">
                        <img src="../../assets/images/about_doodle.svg" alt="About Me Area Doodle" class="w-72">
                    </div>
                </div>
                <div class="col-span-4 lg:col-span-2">
                    <div class="relative mt-10 lg:mt-0">
                        <div class="bg-gray-900/60 rounded-full w-32 lg:w-40 h-32 lg:h-40 absolute -top-10 lg:-top-12 -left-20 z-0" />
                        <h4 class="text-5xl lg:text-7xl font-bold text-gray-700">Let Me Tell You About Myself.</h4>
                        <p class="text-gray-500 mt-10 w-full lg:max-w-lg">
                            I am a full-stack web developer with 4+ years experience (and counting...) using Laravel + Vue Js and Talwind CSS as my styling library.
                        </p>
                        <p class="text-gray-500 mt-4 w-full lg:max-w-lg">
                            I have built amazing projects over the years (I’ll show you) and is consistently learning new trends to be up to date with the latest tech.
                        </p>
                        <PrimaryButton class="mt-10">Read More</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>

        <div class="know_me bg-lime-600 w-full p-10 md:p-20 lg:p-40">
            <div class="grid grid-cols-4 mt-20">
                <div class="col-span-4 lg:col-span-2 lg:ml-20">
                    <div class="relative">
                        <div class="bg-lime-900/80 rounded-full w-40 h-40 absolute -top-20 -left-20 -z-10" />
                        <h4 class="text-5xl lg:text-7xl font-bold text-black opacity-70">Get To Know My Skilset</h4>
                        <div class="mt-10">
                            <div class="mb-8">
                                <p class="text-lime-200 text-lg font-semibold">1. The Laravel Framework</p>
                                <p class="text-lime-300 text-sm my-2">I use Laravel for backend programming. I can also use Laravel to build APIs for mobile apps. Laravel is a stable PHP framwork and I love it's elegant and expressive syntax.</p>
                                <div class="w-full mt-1 bg-lime-500 rounded-full h-2.5">
                                    <div class="bg-lime-900 h-2.5 rounded-full" style="width: 90%"></div>
                                </div>
                            </div>
                            <div class="mb-8">
                                <p class="text-lime-200 text-lg font-semibold">2. Vue Js Framework</p>
                                <p class="text-lime-300 text-sm my-2">I use Vue for frontend programming. I choose Vue because as their documentation says, "It's a progressive framwork". Vue Js is also robust and can build Single Page Apps that are fast and scalable.</p>
                                <div class="w-full mt-1 bg-lime-500 rounded-full h-2.5">
                                    <div class="bg-lime-900 h-2.5 rounded-full" style="width: 80%"></div>
                                </div>
                            </div>
                            <div class="mb-8">
                                <p class="text-lime-200 text-lg font-semibold">3. Tailwind CSS</p>
                                <p class="text-lime-300 text-sm my-2">I use Tailwind for styling purposes. I love Tailwind because of its flexibility to build functional components just the way you like it. Tailwind also ships with a minifier to ensure you only export the classes you used in production, making it fast.</p>
                                <div class="w-full mt-1 bg-lime-500 rounded-full h-2.5">
                                    <div class="bg-lime-900 h-2.5 rounded-full" style="width: 93%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden lg:grid lg:col-span-2">
                    <div class="flex items-center w-full justify-center h-full">
                        <img src="../../assets/images/know_me_better_doodle.svg" alt="Know Me Better Doodle" class="w-96">
                    </div>
                </div>
            </div>
        </div>

        <div class="my_projects bg-gray-100 w-full p-10 md:p-20 lg:p-40">
            <div class="grid grid-cols-4">
                <div class="hidden lg:grid lg:col-span-2">
                    <div class="flex items-center w-full justify-center">
                        <img src="../../assets/images/projects_doodle.svg" alt="Projects Doodle" class="w-72">
                    </div>
                </div>
                <div class="col-span-4 lg:col-span-2">
                    <div class="relative">
                        <div class="bg-gray-900/70 rounded-full w-40 h-40 absolute -top-20 -left-20 z-10" />
                        <h4 class="text-5xl lg:text-7xl font-bold text-gray-700">Enough Said, Let Me Show You My Projects.</h4>
                        <div class="mt-10">
                            <div class="bg-white rounded-2xl shadow-md p-1">
                                <div class="flex flex-col lg:flex-row items-center">
                                    <div class="w-full lg:w-1/3">
                                        <img src="../../assets/logos/clockstribute_logo.webp" alt="Clickstribute Logo" class="w-full rounded-2xl">
                                    </div>
                                    <div class="w-full lg:w-2/3">
                                        <div class="block p-4">
                                            <div class="header">
                                                <p class="text-black font-bold">Clickstribute Platform</p>
                                                <p class="text-gray-500 text-sm">2022 | Website (Under Development)</p>
                                            </div>
                                            <div class="flex flex-col space-y-1 mt-10">
                                                <div class="flex space-x-3 items-center text-blue-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                                    </svg>
                                                    <p class="text-sm font-semibold">https://Clickstribute.com</p>
                                                </div>
                                                <div class="flex space-x-3 items-center text-gray-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <p class="text-sm font-semibold">2-3 Months</p>
                                                </div>
                                                <div class="flex space-x-3 items-center text-gray-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                                    </svg>
                                                    <p class="text-sm font-semibold">Under Active Development</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-4 gap-10">
                <div class="col-span-4 lg:col-span-2 mt-10">
                    <div class="bg-white rounded-2xl shadow-md p-1">
                        <div class="flex flex-col lg:flex-row items-center">
                            <div class="w-full lg:w-1/3">
                                <img src="../../assets/logos/clockstribute_logo.webp" alt="Clickstribute Logo" class="w-full rounded-2xl">
                            </div>
                            <div class="w-full lg:w-2/3">
                                <div class="block p-4">
                                    <div class="header">
                                        <p class="text-black font-bold">PrimeCharters International Website</p>
                                        <p class="text-gray-500 text-sm">2021 | Website (Completed)</p>
                                    </div>
                                    <div class="flex flex-col space-y-1 mt-10">
                                        <div class="flex space-x-3 items-center text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                            </svg>
                                            <p class="text-sm font-semibold">https://primechartersinternational.co.ke</p>
                                        </div>
                                        <div class="flex space-x-3 items-center text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <p class="text-sm font-semibold">2 Months</p>
                                        </div>
                                        <div class="flex space-x-3 items-center text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                            </svg>
                                            <p class="text-sm font-semibold">Completed November, 2021</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-4 lg:col-span-2 lg:mt-20">
                    <div class="bg-white rounded-2xl shadow-md p-1">
                        <div class="flex flex-col lg:flex-row items-center">
                            <div class="w-full lg:w-1/3">
                                <img src="../../assets/logos/clockstribute_logo.webp" alt="Clickstribute Logo" class="w-full rounded-2xl">
                            </div>
                            <div class="w-full lg:w-2/3">
                                <div class="block p-4">
                                    <div class="header">
                                        <p class="text-black font-bold">Aussie Association Of Somalia Website</p>
                                        <p class="text-gray-500 text-sm">2022 | Website (Completed)</p>
                                    </div>
                                    <div class="flex flex-col space-y-1 mt-10">
                                        <div class="flex space-x-3 items-center text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                            </svg>
                                            <p class="text-sm font-semibold">https://aas.org.so</p>
                                        </div>
                                        <div class="flex space-x-3 items-center text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <p class="text-sm font-semibold">1 Month</p>
                                        </div>
                                        <div class="flex space-x-3 items-center text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                            </svg>
                                            <p class="text-sm font-semibold">Completed September, 2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full flex justify-center mt-10">
                <PrimaryButton class="px-8">View All</PrimaryButton>
            </div>
        </div>

        <div class="cta bg-customBlue w-full px-10 md:px-20 lg:px-40 py-20 lg:py-32">
            <div class="relative text-center">
                <div class="bg-gray-900/60 rounded-full w-40 h-40 absolute -top-20 left-60 -z-10" />
                <h4 class="text-5xl lg:text-7xl font-bold text-white">Convinced Yet?</h4>
                <p class="text-white font-light mt-5">Let's discuss your next big project idea and let me do all the hard work for you.</p>
            </div>
            <div class="mt-10 flex items-center justify-center">
                <PrimaryButton class="px-8 py-3">Hire Me</PrimaryButton>
            </div>
        </div>

        <div class="socials bg-gray-100 w-full p-10 md:p-20 lg:p-40">
            <div class="grid grid-cols-4 lg:ml-20">
                <div class="col-span-4 lg:col-span-2">
                    <div class="relative">
                        <div class="bg-gray-900/70 rounded-full w-40 h-40 absolute -top-20 -left-20 z-10" />
                        <h4 class="text-5xl lg:text-7xl font-bold text-gray-700">Wait! Before You Go, Check Me Out On Social Media.</h4>
                    </div>
                    <div class="flex items-center space-x-4 mt-10 lg:mt-20">
                        <Link class="w-10">
                            <img src="../../assets/logos/facebook_logo.svg" alt="Facebook Logo">
                        </Link>
                        <Link class="w-10">
                            <img src="../../assets/logos/instagram_logo.svg" alt="Instagram Logo">
                        </Link>
                        <Link class="w-10">
                            <img src="../../assets/logos/linkedin_logo.svg" alt="LinkedIn Logo">
                        </Link>
                        <Link class="w-10">
                            <img src="../../assets/logos/snapchat_logo.svg" alt="SnapChat Logo">
                        </Link>
                        <Link class="w-10">
                            <img src="../../assets/logos/twitter_logo.svg" alt="Twitter Logo">
                        </Link>
                        <Link class="w-10">
                            <img src="../../assets/logos/whatsapp_logo.svg" alt="WhatsApp Logo">
                        </Link>
                        <Link class="w-10">
                            <img src="../../assets/logos/youtube_logo.svg" alt="Youtube Logo">
                        </Link>
                    </div>
                </div>
                <div class="hidden lg:grid lg:col-span-2">
                    <div class="flex items-center w-full justify-center">
                        <img src="../../assets/images/back_to_work_doodle.svg" alt="Socials Doodle" class="w-96">
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>
<style scoped>
    .hero {
        clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
    }
    .know_me {
        clip-path: polygon(45% 3%, 64% 10%, 100% 10%, 100% 70%, 100% 100%, 0 100%, 0% 70%, 0 10%);
    }
    .cta {
        clip-path: polygon(0% 0%, 100% 0, 100% 78%, 71% 100%, 0 80%);
    }
    .footer {
        clip-path: polygon(23% 0, 100% 30%, 100% 100%, 0 100%, 0 15%);
    }
</style>