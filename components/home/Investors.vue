<template>
  <section>
    <v-container>
      <v-stack justify="space-between" md-direction="column" align="start">
        <v-stack direction="column">
          <app-section-descriptor
            title="our investors"
            heading="They’re Awesome Investors. And They Chose To Back Us!"
            style="max-width: 40rem; margin-bottom: 1.25rem"
          />
          <app-section-descriptor
            description="Everyone of these great investors are well known and well respected in their own right. Through us, they’re helping shape the world like the way they envision it should be. "
            style="max-width: 60rem"
          />
        </v-stack>
        <v-button
          type="link"
          label="View all"
          label-transform="uppercase"
          style="margin-top: 2rem"
        />
      </v-stack>
    </v-container>
    <div
      class="position-relative investors"
      style="margin: 3rem auto 0; max-width: 1920px"
    >
      <div style="max-height: 540px; height: 50vh" />
      <v-image
        src="/images/investors/balaji.png"
        title="Balaji Srinivasan"
        alt="Balaji Srinivasan"
        class="position-absolute"
        style="bottom: 10%; left: 5%"
      />
      <v-image
        src="/images/investors/tamar.png"
        title="Tamar Menteshashvili"
        alt="Tamar Menteshashvili"
        class="position-absolute"
        style="top: 0%; right: 25%"
      />
      <v-image
        src="/images/investors/kendrick.png"
        class="position-absolute"
        title="Kendrick Nguyen"
        alt="Kendrick Nguyen"
        style="top: 10%; left: 20%"
      />
      <v-image
        src="/images/investors/au21.png"
        class="position-absolute"
        title="AU21 Capital"
        alt="AU21 Capital"
        style="bottom: 0%; left: 25%"
      />
      <v-image
        src="/images/investors/kenetic.png"
        class="position-absolute"
        title="Kenetic Capital"
        alt="Kenetic Capital"
        style="bottom: 0%; right: 15%"
      />
      <v-image
        src="/images/investors/siddharth.png"
        class="position-absolute"
        title="Siddharth Menon"
        alt="Siddharth Menon"
        style="top: 50%; right: 30%"
      />
      <v-image
        src="/images/investors/santiago.png"
        class="position-absolute"
        title="Santiago Santos"
        alt="Santiago Santos"
        style="top: 15%; left: 50%"
      />
      <v-image
        src="/images/investors/aniket.png"
        class="position-absolute"
        title="Aniket Jindal"
        alt="Aniket Jindal"
        style="top: 45%; right: 5%"
      />
      <v-image
        src="/images/investors/john.png"
        class="position-absolute"
        title="John Lilic"
        alt="John Lilic"
        style="top: 40%; left: 35%"
      />
    </div>
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

.investors img {
  @media (--viewport-medium) {
    transform: scale(0.75);
  }
}
</style>
