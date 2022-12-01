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
            <div class="mt-10">
                <h4 class="text-xl font-semibold text-gray-700">Lead Designer</h4>
                <div class="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p class="text-gray-500 text-sm">2019 March - Current</p>
                </div>
                <div class="mt-5">
                    <p class="text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, eligendi hic numquam eos dolore enim facere totam a? Neque quas veniam libero quaerat error tenetur sapiente hic cupiditate, fugit harum consequatur quidem culpa, dolores rem ad! Accusamus alias, eligendi ratione veniam repellat voluptatem omnis quod, ducimus magni aliquid nostrum pariatur similique, eaque porro quis accusantium aperiam rem! Saepe minus numquam quibusdam delectus hic cum nisi soluta excepturi eos libero? Minima perferendis eos voluptates. Est eius, labore autem doloribus esse, blanditiis aliquam animi pariatur unde, laboriosam exercitationem eos neque nulla sed dolorum libero possimus sit molestiae perspiciatis velit iste temporibus repellendus?</p>
                    <p class="text-gray-700 mt-3">Fugiat neque doloremque culpa ducimus. Delectus animi maiores inventore unde modi temporibus labore minima placeat ea totam sequi porro, vitae quas similique laborum perferendis neque, dolore facere atque iste odit. Ipsam hic laboriosam corrupti, pariatur delectus animi voluptatem suscipit ad! Eum itaque laborum iste perferendis voluptatibus nisi corrupti tenetur, beatae blanditiis perspiciatis voluptatem recusandae molestias optio officiis possimus nesciunt rerum! Totam, dolore alias quas rem officia autem! Iure mollitia consectetur id quas illum corrupti dignissimos quibusdam, omnis fuga similique earum, deleniti incidunt quaerat culpa quis, totam illo alias nostrum atque vitae veritatis animi a. Doloribus voluptates pariatur praesentium similique minus?</p>
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
</style>