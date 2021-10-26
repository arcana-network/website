<template>
  <main>
    Hello, world!
  </main>
</template>

<script>
export default {
  layout: 'testnet',
  head() {
    return {
      title: 'Testnet - Arcana Network',
    }
  },
}
</script>

<style lang="postcss" scoped>
@import url('../components/lib/media-query-helper.css');

main {
  overflow-x: hidden;
}

main > * {
  margin-top: 6rem;

  @media (--viewport-medium) {
    margin-top: 4rem;
  }

  @media (--viewport-small) {
    margin-top: 2rem;
  }
}
</style>
