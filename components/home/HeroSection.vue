<template>
  <section>
    <v-container>
      <v-stack justify="space-between" md-direction="column" md-align="center">
        <v-stack direction="column">
          <v-heading :level="1" style="max-width: 38rem">
            The Storage and Privacy Stack for Ethereum dApps
          </v-heading>
          <v-stack direction="column" gap="2rem">
            <app-section-descriptor
              description="Decentralised storage, identity, access management and key
            management services to help developers build secure and
            privacy-preserving apps."
              style="max-width: 38rem"
            />
            <v-stack
              md-direction="column"
              align="center"
              gap="1.5rem"
              md-gap="1.5rem"
            >
              <v-button
                label="Start Building"
                label-transform="uppercase"
                :action="handleOpenDashboard"
              />
              <v-button
                variant="outline"
                label="Go To Docs"
                label-transform="uppercase"
                :action="handleOpenDocs"
              />
            </v-stack>
          </v-stack>
        </v-stack>
        <div class="video-thumbnail-container">
          <v-video-thumbnail
            src="images/Arcana-intro-video-thumbnail.png"
            style="position: absolute"
            @play="isIntroPlaying = true"
          />
        </div>
      </v-stack>
    </v-container>
    <home-arcana-intro-video
      v-if="isIntroPlaying"
      @close="isIntroPlaying = false"
    />
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      isIntroPlaying: false,
    }
  },
  methods: {
    handleOpenDashboard() {
      window.open('https://dashboard.arcana.network', '_blank')
    },
    handleOpenDocs() {
      window.open('https://docs.arcana.network', '_blank')
    },
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

section {
  padding: 0 0 6rem;

  @media (--viewport-small) {
    padding: 0;
    margin-top: 0 !important;
  }
}

.video-thumbnail-container {
  max-width: 800px;
  width: 100%;

  @media (--viewport-large) {
    margin-right: -12.5%;
  }
}
</style>
