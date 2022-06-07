<template>
  <div class="banner">
    <v-text line-height="1.5" :weight="500" size="1rem">
      <a href="https://testnet.arcana.network" target="_blank"
        >Arcana Alpha Testnet</a
      >
      is now live. Read our
      <a
        href="https://medium.com/arcana-network-blog/launching-arcanas-alpha-testnet-quantum-descent-and-25k-usd-bug-bounty-a22cbc3f8ef3"
        target="_blank"
        >blog post</a
      >.
    </v-text>
  </div>
</template>

<style lang="postcss" scoped>
@import url('./lib/media-query-helper.css');

.banner {
  background: linear-gradient(180deg, #0085ff -4.5%, #29c8fa 100.1%);
  padding: 0.75em 1.5em;
  color: white;
  text-align: center;
  @media (--viewport-small) {
    padding: 1rem 2rem;
  }
}

a {
  color: var(--color-white);
  transition: opacity 0.4s ease-in;
  opacity: 1;
}

a:hover,
a:focus {
  opacity: 0.8;
  transition: opacity 0.4s ease-in;
}
</style>
