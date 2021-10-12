<template>
  <main>
    <AboutOurPrinciples />
    <AboutOurTeam />
    <AboutOurInvestors />
    <HomeNewsAndMedia />
    <AboutOurCulture />
    <TechJoinUs />
  </main>
</template>

<script>
export default {
  layout: 'page',
  head() {
    return {
      title: 'About Us - Arcana Network',
    }
  },
}
</script>

<style lang="postcss" scoped>
@import url('../components/lib/media-query-helper.css');

main {
  overflow-x: hidden;
  scroll-behavior: smooth;
}

main > * {
  margin-top: 6rem;
}
</style>
