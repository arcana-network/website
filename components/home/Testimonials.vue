<template>
  <section>
    <v-container>
      <v-carousel class="carousel-container">
        <div
          v-for="(slide, index) in slides"
          :key="'testimonial-carousel-' + index"
        >
          <v-stack md-direction="column" align="center" md-align="start">
            <v-image
              :path="slide.companyLogo"
              class="testimonial-illustration"
            />
            <v-stack direction="column">
              <v-heading :level="4" class="testimonial-quote">
                “{{ slide.quote }}”
              </v-heading>
              <v-stack md-direction="column" align="baseline">
                <v-text class="testimonial-quoted-by">
                  {{ slide.quotedBy }},
                </v-text>
                <v-text color="secondary" class="designation">
                  {{ slide.designation }}
                </v-text>
              </v-stack>
            </v-stack>
          </v-stack>
        </div>
      </v-carousel>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'Testimonials',
  data() {
    return {
      slides: [
        {
          quote:
            'We’ve always been intensely focused on enabling our partners and customers to improve business outcomes. The addition of Arcana’s Security and Privacy will complement our mission of decentralizing our network.',
          quotedBy: 'Manohar K',
          designation: 'CEO of Unmarshal',
          companyLogo: 'images/testimonials/unmarshal.png',
        },
        {
          quote:
            'We are very excited to start working with Arcana Network to improve the developer experience of the crowd building the DIA ecosystem by offering a number of privacy and security features to our tech stack.',
          quotedBy: 'Michael Weber',
          designation: 'DIA Association President',
          companyLogo: 'images/testimonials/dia.png',
        },
        {
          quote:
            'Partnerships are all about pushing the boundaries on innovating for the customer through our products. Our partnership with Arcana will help us deliver exactly that while we explore new and innovative ways to deploy and bring robust scalability and privacy to our technology stack and eventually the RageFan users and community.',
          quotedBy: 'Satheesh Ananth',
          designation: 'Founder & CEO - Rage.Fan',
          companyLogo: 'images/testimonials/rage-fan.png',
        },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

section {
  background: #000 url('~assets/images/testimonial_bg.svg') no-repeat;
  background-size: cover;
  box-shadow: 0 1rem 2rem 0.5rem black, 0 -1rem 2rem 0.5rem black;
  padding: 8rem 0;

  @media (--viewport-small) {
    background: #000 url('~assets/images/testimonial_bg_mobile.svg') no-repeat;
    background-size: cover;
    padding: 2rem 0;
  }
}

/* Need to add height because Carousel component has relative position */
.carousel-container {
  width: 100%;
  height: 100vh;
  max-height: 26rem;

  @media (--viewport-medium) {
    max-height: 48rem;
  }

  @media (--viewport-small) {
    max-height: 32rem;
  }
}

.testimonial-quote {
  font-size: 1.5rem;
  line-height: 2rem;
  margin-top: 0;

  @media (--viewport-medium) {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }

  @media (--viewport-small) {
    font-size: 1rem;
    line-height: 1.2rem;
  }
}

.testimonial-quoted-by {
  font-size: 1.5rem;
  line-height: 2rem;

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

.testimonial-illustration {
  margin-right: 10vw;
  max-width: 16rem;

  @media (--viewport-medium) {
    margin: 6rem auto;
  }

  @media (--viewport-small) {
    margin: 1rem auto;
    max-width: 12rem;
  }
}
</style>
