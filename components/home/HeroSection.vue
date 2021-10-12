<template>
  <section>
    <v-container>
      <v-stack justify="space-between" md-direction="column" md-align="center">
        <v-stack direction="column" style="max-width: 38rem">
          <v-heading :level="1">
            The Storage and Privacy Stack for Ethereum dApps
          </v-heading>
          <app-section-descriptor
            description="Decentralised storage, identity, access management and key
            management services to help developers build secure and
            privacy-preserving apps."
          />
          <v-stack
            md-direction="column"
            align="center"
            gap="1.5rem"
            md-gap="1.5rem"
            style="margin-top: 2rem"
          >
            <v-button
              label="Sign up now"
              label-transform="uppercase"
              :action="onSignup"
            />
            <v-text color="secondary" size="1.125rem">
              Testnet Launching Soon!
            </v-text>
            <v-stack align="center" class="support-icons">
              <a href="https://t.me/ArcanaNetwork" target="__blank">
                <v-image path="images/telegram.svg" :dimension="[36, 36]" />
              </a>
              <a href="https://discord.gg/w6ej4FtqYS" target="__blank">
                <v-image path="images/discord.svg" :dimension="[36, 42]" />
              </a>
            </v-stack>
          </v-stack>
        </v-stack>
        <div class="section-orbs">
          <art-node-grid />
        </div>
      </v-stack>
    </v-container>
    <app-developer-signup v-if="devSignup" @close="() => (devSignup = false)" />
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      devSignup: false,
    }
  },
  methods: {
    onSignup() {
      this.devSignup = true
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
    margin-top: 1.5rem;
  }
}
</style>
