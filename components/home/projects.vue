<script setup>
const { data: projects } = await useAsyncData('projects', () => {
  return queryCollection('project').where('featured', "=", true).order('date', 'DESC').all()
})
</script>

<template>
  <ProjectsGallery 
    title="Featured Projects" 
    description="Explore a selection of my latest work—from systems to e-commerce and side projects. Every project blends innovation, robust tech, and a focus on user experience." 
    :items="projects"	
  />
</template>
