<template>
    <div class="relative grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10 items-center pb-10 lg:pb-20 px-0 lg:px-14">
        <div class="flex flex-col justify-center">
            <div class="max-w-xl mb-10 md:mx-auto lg:max-w-2xl md:mb-12">
                <div class="mb-4" v-motion-slide-visible-once-bottom>
                    <UBadge>Built with military-grade protocols</UBadge>
                </div>
                <h2 class="max-w-lg mb-6 text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none" v-motion-slide-visible-once-bottom :delay="100">
                    Your Business, Supercharged by 
                    <span class="relative px-1">
                        <div class="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-primary/20"></div>
                        <span class="relative inline-block text-primary">Intelligent Automation</span>
                    </span>
                </h2>
                <p class="text-base text-muted md:text-lg" v-motion-slide-visible-once-bottom :delay="150">
                    Transform workflows, boost efficiency, and unlock new possibilities with our custom AI Agents. 
                    Designed to integrate seamlessly into your operations, our agents act as tireless digital team 
                    members—processing data, automating tasks, and delivering insights 24/7.
                </p>
                <div class="mt-8" v-motion-slide-visible-once-bottom :delay="200">
                    <StartTrialButton size="lg" />
                </div>
            </div>
        </div>
        <div v-motion-slide-visible-once-bottom :delay="300">
            <NuxtPicture
                format="webp,avif"
                class="cover"
                src="/images/sales-going-up.webp"
                alt="Sales going up illustration"
            />
        </div>
    </div>
</template>