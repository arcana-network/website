<template>
  <section>
    <v-container class="publication-container">
      <v-stack md-direction="column" justify="space-between" align="center">
        <v-image
          path="images/publications-illustration.svg"
          class="publication-illustration"
        />
        <v-stack
          direction="column"
          gap="2rem"
          align="start"
          class="publication-description-container"
        >
          <app-section-descriptor
            title="PUBLICATION"
            heading="Keep up to date with our network."
            description="Our codebase will be publicly verifiable with independent audits to validate the security and promise of ARCANA before Mainnet"
            class="publication-description"
          />
          <v-button
            label="Technical Paper"
            label-transform="uppercase"
            class="technical-paper-btn"
          />
        </v-stack>
      </v-stack>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'Publications',
}
</script>

<style scoped>
@import url('../lib/media-query-helper.css');

section {
  margin-top: 10rem;
  background: #080808
    linear-gradient(
      180deg,
      rgba(18, 18, 18, 0.2) 15.02%,
      rgba(255, 255, 255, 0.2) 47.35%,
      rgba(32, 32, 32, 0) 100%
    );
}

.publication-container {
  background: #0b0a0a;
}

.publication-description-container {
  width: 100%;
  max-width: 40rem;
}

.publication-illustration {
  width: 100%;
  max-width: 40rem;
}

.publication-description {
  max-width: 24rem;
}

.technical-paper-btn {
  padding: 1rem 2rem;
}
</style>
