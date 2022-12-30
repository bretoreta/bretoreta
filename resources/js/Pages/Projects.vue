<script setup>
    import { Head, Link } from '@inertiajs/inertia-vue3';
    import Header from '@/Components/Header.vue';
    import Footer from '@/Components/Footer.vue';
    import PrimaryButton from '@/Components/PrimaryButton.vue'
</script>

<template>
    <Head title="Projects" />

    <div class="relative bg-gray-100">
        <Header />

        <div class="hero px-6 md:px-20 lg:px-40 w-full py-28 bg-customBlue">
            <div class="grid grid-cols-4">
                <div class="col-span-4">
                    <div class="flex flex-col items-center relative">
                        <div class="bg-gray-900/60 rounded-full w-40 h-40 absolute -top-12 left-72 -z-10" />
                        <div class="text-sm font-semibold text-white">Projects Showcase &middot; Ideas &middot; Startups</div>
                        <h4 class="text-6xl lg:text-display font-bold text-white leading-tight">Projects</h4>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-gray-100 p-40 w-full">
            <h4 class="text-7xl text-gray-700 font-bold">Client's Projects</h4>
            <div class="mt-20">
                <h4 class="text-2xl font-semibold text-gray-700">ClicksTribute Platform</h4>
                <div class="flex items-center space-x-6 mt-2">
                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p class="text-gray-500 text-sm">2022 September - Current</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                        <p class="text-gray-500 text-sm">Remotely Employed (Upwork)</p>
                    </div>
                    <div class="flex space-x-2 items-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        <p class="text-sm font-semibold">https://clickstribute.com</p>
                    </div>
                </div>
                <div class="mt-5">
                    <p class="text-gray-700">This project is more of an affiliate marketing and adertising platform. It aims at making affiliate marketing a breeze and as the title say, they pay tributes to your clicks. The project is projected to have the following modules: 
                        A complete and secure authentication module, An offer tracking and crediting module, Spam Protection by H-Captcha Integration, A fully functional Blog System, Mailing and Notifications sending module, Real-time notifications system, A postback and Crediting Module and A secure Payments and Account management module. The project is still under active development.</p>
                </div>
            </div>
            <div class="mt-20">
                <h4 class="text-2xl font-semibold text-gray-700">Aussie Association Of Somalia Website</h4>
                <div class="flex items-center space-x-6 mt-2">
                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p class="text-gray-500 text-sm">2022 October - 2022 November</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                        <p class="text-gray-500 text-sm">Remotely Employed (Inkpot Group LLC)</p>
                    </div>
                    <div class="flex space-x-2 items-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        <p class="text-sm font-semibold">https://aas.org.so</p>
                    </div>
                </div>
                <div class="mt-5">
                    <p class="text-gray-700">This Project involved a complete revamp of the old website, keeping the existing data and replacing the old theme with a new, more pleasing one. The project was short as there was not much to do. I however enjoyed the experience and gained some valuable skills.
                        The complete project has the following features: A fully functional Blog System, A Login System, Mailing System, Wordpress Powered Backend, A Donation System and Google Maps Integration.
                    </p>
                </div>
            </div>
            <div class="mt-20">
                <h4 class="text-2xl font-semibold text-gray-700">Prime Charters International Website</h4>
                <div class="flex items-center space-x-6 mt-2">
                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p class="text-gray-500 text-sm">2022 April - 2022 June</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                        <p class="text-gray-500 text-sm">On-Site Employed (Inkpot Group LLC)</p>
                    </div>
                    <div class="flex space-x-2 items-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        <p class="text-sm font-semibold">https://primechartersinternational.co.ke</p>
                    </div>
                </div>
                <div class="mt-5">
                    <p class="text-gray-700">This Project involved building an online shop-like platform where users can view all the products available from the company and even place orders. The latter was however scrapped due to lack of fundings. The project took quite some time as it was being developed
                        from the ground upwards. The complete project has the following features: A fully functional Blog System, A login System, Spam Protection, Mailing System, Wordpress Powered Backend and WooCommerce Shopping Module Integration, WhatsApp Chat Integration and Error Logging and Reporting System.
                    </p>
                </div>
            </div>
            <div class="mt-20">
                <h4 class="text-2xl font-semibold text-gray-700">Belya Fiber Exporters Website</h4>
                <div class="flex items-center space-x-6 mt-2">
                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p class="text-gray-500 text-sm">2022 March - 2022 May</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                        <p class="text-gray-500 text-sm">On-Site Employed (Inkpot Group LLC)</p>
                    </div>
                    <div class="flex space-x-2 items-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        <p class="text-sm font-semibold">https://belyafiberexporters.co.ke</p>
                    </div>
                </div>
                <div class="mt-5">
                    <p class="text-gray-700">This Project involved building an online shop-like platform where users can view all the products available from the company and even place orders - just like Prime Charters International. The project also took quite some time as it was being developed
                        from the ground upwards. The complete project has the following features: A fully functional Blog System, A login System, Spam Protection, Mailing System, Wordpress Powered Backend and WooCommerce Shopping Module Integration, WhatsApp Chat Integration and Error Logging and Reporting System.</p>
                </div>
            </div>
            <div class="mt-20">
                <h4 class="text-2xl font-semibold text-gray-700">Siaya Education Project Website</h4>
                <div class="flex items-center space-x-6 mt-2">
                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p class="text-gray-500 text-sm">2021 October - 2021 October</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                        <p class="text-gray-500 text-sm">On-Site Employed (Inkpot Group LLC)</p>
                    </div>
                    <div class="flex space-x-2 items-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        <p class="text-sm font-semibold">https://siayaeducationproject.org</p>
                    </div>
                </div>
                <div class="mt-5">
                    <p class="text-gray-700">This project featured building a basic one pager for a non-profit organization. This project was rather fast to complete as it's requirements and funtionalities were very minimal. The complete Project features the following abilities :
                        A login System, Spam Protection, Mailing System, Wordpress Powered Backend.
                    </p>
                </div>
            </div>
        </div>

        <div class="bg-lime-600 p-40 w-full">
            <h4 class="text-7xl text-lime-900 font-bold">Personal Projects</h4>
            <div class="mt-20">
                <h4 class="text-2xl font-semibold text-lime-200">Portfolio - Personal Website</h4>
                <div class="flex items-center space-x-6 mt-2">
                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-lime-900">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p class="text-lime-900 text-sm font-semibold">2021 September - Current</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-lime-900">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                        <p class="text-lime-900 text-sm font-semibold">Self Employed</p>
                    </div>
                    <div class="flex space-x-2 items-center text-lime-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-lime-900">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        <p class="text-sm font-semibold">https://bretoreta.me</p>
                    </div>
                </div>
                <div class="mt-5">
                    <p class="text-lime-300">This is a project I have thought of over the years and finally got to make it possible. While developing this project, I learned new technologies and CSS properties e.g. background-clipping that I have used widely in this project. This was a personal inspiration to make a clean minimal and expressive website for my self and eventually turn in into a blog. I am yet to realise this dream but plans are in place.</p>
                </div>
            </div>
            <div class="mt-20">
                <h4 class="text-2xl font-semibold text-lime-200">Electra - Online Voting Platform</h4>
                <div class="flex items-center space-x-6 mt-2">
                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-lime-900">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p class="text-lime-900 text-sm font-semibold">2018 Sept - Actively Developing</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-lime-900">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                        <p class="text-lime-900 text-sm font-semibold">Self Employed</p>
                    </div>
                    <div class="flex space-x-2 items-center text-lime-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-lime-900">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        <p class="text-sm font-semibold">https://electravoting.online</p>
                    </div>
                </div>
                <div class="mt-5">
                    <p class="text-lime-300">Soon as I joined campus I had a dream, of builing my own system then use it as a SAAS. I had several ideas in mind but after a long mind battle of what I deserve best and what the market needs, I settled on building an online voting platform. As simple as it seems this project has taken most of my time as it required a lot of research. I released the first verion on <a class="text-lime-900 font-semibold hover:underline" href="http://github.com/bretoreta/electra" target="_blank" rel="noopener noreferrer">GitHub</a> and have been working on an update to that for the past 1 Year. I know 1 year is such a long time, but you must consider I was a student then, and didn't have so much time available. The project is under active development and I hope to put up a team and make Electra an inernationally recognized SAAS.</p>
                </div>
            </div>
            <div class="mt-20">
                <h4 class="text-2xl font-semibold text-lime-200">Netflix Clone - Cloned Platform</h4>
                <div class="flex items-center space-x-6 mt-2">
                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-lime-900">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p class="text-lime-900 text-sm font-semibold">2019 January - 2019 February</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-lime-900">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                        <p class="text-lime-900 text-sm font-semibold">Self Employed</p>
                    </div>
                    <div class="flex space-x-2 items-center text-lime-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-lime-900">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        <p class="text-sm font-semibold">https://github.com/bretoreta/netflix-clone-react</p>
                    </div>
                </div>
                <div class="mt-5">
                    <p class="text-lime-300">The major purpose of this project was to learn React, a popular frontend technology that is widely used among the tech community. I however fell apart with React after I met Vue Js which, according to me, was easier to learn and I quickly grasped Vue's concepts. I however challenged myself to build a react project and made it happen. The project is not hosted however, the project files can be found on the GitHub link mentioned above. The project is very basic and only replicates the basic Netflix use bases i.e. showing movies on homepage and playing trailers if any, only. Plans are in place to make it live.</p>
                </div>
            </div>
        </div>

        <div class="bg-gray-100 p-40 w-full">
            <h4 class="text-7xl text-gray-700 font-bold">Project Ideas</h4>
            <div class="mt-20">
                <h4 class="text-2xl font-semibold text-gray-700">Tuska - Task Management Platform</h4>
                <div class="flex items-center space-x-6 mt-2">
                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p class="text-gray-500 text-sm">Concept</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                        <p class="text-gray-500 text-sm">Self Employed</p>
                    </div>
                    <div class="flex space-x-2 items-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        <p class="text-sm font-semibold">Concept</p>
                    </div>
                </div>
                <div class="mt-5">
                    <p class="text-gray-700">The idea is to have a simple task management system that low end product consumers can use. I had already built a simple task management system and is avalable on my <a class="text-blue-600 font-semibold hover:underline" href="http://github.com/bretoreta/pipe" target="_blank" rel="noopener noreferrer">GitHub</a>, but the project lacked so many aspects of a task management system. It had so many shortcomings, one key shortcoming being lack of tasks tracking: the project had no way of tracking time used for each task and that was a major concern. I decided to scrap the whole project and I'm now having this new concept that I'd like to visualize. The app will probably take me longer to complete but it's a work in progress.</p>
                </div>
            </div>
            <div class="mt-20">
                <h4 class="text-2xl font-semibold text-gray-700">Have a Project Idea? Leave Me A <Link :href="route('contact_me')" class="font-semibold text-blue-600 hover:underline">Message</Link>. I'll Get Back To You Personally.</h4>
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