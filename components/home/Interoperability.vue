<template>
  <section>
    <v-container>
      <v-stack
        justify="space-between"
        align="center"
        md-direction="column"
        md-align="start"
      >
        <v-image
          src="/images/interoperability-illustration.svg"
          class="interoperability-illustration"
        />
        <v-stack direction="column" style="max-width: 40rem; flex-grow: 1">
          <app-section-descriptor
            title="interoperability"
            heading="We Play Well With Everyone"
            style="max-width: 20rem"
          />
          <v-text
            font="sans"
            size="1.5rem"
            line-height="1.875rem"
            style="max-width: 28.5rem"
          >
            Ethereum, Polygon, Binance and EVM compatible chains will be
            supported and there are lots more to come.
          </v-text>
        </v-stack>
      </v-stack>
    </v-container>
  </section>
</template>

<script>
import AppSectionDescriptor from '../AppSectionDescriptor.vue'
import VContainer from '../lib/VContainer.vue'
import VImage from '../lib/VImage.vue'
import VStack from '../lib/VStack.vue'
import VText from '../lib/VText.vue'
export default {
  components: { VContainer, AppSectionDescriptor, VStack, VImage, VText },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

section {
  background: url('/images/section-bg.svg');
  background-repeat: no-repeat;
  background-size: cover;
}

.interoperability-illustration {
  max-width: 40rem;
  width: 100%;

  @media (--viewport-medium) {
    margin: 0 auto;
  }
}
</style>
