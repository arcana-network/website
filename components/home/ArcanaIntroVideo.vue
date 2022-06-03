<template>
  <v-overlay>
    <iframe
      src="https://www.youtube.com/embed/itP6iLLskro?autoplay=1"
      title="What is Arcana? Mission | Benefits | Use Cases"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="absolute-center youtube-embed"
    ></iframe>
    <img
      src="@/assets/icons/close-white.svg"
      class="cursor-pointer position-absolute close-icon"
      title="Close Video"
      @click.stop="$emit('close')"
    />
  </v-overlay>
</template>

<script>
export default {
  name: 'ArcanaIntroVideo',
  emits: ['close'],
}
</script>

<style scoped lang="postcss">
@import url('../lib/media-query-helper.css');

.youtube-embed {
  width: 64rem;
  height: 36rem;

  @media (--viewport-medium) {
    width: 96vw;
    height: calc(96vw / 1.77);
  }
}

.close-icon {
  top: 2rem;
  right: 2rem;
  padding: 0.5rem;
}
</style>
