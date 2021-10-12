<template>
  <main>
    <AppHeader />
    <AboutOurPrinciples />
    <AboutOurTeam />
    <AboutOurInvestors />
    <!-- <HomeNewsAndMedia />  -->
    <AboutOurCulture />
    <!-- <TechJoinUs /> -->
    <AppFooter />
    <AppCopyright />
  </main>
</template>

<script>
export default {
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
}

main > * + *:not(:last-child) {
  margin: 6rem 0;

  @media (--viewport-small) {
    margin: 3rem 0;
  }
}
</style>
