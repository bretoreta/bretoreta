<template>
  <section id="book" aria-labelledby="book-title" class="py-14 sm:py-20" data-character-section="book">
    <div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-10">
      <div class="border-t border-dashed border-black/10 pt-12 dark:border-white/10">
        <div class="grid gap-5 lg:grid-cols-12 lg:items-end">
          <div class="lg:col-span-8">
            <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Book a call</p>
            <h2 id="book-title" class="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Book a free
              <span class="relative px-1">
                <span class="absolute inset-x-0 bottom-0 h-3 -skew-x-12 bg-primary/20"></span>
                <span class="relative inline-block text-primary">15-minute</span>
              </span>
              strategy call.
            </h2>
          </div>
          <p class="max-w-md text-base leading-relaxed text-muted md:text-right lg:col-span-4">
            You’ll leave with a clear plan: what to fix first, what to automate, and what to build to increase conversions.
          </p>
        </div>

        <div class="mt-8 grid gap-6 lg:grid-cols-12 lg:items-start">
          <div class="lg:col-span-5">
            <div class="rounded-3xl border border-black/10 bg-white/50 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
              <p class="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">What clients say</p>
              <TestimonialSlider :testimonials="testimonials" class="mt-3" />
            </div>

            <div class="mt-4 rounded-2xl border border-black/10 bg-white/60 p-5 backdrop-blur dark:border-white/10 dark:bg-white/[0.03]">
              <p class="text-sm font-bold">Prefer email?</p>
              <p class="mt-1 text-sm leading-relaxed text-muted">
                Send a note with what you’re working on. I’ll reply with a clear next step.
              </p>
              <a
                href="mailto:bretoreta@gmail.com"
                class="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                bretoreta@gmail.com
                <Icon name="lucide:arrow-up-right" class="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div class="lg:col-span-7">
            <div class="rounded-3xl border border-black/10 bg-white/40 p-2 backdrop-blur dark:border-white/10 dark:bg-white/[0.04] sm:p-4">
              <div
                ref="calEmbed"
                style="width: 100%; min-height: 760px; overflow: hidden"
                class="rounded-2xl bg-white/60 dark:bg-white/[0.02]"
              />
            </div>
            <p class="mt-3 text-xs text-muted">
              Calendar not loading?
              <a
                href="https://cal.com/bretoreta/15min"
                target="_blank"
                rel="noopener noreferrer"
                class="font-semibold text-primary underline-offset-4 hover:underline"
              >
                Open it in a new tab.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface Testimonial {
  img: string
  quote: string
  name: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    img: '/images/testimonials/sarah-k.jpg',
    quote: "Bret's AI agents automated 90% of our customer service. We went from 200 daily emails to just 20 needing human review.",
    name: 'Sarah K.',
    role: 'E-commerce Manager, XIMI Vogue',
  },
  {
    img: '/images/testimonials/nicholas-wetzel.jpg',
    quote: 'The website Bret built converted 35% better than our old one. His blend of design and AI integrations is unmatched.',
    name: 'Nicholas W.',
    role: 'CEO, Clickstribute',
  },
  {
    img: '/images/testimonials/priya-a.jpg',
    quote: "After deploying Bret's AI agents, our team gained 15 hours/week. Finally took that Maldives vacation!",
    name: 'Priya A.',
    role: 'Operations Director, Inkpot Group.',
  },
  {
    img: '/images/testimonials/andrew-k.jpg',
    quote: "Bret doesn't just build websites - he builds revenue engines. Our SaaS signups doubled in 3 months post-launch.",
    name: 'Andrew K.',
    role: 'CTO, AAS Org',
  },
  {
    img: '/images/testimonials/zurika-wambui.jpeg',
    quote: 'The AI appointment scheduler cut our no-shows by 70%. Bret understands real business pain points, not just tech.',
    name: 'Wambui W.',
    role: 'CEO, Zurika by Wambui',
  },
]

const calEmbed = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!calEmbed.value) return

  // The Cal.com embed itself is loaded once by plugins/cal.client.ts.
  // Here we only mount the inline calendar in its container.
  const embedId = 'cal-inline-' + Math.random().toString(36).slice(2, 11)
  calEmbed.value.id = embedId

  const Cal = (window as unknown as { Cal?: any }).Cal
  if (!Cal?.ns?.['15min']) return

  Cal.ns['15min']('inline', {
    elementOrSelector: `#${embedId}`,
    config: { layout: 'month_view' },
    calLink: 'bretoreta/15min',
  })
})
</script>
