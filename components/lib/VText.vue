<template>
  <span :class="classes" :style="styles">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'VText',
  props: {
    color: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'link'].includes(value),
    },
    size: {
      type: String,
      default: '1em',
    },
    weight: {
      type: Number,
      default: 500,
      validator: (value) =>
        [200, 300, 400, 500, 600, 700, 800, 900].includes(value),
    },
    font: {
      type: String,
      default: 'serif',
      validator: (value) => ['sans', 'serif'].includes(value),
    },
    lineHeight: {
      type: String,
      default: '1.125em',
    },
    letterSpacing: {
      type: String,
      default: null,
    },
    gradient: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      classes: {},
      styles: {},
    }
  },
  created() {
    this.classes['color-' + this.color] = true
    this.classes['font-' + this.font] = true
    this.styles['font-weight'] = this.weight
    this.styles['font-size'] = this.size
    this.styles['line-height'] = this.lineHeight
    if (this.letterSpacing) {
      this.styles['letter-spacing'] = this.letterSpacing
    }
    if (this.gradient) {
      this.classes.gradient = true
      this.styles.background = this.gradient
    }
  },
}
</script>

<style lang="postcss" scoped>
.gradient {
  background-clip: text !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}
</style>