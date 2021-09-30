<template>
  <section>
    <v-container>
      <v-stack justify="space-between" align="center">
        <v-stack direction="column" class="technology-hero-section">
          <app-section-descriptor title="Technology" />
          <v-heading :level="1">
            A comprehensive stack to help developers build secure and privacy
            preserving apps
          </v-heading>
          <app-section-descriptor
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            class="technology-hero-description"
          />
        </v-stack>
        <v-image path="images/technology-hero.svg" />
      </v-stack>
    </v-container>
  </section>
</template>

<script>
import AppSectionDescriptor from '../AppSectionDescriptor.vue'
import VContainer from '../lib/VContainer.vue'
import VHeading from '../lib/VHeading.vue'
import VImage from '../lib/VImage.vue'
import VStack from '../lib/VStack.vue'

export default {
  name: 'Technology',
  components: { VContainer, VStack, AppSectionDescriptor, VHeading, VImage },
}
</script>

<style scoped>
.technology-hero-section {
  max-width: 48rem;
}

.technology-hero-description {
  max-width: 40rem;
}
</style>