<template>
  <v-header
    logo="images/arcana-logo-vertical.svg"
    :cta="headerCta"
    :menu-items="menuItems"
  />
</template>

<script>
import VHeader from './lib/VHeader.vue'

export default {
  name: 'AppHeader',
  components: { VHeader },
  data() {
    return {
      headerCta: {},
      menuItems: [
        {
          name: 'Technology',
          link: '/tech',
        },
        {
          name: 'About',
          link: '/about',
        },
        {
          name: 'Docs',
          link: 'https://docs.arcana.network',
          external: true,
        },
      ],
    }
  },
  created() {
    this.headerCta = {
      label: 'Log In',
      action() {
        alert('Login clicked')
      },
    }
  },
}
</script>
