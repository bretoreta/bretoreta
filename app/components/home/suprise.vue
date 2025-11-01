<template>
  <div class="hero-container" @mousemove="handleMouseMove">
    <!-- Animated Background -->
    <canvas ref="particleCanvas" class="particle-canvas"></canvas>
    
    <!-- Main Content -->
    <div class="hero-content" :style="contentStyle">
      <div class="glitch-container">
        <h1 class="hero-title">
          <span class="glitch" :data-text="title">{{ title }}</span>
        </h1>
      </div>
      
      <div class="typewriter-container">
        <p class="typewriter-text">{{ displayText }}<span class="cursor">|</span></p>
      </div>
      
      <div class="cta-buttons">
        <button class="cta-primary" @click="scrollToProjects">
          <span>View Projects</span>
          <div class="button-glow"></div>
        </button>
        <button class="cta-secondary" @click="openContact">
          <span>Get In Touch</span>
        </button>
      </div>
      
      <!-- <div class="floating-icons">
        <div v-for="(icon, index) in techIcons" 
             :key="index" 
             class="tech-icon"
             :style="{ 
               animationDelay: `${index * 0.2}s`,
               left: `${iconPositions[index].x}%`,
               top: `${iconPositions[index].y}%`
             }">
          <component :is="icon" />
        </div>
      </div> -->
    </div>
    
    <!-- Scroll Indicator -->
    <div class="scroll-indicator" @click="scrollToContent">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
      <div class="arrows">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
// import { VueIcon, ReactIcon, JsIcon, TsIcon, NodeIcon } from './TechIcons';
// Particle system
	const particleCanvas = ref(null);
	const particles = [];
	let animationFrame;
	
	// Typewriter effect
	const titles = [
		"Creative Developer",
		"UI/UX Enthusiast",
		"Problem Solver",
		"Code Craftsman"
	];
	const title = ref(titles[0]);
	const displayText = ref("");
	let charIndex = 0;
	let titleIndex = 0;
	let isDeleting = false;
	let typeSpeed = 150;
	
	// Parallax effect
	const contentStyle = ref({});
	
	// Floating tech icons
	// const techIcons = [VueIcon, ReactIcon, JsIcon, TsIcon, NodeIcon];
	const iconPositions = [
		{ x: 10, y: 20 },
		{ x: 85, y: 15 },
		{ x: 15, y: 75 },
		{ x: 80, y: 70 },
		{ x: 50, y: 30 }
	];

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

// Typewriter effect
const typeWriter = () => {
	const currentTitle = titles[titleIndex];
	
	if (isDeleting) {
		displayText.value = currentTitle.substring(0, charIndex - 1);
		charIndex--;
		typeSpeed = 50;
	} else {
		displayText.value = currentTitle.substring(0, charIndex + 1);
		charIndex++;
		typeSpeed = 150;
	}
	
	if (!isDeleting && charIndex === currentTitle.length) {
		typeSpeed = 2000;
		isDeleting = true;
	} else if (isDeleting && charIndex === 0) {
		isDeleting = false;
		titleIndex = (titleIndex + 1) % titles.length;
		typeSpeed = 500;
	}
	
	setTimeout(typeWriter, typeSpeed);
};

// Mouse move parallax
const handleMouseMove = (e) => {
	const x = (e.clientX / window.innerWidth - 0.5) * 2;
	const y = (e.clientY / window.innerHeight - 0.5) * 2;
	
	contentStyle.value = {
		transform: `translate(${x * 10}px, ${y * 10}px)`
	};
};

// Scroll actions
const scrollToProjects = () => {
	document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
};

const openContact = () => {
	document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
};

const scrollToContent = () => {
	window.scrollBy({
		top: window.innerHeight,
		behavior: 'smooth'
	});
};

// Lifecycle hooks
onMounted(() => {
	initParticles();
	typeWriter();
	
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
.hero-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: radial-gradient(ellipse at center, #1a1a2e 0%, #0f0f1e 100%);
}

.particle-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  transition: transform 0.1s ease-out;
}

.glitch-container {
  margin-bottom: 20px;
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
}

.glitch {
  position: relative;
  color: #fff;
  text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
              -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
              0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  
  animation: glitch 500ms infinite;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  animation: glitch-1 500ms infinite;
  color: #ff00ff;
  z-index: -1;
}

.glitch::after {
  animation: glitch-2 500ms infinite;
  color: #00ffff;
  z-index: -2;
}

@keyframes glitch {
  0%, 100% { text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75), -0.025em -0.05em 0 rgba(0, 255, 0, 0.75), 0.025em 0.05em 0 rgba(0, 0, 255, 0.75); }
  14% { text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75), -0.025em -0.05em 0 rgba(0, 255, 0, 0.75), 0.025em 0.05em 0 rgba(0, 0, 255, 0.75); }
  15% { text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75), 0.025em 0.025em 0 rgba(0, 255, 0, 0.75), -0.05em -0.05em 0 rgba(0, 0, 255, 0.75); }
  49% { text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75), 0.025em 0.025em 0 rgba(0, 255, 0, 0.75), -0.05em -0.05em 0 rgba(0, 0, 255, 0.75); }
  50% { text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75), 0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75); }
  99% { text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75), 0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75); }
}

@keyframes glitch-1 {
  0%, 100% { clip-path: inset(40% 0 61% 0); transform: translate(-0.05em, -0.025em); }
  20% { clip-path: inset(92% 0 1% 0); transform: translate(0.05em, 0.025em); }
  40% { clip-path: inset(43% 0 1% 0); transform: translate(-0.05em, 0.025em); }
  60% { clip-path: inset(25% 0 58% 0); transform: translate(0.05em, 0.025em); }
  80% { clip-path: inset(54% 0 7% 0); transform: translate(-0.05em, 0.025em); }
}

@keyframes glitch-2 {
  0%, 100% { clip-path: inset(70% 0 23% 0); transform: translate(0.05em, 0.025em); }
  20% { clip-path: inset(12% 0 85% 0); transform: translate(-0.05em, -0.025em); }
  40% { clip-path: inset(67% 0 24% 0); transform: translate(0.05em, -0.025em); }
  60% { clip-path: inset(84% 0 7% 0); transform: translate(-0.05em, 0.025em); }
  80% { clip-path: inset(14% 0 79% 0); transform: translate(0.05em, -0.025em); }
}

.typewriter-container {
  margin-bottom: 40px;
  min-height: 40px;
}

.typewriter-text {
  font-size: 1.5rem;
  color: #a8b2d1;
  font-family: 'Courier New', monospace;
}

.cursor {
  display: inline-block;
  background-color: #64ffda;
  margin-left: 3px;
  width: 3px;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

.cta-buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.cta-primary, .cta-secondary {
  position: relative;
  padding: 14px 28px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.cta-primary {
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.cta-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 7px 20px rgba(102, 126, 234, 0.6);
}

.button-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.5s;
}

.cta-primary:hover .button-glow {
  left: 100%;
}

.cta-secondary {
  background: transparent;
  color: #64ffda;
  border: 2px solid #64ffda;
}

.cta-secondary:hover {
  background: rgba(100, 255, 218, 0.1);
  box-shadow: 0 0 15px rgba(100, 255, 218, 0.4);
}

.floating-icons {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
}

.tech-icon {
  position: absolute;
  width: 40px;
  height: 40px;
  opacity: 0.7;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  cursor: pointer;
}

.mouse {
  width: 30px;
  height: 50px;
  border: 2px solid #64ffda;
  border-radius: 15px;
  position: relative;
  margin: 0 auto;
}

.wheel {
  width: 6px;
  height: 6px;
  background: #64ffda;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  animation: wheel 2s infinite;
}

@keyframes wheel {
  0% { opacity: 1; transform: translateX(-50%) translateY(0); }
  100% { opacity: 0; transform: translateX(-50%) translateY(15px); }
}

.arrows {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.arrows span {
  width: 10px;
  height: 10px;
  border-right: 2px solid #64ffda;
  border-bottom: 2px solid #64ffda;
  transform: rotate(45deg);
  margin: -5px 0;
  animation: arrow 1.5s infinite;
}

.arrows span:nth-child(2) {
  animation-delay: 0.2s;
}

.arrows span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes arrow {
  0% { opacity: 0; transform: rotate(45deg) translate(-5px, -5px); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: rotate(45deg) translate(5px, 5px); }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .typewriter-text {
    font-size: 1.2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
  
  .cta-primary, .cta-secondary {
    width: 100%;
  }
}
</style>