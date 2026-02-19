<template>
  <section id="book" aria-labelledby="book-title" class="py-14 sm:py-20">
    <div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">
      <div class="mx-auto mb-10 max-w-2xl text-center md:mb-12">
        <h2
          id="book-title"
          v-motion-slide-visible-once-bottom
          class="text-3xl font-extrabold tracking-tight sm:text-4xl"
        >
          Book a free
          <span class="relative px-1">
            <span class="absolute inset-x-0 bottom-0 h-3 -skew-x-12 bg-primary/20"></span>
            <span class="relative inline-block text-primary">15-minute</span>
          </span>
          strategy call.
        </h2>
        <p v-motion-slide-visible-once-bottom :delay="100" class="mt-3 text-base text-muted md:text-lg">
          You'll leave with a clear plan: what to fix first, what to automate, and what to build to increase conversions.
        </p>
      </div>

      <div class="grid gap-8 lg:grid-cols-12 lg:items-start">
        <div class="lg:col-span-12">
          <TestimonialSlider :testimonials="testimonials" />
          <div>
            <div ref="calEmbed" style="width:100%;min-height:760px;overflow:hidden" class="rounded-[1.1rem]"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
    quote: "Bret's AI agents automated 90% of our customer service. We went from 200 daily emails to just 20 needing human review.",
    name: "Sarah K.",
    role: "E-commerce Manager, XIMI Vogue"
  },
  {
    img: "/images/testimonials/nicholas-wetzel.jpg",
    quote: "The website Bret built converted 35% better than our old one. His blend of design and AI integrations is unmatched.",
    name: "Nicholas W.",
    role: "CEO, Clickstribute"
  },
  {
    img: "/images/testimonials/priya-a.jpg",
    quote: "After deploying Bret's AI agents, our team gained 15 hours/week. Finally took that Maldives vacation!",
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
