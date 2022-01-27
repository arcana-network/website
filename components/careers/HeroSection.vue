<template>
  <section>
    <v-container>
      <v-stack
        direction="column"
        md-direction="column"
        sm-direction="column"
        gap="6rem"
        md-gap="4rem"
        sm-gap="2rem"
      >
        <div>
          <v-stack align="center" justify="space-between" md-direction="column">
            <v-stack direction="column" style="max-width: 42rem">
              <v-heading :level="1">
                Evolve to Web3 with&nbsp;Arcana&nbsp;Network
              </v-heading>
              <v-stack direction="column" gap="2rem">
                <app-section-descriptor
                  description="We are at the brink of a web3 renaissance. This new internet revolution upends almost everything we’ve taken for granted: capital, applications, content, gaming, platforms, music, art, creators, and users. Apart from decentralization and security, privacy plays a pivotal role underpinning the workings of anything web3."
                />
                <app-section-descriptor
                  description="At Arcana, you will be a part of a highly skilled and collaborative team. Be it engineering, community, or marketing, we never run out of exciting challenges. If you’re looking forward to working in an emerging blockchain project, alongside some of the best talent in each field, Arcana Network is the place for you! For us, every decision is centered around user privacy and security. Do you believe top-tier privacy should be a first-class citizen? Then come join us and help redefine privacy!"
                />
              </v-stack>
            </v-stack>
            <v-image
              class="join-us-illustration"
              path="images/join-us-illustration.png"
            />
          </v-stack>
        </div>

        <div>
          <v-stack
            class="highlight"
            align="center"
            justify="space-around"
            sm-direction="column"
          >
            <v-stack
              v-for="highlight in highlights"
              :key="highlight.title"
              gap="1.25rem"
              align="center"
              :style="{ maxWidth: '18rem' }"
            >
              <v-text
                class="highlight-value"
                font="sans"
                :weight="600"
                line-height="1.2"
              >
                {{ highlight.value }}
              </v-text>
              <v-text
                class="highlight-title"
                color="secondary"
                font="serif"
                :weight="400"
                line-height="1.5"
              >
                {{ highlight.title }}
              </v-text>
            </v-stack>
          </v-stack>
        </div>
      </v-stack>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'OurPrinciples',
  data() {
    return {
      highlights: [
        { title: 'Employees Worldwide', value: '20+' },
        { title: 'Renowned Investors', value: '30+' },
        { title: 'Funds Raised', value: '$2.7M+' },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

section {
  @media (--viewport-small) {
    margin-top: 0 !important;
  }
}

.highlight > * + * {
  @media (--viewport-small) {
    margin-top: 2rem;
  }
}

.highlight-value {
  font-size: 3.1875rem;

  @media (--viewport-medium) {
    font-size: 2rem;
  }
}

.highlight-title {
  font-size: 1.375rem;

  @media (--viewport-medium) {
    font-size: 1rem;
  }
}

.join-us-illustration {
  max-width: 42rem;
  width: 100%;
}
</style>
