<template>
  <main class="flex min-h-screen flex-col">
    <div class="relative isolate mx-auto w-full max-w-[1440px]">
      <!-- Grid container with custom column widths -->
      <div class="grid grid-cols-1 lg:grid-cols-[16px_1fr_16px]">
        <!-- Left border decoration -->
        <div class="h-full hidden lg:block text-muted/20 border-l border-dashed border-current bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] bg-fixed" />

        <!-- Main content area -->
        <div class="border-x dark:border-accented border-dashed w-full">
          <div class="divide-y divide-dashed divide-accented w-full">
            <HomeHero />
            <div class="grid gap-y-12 lg:gap-y-20 divide-y divide-dashed divide-accented">
              <CompanyLogos />
              <HomeCompanies />
              <HomeHighlights />
              <HomeNumbers />
              <HomeCta />
              <BlogHighlights />
            </div>
            <Footer />
          </div>
        </div>

        <!-- Right border decoration -->
        <div class="h-full hidden lg:block text-muted/20 border-r border-dashed border-current bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] bg-fixed" />
      </div>
    </div>
  </main>
</template>
