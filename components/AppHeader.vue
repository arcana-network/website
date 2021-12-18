<template>
  <header>
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
    <v-header
      logo="images/arcana-logo-vertical.svg"
      :cta="headerCta"
      :menu-items="menuItems"
    />
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      headerCta: {
        label: 'Technical Paper',
        action: this.openTechnicalPaper,
      },
      menuItems: [
        {
          name: 'Docs',
          link: 'https://docs.arcana.network',
          external: true,
        },
        {
          name: 'Technology',
          link: '/tech/',
        },
        {
          name: 'About',
          link: '/about/',
        },
      ],
    }
  },
  methods: {
    openTechnicalPaper() {
      window.open(
        'https://www.notion.so/Arcana-Technical-Docs-a1d7fd0d2970452586c693e4fee14d08',
        '_blank'
      )
    },
  },
}
</script>

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
