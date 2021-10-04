<template>
  <section>
    <v-container>
      <v-stack justify="space-between" align="center" md-direction="column">
        <v-image
          path="images/newsletter-illustration.svg"
          style="padding: 15rem 0"
        />
        <v-stack direction="column">
          <app-section-descriptor
            title="Newsletter"
            heading="Stay in the loop"
            description="We’ve got features to release, events like Block Talk to invite you to, and times when we just need to reach out to seek your opinion on things. Sign up for our newsletter. We promise not to be boring!"
            style="max-width: 40rem"
          />
          <v-input-group style="margin-top: 1.5rem">
            <v-text-field
              v-model="newsletterEmail"
              placeholder="Enter email"
              style="max-width: 20rem; flex-grow: 1"
            />
            <v-button
              label="Sign up"
              label-transform="uppercase"
              class="sign-up-btn"
            />
          </v-input-group>
        </v-stack>
      </v-stack>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'Newsletter',
  data() {
    return {
      newsletterEmail: '',
    }
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

section {
  background: url('~assets/images/section-bg.svg');
  background-repeat: no-repeat;
  background-size: cover;
}

.sign-up-btn {
  @media (--viewport-large) {
    padding-left: 3.2rem;
    padding-right: 3.2rem;
  }
}
</style>
