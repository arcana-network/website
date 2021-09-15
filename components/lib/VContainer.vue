<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VContainer',
}
</script>

<style lang="postcss" scoped>
.container {
  max-width: var(--max-container-width);
  width: var(--container-width);
  margin: 0 auto;
}
@media (max-width: 767px) {
  .container {
    width: var(--sm-container-width) !important;
  }
}
</style>