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
      type: String,
      default: 'regular',
      validator: (value) =>
        ['extralight', 'light', 'regular', 'bold', 'extrabold'].includes(value),
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
      default: '1px',
    },
  },
  data() {
    return {
      classes: {},
      styles: {},
    }
  },
  mounted() {
    const fontWeightsMapping = {
      extralight: 300,
      light: 400,
      regular: 500,
      bold: 600,
      extrabold: 700,
    }
    this.classes['color-' + this.color] = true
    this.classes['font-' + this.font] = true
    this.styles['font-weight'] = fontWeightsMapping[this.weight]
    this.styles['font-size'] = this.size
    this.styles['line-height'] = this.lineHeight
    this.styles['letter-spacing'] = this.letterSpacing
  },
}
</script>

<style lang="postcss" scoped>
.color-primary {
  color: var(--colors-white);
}
.color-secondary {
  color: var(--colors-grey);
}
.color-link {
  color: var(--colors-blue);
}
.font-sans {
  font-family: var(--font-sans);
}
.font-serif {
  font-family: var(--font-serif);
}
</style>