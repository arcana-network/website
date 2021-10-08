<template>
  <v-header
    logo="images/arcana-logo-vertical.svg"
    :cta="headerCta"
    :menu-items="menuItems"
  />
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      headerCta: {},
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
