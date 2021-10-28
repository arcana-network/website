<template>
  <div class="page">
    <TestnetHeader />
    <main>
      <TestnetHeroSection />
      <TestnetOverviewSection />
    </main>
    <TestnetFooter />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Testnet - Arcana Network',
    }
  },
}
</script>

<style lang="postcss" scoped>
@import url('../components/lib/media-query-helper.css');

.page {
  background: url('~assets/images/testnet-hero-bg.png') no-repeat;
  background-size: contain;
  background-position: top;

  @media (--viewport-small) {
    background: url('~assets/images/testnet-hero-bg-mobile.png') no-repeat;
    background-size: 100%;
  }
}

main {
  overflow-x: hidden;
}

main > * + * {
  margin-top: 6rem;

  @media (--viewport-medium) {
    margin-top: 4rem;
  }

  @media (--viewport-small) {
    margin-top: 2rem;
  }
}
</style>
