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
        wrap
        justify="space-between"
        sm-justify="center"
      >
        <!-- <v-image path="images/news/forbes.svg" /> -->
        <a
          href="https://markets.businessinsider.com/news/stocks/blockchain-startup-arcana-raises-seed-from-balaji-srinivasan-and-other-angels-1030598497"
          target="_blank"
        >
          <v-image path="images/news/businessinsider.svg" />
        </a>
        <a
          href="https://cointelegraph.com/press-releases/blockchain-startup-arcana-receives-funding-from-balaji-srinivasan-and-other-angels"
          target="_blank"
        >
          <v-image path="images/news/cointelegraph.svg" />
        </a>
        <!-- <v-image path="images/news/bloomberg.svg" /> -->
        <a
          href="https://yourstory.com/2021/07/funding-alert-blockchain-startup-arcana-coinbase-balaji-srinivasan/amp"
          target="_blank"
        >
          <v-image path="images/news/yourstory.svg" />
        </a>
        <a href="https://www.entrepreneur.com/article/377102" target="_blank">
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
  margin-top: 2rem;

  @media (--viewport-small) {
    margin-top: 0.5rem;
  }
}

.coverage > a > * {
  min-width: 10rem;
  padding: 1.5rem;
}

a {
  display: inline-block;
}

a > *:hover {
  background: radial-gradient(
    134.5% 939.99% at -23.59% -12.9%,
    #262626 0%,
    #1a1a1a 31.41%,
    rgba(32, 32, 32, 0.76) 100%
  );
  box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
</style>
