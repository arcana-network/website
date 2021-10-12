<template>
  <section>
    <v-container>
      <v-stack md-direction="column" justify="space-between" align="center">
        <v-stack direction="column" align="start" gap="2rem">
          <app-section-descriptor
            title="community"
            heading="Join Our Team"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            class="joinus-description"
          />
          <v-button
            label="Join us"
            label-transform="uppercase"
            class="joinus-btn"
            :action="openCareers"
          />
        </v-stack>
        <v-image
          path="images/join-us-illustration.png"
          class="joinus-illustration"
        />
      </v-stack>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'JoinUs',
  methods: {
    openCareers() {
      window.open('https://angel.co/company/arcana-network/jobs', '_blank')
    },
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

section {
  padding-bottom: 6rem;
}

.joinus-description {
  max-width: 36rem;
}

.joinus-illustration {
  width: 90%;
  max-width: 60rem;

  @media (--viewport-large) {
    margin-right: -20%;
  }

  @media (--viewport-medium) {
    width: 150%;
    margin-top: -10%;
  }
}

.joinus-btn {
  padding: 1rem 3rem;

  @media (--viewport-medium) {
    padding: 1rem 2rem;
  }
}
</style>
