<template>
  <div class="max-w-7xl mx-auto pb-24">
		<div class="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
			<div class="flex flex-col gap-4">
				<h2 class="max-w-lg text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none" v-motion-slide-visible-once-bottom :delay="100">
						{{ title }}
				</h2>
				<p class="text-base text-muted md:text-lg max-w-2xl" v-motion-slide-visible-once-bottom :delay="150">
						{{ description }}
				</p>
			</div>
			<!-- <div class="hidden shrink-0 gap-2 md:flex">
				<UButton
					size="icon"
					variant="ghost"
					:disabled="!canScrollPrev"
					@click="scrollPrev"
					class="disabled:pointer-events-auto"
				>
					<LucideArrowLeft class="size-5" />
				</UButton>
				<UButton
					size="icon"
					variant="ghost"
					:disabled="!canScrollNext"
					@click="scrollNext"
					class="disabled:pointer-events-auto"
				>
					<LucideArrowRight class="size-5" />
				</UButton>
			</div> -->
		</div>
		<div>
			<UCarousel :items="items" v-slot="{ item }" :ui="{ item: 'basis-1/1 lg:basis-1/3' }" dots :autoplay="{ stopOnInteraction:true }">
				<NuxtLink :to="item.path" class="group rounded-lg overflow-hidden">
					<div class="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
						<NuxtImg
							format="webp,avif"
							quality="80"
							width="600px"
							:src="item.image"
							:alt="item.title"
							class="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
						/>
						<div class="absolute inset-0 h-full bg-[linear-gradient(rgba(17,24,39,0)_10%,rgba(17,24,39,0.4)_20%,rgba(17,24,39,0.8)_60%)] mix-blend-multiply" />
						<div class="absolute inset-x-0 bottom-0 flex flex-col items-start p-4 md:p-6">
							<div>
								<NuxtImg :src="item.client_logo" width="60" format="webp,avif" quality="80" />
							</div>
							<div class="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
								{{ item.title }}
							</div>
							<div class="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
								{{ item.description }}
							</div>
							<div class="flex justify-between items-center w-full">
								<UButton>
									<span class="text-sm font-bold">Stack:</span>
									<ul class="flex items-center gap-1.5">
										<template v-for="stackItem in item.stack">
											<li>
												<NuxtImg :src="`/svg/${stackItem}.svg`" width="24px" :alt="`${stackItem}'s logo'`" />
											</li>
										</template>
									</ul>
								</UButton>
							</div>
						</div>
					</div>
				</NuxtLink>
			</UCarousel>
		</div>
	</div>
</template>

<script setup>
import { LucideArrowLeft, LucideArrowRight } from 'lucide-vue-next'

const props = defineProps({
  title: { type: String, default: 'Case Studies' },
  description: { type: String, default: 'Discover how leading companies...' },
  items: { type: Array, required: true }
})
</script>