<template>
  <button
    v-if="type === 'button'"
    class="font-serif cursor-pointer"
    :disabled="disabled"
    :aria-disabled="disabled"
    :aria-label="label"
    v-bind="$attrs"
    :style="styles"
    @click.stop="handleClick"
  >
    {{ label }}
  </button>
  <a
    v-else
    class="font-serif cursor-pointer"
    :disabled="disabled"
    :aria-label="label"
    :aria-disabled="disabled"
    v-bind="$attrs"
    :style="styles"
    @click.stop="handleClick"
  >
    {{ label }}
  </a>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    label: {
      type: String,
      default: null,
    },
    action: {
      type: Function,
      default() {
        return 0
      },
    },
    disabled: Boolean,
    type: {
      type: String,
      default: 'button',
      validator: (value) => ['button', 'link'].includes(value),
    },
    labelTransform: {
      type: String,
      default: null,
      validator: (value) =>
        ['uppercase', 'lowercase', 'capitalize'].includes(value),
    },
    labelSize: {
      type: String,
      default: null,
    },
    labelWeight: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      styles: {},
    }
  },
  created() {
    if (this.labelTransform) {
      this.styles['text-transform'] = this.labelTransform
    }
    if (this.labelSize) {
      this.styles['font-size'] = this.labelSize
    }
    if (this.labelWeight) {
      this.styles['font-weight'] = this.labelWeight
    }
  },
  methods: {
    handleClick(ev) {
      if (!this.disabled && 'call' in this.action) {
        this.action.call()
      } else {
        this.$emit('click', ev)
      }
    },
  },
}
</script>

<style lang="css" scoped>
button,
a {
  position: relative;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1.125rem 2rem;
  border: none;
  text-align: center;
  border-radius: 4px;
  background: none;
  white-space: nowrap;
  opacity: 1;
  transition: opacity 0.5s;
}

/* Primary Button Styles */
button {
  background: linear-gradient(0deg, #0085ff 0%, #29c8fa 100%);
  color: var(--color-white);
}
button:disabled {
  background: linear-gradient(180deg, #2b2b2b -4.5%, #4e4e4e 100.1%);
  color: var(--color-grey);
  cursor: not-allowed;
}

/* Link styles */
a {
  padding: 0;
  color: var(--color-blue);
  min-width: 0;
  text-decoration: none;
}
a:not([disabled='true']):active {
  transform: scale(0.99);
}
a[disabled='true'] {
  cursor: not-allowed;
  color: #8d8d8d;
}

/* Hover styles */
button:hover:not(:disabled),
a:not([disabled='true']):hover {
  opacity: 0.8;
}
</style>
