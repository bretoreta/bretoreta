<template>
  <!-- Main content area -->
    <div class="border-x dark:border-accented border-dashed w-full">
      <div class="divide-y divide-dashed divide-accented w-full">
        <HomeHero />
        <div class="grid gap-y-12 lg:gap-y-20 divide-y divide-dashed divide-accented">
          <Bookings />
          <HomeProjects />
          <CompanyLogos />
          <HomeNumbers />
          <HomeCta />
          <BlogHighlights />
        </div>
        <Footer />
      </div>
    </div>
</template>
<style>
.page-grid-top {
  position: absolute;
  left: 0;
  top:0;
  background-image: url('/svg/grid-top.svg');
  background-repeat: repeat-x;
  height: 24.625rem;
  width: 100%;
  z-index: 0;
  margin-top: -60px;
}
</style>