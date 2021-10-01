<template>
  <section>
    <v-container>
      <v-stack md-direction="column" justify="space-between" align="center">
        <v-stack direction="column" align="start" gap="2rem">
          <app-section-descriptor
            title="community"
            heading="Join Our Team"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
            class="joinus-description"
          />
          <v-button
            label="Join us"
            label-transform="uppercase"
            class="joinus-btn"
          />
        </v-stack>
        <v-image
          path="images/joinus-illustration.svg"
          class="joinus-illustration"
        />
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
  name: 'JoinUs',
  components: { VContainer, VStack, VImage, AppSectionDescriptor, VButton },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

section {
  margin-top: 10rem;
}

.joinus-description {
  max-width: 36rem;
}

.joinus-illustration {
  width: 90%;
  max-width: 60rem;

  @media (--viewport-large) {
    margin-right: -20%;
  }

  @media (--viewport-medium) {
    width: 150%;
    margin-top: -20%;
  }
}

.joinus-btn {
  padding: 1rem 3rem;

  @media (--viewport-medium) {
    padding: 1rem 2rem;
  }
}
</style>