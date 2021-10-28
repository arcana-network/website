<template>
  <section>
    <v-container>
      <v-stack
        align="start"
        direction="column"
        sm-direction="column"
        gap="30px"
        sm-gap="20px"
      >
        <v-heading
          class="build-heading"
          :level="2"
          line-height="1.2"
          :weight="700"
        >
          Build dApps
        </v-heading>
        <v-tabs :tabs-list="tabsList">
          <template #tab-0>
            <v-stack direction="column" gap="3.75rem">
              <v-text
                class="build-overview-description"
                color="secondary"
                :weight="400"
                line-height="1.5"
              >
                Descend into the Arcana Quantum Verse. Build your Decentralised
                Applications with Arcana's Storage & Privacy Stack.
              </v-text>
              <div>
                <v-stack direction="column" gap="1.25rem">
                  <v-heading
                    class="build-overview-heading"
                    :level="3"
                    line-height="1.2"
                  >
                    Available Functionality
                  </v-heading>
                  <div class="build-features">
                    <v-card
                      v-for="feature in featureCards"
                      :key="feature.name"
                      class="build-feature-card"
                    >
                      <v-stack
                        align="start"
                        md-align="center"
                        direction="row"
                        md-direction="column"
                        sm-direction="row"
                        justify="center"
                        md-justify="center"
                        sm-justify="center"
                        gap="1.875rem"
                        md-gap="1.875rem"
                        sm-gap="1.25rem"
                      >
                        <v-image
                          class="build-feature-card-icon"
                          :path="feature.image"
                        />
                        <v-text
                          class="build-feature-card-text"
                          :weight="400"
                          line-height="1.5"
                        >
                          {{ feature.description }}
                        </v-text>
                      </v-stack>
                    </v-card>
                  </div>
                </v-stack>
              </div>
              <div>
                <v-stack direction="column" gap="1.25rem">
                  <v-heading
                    class="build-overview-heading"
                    :level="3"
                    line-height="1.2"
                  >
                    Next Steps
                  </v-heading>
                  <v-text
                    class="build-overview-description"
                    color="secondary"
                    :weight="400"
                    line-height="1.5"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </v-text>
                  <div class="build-quicklinks">
                    <v-card
                      v-for="(link, linkIndex) in quickLinks"
                      :key="link.name"
                      class="build-quicklinks-card"
                    >
                      <v-stack
                        align="start"
                        sm-align="center"
                        direction="row"
                        sm-direction="row"
                        justify="space-between"
                      >
                        <v-stack
                          direction="column"
                          sm-direction="row"
                          align="start"
                          sm-align="center"
                          gap="1.25rem"
                          sm-gap="0"
                        >
                          <div class="position-relative">
                            <v-image
                              class="build-quicklinks-crater"
                              path="images/crater.svg"
                            />
                            <v-text
                              font="serif"
                              :weight="700"
                              line-height="1.2"
                              class="build-quicklinks-count"
                            >
                              {{ linkIndex + 1 }}
                            </v-text>
                          </div>
                          <v-text
                            class="build-quicklinks-description"
                            :weight="400"
                            line-height="1.5"
                          >
                            {{ link.description }}
                          </v-text>
                        </v-stack>
                        <v-image
                          class="build-quicklinks-arrow"
                          path="images/arrow-right.svg"
                        />
                      </v-stack>
                    </v-card>
                  </div>
                </v-stack>
              </div>
            </v-stack>
          </template>
        </v-tabs>

        <div class="build-illustration full-bleed" />
      </v-stack>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'TestnetBuildSection',
  data() {
    return {
      tabsList: ['Get Started', 'Use Cases', 'Support'],
      featureCards: [
        {
          name: 'identity',
          image: 'images/identity.svg',
          description:
            'Add seamless user authentication and key generation with Social Login. No metamask or wallet required.',
        },
        {
          name: 'storage',
          image: 'images/storage.svg',
          description:
            'Store end-to-end encrypted data on a decentralized network.',
        },
        {
          name: 'encryption',
          image: 'images/encryption.svg',
          description:
            'Share encrypted data and define access policies through our DIDs (Access control helps share data with other apps and users, trust-free).',
        },
        {
          name: 'keys',
          image: 'images/keys.svg',
          description:
            'Securely exchange, generate and store keys that belong to users (without having to trust a 3rd party).',
        },
      ],
      quickLinks: [
        { name: 'docs', description: 'View Docs' },
        { name: 'demo', description: 'Reference Tutorial App' },
        { name: 'discord', description: 'Get Support When You Need' },
        { name: 'discourse', description: 'Get in Touch' },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

.build-heading {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 4rem;

  @media (--viewport-small) {
    font-size: 2.25rem;
  }
}

.build-overview-heading {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: normal;

  @media (--viewport-small) {
    font-size: 1.25rem;
    font-weight: 600;
  }
}

.build-overview-description {
  max-width: 46ch;
  font-size: 1.375rem;

  @media (--viewport-small) {
    font-size: 1rem;
  }
}

.build-features {
  display: grid;
  grid-gap: 1.875rem;
  grid-template-columns: repeat(2, 1fr);

  @media (--viewport-small) {
    grid-gap: 1.25rem;
    grid-template-columns: 1fr;
  }
}

.build-feature-card-icon {
  width: 7.5rem;

  @media (--viewport-small) {
    width: 3.75rem;
  }
}

.build-feature-card-text {
  font-size: 1.375rem;
  max-width: 30ch;

  @media (--viewport-small) {
    font-size: 1rem;
  }
}

.build-quicklinks {
  display: grid;
  grid-gap: 1.875rem;
  grid-template-columns: repeat(4, 1fr);

  @media (--viewport-medium) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (--viewport-small) {
    grid-gap: 1.25rem;
    grid-template-columns: 1fr;
  }
}

.build-quicklinks-crater {
  width: 7.5rem;

  @media (--viewport-small) {
    width: 3.75rem;
  }
}

.build-quicklinks-count {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;

  @media (--viewport-small) {
    font-size: 1.25rem;
  }
}

.build-quicklinks-description {
  font-size: 1.375rem;

  @media (--viewport-small) {
    font-size: 1.125rem;
  }
}

.build-quicklinks-arrow {
  @media (--viewport-small) {
    padding: 1rem;
  }
}

.full-bleed {
  margin-left: -10vw;
  max-width: none;
  width: 100vw;

  @media (--viewport-small) {
    margin-left: -5%;
  }
}

.build-illustration {
  margin-top: -10rem;
  z-index: -1;
  background-image: url('~assets/images/testnet-build-top-gradient.png'),
    url('~assets/images/testnet-build-bottom-gradient.png'),
    url('~assets/images/testnet-build.png');
  background-size: contain, contain, cover;
  background-position: top, bottom, top;
  background-repeat: no-repeat;
  width: 100vw;
  height: clamp(420px, calc((1155 / 1440) * 80vw), 900px);

  @media (--viewport-small) {
    margin-top: -5rem;
  }
}
</style>
