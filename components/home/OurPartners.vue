<template>
  <section>
    <v-container>
      <v-stack justify="space-between" md-direction="column" align="center">
        <v-stack direction="column" align="start">
          <app-section-descriptor
            title="Our Partners"
            heading="A Strong Network"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc, luctus urna pulvinar ullamcorper viverra cras. Faucibus posuere at mollis auctor id. Nulla posuere a arcu nunc ultricies senectus vitae."
            style="max-width: 48rem"
          />
          <v-button
            type="link"
            label="View All"
            label-transform="uppercase"
            style="margin-top: 2rem"
          />
        </v-stack>
        <div class="position-relative partner-logo-container">
          <v-image
            src="/images/our-partners-orbs.svg"
            style="margin-right: -2rem"
            class="base-illustration"
          />
          <v-image
            src="/images/partner-unmarshal.svg"
            title="Unmarshal"
            alt="Unmarshal"
            class="position-absolute"
            style="bottom: 14%; left: 0; width: 25%"
          />
          <v-image
            src="/images/partner-dia.svg"
            title="Dia"
            alt="Dia"
            class="position-absolute"
            style="bottom: 18%; right: 0; width: 24%"
          />
          <v-image
            src="/images/partner-rage-fan.svg"
            title="Rage.Fan"
            alt="Rage.Fan"
            class="position-absolute"
            style="top: 12%; right: 20%; width: 20%"
          />
          <v-image
            src="/images/partner-builders-tribe.svg"
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
import AppSectionDescriptor from '../AppSectionDescriptor.vue'
import VButton from '../lib/VButton.vue'
import VContainer from '../lib/VContainer.vue'
import VImage from '../lib/VImage.vue'
import VStack from '../lib/VStack.vue'
export default {
  components: { VContainer, AppSectionDescriptor, VStack, VButton, VImage },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

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
