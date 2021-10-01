<template>
  <section>
    <v-container class="technology-container">
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

      <v-stack justify="space-between" align="center">
        <v-image path="images/decentralised-storage.svg" />
        <v-stack direction="column" class="tech-stack">
          <app-section-descriptor
            heading="Decentralised Storage"
            description="Storage nodes store only a piece of an encrypted file, ensuring data security at rest. No snooping by anyone! "
            class="tech-stack-description"
          />
        </v-stack>
      </v-stack>

      <v-stack justify="space-between" align="center">
        <v-stack direction="column" class="tech-stack">
          <app-section-descriptor
            heading="End to End Encryption"
            description="Storage nodes store only a piece of an encrypted file, ensuring data security at rest. No snooping by anyone!"
            class="tech-stack-description"
          />
        </v-stack>
        <v-image path="images/e2e-encryption.svg" />
      </v-stack>

      <v-stack justify="space-between" align="center">
        <v-image path="images/key-management.svg" />
        <v-stack direction="column" class="tech-stack">
          <app-section-descriptor
            heading="Non-Custodial Key Management"
            description="Storage nodes store only a piece of an encrypted file, ensuring data security at rest. No snooping by anyone!"
            class="tech-stack-description"
          />
        </v-stack>
      </v-stack>

      <v-stack justify="space-between" align="center">
        <v-stack direction="column" class="tech-stack">
          <app-section-descriptor
            heading="Decentralised IAM"
            description="Storage nodes store only a piece of an encrypted file, ensuring data security at rest. No snooping by anyone!"
            class="tech-stack-description"
          />
        </v-stack>
        <v-image path="images/decentralised-iam.svg" />
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
.technology-container > * {
  margin-top: 10rem;
}

.technology-hero-section {
  max-width: 48rem;
}

.technology-hero-description {
  max-width: 40rem;
}

.tech-stack {
  width: 100%;
  max-width: 40rem;
}

.tech-stack-description {
  max-width: 30rem;
}
</style>