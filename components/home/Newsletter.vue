<template>
  <section>
    <v-container>
      <v-stack justify="space-between" align="center" md-direction="column">
        <div style="position: relative">
          <v-image
            path="images/newsletter-illustration.svg"
            class="newsletter-illustration"
          />
          <div style="text-align: center; z-index: 100" class="absolute-center">
            <!-- <v-text
              gradient="linear-gradient(121.85deg, #C4C4C4 29.11%, #FFFFFF 69.16%)"
              style="height: 16rem"
            > -->
            <v-text
              font="sans"
              :weight="700"
              size="9rem"
              line-height="11rem"
              gradient="linear-gradient(121.85deg, #C4C4C4 29.11%, #FFFFFF 69.16%)"
            >
              1000’s
            </v-text>
            <br />
            <v-text
              font="sans"
              :weight="700"
              size="2.625rem"
              line-height="3.25rem"
              transform="uppercase"
              gradient="linear-gradient(121.85deg, #C4C4C4 29.11%, #FFFFFF 69.16%)"
            >
              and counting
            </v-text>
            <!-- </v-text> -->
          </div>
        </div>
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
              class="email-input"
            />
            <v-button
              label="Sign up"
              label-transform="uppercase"
              class="sign-up-btn"
              :action="subscribeNewsletter"
            />
          </v-input-group>
          <v-text class="subscription-message" :class="{ success }">
            {{ message }}
          </v-text>
        </v-stack>
      </v-stack>
    </v-container>
  </section>
</template>

<script>
import { subscribe } from '~/services/mailchimp'

export default {
  name: 'Newsletter',
  data() {
    return {
      newsletterEmail: '',
      success: true,
      message: '',
    }
  },
  methods: {
    async subscribeNewsletter() {
      if (this.newsletterEmail.trim()) {
        this.success = true
        this.message = 'Submitting...'
        try {
          await subscribe({
            email: this.newsletterEmail,
            groups: ['Newsletter'],
          })
          this.message = 'Thank you for subscribing!'
        } catch (e) {
          this.success = false
          if (/subscribed/.test(e)) {
            this.message = 'Already Subscribed'
          } else if (/0 - /.test(e)) {
            this.message = 'Invalid email'
          }
        }
      } else {
        this.success = false
        this.message = 'Enter email to continue'
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

section {
  background: black url('~assets/images/newsletter_bg.svg') no-repeat;
  background-size: cover;
  box-shadow: 0 1rem 2rem 0.5rem black, 0 -1rem 2rem 0.5rem black;
  padding: 8rem 0;

  @media (--viewport-small) {
    background: black url('~assets/images/newsletter_bg_mobile.svg') no-repeat;
    background-size: 100%;
    padding: 1rem 0;
  }
}

.newsletter-illustration {
  width: 100%;
  max-width: 36rem;
  margin: 0 auto;
  margin-left: -10%;
}

.email-input {
  flex-grow: 1;
  max-width: 20rem;

  @media (--viewport-small) {
    max-width: 10rem;
  }
}

.subscription-message {
  margin: 1rem;
  color: var(--color-orange);
}

.subscription-message.success {
  color: var(--color-white);
}
</style>
