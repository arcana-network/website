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
      // Use /_nuxt/img/* instead of /_nuxt/assets/images/*
      // since netlify moves all assets inside /img folder
      {
        rel: 'preload',
        as: 'image',
        href: '/_nuxt/img/arcana-intro-video-thumbnail.png',
      },
      {
        rel: 'preload',
        as: 'image',
        href: '/_nuxt/img/intro-video-inner-circle.svg',
      },
      {
        rel: 'preload',
        as: 'image',
        href: '/_nuxt/img/intro-video-outer-circle.svg',
      },
      {
        rel: 'preload',
        as: 'image',
        href: '/_nuxt/img/intro-video-dark-orb.svg',
      },
      {
        rel: 'preload',
        as: 'image',
        href: '/_nuxt/img/intro-video-glowing-orb.svg',
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
