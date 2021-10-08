<template>
  <section>
    <v-container>
      <v-stack justify="space-between" md-direction="column" align="center">
        <v-stack direction="column" align="start">
          <app-section-descriptor
            title="Our Partners"
            heading="Scaling Privacy Across the Ethereum Ecosystem"
            description="We’re partnering with great projects in the ecosystem to help them with Authentication, Managing access to data, secure their keys, and build new use cases."
            style="max-width: 48rem"
          />
          <v-button
            type="link"
            label="Read more on Medium"
            label-transform="uppercase"
            style="margin-top: 2rem"
          />
        </v-stack>
        <div class="position-relative partner-logo-container">
          <v-image
            path="images/our-partners-orbs.svg"
            style="margin-right: -2rem"
            class="base-illustration"
          />
          <v-image
            path="images/partner-unmarshal.svg"
            title="Unmarshal"
            alt="Unmarshal"
            class="position-absolute"
            style="bottom: 14%; left: 0; width: 25%"
          />
          <v-image
            path="images/partner-dia.svg"
            title="Dia"
            alt="Dia"
            class="position-absolute"
            style="bottom: 18%; right: 0; width: 24%"
          />
          <v-image
            path="images/partner-rage-fan.svg"
            title="Rage.Fan"
            alt="Rage.Fan"
            class="position-absolute"
            style="top: 12%; right: 20%; width: 20%"
          />
          <v-image
            path="images/partner-builders-tribe.svg"
            title="Builders Tribe"
            alt="Builders Tribe"
            class="position-absolute"
            style="bottom: 38%; left: 24%; width: 18%"
          />
        </div>
      </v-stack>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'OurPartners',
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

section {
  padding: 6rem 0;

  @media (--viewport-small) {
    padding: 3rem 0;
  }
}

@media (--viewport-small) {
  .partner-logo-container {
    width: 100%;
  }

  .partner-logo-container .base-illustration {
    object-fit: cover;
    width: 100%;
  }
}
</style>
