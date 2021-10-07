<template>
  <section>
    <v-container>
      <v-stack justify="space-between" md-direction="column">
        <v-stack direction="column" style="max-width: 38rem">
          <v-heading :level="1">
            Driven by the principles Privacy by Design
          </v-heading>
          <app-section-descriptor
            description="It is our mission to make it easy for developers to ensure the security and privacy of user data."
          />
        </v-stack>
        <v-image
          class="principles-illustration"
          path="images/principles-illustration.svg"
        />
      </v-stack>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'OurPrinciples',
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

@media (--viewport-medium) {
  .principles-illustration {
    width: 100%;
    max-width: 20rem;
    margin-top: 4rem;
    align-self: center;
  }
}
</style>
