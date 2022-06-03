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
                label="Start Building"
                label-transform="uppercase"
                :action="handleOpenDashboard"
              />
              <v-button
                variant="outline"
                label="Go To Docs"
                label-transform="uppercase"
                :action="handleOpenDocs"
              />
            </v-stack>
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
    handleOpenDashboard() {
      window.open('https://dashboard.arcana.network', '_blank')
    },
    handleOpenDocs() {
      window.open('https://docs.arcana.network', '_blank')
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
