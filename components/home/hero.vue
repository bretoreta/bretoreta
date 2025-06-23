<template>
    <div id="hero" class="grid content-center min-h-[40rem] lg:min-h-[80dvh]">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center relative z-10">
            <div>
                <span class="text-primary border-l-2 pl-2">Custom AI Agents That Work While You Rest</span>
                <h1 class="text-5xl font-black mt-4 mb-8 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text">Hello 👋, I'm Bret Oreta <br> I make Websites and AI Agents</h1>
                <p class="text-muted">
                    Take a real break while your business keeps running. Adopt task-focused AI automation agents that save you time, 
                    reduce manual effort, and scale your operations—so you can finally enjoy that well-earned vacation.
                </p>
                <div class="mt-8 grid grid-rows-1">
                    <div class="inline-flex space-x-4">
                        <StartTrialButton size="xl" />
                        <ContactButton size="xl" />
                    </div>
                    <span class="text-muted text-sm mt-4">✅ No Upfront Payment — 100% Risk-Free <br />✅ One-Month Free Trial — Full Access Included</span>
                </div>
            </div>
            <div>
                <NuxtImg src="/images/bret_oreta.png" format="webp,avif" alt="Bret Oreta" width="600px" />
            </div>
        </div>
    </div>
</template>