<script setup lang="ts">
useSeoMeta({
  title: 'Web Developer & AI Automation Expert in Kenya',
  description: 'Bret Oreta builds high-converting websites, AI agents, and automation systems for businesses in Kenya and beyond. Based in Mombasa.',
  ogTitle: 'Web Developer & AI Automation Expert in Kenya',
  ogDescription: 'Bret Oreta builds high-converting websites, AI agents, and automation systems for businesses in Kenya and beyond. Based in Mombasa.',
  ogType: 'website',
})

defineOgImage('NuxtSeo.takumi', {
  title: 'Web Developer & AI Automation Expert in Kenya',
  description: "High-converting websites, AI agents, and automation systems for businesses in Kenya and beyond."
});

</script>

<template>
  <div class="w-full">
    <HomeHero />
    <div id="projects" data-character-section="projects">
      <HomeProjects />
    </div>
    <CompanyLogos />
    <!-- <Bento /> -->
    <HomeCompanies />
    <HomeHighlights />
    <HomeNumbers />
    <Bookings />
    <HomeOpenSource />
    <BlogHighlights />
    <HomeCta />
  </div>
</template>
