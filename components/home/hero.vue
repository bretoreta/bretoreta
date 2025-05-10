<template>
    <div id="hero" class="grid content-center min-h-[80dvh]">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 content-center relative z-10">
            <div>
                <span class="text-primary border-l-2 pl-2">Let AI do the heavy-lifting, you deserve a rest</span>
                <h1 class="text-5xl font-black mt-4 mb-8 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text">AI Agents that let you enjoy your hard earned vacation.</h1>
                <p class="text-muted">
                    Specialized in cutting edge AI Agents developments, I craft immersive experiences that guarantee customer satisfaction
                    elevating your brand in the Digital Landscape.
                </p>
                <div class="mt-8 grid grid-rows-1">
                    <div class="inline-flex space-x-4">
                        <StartTrialButton size="xl" />
                        <ContactButton size="xl" />
                    </div>
                    <span class="text-muted text-xs mt-2">No upfront payment &middot; Free for One Month</span>
                </div>
            </div>
            <!-- <div class="hidden lg:block lg:absolute z-0 -top-72 w-full">
                <div class="relative grid h-screen place-content-center">
                    <InteractiveGrid
                    :class="'[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]'"
                    :width="20"
                    :height="20"
                    :squares="[80, 80]"
                    squares-class-name="hover:fill-primary"
                    />
                </div>
            </div> -->
            <div>
                Image
            </div>
        </div>
    </div>
</template>