<template>
  <section>
    <v-container>
      <v-stack justify="space-between" md-direction="column" md-align="center">
        <v-stack direction="column" style="max-width: 38rem">
          <v-heading :level="1">
            The Storage and Privacy Stack for Ethereum dApps
          </v-heading>
          <app-section-descriptor
            description="Decentralised storage, identity, access management and key
            management services to help developers build secure and
            privacy-preserving apps"
          />
          <v-stack
            md-direction="column"
            align="center"
            gap="1.5rem"
            style="margin-top: 2rem"
          >
            <v-button label="Get started" label-transform="uppercase" />
            <v-text color="secondary" size="1.125rem">
              Testnet Launching Soon!
            </v-text>
            <v-stack align="center" class="support-icons">
              <a href="https://t.me/ArcanaNetwork" target="__blank">
                <v-image src="/telegram.svg" />
              </a>
              <a href="https://discord.gg/BcbrsRsR" target="__blank">
                <v-image src="/discord.svg" />
              </a>
            </v-stack>
          </v-stack>
        </v-stack>
        <div class="position-relative section-orbs">
          <v-image src="/images/hero-section-orbs.svg" />
        </div>
      </v-stack>
    </v-container>
  </section>
</template>

<script>
import AppSectionDescriptor from '../AppSectionDescriptor.vue'
import VButton from '../lib/VButton.vue'
import VContainer from '../lib/VContainer.vue'
import VHeading from '../lib/VHeading.vue'
import VImage from '../lib/VImage.vue'
import VStack from '../lib/VStack.vue'
import VText from '../lib/VText.vue'
export default {
  name: 'HeroSection',
  components: {
    VContainer,
    VStack,
    VImage,
    VHeading,
    VButton,
    VText,
    AppSectionDescriptor,
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

.section-orbs {
  @media (--viewport-large) {
    margin-right: -12.5%;
  }
}

.support-icons a {
  margin-left: 1.5rem;
  margin-top: 1.5rem;
}
</style>
