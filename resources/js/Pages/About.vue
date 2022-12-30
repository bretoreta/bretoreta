<script setup>
    import { Head, Link } from '@inertiajs/inertia-vue3';
    import Header from '@/Components/Header.vue';
    import Footer from '@/Components/Footer.vue';
    import PrimaryButton from '@/Components/PrimaryButton.vue'
</script>

<template>
    <Head title="About Me" />

    <div class="relative bg-gray-100">
        <Header />

        <div class="hero px-6 md:px-20 lg:px-40 w-full py-28 bg-customBlue">
            <div class="grid grid-cols-4">
                <div class="col-span-4">
                    <div class="flex flex-col items-center relative">
                        <div class="bg-gray-900/60 rounded-full w-40 h-40 absolute -top-12 left-72 -z-10" />
                        <div class="text-sm font-semibold text-white">Experience &middot; Education &middot; Hobbies</div>
                        <h4 class="text-6xl lg:text-display font-bold text-white leading-tight">About Me</h4>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-gray-100 p-40 w-full">
            <h4 class="text-7xl text-gray-700 font-bold">My Experience</h4>
            <div class="mt-20">
                <h4 class="text-2xl font-semibold text-gray-700">Full Stack Developer - Remote</h4>
                <div class="flex items-center space-x-6 mt-2">
                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p class="text-gray-500 text-sm">2021 September - Current</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                        <p class="text-gray-500 text-sm">ClicksTribute</p>
                    </div>
                </div>
                <div class="mt-5">
                    <p class="text-gray-700">In my role, I am responsible for the full application development cycle. As a full-stack developer, I am responsible for the frontend, backend as well as devops. I am also a key contributor to the application's design patterns and user experience designs: I have contributed to the logo design, landing page design, and the general app look and feel. Coming up with a working color scheme from the logo is also my job.</p>
                    <p class="text-gray-700 mt-3">I also contribute a key role in debugging and fixing issues with the application in development. I identify, assess, verify and come up with mitigating methods and solutions for the bugs discovered within the system. I am also responsible for handling the security of users who will be using the system, ensuring that their data remains confidential and that the system is strongly protected from attackers and or hackers.</p>
                </div>
            </div>
            <div class="mt-20">
                <h4 class="text-2xl font-semibold text-gray-700">Backend Developer - Remote</h4>
                <div class="flex items-center space-x-6 mt-2">
                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p class="text-gray-500 text-sm">2021 February - 2021 March</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                        <p class="text-gray-500 text-sm">Worksson Inc.</p>
                    </div>
                </div>
                <div class="mt-5">
                    <p class="text-gray-700">In my role, I was involved in the full-application development cycle and participated in development team stand-ups and scrums to meet aggressive deadlines. I, together with a team of other developers, were responsible for building out a strong, extensive, secure, robust and scalable backend for the platform, which we delivered without a doubt.</p>
                    <p class="text-gray-700 mt-3">I also participated in coming up with amicable solutions to the existing user interface designs in order to give the website a new look. The existing user interface was not the best so we had to come up with another design that would give users the best experience using the platform.</p>
                </div>
            </div>
            <div class="mt-20">
                <h4 class="text-2xl font-semibold text-gray-700">Web Developer & Designer - On Site</h4>
                <div class="flex items-center space-x-6 mt-2">
                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p class="text-gray-500 text-sm">2019 March - 2020 September</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                        <p class="text-gray-500 text-sm">Inkpot Group LLC</p>
                    </div>
                </div>
                <div class="mt-5">
                    <p class="text-gray-700">In my role I was also assigned design and development jobs tasked to the company and delivered all jobs on time. I was assigned the role of designing and coming up with the company logo and other official documents e.g. Invoice document</p>
                    <p class="text-gray-700 mt-3">I developed and made logos for Belya Fiber Exporters, Aussie Association of Somalia and Prime Charters International. The official logos for all the projects are used in their live projects, also developed by me, and the live projects can be accessed using these links: <a class="text-sky-500 hover:underline" href="https://belyafiberexporters.co.ke" target="_blank" rel="noopener noreferrer">Belya Fiber Exporters</a>, <a class="text-sky-500 hover:underline" href="https://aas.org.so" target="_blank" rel="noopener noreferrer">Aussie Association of Somalia</a> and <a class="text-sky-500 hover:underline" href="https://primechartersinternational.co.ke" target="_blank" rel="noopener noreferrer">Prime Charters International</a></p>
                </div>
            </div>
            <div class="mt-20">
                <h4 class="text-2xl font-semibold text-gray-700">Lead Designer - On Site</h4>
                <div class="flex items-center space-x-6 mt-2">
                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p class="text-gray-500 text-sm">2019 March - 2020 September</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                        <p class="text-gray-500 text-sm">Inkpot Group LLC</p>
                    </div>
                </div>
                <div class="mt-5">
                    <p class="text-gray-700">Being the lead designer, I was in charge of coming up with several layouts for the magazine templates while keeping simplicity of the magazine uncompromised. I participated in making sure every release of a fresh edition of the magazine is clean and doesn’t in any way imitate the layout of any existing magazine.</p>
                    <p class="text-gray-700 mt-3">As a lead designer, I was assigned a team of other designers who we would work with hand-in-hand to come up with designs for the magazine. I was responsible for handling the job of managing my team's work while upholding the company's design guidelines and standards set.</p>
                </div>
            </div>
        </div>

        <div class="bg-lime-600 p-40 w-full">
            <div class="grid grid-cols-4 items-center">
                <div class="col-span-2 mx-auto">
                    <h4 class="text-7xl text-white font-bold">My Education</h4>
                    <div class="mt-10">
                        <h4 class="text-2xl font-semibold text-lime-200">Bsc. Computer Science</h4>
                        <div class="flex items-center space-x-6 mt-2">
                            <div class="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-lime-800">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p class="text-lime-300 text-sm">Joined 2018 September</p>
                            </div>
                            <div class="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-lime-800">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                                </svg>
                                <p class="text-lime-300 text-sm">Maseno University - Kenya</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-10">
                        <h4 class="text-2xl font-semibold text-lime-200">Kenya Certificate of Secondary Education</h4>
                        <div class="flex items-center space-x-6 mt-2">
                            <div class="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-lime-800">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p class="text-lime-300 text-sm">Joined 2014 January</p>
                            </div>
                            <div class="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-lime-800">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                                </svg>
                                <p class="text-lime-300 text-sm">Agoro Sare High School - Kenya</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-10">
                        <h4 class="text-2xl font-semibold text-lime-200">Kenya Certificate of Primary Education</h4>
                        <div class="flex items-center space-x-6 mt-2">
                            <div class="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-lime-800">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p class="text-lime-300 text-sm">Joined 2006 January</p>
                            </div>
                            <div class="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-lime-800">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                                </svg>
                                <p class="text-lime-300 text-sm">Duha Primary School - Kenya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-2">
                    <img src="../../assets/images/my_education_doodle.svg" alt="My Education Doodle" class="w-60 mx-auto">
                </div>
            </div>
        </div>

        <div class="bg-gray-100 p-40 w-full">
            <div class="grid grid-cols-4 items-center">
                <div class="col-span-2">
                    <img src="../../assets/images/my_hobbies_doodle.svg" alt="My Hobbies Doodle" class="w-60 mx-auto">
                </div>
                <div class="col-span-2">
                    <h4 class="text-7xl text-gray-700 font-bold">My Hobbies</h4>
                    <div class="mt-10">
                        <h4 class="text-2xl font-semibold text-gray-700">Watching YouTube Tutorials, Drawing, Playing Mobile Games, Walking With My Dog.</h4>
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