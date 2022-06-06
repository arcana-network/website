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
  head: {
    link: [
      {
        rel: 'preload',
        as: 'image',
        href: '/_nuxt/assets/images/arcana-intro-video-thumbnail.png',
      },
      {
        rel: 'preload',
        as: 'image',
        href: '/_nuxt/assets/images/intro-video-inner-circle.svg',
      },
      {
        rel: 'preload',
        as: 'image',
        href: '/_nuxt/assets/images/intro-video-outer-circle.svg',
      },
      {
        rel: 'preload',
        as: 'image',
        href: '/_nuxt/assets/images/intro-video-dark-orb.svg',
      },
      {
        rel: 'preload',
        as: 'image',
        href: '/_nuxt/assets/images/intro-video-glowing-orb.svg',
      },
    ],
  },
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
