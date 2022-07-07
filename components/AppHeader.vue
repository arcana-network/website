<template>
  <header class="app-header">
    <v-header
      logo="images/arcana-logo-vertical.svg"
      :cta="headerCta"
      :menu-items="menuItems"
    />
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      headerCta: {
        label: 'Start Building',
        link: process.env.ARCANA_DASHBOARD,
      },
      menuItems: [
        {
          name: 'Docs',
          link: process.env.ARCANA_DOCS,
          external: true,
        },
        {
          name: 'Technology',
          link: '/tech/',
        },
        {
          name: 'About',
          link: '/about/',
        },
      ],
    }
  },
}
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #0f0f0f;
}
</style>
