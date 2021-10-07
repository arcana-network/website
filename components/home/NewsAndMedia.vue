<template>
  <section>
    <v-container>
      <v-stack justify="space-between" align="start" md-direction="column">
        <app-section-descriptor
          title="News and Media"
          heading="We’re in the News!"
          style="max-width: 48rem"
        />
        <!-- <v-button
          type="link"
          label="View all"
          label-transform="uppercase"
          style="margin-top: 2rem"
        /> -->
      </v-stack>
      <v-stack
        class="coverage"
        align="center"
        gap="1rem"
        md-gap="3rem"
        wrap
        justify="space-between"
        sm-justify="center"
      >
        <!-- <v-image path="images/news/forbes.svg" /> -->
        <a
          href="https://markets.businessinsider.com/news/stocks/blockchain-startup-arcana-raises-seed-from-balaji-srinivasan-and-other-angels-1030598497"
          target="__blank"
        >
          <v-image path="images/news/businessinsider.svg" />
        </a>
        <a
          href="https://cointelegraph.com/press-releases/blockchain-startup-arcana-receives-funding-from-balaji-srinivasan-and-other-angels"
          target="__blank"
        >
          <v-image path="images/news/cointelegraph.svg" />
        </a>
        <!-- <v-image path="images/news/bloomberg.svg" /> -->
        <a
          href="https://yourstory.com/2021/07/funding-alert-blockchain-startup-arcana-coinbase-balaji-srinivasan/amp"
          target="__blank"
        >
          <v-image path="images/news/yourstory.svg" />
        </a>
        <a href="https://www.entrepreneur.com/article/377102" target="__blank">
          <v-image path="images/news/enterprenuer.svg" />
        </a>
      </v-stack>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'NewsAndMedia',
}
</script>

<style lang="postcss" scoped>
section {
  padding: 6rem 0;

  @media (--viewport-small) {
    padding: 3rem 0;
  }
}

.coverage {
  margin-top: 4rem;

  @media (--viewport-small) {
    margin-top: 2rem;
  }
}

.coverage * {
  min-width: 14rem;
}
</style>
