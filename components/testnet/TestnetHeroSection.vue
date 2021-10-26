<template>
  <section>
    <v-container>
      <v-stack
        class="hero-section-container"
        align="start"
        sm-align="center"
        direction="column"
        gap="30px"
      >
        <v-stack
          align="start"
          sm-align="center"
          direction="column"
          sm-direction="column"
          gap="10px"
          sm-gap="20px"
        >
          <v-heading
            class="hero-section-heading"
            :level="1"
            :weight="700"
            line-height="1.2"
          >
            Testnet Launch
          </v-heading>
          <v-text
            class="hero-section-description"
            color="secondary"
            line-height="1.5"
            :weight="400"
          >
            Descend into the Arcana Testnet and ready our Network for Mainnet
            Arrival.
          </v-text>
          <v-text class="hero-section-launch" line-height="1.5" :weight="700">
            Launching on 29th Oct
          </v-text>
        </v-stack>
        <v-stack align="start" justify="center" gap="30px" sm-gap="15px">
          <v-button
            type="button"
            label="Build Dapps"
            label-transform="uppercase"
            label-size="1rem"
            :label-weight="600"
            variant="outline"
          />
          <v-button
            type="button"
            label="Hunt Bugs"
            label-transform="uppercase"
            label-size="1rem"
            :label-weight="600"
          />
        </v-stack>
      </v-stack>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'TestnetHeroSection',
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

.hero-section-container {
  margin-top: 20vh;
  min-height: calc((941 - 86) / 1440 * 100vw - 20vh);
  float: right;

  @media (--viewport-small) {
    margin-top: calc(((451 - 86) / 375) * 100vw + 10vh);
    margin-bottom: 10vh;
    height: auto;
    float: none;
  }
}

.hero-section-heading {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 5rem;

  @media (--viewport-small) {
    font-size: 2.25rem;
    text-align: center;
  }
}

.hero-section-description {
  max-width: 38ch;
  font-size: 1.375rem;

  @media (--viewport-small) {
    font-size: 1rem;
    text-align: center;
    max-width: 30ch;
  }
}

.hero-section-launch {
  font-size: 1.375rem;

  @media (--viewport-small) {
    font-size: 1.14rem;
    text-align: center;
  }
}
</style>
