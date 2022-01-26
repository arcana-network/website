<template>
  <section>
    <v-stack
      direction="column"
      md-direction="column"
      sm-direction="column"
      gap="6rem"
      md-gap="4rem"
      sm-gap="2rem"
    >
      <v-container>
        <app-section-descriptor
          title="Small Team. Big Mission."
          heading="Join us to Catalyse the #PrivacyBigBang"
          style="max-width: 60rem"
        />
        <app-section-descriptor
          description="We love work but love beaches and beer more. While we build privacy-preserving apps, we also do our fair bit of work to preserve our app-yiness and sanity."
          style="max-width: 60rem"
        />
      </v-container>
      <v-image class="team" path="images/careers/team.png" />
    </v-stack>
  </section>
</template>

<script>
export default {
  name: 'EndSection',
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');
</style>
