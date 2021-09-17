<template>
  <label v-bind="$attrs" class="font-sans color-primary">{{ value }}</label>
</template>

<script>
export default {
  name: 'VLabel',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="postcss" scoped>
label {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.375rem;
  margin-bottom: 0.625rem;
}
</style>