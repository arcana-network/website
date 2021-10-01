<template>
  <main>
    <AppHeader />
    <Technology />
    <Publications />
  </main>
</template>

<script>
import Publications from '~/components/about/Publications.vue'
import Technology from '~/components/about/Technology.vue'
import AppHeader from '~/components/AppHeader.vue'
export default {
  components: { AppHeader, Technology, Publications },
  head() {
    return {
      title: 'Technology - Arcana Network',
    }
  },
}
</script>
