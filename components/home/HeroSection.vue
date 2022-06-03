<template>
  <section class="hero-section">
    <v-container>
      <v-stack
        justify="space-between"
        md-direction="column-reverse"
        md-align="center"
        class="position-relative"
      >
        <v-stack direction="column" class="hero-content-container">
          <v-heading :level="1" class="hero-title">
            The Storage and Privacy Stack for Ethereum dApps
          </v-heading>
          <v-stack direction="column" gap="2rem">
            <app-section-descriptor
              description="Decentralised storage, identity, access management and key
            management services to help developers build secure and
            privacy-preserving apps."
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
        <div class="arcana-video-thumbnail-container">
          <img
            src="@/assets/images/intro-video-outer-circle.svg"
            class="intro-video-outer-circle"
          />
          <img
            src="@/assets/images/intro-video-inner-circle.svg"
            class="intro-video-inner-circle"
          />
          <img
            src="@/assets/images/intro-video-glowing-orb.png"
            class="intro-video-glowing-orb"
          />
          <img
            src="@/assets/images/intro-video-dark-orb.png"
            class="intro-video-dark-orb"
          />
          <div class="thumbnail-gradient-border-container">
            <v-video-thumbnail
              src="images/Arcana-intro-video-thumbnail.png"
              @play="isIntroPlaying = true"
            />
          </div>
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

.hero-section {
  padding: 0 0 6rem;

  @media (--viewport-small) {
    padding: 0;
    margin-top: 0 !important;
  }
}

.hero-content-container {
  max-width: 38rem;
}

.hero-title {
  margin-top: 0;
}

.arcana-video-thumbnail-container {
  overflow: visible;

  @media (--viewport-large) {
    max-width: 48rem;
    width: 72%;
    object-fit: contain;
    position: absolute;
    left: 50%;
    top: -20%;
  }

  @media (--viewport-medium) {
    position: relative;
    width: 120%;
    max-width: 36rem;
  }
}

.arcana-video-thumbnail-container::before {
  content: '';
  overflow: visible;
  position: absolute;
  top: -2%;
  left: -2%;
  right: -2%;
  bottom: -2%;
  z-index: -1;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(214, 69, 85, 0.3) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  transform: skew(30deg);
}

.intro-video-outer-circle {
  vertical-align: middle;

  @media (--viewport-large) {
    width: 100%;
  }

  @media (--viewport-medium) {
    width: 100%;
  }
}

.intro-video-inner-circle {
  position: absolute;
  vertical-align: middle;
  width: 70%;
  top: 15%;
  left: 15%;
}

.intro-video-glowing-orb {
  position: absolute;
  vertical-align: middle;
  width: 16%;
  top: 14%;
  right: 24%;
  z-index: 1;
}

.intro-video-dark-orb {
  position: absolute;
  vertical-align: middle;
  width: 8%;
  bottom: 8%;
  left: 15%;
  z-index: 1;
}

.thumbnail-gradient-border-container {
  position: absolute;
  width: 56%;
  top: 21%;
  left: 21%;
  background: linear-gradient(147.79deg, #ffd7a0 16.63%, #ee4783 72.62%);
  border-radius: 50%;
  padding: 1%;
}
</style>
