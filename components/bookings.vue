<template>
  <div class="relative grid items-center pt-10 lg:pt-20 px-0 lg:px-14">
    <div class="max-w-xl mb-10 md:mx-auto flex flex-col items-center sm:text-center lg:max-w-2xl md:mb-12">
      <h2 
        v-motion-slide-visible-once-bottom 
        class="max-w-lg mb-6 text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none"
      >
        Schedule Your Personal
        <span class="relative px-1">
          <div class="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-primary/20"></div>
          <span class="relative inline-block text-primary">Consultation</span>
        </span>
      </h2>
      <p 
        v-motion-slide-visible-once-bottom 
        :delay="100" 
        class="text-base text-muted md:text-lg"
      >
        Book your personal strategy session to unlock solutions designed for your success. Your transformation starts here.
      </p>
    </div>
    <div class="pb-10">
      <TestimonialSlider :testimonials="testimonials" />
    </div>
    <!-- Container for the embed -->
    <div ref="calEmbed" style="width:100%;height:100%;overflow:scroll"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface Testimonial {
  img: string
  quote: string
  name: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    img: "/images/testimonials/sarah-k.jpg",
    quote: "Bret's AI agents automated 90% of our customer service. We went from 200 daily emails to just 20 needing human review. Game-changer!",
    name: "Sarah K.",
    role: "E-commerce Manager, XIMI Vogue"
  },
  {
    img: "/images/testimonials/nicholas-wetzel.jpg",
    quote: "The website Bret built converted 35% better than our old one. His blend of design and AI integrations is unmatched in Kenya.",
    name: "Nicholas W.",
    role: "CEO, Clickstribute"
  },
  {
    img: "/images/testimonials/priya-a.jpg",
    quote: "After deploying Bret's AI agents, our team gained 15 hours/week. Finally took that Maldives vacation while business ran smoothly!",
    name: "Priya A.",
    role: "Operations Director, Inkpot Group."
  },
  {
    img: "/images/testimonials/andrew-k.jpg",
    quote: "Bret doesn't just build websites - he builds revenue engines. Our SaaS signups doubled in 3 months post-launch.",
    name: "Andrew K.",
    role: "CTO, AAS Org"
  },
  {
    img: "/images/testimonials/zurika-wambui.jpeg",
    quote: "The AI appointment scheduler cut our no-shows by 70%. Bret understands real business pain points, not just tech.",
    name: "Wambui W.",
    role: "CEO, Zurika by Wambui"
  }
]

const calEmbed = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!calEmbed.value) return
  
  // Generate a unique ID for the container
  const embedId = 'cal-inline-' + Math.random().toString(36).substr(2, 9)
  calEmbed.value.id = embedId
  
  // Create and inject the script
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.innerHTML = `
    (function (C, A, L) { 
      let p = function (a, ar) { a.q.push(ar); }; 
      let d = C.document; 
      C.Cal = C.Cal || function () { 
        let cal = C.Cal; 
        let ar = arguments; 
        if (!cal.loaded) { 
          cal.ns = {}; 
          cal.q = cal.q || []; 
          d.head.appendChild(d.createElement("script")).src = A; 
          cal.loaded = true; 
        } 
        if (ar[0] === L) { 
          const api = function () { p(api, arguments); }; 
          const namespace = ar[1]; 
          api.q = api.q || []; 
          if(typeof namespace === "string"){
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar); 
          return;
        } 
        p(cal, ar); 
      }; 
    })(window, "https://app.cal.com/embed/embed.js", "init");
    
    Cal("init", "15min", {origin:"https://app.cal.com"});
    Cal.ns["15min"]("inline", {
      elementOrSelector:"#${embedId}",
      config: {"layout":"month_view"},
      calLink: "bretoreta/15min",
    });
    Cal.ns["15min"]("ui", {
      "cssVarsPerTheme":{"light":{"cal-brand":"#05DF72"}},
      "hideEventTypeDetails":false,
      "layout":"month_view"
    });
  `
  
  document.body.appendChild(script)
})

onBeforeUnmount(() => {
  // Clean up to prevent memory leaks
  const calScripts = document.querySelectorAll('script[src*="cal.com"]')
  calScripts.forEach(script => script.remove())
})
</script>