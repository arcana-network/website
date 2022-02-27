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
          description="We love work but love to chill and party too. While we build privacy-preserving apps, we also do our fair bit of work to preserve our app-yiness and sanity."
          style="max-width: 60rem"
        />
      </v-container>
      <v-stack class="team-image-container">
        <v-image width="32%" path="images/careers/photo_1.png" />
        <v-image width="68%" path="images/careers/photo_2.png" />
      </v-stack>
      <v-stack class="team-image-container">
        <v-image width="68%" path="images/careers/photo_3.png" />
        <v-image width="32%" path="images/careers/photo_4.png" />
      </v-stack>
    </v-stack>
  </section>
</template>

<script>
export default {
  name: 'EndSection',
}
</script>

<style lang="postcss" scoped>
.team-image-container {
  max-width: 100%;
  height: 100%;
}
.team-image-container:nth-child(2) {
  margin-top: 100px;
}
</style>
