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
        <v-image
          path="images/404-illustration.png"
          class="error-illustration"
        />
        <v-stack direction="column" class="error-content">
          <v-heading>Page Not Found!</v-heading>
        </v-stack>
      </v-stack>
    </v-container>
  </section>
</template>

<style lang="postcss" scoped>
.error-content-container {
  height: 80vh;
  display: flex;
  flex-direction: column;
}

.error-content {
  max-width: 40rem;
}

.error-illustration {
  width: 90%;
  max-width: 40rem;
}
</style>
