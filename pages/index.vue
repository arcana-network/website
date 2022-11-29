<template>
  <main>
    <HomeHeroSection />
    <HomeOurServices />
    <HomeTestimonials />
    <HomeRoadmap />
    <HomePartners />
    <HomeNewsAndMedia />
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
}
</style>
