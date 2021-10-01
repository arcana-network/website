<template>
  <main>
    <AppHeader />
    <Technology />
    <JoinUs />
  </main>
</template>

<script>
import JoinUs from '~/components/about/JoinUs.vue'
import Technology from '~/components/about/Technology.vue'
import AppHeader from '~/components/AppHeader.vue'
export default {
  components: { AppHeader, Technology, JoinUs },
  head() {
    return {
      title: 'Technology - Arcana Network',
    }
  },
}
</script>

<style lang="postcss" scoped>
main {
  overflow-x: hidden;
}
</style>
