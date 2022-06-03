<template>
  <div class="video-thumbnail-container">
    <v-image
      :path="src"
      :dimension="dimension"
      class="video-thumbnail cursor-pointer"
      @click.stop="onPlay"
    />
    <div
      class="video-controls absolute-center cursor-pointer"
      role="button"
      @click.stop="onPlay"
    >
      <v-image
        path="icons/play.svg"
        title="Play video"
        :dimension="[64, 64]"
        class="video-play-button absolute-center"
        @click.stop="onPlay"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VVideoThumbnail',
  props: {
    src: {
      type: String,
      default: null,
    },
    dimension: {
      type: Array,
      default() {
        return []
      },
    },
  },
  methods: {
    onPlay(ev) {
      this.$emit('play', ev)
    },
  },
}
</script>

<style lang="postcss" scoped>
.video-thumbnail-container {
  position: relative;
  overflow: hidden;
  padding: 0;
}

.video-thumbnail {
  width: 100%;
  vertical-align: middle;
}

.video-controls {
  z-index: 1;
  width: 16%;
  height: 16%;
  background-color: #f0f0f3;
  border-radius: 50%;
  box-shadow: 5px 5px 10px rgba(174, 174, 192, 0.2),
    inset -2px -2px 4px rgba(0, 0, 0, 0.1), inset 2px 2px 4px #fff;
}

.video-play-button {
  width: 32%;
  height: 32%;
  margin-left: 5%;
}
</style>
