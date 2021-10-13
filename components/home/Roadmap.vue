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
    <div class="roadmap-container">
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
export default {
  name: 'Roadmap',
}
</script>

<style lang="postcss" scoped>
/* Imported this for getting helper classes laptop-remove and mobile-remove */
@import url('../lib/media-query-helper.css');

section {
  padding: 6rem 0 0;

  @media (--viewport-small) {
    padding: 3rem 0 0;
    margin-bottom: -4rem;
  }
}

.roadmap-container {
  margin-top: 6rem;
  text-align: center;

  @media (--viewport-medium) {
    margin-top: 3rem;
  }
}

.roadmap-desktop {
  width: 100%;
  max-width: 1920px;
}

.roadmap-mobile {
  width: 100%;
  max-width: 375px;
}
</style>
