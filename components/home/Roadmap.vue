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
        path="images/roadmap-desktop.svg"
        class="tablet-remove mobile-remove roadmap-desktop"
      />
      <div class="laptop-remove position-relative" style="text-align: center">
        <v-image path="images/roadmap-mobile.svg" class="roadmap-mobile" />
      </div>
    </div>
  </section>
</template>

<script>
import VContainer from '~/components/lib/VContainer.vue'
import VImage from '~/components/lib/VImage.vue'
import VStack from '~/components/lib/VStack.vue'

import AppSectionDescriptor from '~/components/AppSectionDescriptor.vue'

export default {
  components: { VContainer, AppSectionDescriptor, VStack, VImage },
}
</script>

<style lang="postcss" scoped>
/* Imported this for getting helper classes laptop-remove and mobile-remove */
@import url('../lib/media-query-helper.css');

.roadmap-desktop {
  width: 100%;
  max-width: 1920px;
}

.roadmap-mobile {
  width: 100%;
  max-width: 375px;
}
</style>
