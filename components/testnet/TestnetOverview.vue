<template>
  <section>
    <v-container>
      <v-stack
        align="start"
        direction="column"
        sm-direction="column"
        gap="30px"
        sm-gap="60px"
      >
        <v-stack
          align="start"
          direction="column"
          sm-direction="column"
          gap="10px"
          sm-gap="20px"
        >
          <v-heading
            class="overview-heading"
            :level="2"
            line-height="1.2"
            :weight="700"
          >
            Overview
          </v-heading>
          <v-text
            class="overview-description"
            color="secondary"
            :weight="400"
            line-height="1.5"
          >
            Announcing the Arcana Testnet: Explore usecases and hunt bugs. This
            is our Alpha testnet to give developers access to our SDK, explore
            new usecases, and help improve Arcana Network ahead of mainnet
            launch.
          </v-text>
          <v-text
            class="overview-description"
            color="secondary"
            :weight="400"
            line-height="1.5"
          >
            Once testnet ends, new developer signups will be put on a waitlist
            until the next Testnet.
          </v-text>
        </v-stack>
        <v-stack
          align="start"
          direction="column"
          sm-direction="column"
          gap="30px"
          sm-gap="20px"
        >
          <v-heading
            class="overview-features-heading"
            :level="3"
            line-height="1.2"
            :weight="600"
          >
            Features of Testnet
          </v-heading>
          <v-tabs :tabs-list="tabsList">
            <template #tab-0>
              <v-stack direction="column" gap="3.75rem">
                <v-text
                  class="feature-overview-description"
                  color="secondary"
                  :weight="400"
                  line-height="1.5"
                >
                  This testnet will solely focus on the SDK and its core
                  functionality.
                </v-text>
                <v-stack justify="space-between" wrap style="width: 80vw">
                  <div
                    v-for="featureOverviewPoint in featureOverviewPoints"
                    :key="featureOverviewPoint.title"
                    class="feature-overview-points"
                  >
                    <v-blurb
                      :image="featureOverviewPoint.icon"
                      :alt="featureOverviewPoint.title"
                      :title="featureOverviewPoint.title"
                      :description="featureOverviewPoint.description"
                    />
                  </div>
                </v-stack>
                <div class="feature-overview-illustration full-bleed" />
              </v-stack>
            </template>
            <template #tab-1>
              <v-stack
                align="center"
                sm-align="start"
                direction="row"
                sm-direction="column"
                justify="center"
                sm-justify="baseline"
                gap="3.75rem"
                sm-gap="3.75rem"
                class="feature-capabilities"
              >
                <v-chip class="feature-capabilities-dos">
                  <v-stack direction="column" gap="2.25rem">
                    <v-heading
                      class="feature-capabilities-heading"
                      :level="3"
                      line-height="1.2"
                    >
                      Do&rsquo;s
                    </v-heading>
                    <v-list
                      :list-items="featureCapabilitiesDoItems"
                      variant="positive"
                    />
                  </v-stack>
                </v-chip>
                <div class="feature-capabilities-donts">
                  <v-stack direction="column" gap="2.25rem">
                    <v-heading
                      class="feature-capabilities-heading"
                      :level="3"
                      line-height="1.2"
                    >
                      Dont&rsquo;s
                    </v-heading>
                    <v-list
                      :list-items="featureCapabilitiesDontItems"
                      variant="negative"
                    />
                  </v-stack>
                </div>
              </v-stack>
            </template>
          </v-tabs>
        </v-stack>
      </v-stack>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'TestnetOverview',
  data() {
    return {
      tabsList: ['Overview', 'Capabilities'],
      featureOverviewPoints: [
        {
          icon: 'images/login.svg',
          title: 'Login',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          icon: 'images/share.svg',
          title: 'Share',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          icon: 'images/revoke.svg',
          title: 'Revoke',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          icon: 'images/upload.svg',
          title: 'Upload',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          icon: 'images/download.svg',
          title: 'Download',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
      ],
      featureCapabilitiesDoItems: [
        { description: 'Create test accounts.' },
        { description: 'Develop new Use Cases.' },
        {
          description:
            'Test the integration / migration from existing infrastructure like IPFS and Metamask.',
        },
        { description: 'Test access control and data integrity.' },
        { description: 'Report bugs and share feedback.' },
      ],
      featureCapabilitiesDontItems: [
        { description: 'Performance and stress testing' },
        { description: 'Testing high Availability or Reliability of nodes' },
        {
          description:
            'Long term storage of data. The network might reset and also go through breaking changes or upgrades',
        },
        { description: 'Transfer of token assets.' },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

.overview-heading {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 4rem;

  @media (--viewport-small) {
    font-size: 2.25rem;
  }
}

.overview-description {
  max-width: 42ch;
  font-size: 1.375rem;

  @media (--viewport-small) {
    font-size: 1rem;
  }
}

.overview-features-heading {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2.5rem;
  letter-spacing: normal;

  @media (--viewport-small) {
    font-size: 1.875rem;
  }
}

.feature-overview-description {
  font-size: 1.375rem;

  @media (--viewport-small) {
    font-size: 1rem;
  }
}

.feature-overview-points {
  width: 20%;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

  @media (--viewport-medium) {
    width: 50%;
  }
}

.feature-overview-points > * {
  margin: 0 auto;
  max-width: 24ch;
}

.feature-overview-points > .blurb-description {
  font-size: 1.125rem !important;
  line-height: 1.375rem;

  @media (--viewport-medium) {
    font-size: 1rem;
    line-height: 1.125rem;
  }
}

.full-bleed {
  margin-left: -10%;
  max-width: none;
  width: 100vw;

  @media (--viewport-small) {
    margin-left: -5%;
  }
}

.feature-overview-illustration {
  margin-top: -1rem;
  background-image: url('~assets/images/testnet-overview-top-gradient.png'),
    url('~assets/images/testnet-overview-bottom-gradient.png'),
    url('~assets/images/testnet-overview.png');
  background-size: contain;
  background-position: top, bottom, top;
  background-repeat: no-repeat;
  height: 1155px;

  @media (--viewport-small) {
    height: 420px;
  }
}

.feature-capabilities {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.feature-capabilities-dos,
.feature-capabilities-donts {
  max-width: 35rem;
  padding: 2rem;

  @media (--viewport-small) {
    padding: inherit;
  }
}

.feature-capabilities-dos {
  max-width: none !important;

  @media (--viewport-small) {
    background: transparent !important;
    padding: 0 !important;
  }
}

.feature-capabilities-heading {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: normal;

  @media (--viewport-small) {
    font-size: 1.25rem;
    font-weight: 600;
  }
}
</style>
