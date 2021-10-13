<template>
  <section>
    <v-container>
      <v-stack direction="column" align="start">
        <app-section-descriptor
          title="Arcana’s Privacy Stack"
          heading="Four Decentralized Services To Secure Your Apps. Four Less Reasons To Worry"
          description="Users care about Privacy and Security, set your app apart with the most developer friendly data storage and privacy platform. Takes minutes to integrate."
          style="max-width: 64rem"
        />
        <v-button
          type="link"
          label="View Stack"
          label-transform="uppercase"
          style="margin: 1.5rem 0"
          :action="openTechPage"
        />
        <v-image
          path="images/features-illustration.png"
          class="features-illustration laptop-remove"
          style="margin: 1rem auto"
        />
      </v-stack>
      <v-stack justify="space-between" md-direction="column" md-align="center">
        <v-stack direction="column" class="features-description-container">
          <v-stack
            sm-direction="column"
            md-justify="center"
            gap="3rem"
            class="blurb-container"
            wrap
          >
            <v-blurb
              title="Decentralised Storage"
              description="Any assets uploaded to Arcana is encrypted, split up and distributed among multiple storage nodes. Without a single-point of failure your assets are protected against geo-specific disasters and hacking attempts."
              class="blurb"
            >
              <template #art>
                <art-storage-icon animate-on-enter animate-on-hover />
              </template>
            </v-blurb>
            <v-blurb
              title="End to End Encryption"
              description="Want to make sure nobody snoops on your users’ data? Implement end-to-end encryption simply and easily with Arcana’s E2E Encryption."
              class="blurb"
            >
              <template #art>
                <art-encryption-icon animate-on-enter animate-on-hover />
              </template>
            </v-blurb>
          </v-stack>
          <v-stack
            sm-direction="column"
            md-justify="center"
            gap="3rem"
            class="blurb-container"
            wrap
          >
            <v-blurb
              title="Social Auth with Identity and Access Management"
              description="Remove friction and allow users to signup/login with social auth and generate keys. Decentralised Identity and Access Controls are verifiable in a trust-less way and adhere to the W3C DID spec. You can rest easy knowing that your app will only allow verified users to access assets stored on the system."
              class="blurb"
            >
              <template #art>
                <art-identity-icon animate-on-enter animate-on-hover />
              </template>
            </v-blurb>
            <v-blurb
              title="Non-custodial Key Management"
              :line-breaks="1"
              description="A big hurdle to cryptographic encryption has to do with public+private keys management. Our DKG and KMS simplifies it. The network handles keys that belong to the users and their data so you don’t have to."
              class="blurb"
            >
              <template #art>
                <art-keys-icon animate-on-enter animate-on-hover />
              </template>
            </v-blurb>
          </v-stack>
        </v-stack>
        <v-image
          path="images/features-illustration.png"
          class="features-illustration tablet-remove"
          style="align-self: start"
        />
      </v-stack>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'Features',
  methods: {
    openTechPage() {
      window.open('/tech/', '_self')
    },
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

section {
  padding-bottom: 6rem;

  @media (--viewport-small) {
    padding-bottom: 3rem;
  }
}

.features-illustration {
  max-width: 30rem;
  width: 100%;

  @media (--viewport-large) {
    margin-right: -12.5%;
  }
}

@media (--viewport-large) {
  .features-description-container {
    flex-grow: 1;
  }
}

@media (--viewport-small) {
  .features-description-container {
    width: 100%;
  }
}

.blurb-container {
  margin-top: 2rem;

  @media (max-width: 1439px) {
    flex-direction: column;
  }
}

.blurb-container > * + * {
  margin-left: 2rem;

  @media (max-width: 1439px) {
    margin-left: 0;
    margin-top: 2rem;
  }
}

.blurb {
  max-width: 24rem;
  min-width: 12rem;
}

.blurb img {
  width: 20px;
}
</style>
