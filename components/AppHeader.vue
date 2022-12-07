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
        link: process.env.ARCANA_DASHBOARD_URL,
      },
      menuItems: [
        {
          name: 'Technology',
          link: '/tech/',
        },
        {
          name: 'About',
          link: '/about/',
        },
        {
          name: 'Ecosystem',
          link: '/ecosystem/',
        },
        {
          name: 'Docs',
          link: process.env.ARCANA_DOCS_URL,
          external: true,
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
  background-color: #121212;
}
</style>
