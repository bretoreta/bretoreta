<script setup>

const features = [
    {
        title: "Custom-Built AI Agents",
        description:  "Tailored solutions designed to fit your exact business needs, whether for customer support, data analysis, or workflow automation.",
        icon: "bot"
    },
    {
        title: " Seamless Integration",
        description:  "Agents that work with your existing tools (CRM, ERP, APIs) for frictionless adoption and immediate ROI.",
        icon: "plug"
    },
    {
        title: "24/7 Autonomous Operations",
        description:  "AI agents never sleep—handling tasks, queries, and processes around the clock to boost productivity.",
        icon: "clock"
    },
    {
        title: "Continuous Learning",
        description:  "Self-improving algorithms that adapt to new data, user behavior, and evolving business demands.",
        icon: "brain-circuit"
    },
    {
        title: "Real-Time Decision Support",
        description:  "Instant insights and predictive analytics to help teams make faster, data-driven choices.",
        icon: "zap"
    },
    {
        title: "Scalable Growth Engine",
        description:  "Modular agents that grow with your business, handling increased complexity without added overhead.",
        icon: "rocket"
    },
]

</script>

<template>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div class="mb-4">
                <UBadge>Building tools that transform workflows</UBadge>
            </div>
            <h2 class="max-w-lg mb-6 text-3xl font-black leading-none tracking-tight bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text sm:text-4xl md:mx-auto">
                <span class="relative inline-block text-green-900">
                    <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 -z-10 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                        <defs>
                            <pattern id="07690130-d013-42bc-83f4-90de7ac68f76" x="0" y="0" width=".135" height=".30">
                                <circle cx="1" cy="1" r="0.9"></circle>
                            </pattern>
                        </defs>
                        <rect fill="url(#07690130-d013-42bc-83f4-90de7ac68f76)" width="52" height="24"></rect>
                    </svg>
                    <span class="relative"></span>
                </span>
                Accelerating growth through 
                <span class="relative px-1">
                    <div class="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-primary/20"></div>
                    <span class="relative inline-block text-primary">intelligent technology</span>
                </span>
            </h2>
            <p class="text-base text-muted md:text-lg">
                We build custom AI agents that automate complex tasks, and streamline operations—helping your business scale smarter, not harder.
            </p>
        </div>
        <div class="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
            <div v-for="feature in features" class="p-5 border border-accented rounded shadow-sm">
                <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/20">
                    <Icon :name="'lucide:' + feature.icon" />
                </div>
                <h6 class="mb-2 font-semibold leading-5">{{ feature.title }}</h6>
                <p class="text-sm text-muted">
                    {{ feature.description }}
                </p>
            </div>
        </div>
    </div>
</template>