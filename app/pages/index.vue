<script setup lang="ts">
useSeoMeta({
  title: 'Websites & AI Agents That Drive Growth',
  description: 'A web developer and AI automation expert helping businesses launch stunning websites and automate repetitive tasks with AI',
})

defineOgImage('NuxtSeo.takumi', {
  title: 'Websites & AI Agents That Drive Growth',
  description: "A web developer and AI automation expert helping businesses launch stunning websites and automate repetitive tasks with AI"
});

</script>

<template>
  <div class="w-full">
    <HomeHero />
    <div data-character-section="projects">
      <HomeProjects />
    </div>
    <CompanyLogos />
    <!-- <Bento /> -->
    <HomeCompanies />
    <HomeHighlights />
    <HomeNumbers />
    <Bookings />
    <HomeCta />
    <HomeOpenSource />
    <BlogHighlights />
  </div>
</template>
