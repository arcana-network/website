<template>
  <div>
    <v-text font="sans" size="1.25rem">
      {{ currentYear }} Arcana Technologies Ltd.
    </v-text>
  </div>
</template>

<script>
export default {
  name: 'AppCopyright',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style lang="postcss" scoped>
div {
  padding-bottom: 2.5rem;
  text-align: center;
}
</style>
