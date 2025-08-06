<template>
  <div class="bg-gray-50 dark:bg-[#0d1117] text-gray-900 dark:text-white pt-20 px-6 md:px-20 overflow-hidden relative min-h-[800px]">
    <!-- Animated Background -->
    <canvas ref="particleCanvas" class="absolute top-0 left-0 z-0"></canvas>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10">
      <!-- Text Section -->
      <div class="md:col-span-7">
        <Availability v-motion-slide-bottom />

        <h1 class="text-4xl md:text-6xl font-bold leading-tight my-6" v-motion-slide-bottom>
          Hello stranger <span class="inline-block animate-wave">👋</span><br class="hidden lg:block" />
          <span class="block md:hidden">
            I'm Bret Oreta, I Make Growth Machines
          </span>
          <span class="hidden lg:inline-flex flex-wrap">
            I'm Bret Oreta, I Make
            <span class="text-green-600 dark:text-green-400">
                <ContainerFlip :words="['Automations', 'Websites That Sell', 'Growth Machines', 'SaaS Solutions', 'AI Agents']" />
            </span>
          </span>
        </h1>

        <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-xl" v-motion-slide-bottom :delay="100">
          I help businesses implement smart web solutions, automation systems, DevOps workflows, server management, and SEO strategies that save time, cut manual effort, and scale efficiently, so you can achieve more with less stress.
        </p>

        <div class="flex flex-col sm:flex-row gap-4" v-motion-slide-bottom :delay="150">
          <StartTrialButton size="lg" />
        </div>

        <ul class="text-sm text-gray-600 dark:text-gray-400 mt-4 space-y-1" v-motion-slide-bottom :delay="200">
          <li class="flex items-center"><LucideCheck class="w-4 h-4 mr-2 text-green-500" /> No Upfront Payment — 100% Risk-Free</li>
          <li class="flex items-center"><LucideCheck class="w-4 h-4 mr-2 text-green-500" /> Full Access to My Community</li>
        </ul>

        <div class="my-6 text-sm text-gray-500 dark:text-gray-400" v-motion-slide-bottom :delay="250">
          Trusted by 20+ founders & businesses
        </div>
      </div>

      <!-- Image Section -->
      <div class="md:col-span-5 flex justify-center relative">
        <div class="absolute z-0 size-72 lg:size-96 rounded-full bg-green-500/50 blur-[150px]" v-motion-slide-visible-bottom :duration="1500" :delay="500" />
        <BlurReveal>
            <NuxtImg src="/images/bret_oreta.png" format="webp,avif" alt="Bret Oreta" height="800px" />
        </BlurReveal>
      </div>
    </div>
  </div>
</template>

<script setup>
import { LucideCheck } from 'lucide-vue-next'
const particleCanvas = ref(null);
const particles = [];
let animationFrame;

// Initialize particles
const initParticles = () => {
  const canvas = particleCanvas.value;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  // Create particles
  const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`
    });
  }
  
  animateParticles();
};

// Particle animation
const animateParticles = () => {
	const canvas = particleCanvas.value;
	const ctx = canvas.getContext('2d');
	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	particles.forEach((p, index) => {
		// Update position
		p.x += p.speedX;
		p.y += p.speedY;
		
		// Boundary check
		if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
		if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
		
		// Draw particle
		ctx.beginPath();
		ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
		ctx.fillStyle = p.color;
		ctx.fill();
		
		// Connect nearby particles
		for (let j = index + 1; j < particles.length; j++) {
			const dx = particles[j].x - p.x;
			const dy = particles[j].y - p.y;
			const distance = Math.sqrt(dx * dx + dy * dy);
			
			if (distance < 100) {
				ctx.beginPath();
				ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
				ctx.lineWidth = 0.2;
				ctx.moveTo(p.x, p.y);
				ctx.lineTo(particles[j].x, particles[j].y);
				ctx.stroke();
			}
		}
	});
	
	animationFrame = requestAnimationFrame(animateParticles);
};

// Lifecycle hooks
onMounted(() => {
	initParticles();
	
	window.addEventListener('resize', () => {
		const canvas = particleCanvas.value;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	});
});

onBeforeUnmount(() => {
	cancelAnimationFrame(animationFrame);
});
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