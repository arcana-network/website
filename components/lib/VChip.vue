<template>
  <div class="chip">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VChip',
}
</script>

<style scoped>
.chip {
  position: relative;
  background: radial-gradient(
    134.5% 939.99% at -23.59% -12.9%,
    #262626 0%,
    rgba(26, 26, 26, 0.86293) 31.41%,
    rgba(32, 32, 32, 0.49) 100%
  );
  box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 1rem;
  max-width: 16rem;
  color: white;
}
</style>
