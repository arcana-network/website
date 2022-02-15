<template>
  <section>
    <v-container>
      <v-stack
        justify="space-between"
        align="center"
        direction="column"
        md-justify="space-evenly"
        class="error-content-container"
      >
        <v-image
          path="images/404-illustration.png"
          class="error-illustration"
        />
        <v-heading>Page Not Found!</v-heading>
      </v-stack>
    </v-container>
  </section>
</template>

<style lang="postcss" scoped>
.error-content-container {
  height: 80vh;
}

.error-illustration {
  width: 90%;
  max-width: 40rem;
}
</style>
