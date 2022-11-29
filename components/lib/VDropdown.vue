<template>
  <div
    class="custom-select"
    :class="{ open: isOpen }"
    aria-haspopup="true"
    :aria-expanded="isOpen"
    @click.stop="toggle"
  >
    <div class="custom-select__trigger font-serif color-primary cursor-pointer">
      <span v-if="value">{{ value }}</span>
      <span v-else class="placeholder">{{ placeholder }}</span>
      <div class="arrow" @click.stop="toggle">
        <v-image path="icons/arrow-down.svg" @click.stop="toggle" />
      </div>
    </div>
    <div
      class="custom-options"
      aria-label="dropdown-options"
      role="list"
      tabindex="-1"
    >
      <span
        v-for="option in options"
        :key="option"
        role="listitem"
        :data-value="option"
        :aria-selected="option === value"
        class="custom-option font-serif color-secondary cursor-pointer"
        @click.stop="onChange(option, $event)"
      >
        {{ option }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VDropdown',
  props: {
    options: {
      type: Array,
      default() {
        return []
      },
    },
    value: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  mounted() {
    document.addEventListener('click', this.closeOnOutsideClick)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closeOnOutsideClick)
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    onChange(option, ev) {
      this.$emit('input', option)
      this.$emit('change', { ...ev, value: option })
      this.toggle()
    },
    closeOnOutsideClick() {
      this.isOpen = false
    },
  },
}
</script>

<style scoped>
@import url('./media-query-helper.css');

.custom-select {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: linear-gradient(141.48deg, #161616 -4.56%, #151515 135.63%);
  box-shadow: inset -2px -5px 10px rgba(57, 57, 57, 0.44),
    inset 5px 5px 10px rgba(11, 11, 11, 0.5);
  border-radius: 10px;

  @media (--viewport-medium) {
    border-radius: 5px;
  }
}
.custom-select__trigger {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.25rem;
  height: 3.75rem;

  @media (--viewport-medium) {
    font-size: 0.875rem;
    height: 2.5rem;
  }
}
.custom-options {
  position: absolute;
  display: block;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 200px;
  border-top: 0;
  background: linear-gradient(141.48deg, #161616 -4.56%, #151515 135.63%);
  box-shadow: inset -2px -5px 10px rgba(57, 57, 57, 0.44),
    inset 5px 5px 10px rgba(11, 11, 11, 0.5);
  transition: all 0.5s;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 9999;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 0 0 10px 10px;

  @media (--viewport-medium) {
    border-radius: 0 0 5px 5px;
  }
}
.custom-select.open .custom-options {
  opacity: 1;
  visibility: visible;
  pointer-events: all;
}
.custom-option {
  position: relative;
  padding: 0 1.25rem;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.25rem;
  transition: all 0.2s;
  height: 3.75rem;
  display: flex;
  align-items: center;

  @media (--viewport-medium) {
    font-size: 0.875rem;
    height: 2.5rem;
  }
}

.custom-option:not(:last-child) {
  border-bottom: 1px solid #353535;
}

.custom-option:hover {
  color: var(--color-white);
}
.arrow {
  position: relative;
  margin-left: 1rem;
  transition: all 0.3s;
  height: 3.75rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (--viewport-medium) {
    width: 0.675rem;
    height: 0.675rem;
  }
}
.arrow img {
  object-fit: cover;
  width: 1rem;
  margin-bottom: 0.2rem;

  @media (--viewport-medium) {
    width: 0.675rem;
  }
}
.open .arrow {
  transform: rotate(-180deg);
}
</style>
