<template>
  <section>
    <v-container class="technology-container">
      <v-stack md-direction="column" justify="space-between" align="center">
        <v-stack direction="column" class="technology-hero-section">
          <app-section-descriptor title="Technology" />
          <v-heading :level="1">
            A comprehensive stack to help developers build secure and privacy
            preserving apps
          </v-heading>
          <app-section-descriptor
            description="Decentralised storage, identity, access management, and KMS to help developers build secure and privacy‑preserving apps."
            class="technology-hero-description"
          />
        </v-stack>
        <v-image path="images/tech-illustration.png" class="hero-image" />
      </v-stack>

      <v-stack justify="space-between" align="center">
        <v-image
          path="images/decentralised-storage.svg"
          class="tablet-remove mobile-remove"
        />
        <v-stack direction="column" md-align="center" class="tech-stack">
          <app-section-descriptor
            heading="Decentralised Storage"
            description="Storage nodes store only a piece of an encrypted file, ensuring data security at rest. No snooping by anyone! "
            class="tech-stack-description"
          />
          <v-image
            path="images/decentralised-storage.svg"
            class="laptop-remove"
          />
          <v-stack
            wrap
            class="features-list"
            md-direction="column"
            md-justify="center"
          >
            <v-chip>
              <v-text color="secondary" line-height="1.5rem" size="1.125rem">
                Proxy re-encryption (PRE) to seamlessly share / re share files.
              </v-text>
            </v-chip>
            <v-chip>
              <v-text color="secondary" line-height="1.5rem" size="1.125rem">
                Proxy re-encryption (PRE) to seamlessly share / re share files.
              </v-text>
            </v-chip>
            <v-chip>
              <v-text color="secondary" line-height="1.5rem" size="1.125rem">
                Proxy re-encryption (PRE) to seamlessly share / re share files.
              </v-text>
            </v-chip>
          </v-stack>
        </v-stack>
      </v-stack>

      <v-stack justify="space-between" align="center">
        <v-stack direction="column" md-align="center" class="tech-stack">
          <app-section-descriptor
            heading="End to End Encryption"
            description="Storage nodes store only a piece of an encrypted file, ensuring data security at rest. No snooping by anyone!"
            class="tech-stack-description"
          />
          <v-image path="images/e2e-encryption.svg" class="laptop-remove" />
          <v-stack
            wrap
            class="features-list"
            md-direction="column"
            md-justify="center"
          >
            <v-chip>
              <v-text color="secondary" line-height="1.5rem" size="1.125rem">
                Proxy re-encryption (PRE) to seamlessly share / re share files.
              </v-text>
            </v-chip>
            <v-chip>
              <v-text color="secondary" line-height="1.5rem" size="1.125rem">
                Proxy re-encryption (PRE) to seamlessly share / re share files.
              </v-text>
            </v-chip>
            <v-chip>
              <v-text color="secondary" line-height="1.5rem" size="1.125rem">
                Proxy re-encryption (PRE) to seamlessly share / re share files.
              </v-text>
            </v-chip>
          </v-stack>
        </v-stack>
        <v-image
          path="images/e2e-encryption.svg"
          class="tablet-remove mobile-remove"
        />
      </v-stack>

      <v-stack justify="space-between" align="center">
        <v-image
          path="images/key-management.svg"
          class="tablet-remove mobile-remove"
        />
        <v-stack direction="column" md-align="center" class="tech-stack">
          <app-section-descriptor
            heading="Non-Custodial Key Management"
            description="Storage nodes store only a piece of an encrypted file, ensuring data security at rest. No snooping by anyone!"
            class="tech-stack-description"
          />
          <v-image path="images/key-management.svg" class="laptop-remove" />
          <v-stack
            wrap
            class="features-list"
            md-direction="column"
            md-justify="center"
          >
            <v-chip>
              <v-text color="secondary" line-height="1.5rem" size="1.125rem">
                Proxy re-encryption (PRE) to seamlessly share / re share files.
              </v-text>
            </v-chip>
            <v-chip>
              <v-text color="secondary" line-height="1.5rem" size="1.125rem">
                Proxy re-encryption (PRE) to seamlessly share / re share files.
              </v-text>
            </v-chip>
            <v-chip>
              <v-text color="secondary" line-height="1.5rem" size="1.125rem">
                Proxy re-encryption (PRE) to seamlessly share / re share files.
              </v-text>
            </v-chip>
          </v-stack>
        </v-stack>
      </v-stack>

      <v-stack justify="space-between" align="center">
        <v-stack direction="column" md-align="center" class="tech-stack">
          <app-section-descriptor
            heading="Decentralised IAM"
            description="Storage nodes store only a piece of an encrypted file, ensuring data security at rest. No snooping by anyone!"
            class="tech-stack-description"
          />
          <v-image path="images/decentralised-iam.svg" class="laptop-remove" />
          <v-stack
            wrap
            md-direction="column"
            class="features-list"
            md-justify="center"
          >
            <v-chip>
              <v-text color="secondary" line-height="1.5rem" size="1.125rem">
                Proxy re-encryption (PRE) to seamlessly share / re share files.
              </v-text>
            </v-chip>
            <v-chip>
              <v-text color="secondary" line-height="1.5rem" size="1.125rem">
                Proxy re-encryption (PRE) to seamlessly share / re share files.
              </v-text>
            </v-chip>
            <v-chip>
              <v-text color="secondary" line-height="1.5rem" size="1.125rem">
                Proxy re-encryption (PRE) to seamlessly share / re share files.
              </v-text>
            </v-chip>
          </v-stack>
        </v-stack>
        <v-image
          path="images/decentralised-iam.svg"
          class="tablet-remove mobile-remove"
        />
      </v-stack>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'Technology',
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

img {
  width: 90%;
  max-width: 16rem;

  @media (--viewport-small) {
    max-width: 12rem;
  }
}

.technology-hero-section {
  max-width: 48rem;
}

.technology-hero-description {
  max-width: 38rem;
}

.hero-image {
  max-width: 30rem;
  margin-top: 3rem;
}

.tech-stack {
  width: 100%;
  max-width: 48rem;
}

.tech-stack > * {
  margin-top: 1rem;
}

.features-list {
  margin: 0 0 0 -1.5rem;
}

.features-list > * {
  margin: 1.5rem 0 0 1.5rem;
}

.technology-container > *:not(:first-child) {
  margin-top: 6rem;

  @media (--viewport-medium) {
    margin-top: 4rem;
  }

  @media (--viewport-small) {
    margin-top: 2rem;
  }
}

.tech-stack-description {
  max-width: 30rem;
}
</style>
