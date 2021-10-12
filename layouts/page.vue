<template>
  <app-launch-countdown>
    <div class="app">
      <AppHeader />
      <Nuxt />
      <AppFooter class="footer" />
      <AppCopyright />
    </div>
  </app-launch-countdown>
</template>

<style scoped>
.app {
  overflow-x: hidden;
}

.footer {
  margin-top: 6rem;
}
</style>
