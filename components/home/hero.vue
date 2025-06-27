<template>
    <div id="hero" class="grid content-center min-h-[40rem] lg:min-h-[80dvh]">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center relative z-10 pl-4 lg:pl-10 pt-20 md:pt-4">
            <div>
                <Availability v-motion-slide-bottom />
                <h1 v-motion-slide-bottom class="text-5xl font-black mt-4 mb-8 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text">Hello 👋, I'm Bret Oreta <br> I make Websites and AI Agents</h1>
                <p class="text-muted" v-motion-slide-bottom :delay="100">
                    Take a real break while your business keeps running. Adopt task-focused AI automation agents that save you time, 
                    reduce manual effort, and scale your operations—so you can finally enjoy that well-earned vacation.
                </p>
                <div class="mt-8 grid grid-rows-1">
                    <div class="inline-flex space-x-4" v-motion-slide-bottom :delay="150">
                        <StartTrialButton size="xl" />
                    </div>
                    <span v-motion-slide-bottom :delay="200" class="text-muted text-sm mt-4">✅ No Upfront Payment — 100% Risk-Free <br />✅ One-Month Free Trial — Full Access Included</span>
                </div>
            </div>
            <div class="grid justify-center">
                <NuxtImg src="/images/bret_oreta.png" format="webp,avif" alt="Bret Oreta" width="600px" v-motion-slide-bottom :delay="200" />
            </div>
        </div>
    </div>
</template>