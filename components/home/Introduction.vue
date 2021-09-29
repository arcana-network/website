<template>
  <section>
    <v-container>
      <v-stack
        justify="space-between"
        gap="3.75rem"
        md-direction="column-reverse"
        md-gap="3.75rem"
        md-align="center"
      >
        <div class="position-relative introduction-video-container">
          <div class="orbit">
            <v-image
              src="/images/circular-ring.svg"
              class="introduction-video-orbit"
            />
            <v-image
              src="/images/orb-blue.svg"
              class="position-absolute orbit-orb-blue-large"
            />
            <v-image
              src="/images/orb-blue.svg"
              class="position-absolute orbit-orb-blue-small"
            />
            <v-image
              src="/images/orb-red.svg"
              class="position-absolute orb-red"
            />
            <v-image
              src="/images/orb-yellow.svg"
              class="position-absolute orb-yellow-left"
            />
            <v-image
              src="/images/orb-yellow.svg"
              class="position-absolute orb-yellow-right"
            />
          </div>
          <v-video-thumbnail
            src="/images/placeholder-test-image.png"
            class="introduction-video-thumbnail"
            style="position: absolute"
          />
        </div>
        <div class="introduction-description">
          <app-section-descriptor
            title="Introduction"
            heading="TLDR? Watch The Video"
            description="Don’t have a lot of time? Watch this video to learn more about who we are and what we do. You can learn a lot more about us afterwards."
            style="max-width: 32rem"
          />
        </div>
      </v-stack>
    </v-container>
  </section>
</template>

<script>
import AppSectionDescriptor from '../AppSectionDescriptor.vue'
import VContainer from '../lib/VContainer.vue'
import VVideoThumbnail from '../lib/VVideoThumbnail.vue'
import VImage from '../lib/VImage.vue'
import VStack from '../lib/VStack.vue'

export default {
  components: {
    VContainer,
    AppSectionDescriptor,
    VVideoThumbnail,
    VImage,
    VStack,
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper');

.introduction-video-container {
  width: 40rem;
  height: 46rem;

  @media (--viewport-large) {
    margin-left: -15%;
  }

  @media (--viewport-medium) {
    width: 22rem;
    height: 28rem;
  }
}

.introduction-video-orbit {
  width: 40rem;
  height: 40rem;
  margin-top: 4rem;
  @media (--viewport-medium) {
    width: 22rem;
    height: 22rem;
  }
}

.introduction-video-thumbnail {
  position: absolute;
  top: 7rem;
  left: 3rem;
  width: 34rem;
  height: 34rem;
  border-radius: 50%;

  @media (--viewport-medium) {
    width: 16rem;
    height: 16rem;
  }
}

.introduction-description {
  max-width: 40rem;
  display: flex;
  flex-grow: 1;
  align-items: center;
}

.orbit-orb-blue-large {
  width: 10%;
  top: 15%;
  right: 13%;

  @media (--viewport-medium) {
    top: 19%;
  }
}

.orbit-orb-blue-small {
  width: 4%;
  bottom: 8%;
  left: 24%;

  @media (--viewport-medium) {
    bottom: 11%;
  }
}

.orb-red {
  bottom: -2%;
  left: 28%;
  width: 5%;

  @media (--viewport-medium) {
    bottom: 0;
  }
}

.orb-yellow-left {
  top: 2%;
  left: 25%;
}

.orb-yellow-right {
  bottom: 2%;
  right: -30%;

  @media (--viewport-medium) {
    right: -15%;
  }
}
</style>
