<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
      <SkewNotification v-slot="{ isCurrentChunksOutdated }">
        <div v-if="isCurrentChunksOutdated">
          New version available
        </div>
      </SkewNotification>
    </NuxtLayout>
  </UApp>
</template>
