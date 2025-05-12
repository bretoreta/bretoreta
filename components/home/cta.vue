<template>
    <div class="px-4 py-8 md:px-24 lg:px-8 lg:py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div class="grid gap-5 row-gap-10 lg:grid-cols-2">
            <div class="flex flex-col justify-center">
                <div class="max-w-xl mb-10 md:mx-auto lg:max-w-2xl md:mb-12">
                    <div class="mb-4">
                        <UBadge>Built with military-grade protocols</UBadge>
                    </div>
                    <h2 class="max-w-lg mb-6 text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                        Your Business, Supercharged by 
                        <span class="relative px-1">
                            <div class="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-primary/20"></div>
                            <span class="relative inline-block text-primary">Intelligent Automation</span>
                        </span>
                    </h2>
                    <p class="text-base text-muted md:text-lg">
                        Transform workflows, boost efficiency, and unlock new possibilities with our custom AI Agents. 
                        Designed to integrate seamlessly into your operations, our agents act as tireless digital team 
                        members—processing data, automating tasks, and delivering insights 24/7.
                    </p>
                </div>
                <div class="mt-0 lg:mt-8">
                    <StartTrialButton />
                </div>
            </div>
            <div class="mt-8 lg:mt-0">
                <NuxtPicture
                    format="webp,avif"
                    class="cover"
                    src="/images/sales-going-up.webp"
                />
            </div>
        </div>
    </div>
</template>