<template>
  <header>
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
        action: this.handleOpenDashboard,
      },
      menuItems: [
        {
          name: 'Docs',
          link: 'https://docs.arcana.network',
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
  methods: {
    handleOpenDashboard() {
      window.open('https://dashboard.arcana.network', '_blank')
    },
  },
}
</script>
