<template>
  <v-stack direction="column" align="center" style="text-align: center">
    <v-image v-if="image" :path="image" :alt="alt" />
    <v-heading v-if="title" :level="4" :weight="600" class="blurb-title">
      {{ title }}
    </v-heading>
    <v-text
      v-if="description"
      font="serif"
      color="secondary"
      :weight="400"
      class="blurb-description"
    >
      {{ description }}
    </v-text>
  </v-stack>
</template>

<script>
export default {
  name: 'VBlurb',
  props: {
    image: {
      type: String,
      default: null,
    },
    alt: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="postcss" scoped>
@import url('./media-query-helper.css');

img {
  max-width: 8rem;
}

.blurb-title {
  font-size: 1.125rem;
  line-height: 1.375rem;

  @media (--viewport-medium) {
    font-size: 1rem;
    line-height: 1.125rem;
  }
}

.blurb-description {
  font-size: 1rem;
  line-height: 1.25rem;

  @media (--viewport-medium) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
}
</style>
