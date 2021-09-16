<template>
  <component :is="'h' + level"><slot /></component>
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
  },
}
</script>
