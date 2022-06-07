<template>
  <section>
    <v-container>
      <app-section-descriptor
        title="Services"
        heading="Core Offerings"
        description="Users care about Privacy and Security, set your app apart with the most developer friendly data storage and privacy platform. Takes minutes to integrate."
        style="max-width: 64rem"
      />
      <div class="overview-features">
        <v-stack align="center" sm-align="start" gap="20vw" sm-gap="1rem">
          <div class="icon-container">
            <v-image path="images/arcana-overview-auth.svg" alt="Arcana Auth" />
          </div>
          <div class="overview-feature">
            <v-heading :level="2" class="overview-feature-title">
              Arcana Auth
            </v-heading>
            <div class="overview-feature-description">
              <v-text color="secondary" line-height="1.5" size="1.125rem">
                Provide frictionless onboarding for web3 users using social auth
                or passwordless logins. Arcana handles all aspects of key
                management from key pair generation to secure non-custodial
                handling through the arcana wallet so that your users don't have
                to.
              </v-text>
            </div>
          </div>
        </v-stack>
        <v-stack align="center" sm-align="start" gap="20vw" sm-gap="1rem">
          <div class="overview-feature">
            <div>
              <v-heading :level="2" class="overview-feature-title">
                Auth Store
              </v-heading>
            </div>
            <div class="overview-feature-description">
              <v-text color="secondary" line-height="1.5" size="1.125rem">
                Store user data securely on Arcana's decentralised storage
                network. Every asset uploaded to the arcana network is split up
                and stored across our nodes so that there is no single point of
                failure & your assets are protected against geo-specific
                disasters and hacks.
              </v-text>
            </div>
          </div>
          <div class="icon-container">
            <v-image
              path="images/arcana-overview-store.svg"
              alt="Arcana Storage"
            />
          </div>
        </v-stack>
        <v-stack align="center" sm-align="start" gap="20vw" sm-gap="1rem">
          <div class="icon-container">
            <v-image
              path="images/arcana-overview-access.svg"
              alt="Arcana Access"
            />
          </div>
          <div class="overview-feature">
            <div>
              <v-heading :level="2" class="overview-feature-title">
                Arcana Access
              </v-heading>
            </div>
            <div class="overview-feature-description">
              <v-text color="secondary" line-height="1.5" size="1.125rem">
                Let your code or users decide who gets access to data. Arcana
                Access uses DIDs for identification of data and to store,
                on-chain, who is the owner of the data and who has access to it.
              </v-text>
            </div>
          </div>
        </v-stack>
      </div>
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

section {
  padding-bottom: 6rem;

  @media (--viewport-small) {
    padding-bottom: 3rem;
  }
}

.overview-heading {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 3.125rem;

  @media (--viewport-small) {
    font-size: 2.1875rem;
  }
}

.overview-description {
  max-width: 52ch;
  font-size: 1.25rem;

  @media (--viewport-small) {
    font-size: 1rem;
  }
}

.overview-feature {
  max-width: 40rem;
  text-align: left;
}

.overview-features > * {
  margin-top: 6rem;
}

.overview-feature-title {
  margin: 0;

  @media (--viewport-small) {
    font-size: 1.5rem;
  }
}

.overview-feature-description {
  margin-top: 1.25rem;
}

.icon-container {
  position: relative;
  overflow: visible;
}

.icon-container::before {
  content: '';
  position: absolute;
  top: -40%;
  left: -40%;
  right: -40%;
  bottom: -40%;
  z-index: -1;
  background: radial-gradient(
    45% 40% at 50% 50%,
    rgba(239, 115, 112, 0.3) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  filter: blur(5px);
}

.icon-container:nth-child(2)::before {
  background: radial-gradient(
    45% 40% at 50% 50%,
    rgba(255, 231, 191, 0.2) 0%,
    rgba(0, 0, 0, 0) 100%
  );
}

.icon-container > * {
  @media (--viewport-medium) {
    width: 10rem;
    margin-top: 1rem;
  }

  @media (--viewport-small) {
    width: 6rem;
  }
}
</style>
