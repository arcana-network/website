<template>
  <section>
    <v-container>
      <v-stack
        justify="space-between"
        md-direction="column-reverse"
        align="center"
        md-justify="space-evenly"
        class="error-content-container"
      >
        <v-stack direction="column" class="error-content">
          <v-heading>Page Not Found!</v-heading>
          <v-text color="secondary" size="1.25rem" line-height="1.75rem">
            Decentralised storage, identity, access management and key
            management services to help developers build secure and
            privacy-preserving apps
          </v-text>
        </v-stack>
        <v-image
          path="images/404-illustration.png"
          class="error-illustration"
        />
      </v-stack>
    </v-container>
  </section>
</template>

<style lang="postcss" scoped>
.error-content-container {
  height: 80vh;
}

.error-content {
  max-width: 40rem;
}

.error-illustration {
  width: 90%;
  max-width: 40rem;
}
</style>
