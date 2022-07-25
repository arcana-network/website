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
            The Web3 Privacy Stack
          </v-heading>
          <v-stack direction="column">
            <app-section-descriptor
              description="Build secure & privacy preserving apps, easily."
              class="hero-description"
            />
            <v-stack
              sm-direction="column"
              align="center"
              gap="1.5rem"
              sm-gap="1.5rem"
              sm-justify="space-around"
              wrap
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
                class="secondary-button"
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
              src="images/arcana-intro-video-thumbnail.png"
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
      window.open(process.env.ARCANA_DASHBOARD_URL, '_blank')
    },
    handleOpenDocs() {
      window.open(process.env.ARCANA_DOCS_URL, '_blank')
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

.hero-description {
  margin-block: 2rem;
}

.hero-content-container {
  max-width: 38rem;
}

.hero-title {
  margin-block: 0;
  max-width: 12ch;
}

.secondary-button {
  padding: 1.125rem calc(2rem + 16px);
}

.arcana-video-thumbnail-container {
  overflow: visible;

  @media (--viewport-large) {
    max-width: 48rem;
    width: 80%;
    object-fit: contain;
    position: absolute;
    left: 60%;
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
    width: 88%;
  }

  @media (--viewport-medium) {
    width: 100%;
  }
}

.intro-video-inner-circle {
  position: absolute;
  vertical-align: middle;
  width: 60%;
  top: 15%;
  left: 15%;
}

.intro-video-glowing-orb {
  position: absolute;
  vertical-align: middle;
  width: 12%;
  top: 10%;
  right: 18%;
  z-index: 1;
}

.intro-video-dark-orb {
  position: absolute;
  vertical-align: middle;
  width: 6%;
  bottom: 8%;
  left: 14%;
  z-index: 1;
}

.thumbnail-gradient-border-container {
  position: absolute;
  width: 48%;
  top: 20%;
  left: 20%;
  background: linear-gradient(147.79deg, #ffd7a0 16.63%, #ee4783 72.62%);
  border-radius: 50%;
  padding: 1%;
}
</style>
