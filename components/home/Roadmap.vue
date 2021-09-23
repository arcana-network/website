<template>
  <section>
    <v-container>
      <v-stack>
        <app-section-descriptor
          title="Roadmap"
          heading="Eyes on the Road"
          description="We’re working hard to make privacy and security a de-facto computing standard. Look below to see what we’ve accomplished so far and what we’re working on next. And if you’re inspired, get involved!"
          style="max-width: 58rem"
        />
      </v-stack>
    </v-container>
    <div style="margin-top: 2rem; text-align: center">
      <v-image
        src="/images/roadmap-desktop.svg"
        class="tablet-remove mobile-remove"
        style="width: 100%; max-width: 1920px"
      />
      <div class="laptop-remove position-relative" style="text-align: center">
        <v-image src="/images/roadmap-mobile-bg.svg" />
        <v-image
          src="/images/roadmap-mobile-fg.svg"
          class="position-absolute"
          style="left: 50%; transform: translateX(-50%)"
        />
        <v-image
          src="/images/roadmap-mobile-fg-blur.svg"
          class="position-absolute"
          style="left: 50%; transform: translateX(-50%); margin-top: -1rem"
        />
      </div>
    </div>
  </section>
</template>

<script>
import AppSectionDescriptor from '../AppSectionDescriptor.vue'
import VContainer from '../lib/VContainer.vue'
import VImage from '../lib/VImage.vue'
import VStack from '../lib/VStack.vue'
export default {
  components: { VContainer, AppSectionDescriptor, VStack, VImage },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');
</style>
