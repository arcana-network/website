<template>
  <main>
    <HomeHeroSection />
    <HomeFeatures />
    <HomeTestimonials />
    <AboutOurInvestors />
    <HomeRoadmap />
    <HomeNewsAndMedia />
    <HomeOurPartners />
    <HomeInteroperability />
    <HomeCommunity />
    <HomeNewsletter />
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

main > * {
  margin-top: 6rem;

  @media (--viewport-medium) {
    margin-top: 4rem;
  }

  @media (--viewport-small) {
    margin-top: 2rem;
  }
}
</style>
