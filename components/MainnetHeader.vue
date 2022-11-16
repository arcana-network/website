<template>
  <header class="header">
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
          name: 'Docs',
          link: process.env.ARCANA_DOCS_URL,
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
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: transparent;
}
</style>
