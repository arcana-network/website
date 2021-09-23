<template>
  <section>
    <v-container>
      <v-stack
        md-direction="column"
        justify="space-between"
        align="center"
        md-align="start"
      >
        <v-image src="/images/moon.svg" class="testimonial-illustration" />
        <v-carousel
          :current-slide="currentSlide"
          :transition-name="transitionName"
          class="carousel-container"
          @prev="slide(-1)"
          @next="slide(1)"
        >
          <v-stack direction="column">
            <v-heading :level="4" class="testimonial-quote">
              “{{ slides[currentSlide].quote }}”
            </v-heading>
            <v-stack
              md-direction="column"
              style="margin-top: 1.5rem"
              align="baseline"
            >
              <v-text class="testimonial-quoted-by">
                {{ slides[currentSlide].quotedBy }},
              </v-text>
              <v-text color="secondary" class="designation">
                {{ slides[currentSlide].designation }}
              </v-text>
            </v-stack>
            <v-image
              :src="slides[currentSlide].companyLogo"
              class="company-logo"
            />
          </v-stack>
        </v-carousel>
      </v-stack>
    </v-container>
  </section>
</template>

<script>
import VCarousel from '../lib/VCarousel.vue'
import VContainer from '../lib/VContainer.vue'
import VHeading from '../lib/VHeading.vue'
import VImage from '../lib/VImage.vue'
import VStack from '../lib/VStack.vue'
import VText from '../lib/VText.vue'
export default {
  components: { VContainer, VStack, VImage, VCarousel, VHeading, VText },
  data() {
    return {
      currentSlide: 0,
      transitionName: 'next',
      slides: [
        {
          quote:
            'We’ve always been intensely focused on enabling our partners and customers to improve business outcomes. The addition of Arcana’s Security and Privacy will complement our mission of decentralizing our network',
          quotedBy: 'Ram Sharma',
          designation: 'CEO and Co-Founder',
          companyLogo: '/images/testimonials/unmarshal.svg',
        },
        {
          quote:
            'We’ve always been intensely focused on enabling our partners and customers to improve business outcomes. The addition of Arcana’s Security and Privacy will complement our mission of decentralizing our network',
          quotedBy: 'Ram Sharma',
          designation: 'CEO and Co-Founder',
          companyLogo: '/images/testimonials/unmarshal.svg',
        },
        {
          quote:
            'We’ve always been intensely focused on enabling our partners and customers to improve business outcomes. The addition of Arcana’s Security and Privacy will complement our mission of decentralizing our network',
          quotedBy: 'Ram Sharma',
          designation: 'CEO and Co-Founder',
          companyLogo: '/images/testimonials/unmarshal.svg',
        },
      ],
    }
  },
  methods: {
    slide(i) {
      this.transitionName = i === -1 ? 'prev' : 'next'
      const len = this.slides.length
      this.currentSlide = (this.currentSlide + (i % len) + len) % len
    },
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');
section {
  background: url('/images/section-bg.svg');
  background-repeat: no-repeat;
  background-size: cover;
}

.carousel-container {
  width: 100%;
  max-width: 40rem;
  height: 50vh;
  max-height: 50rem;
}

.company-logo {
  width: 10rem;
  margin-top: 1.5rem;
}

.testimonial-quote {
  font-size: 1.75rem;
  line-height: 2.125rem;
  margin-top: 0;

  @media (--viewport-medium) {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
}

.testimonial-quoted-by {
  font-size: 1.625rem;
  line-height: 2.5rem;

  @media (--viewport-medium) {
    font-size: 0.875rem;
    line-height: 1.375rem;
  }
}

.designation {
  font-size: 1rem;
  line-height: 1.5rem;
  margin-left: 1rem;

  @media (--viewport-medium) {
    font-size: 0.75rem;
    line-height: 1.125rem;
    margin-left: 0;
  }
}

@media (--viewport-medium) {
  .testimonial-illustration {
    margin: 0 auto 4rem;
    width: 100%;
    max-width: 30rem;
  }
}
</style>
