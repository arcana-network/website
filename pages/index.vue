<template>
  <main>
    <AppHeader />
    <HeroSection />
    <Introduction />
    <Features />
    <Testimonials />
    <Investors />
    <Roadmap />
    <NewsAndMedia />
    <OurPartners />
    <Interoperability />
    <Community />
    <Newsletter />
    <AppFooter />
    <AppCopyright />
  </main>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import HeroSection from '~/components/home/HeroSection.vue'
import Introduction from '~/components/home/Introduction.vue'
import Features from '~/components/home/Features.vue'
import Testimonials from '~/components/home/Testimonials.vue'
import Investors from '~/components/home/Investors.vue'
import Roadmap from '~/components/home/Roadmap.vue'
import NewsAndMedia from '~/components/home/NewsAndMedia.vue'
import OurPartners from '~/components/home/OurPartners.vue'
import Interoperability from '~/components/home/Interoperability.vue'
import Community from '~/components/home/Community.vue'
import Newsletter from '~/components/home/Newsletter.vue'
import AppFooter from '~/components/AppFooter.vue'
import AppCopyright from '~/components/AppCopyright.vue'
export default {
  components: {
    AppHeader,
    HeroSection,
    Introduction,
    Features,
    Testimonials,
    Investors,
    Roadmap,
    NewsAndMedia,
    OurPartners,
    Interoperability,
    Community,
    Newsletter,
    AppFooter,
    AppCopyright,
  },
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
