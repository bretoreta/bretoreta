<template>
    <div class="grid gap-12 py-12">
        <div class="max-w-xl mb-10 md:mx-auto flex flex-col items-center sm:text-center lg:max-w-2xl md:mb-12">
          <h2 class="max-w-lg mb-6 text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
              Join companies that innovate with
              <span class="relative px-1">
                  <div class="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-primary/20"></div>
                  <span class="relative inline-block text-primary">confidence</span>
              </span>
          </h2>
          <p class="text-base text-muted md:text-lg">
              These industry leaders chose our solutions to power their growth—and we're ready to help you write your success story next.
          </p>
        </div>
        <div class="relative overflow-hidden">
            <!-- Fade overlay on left side -->
            <div class="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[var(--ui-bg)] to-transparent"></div>
            
            <!-- Fade overlay on right side -->
            <div class="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[var(--ui-bg)] to-transparent"></div>
        
            <!-- Scrolling logos container -->
            <div class="flex items-center px-2">
                <!-- First set (visible) -->
                <div class="flex shrink-0 items-center justify-around min-w-full animate-scroll">
                    <NuxtImg
                      class="h-12 mx-8 grayscale hover:grayscale-0 transition-opacity"
                      src="https://fairdealfurniture.co.ke/wp-content/uploads/2023/04/FFL-logo--scaled-220x71.webp"
                    />
                    <NuxtImg
                      class="h-12 mx-8 grayscale hover:grayscale-0 transition-opacity"
                      src="https://fairdealfurniture.co.ke/wp-content/uploads/2023/04/AHS_INT_Logo_Horizontal_OrgHouse_WteLetters-260x80.webp"
                    />
                    <NuxtImg
                      class="h-12 mx-8 grayscale hover:grayscale-0 transition-opacity"
                      src="https://www.koeedo.org/img/logo.jpeg"
                    />
                    <NuxtImg
                      class="h-12 mx-8 grayscale hover:grayscale-0 transition-opacity invert"
                      src="https://infinitylabs.africa/wp-content/uploads/2024/10/INFINITY-LABS-BLK-TRANSPARENTAsset-3.png"
                    />
                    <NuxtImg
                      class="h-12 mx-8 grayscale hover:grayscale-0 transition-opacity"
                      src="https://inkpotgroup.co.ke/wp-content/uploads/2024/06/INKPOT-GROUP-300x75.png"
                    />
                </div>
            
                <!-- Duplicate set (for seamless looping) -->
                <div class="flex shrink-0 items-center justify-around min-w-full animate-scroll" aria-hidden="true">
                    <NuxtImg
                      class="h-12 mx-8 grayscale hover:grayscale-0 transition-opacity"
                      src="https://fairdealfurniture.co.ke/wp-content/uploads/2023/04/FFL-logo--scaled-220x71.webp"
                    />
                    <NuxtImg
                      class="h-12 mx-8 grayscale hover:grayscale-0 transition-opacity"
                      src="https://fairdealfurniture.co.ke/wp-content/uploads/2023/04/AHS_INT_Logo_Horizontal_OrgHouse_WteLetters-260x80.webp"
                    />
                    <NuxtImg
                      class="h-12 mx-8 grayscale hover:grayscale-0 transition-opacity"
                      src="https://www.koeedo.org/img/logo.jpeg"
                    />
                    <NuxtImg
                      class="h-12 mx-8 grayscale hover:grayscale-0 transition-opacity invert"
                      src="https://infinitylabs.africa/wp-content/uploads/2024/10/INFINITY-LABS-BLK-TRANSPARENTAsset-3.png"
                    />
                    <NuxtImg
                      class="h-12 mx-8 grayscale hover:grayscale-0 transition-opacity"
                      src="https://inkpotgroup.co.ke/wp-content/uploads/2024/06/INKPOT-GROUP-300x75.png"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
  
  <style>
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }
    .animate-scroll {
      animation: scroll 40s linear infinite;
    }
  </style>