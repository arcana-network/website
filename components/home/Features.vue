<template>
  <section>
    <v-container>
      <v-stack justify="space-between" md-direction="column" md-align="start">
        <app-section-descriptor
          title="Features"
          heading="Four Features To Secure Your Apps. Four Less Reasons Not To"
          description="Privacy and security have become reasons for choosing apps, set your app apart with world-class security without the effort typically involved with this."
          style="max-width: 48rem"
        />
        <v-button
          type="link"
          label="View Stack"
          label-transform="uppercase"
          style="margin-top: 2rem"
        />
      </v-stack>
      <v-stack justify="space-between" md-direction="column" md-align="center">
        <v-stack
          direction="column"
          sm-direction="row"
          class="features-description-container"
        >
          <v-stack justify="space-between" style="margin-top: 2rem">
            <v-blurb
              image="images/storage.svg"
              alt="Decentralised Storage"
              title="Decentralised Storage"
              description="Any assets uploaded to Arcana is encrypted, split up and distributed among multiple storage nodes. Without a single-point of failure your assets are protected against geo-specific disasters and hacking attempts"
              class="blurb"
            />
            <v-blurb
              image="images/encryption.svg"
              alt="End to end encryption"
              title="End to End Encryption"
              description="Want to make sure nobody snoops on your users’ data? Implement end-to-end encryption simply and easily with Arcana’s E2E Encryption"
              class="blurb"
              style="margin-left: 2rem"
            />
          </v-stack>
          <v-stack justify="space-between" style="margin-top: 2rem">
            <v-blurb
              image="images/iam.svg"
              alt="Identity and Access Management"
              title="Identity and Access Management"
              description="Decentralised Identity and Access Controls are verifiable in a trust-less way and adhere to the W3C DID spec. You can rest easy knowing that your app will only allow verified users to access assets stored on the system"
              class="blurb"
            />
            <v-blurb
              image="images/dkg.svg"
              alt="Simple Keys Management"
              title="Simple Keys Management"
              description="A big hurdle to cryptographic encryption has to do with public+private keys management. We’ve made it simple by generating keys using authentications like email/password and popular Single Sign On’s (SSO’s)"
              class="blurb"
              style="margin-left: 2rem"
            />
          </v-stack>
        </v-stack>
        <v-image
          path="images/features-illustration.svg"
          class="features-illustration"
        />
      </v-stack>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'Features',
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

.features-illustration {
  @media (--viewport-large) {
    margin-right: -12.5%;
    margin-left: 12.5%;
  }

  @media (--viewport-medium) {
    transform: scale(60%);
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
    overflow-x: auto;
    overflow-y: hidden;
  }

  .features-description-container > * + * {
    margin-left: 2rem;
  }
}

.blurb {
  width: 16rem;
}

.blurb img {
  width: 20px;
}
</style>
