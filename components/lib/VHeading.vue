<template>
  <component :is="'h' + level">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'VHeading',
  props: {
    level: {
      type: Number,
      default: 1,
      validator: (value) => value > 0 && value < 6,
    },
    color: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'link'].includes(value),
    },
    size: {
      type: String,
      default: null,
    },
    weight: {
      type: Number,
      default: null,
      validator: (value) =>
        [200, 300, 400, 500, 600, 700, 800, 900].includes(value),
    },
    font: {
      type: String,
      default: 'sans',
      validator: (value) => ['sans', 'serif'].includes(value),
    },
    lineHeight: {
      type: String,
      default: null,
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
    // Classes are coming from assets/css/styles.css
    this.classes['color-' + this.color] = true
    this.classes['font-' + this.font] = true
    if (this.weight) {
      this.styles['font-weight'] = this.weight
    }
    if (this.size) {
      this.styles['font-size'] = this.size
    }
    if (this.lineHeight) {
      this.styles['line-height'] = this.lineHeight
    }
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
