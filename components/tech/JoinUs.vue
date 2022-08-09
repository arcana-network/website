<template>
  <section>
    <v-container>
      <v-stack md-direction="column" justify="space-between" align="center">
        <v-stack direction="column" align="start" gap="2rem">
          <app-section-descriptor
            title="We are Hiring"
            heading="Join Our Team"
            description="There is no shortage of interesting challenges to work on at Arcana. Being at the bleeding edge of technology in Web 3 and privacy, we are defining the tools the developers of future will use.
If you are interested in what we are building, checkout our existing openings, if there isn’t an open role for you, but you are great at what you do, we’d still love to talk."
            class="joinus-description"
          />
          <v-button
            label="Join us"
            label-transform="uppercase"
            class="joinus-btn"
            :action="openCareers"
          />
        </v-stack>
        <div class="illustration-container">
          <v-image
            path="images/join-us-illustration.png"
            class="joinus-illustration"
          />
        </div>
      </v-stack>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'JoinUs',
  methods: {
    openCareers() {
      window.open('/careers', '_self')
    },
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

.joinus-description {
  max-width: 36rem;
}

.illustration-container {
  position: relative;

  @media (--viewport-large) {
    margin-right: -20%;
  }

  @media (--viewport-medium) {
    margin-top: -10%;
    margin-right: 0;
  }
}

.illustration-container::before {
  position: absolute;
  inset: 0%;
  content: '';
  background: radial-gradient(
    50% 50% at 40% 45%,
    rgba(180, 247, 252, 0.2) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  filter: blur(40px);
  z-index: -1;
}

.joinus-illustration {
  width: 90%;
  max-width: 60rem;

  @media (--viewport-medium) {
    width: 150%;
  }
}

.joinus-btn {
  padding: 1rem 3rem;

  @media (--viewport-medium) {
    padding: 1rem 2rem;
  }
}
</style>
