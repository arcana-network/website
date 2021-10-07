<template>
  <main>
    <AppHeader />
    <HomeHeroSection />
    <HomeIntroduction />
    <HomeFeatures />
    <HomeTestimonials />
    <HomeInvestors />
    <HomeRoadmap />
    <HomeNewsAndMedia />
    <HomeOurPartners />
    <HomeInteroperability />
    <HomeCommunity />
    <HomeNewsletter />
    <AppFooter />
    <AppCopyright />
  </main>
</template>

<script>
export default {
  layout: 'page',
}
</script>

<style lang="postcss" scoped>
@import url('../components/lib/media-query-helper.css');

main {
  overflow-x: hidden;
}

main > * + *:not(:last-child) {
  padding: 6rem 0;
  margin: 6rem 0;

  @media (--viewport-small) {
    padding: 3rem 0;
  }
}
</style>
