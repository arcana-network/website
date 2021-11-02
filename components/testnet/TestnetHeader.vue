<template>
  <v-header logo="images/arcana-logo-vertical.svg" :menu-items="menuItems" />
</template>

<script>
export default {
  name: 'TestnetHeader',
  data() {
    return {
      menuItems: [
        {
          name: 'Rules',
          link: '/',
        },
        {
          name: 'Blog',
          link: '/',
        },
      ],
    }
  },
}
</script>
