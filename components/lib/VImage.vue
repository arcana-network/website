<template>
  <img
    :class="{ responsive }"
    v-bind="$attrs"
    :style="styles"
    :width="dimension[0] ? dimension[0] : ''"
    :height="dimension[1] ? dimension[1] : ''"
    @click.stop="(ev) => $emit('click', ev)"
  />
</template>

<script>
export default {
  name: 'VImage',
  props: {
    responsive: {
      type: Boolean,
    },
    width: {
      type: String,
      default: null,
    },
    height: {
      type: String,
      default: 'auto',
    },
    maxWidth: {
      type: String,
      default: null,
    },
    minWidth: {
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
  data() {
    return {
      styles: {},
    }
  },
  created() {
    this.styles.height = this.height
    if (this.width) {
      this.styles.width = this.width
    }
    if (this.maxWidth) {
      this.styles['max-width'] = this.maxWidth
    }
    if (this.minWidth) {
      this.styles['min-width'] = this.minWidth
    }
  },
}
</script>

<style lang="postcss" scoped>
.responsive {
  width: 100%;
  height: auto;
}
</style>
