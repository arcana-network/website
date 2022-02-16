<template>
  <section>
    <v-container>
      <v-stack justify="space-between" md-direction="column" md-align="center">
        <v-stack direction="column">
          <v-heading :level="1" style="max-width: 38rem">
            The Storage and Privacy Stack for Ethereum dApps
          </v-heading>
          <v-stack direction="column" gap="2rem">
            <app-section-descriptor
              description="Decentralised storage, identity, access management and key
            management services to help developers build secure and
            privacy-preserving apps."
              style="max-width: 38rem"
            />
            <v-stack
              md-direction="column"
              align="center"
              gap="1.5rem"
              md-gap="1.5rem"
            >
              <v-button
                label="Get started"
                label-transform="uppercase"
                :action="onGetStarted"
              />
              <v-stack align="center" class="support-icons">
                <a href="https://t.me/ArcanaNetwork" target="_blank">
                  <v-image path="images/telegram.svg" :dimension="[36, 36]" />
                </a>
                <a href="https://discord.gg/w6ej4FtqYS" target="_blank">
                  <v-image path="images/discord.svg" :dimension="[36, 36]" />
                </a>
                <a href="https://twitter.com/arcananetwork" target="_blank">
                  <v-image
                    path="images/twitter_social_icon_rounded_square_blue.png"
                    :dimension="[36, 36]"
                  />
                </a>
              </v-stack>
            </v-stack>
            <v-chip class="testnet-chip">
              <v-text size="1.25rem" line-height="1.4" color="secondary">
                Participate in Arcana's Alpha Testnet Launch!
                <a
                  class="testnet-chip-link"
                  href="http://testnet.arcana.network"
                  target="_blank"
                >
                  See details &rarr;
                </a>
              </v-text>
            </v-chip>
          </v-stack>
        </v-stack>
        <div class="section-orbs">
          <art-node-grid />
        </div>
      </v-stack>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  methods: {
    onGetStarted() {
      window.open('https://dashboard.arcana.network', '_blank')
    },
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

section {
  padding: 0 0 6rem;

  @media (--viewport-small) {
    padding: 0;
    margin-top: 0 !important;
  }
}

.section-orbs {
  max-width: 800px;
  width: 100%;

  @media (--viewport-large) {
    margin-right: -12.5%;
  }
}

.support-icons a {
  margin-left: 1.5rem;

  @media (--viewport-medium) {
    margin-left: 0;
    margin-top: 1.5rem;
  }
}

.support-icons > a + a {
  @media (--viewport-medium) {
    margin-left: 1.5rem;
  }
}

.testnet-chip {
  max-width: unset;
  padding: 1.5rem;

  @media (--viewport-small) {
    width: calc(100% - 3rem);
  }
}

.testnet-chip-link {
  color: var(--color-secondary);
  text-decoration: none;
  opacity: 0.7;
  transition: opacity 0.2s ease-in;
}

.testnet-chip-link:hover {
  opacity: 1;
}
</style>
