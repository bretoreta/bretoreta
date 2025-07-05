<template>
  <section class="bg-gray-50 dark:bg-[#0d1117] text-gray-900 dark:text-white pt-20 px-6 md:px-20">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      <!-- Text Section -->
      <div class="md:col-span-7">
        <Availability v-motion-slide-bottom />

        <h1 class="text-4xl md:text-6xl font-bold leading-tight my-6" v-motion-slide-bottom>
          Hello stranger <span class="inline-block animate-wave">👋</span><br class="hidden lg:block" />
          <span class="hidden lg:inline-flex flex-wrap">
            I'm Bret Oreta, I Make
            <span class="text-green-600 dark:text-green-400">
                <ContainerFlip :words="['Effortless Automations', 'Websites That Sell', 'Growth Machines', 'SaaS-ready Solutions', 'AI Agents']" />
            </span>
          </span>
        </h1>

        <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-xl" v-motion-slide-bottom :delay="100">
          Take time off while your business keeps running. I help businesses adopt task-focused AI automation agents that save time, reduce manual effort, and scale operations - you deserve a break!
        </p>

        <div class="flex flex-col sm:flex-row gap-4" v-motion-slide-bottom :delay="150">
          <StartTrialButton size="lg" />
        </div>

        <ul class="text-sm text-gray-600 dark:text-gray-400 mt-4 space-y-1" v-motion-slide-bottom :delay="200">
          <li class="flex items-center"><LucideCheck class="w-4 h-4 mr-2 text-green-500" /> No Upfront Payment — 100% Risk-Free</li>
          <li class="flex items-center"><LucideCheck class="w-4 h-4 mr-2 text-green-500" /> Full Access to My Community</li>
        </ul>

        <div class="mt-6 text-sm text-gray-500 dark:text-gray-400" v-motion-slide-bottom :delay="250">
          Trusted by 20+ founders & businesses
        </div>
      </div>

      <!-- Image Section -->
      <div class="md:col-span-5 flex justify-center relative">
        <div class="absolute z-0 size-72 lg:size-96 rounded-full bg-green-500/50 blur-3xl" v-motion-slide-visible-bottom :duration="1500" :delay="500" />
        <BlurReveal>
            <NuxtImg src="/images/bret_oreta.png" format="webp,avif" alt="Bret Oreta" width="650px" />
        </BlurReveal>
      </div>
    </div>
  </section>
</template>

<script setup>
import { LucideCheck } from 'lucide-vue-next'
</script>

<style scoped>
@keyframes wave {
  0% { transform: rotate(0deg); }
  15% { transform: rotate(14deg); }
  30% { transform: rotate(-8deg); }
  40% { transform: rotate(14deg); }
  50% { transform: rotate(-4deg); }
  60% { transform: rotate(10deg); }
  70% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}

.animate-wave {
  display: inline-block;
  transform-origin: 70% 70%;
  animation: wave 2s infinite;
}
</style>