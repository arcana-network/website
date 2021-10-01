<template>
  <main>
    <AppHeader />
    <Technology />
  </main>
</template>

<script>
import Technology from '~/components/about/Technology.vue'
import AppHeader from '~/components/AppHeader.vue'
export default {
  components: { AppHeader, Technology },
  head() {
    return {
      title: 'Technology - Arcana Network',
    }
  },
}
</script>
