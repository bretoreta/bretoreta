<script setup>
import { Application } from '@splinetool/runtime';

const canvasRef = ref(null);

onMounted(() => {
  const app = new Application(canvasRef.value);
  app.load('https://prod.spline.design/28Ik02AhGiPFtrEW/scene.splinecode');
});
</script>

<template>
  <div class="spline-wrapper w-full h-[80vh] max-h-[800px] mx-auto">
    <canvas 
      ref="canvasRef" 
      class="w-full h-full rounded-xl shadow-lg"
    />
  </div>
</template>