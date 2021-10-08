<template>
  <main>
    <AppHeader />
    <TechTechnology />
    <TechRoadmapList />
    <TechPublications />
    <HomeCommunity />
    <TechJoinUs />
    <AppFooter />
    <AppCopyright />
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Technology - Arcana Network',
    }
  },
}
</script>

<style lang="postcss" scoped>
@import url('../components/lib/media-query-helper.css');

main {
  overflow-x: hidden;
}

main > *:not(:last-child):not(:first-child) {
  margin-top: 6rem;
}
</style>
