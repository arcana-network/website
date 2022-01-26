<template>
  <section>
    <v-container>
      <v-stack direction="column" gap="6rem" sm-gap="3rem">
        <div>
          <v-stack justify="space-between" md-direction="column">
            <v-stack direction="column" style="max-width: 42rem">
              <v-heading :level="1">
                Evolve to Web3 with&nbsp;Arcana&nbsp;Network
              </v-heading>
              <app-section-descriptor
                description="We are at the brink of a web3 renaissance. While this new internet revolution upends
almost everything we've taken for granted: capital, applications, content, gaming,
platforms, music, art, creators, and users. Apart from decentralization, security and
privacy play a pivotal role underpinning the workings of anything web3."
              />
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
              v-for="(highlight, i) in highlights"
              :key="highlight.title"
              gap="1.25rem"
              align="center"
              :style="{ maxWidth: i === 2 ? '21rem' : '18rem' }"
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
        { title: 'Employees Worldwide', value: '600+' },
        { title: 'Total Raised', value: '2,000+' },
        { title: 'New Customers Monthly', value: '400+' },
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

  @media (--viewport-large) {
    margin-right: -12.5%;
  }
}
</style>
