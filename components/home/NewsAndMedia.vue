<template>
  <section>
    <v-container>
      <v-stack justify="space-between" align="start" md-direction="column">
        <app-section-descriptor
          title="News and Media"
          heading="We’re in the News!"
          style="max-width: 48rem"
        />
        <v-button
          type="link"
          label="View all"
          label-transform="uppercase"
          style="margin-top: 2rem"
        />
      </v-stack>
      <v-stack class="coverage" gap="8rem" wrap style="margin-top: 2rem">
        <v-image path="images/news/forbes.svg" />
        <v-image path="images/news/businessinsider.svg" />
        <v-image path="images/news/cointelegraph.svg" />
        <v-image path="images/news/bloomberg.svg" />
        <v-image path="images/news/yourstory.svg" />
        <v-image path="images/news/enterprenuer.svg" />
      </v-stack>
    </v-container>
  </section>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.coverage * {
  min-width: 16rem;
}
</style>
