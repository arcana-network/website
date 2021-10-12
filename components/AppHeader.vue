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
      headerCta: {
        label: 'Technical Paper',
        action: this.openTechnicalPaper,
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
          name: 'Docs',
          link: 'https://docs.arcana.network',
          external: true,
        },
      ],
    }
  },
  methods: {
    openTechnicalPaper() {
      window.open(
        'https://www.notion.so/Arcana-Technical-Docs-a1d7fd0d2970452586c693e4fee14d08',
        '_blank'
      )
    },
  },
}
</script>
