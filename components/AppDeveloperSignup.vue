<template>
  <v-overlay>
    <div class="signup-container absolute-center">
      <div class="close-btn" @click.stop="() => $emit('close')">
        <v-text :weight="700" font="serif">X</v-text>
      </div>
      <v-stack
        direction="column"
        gap="1.5rem"
        align="center"
        style="text-align: center; margin-bottom: 3rem"
      >
        <v-image path="images/arcana-logo.svg" />
        <v-text line-height="1.75rem" style="max-width: 400px">
          We will be launching the Arcana Alpha Testnet very soon. Please signup
          for early access.
        </v-text>
      </v-stack>
      <v-stack direction="column" gap="1.5rem" align="center">
        <v-stack direction="column" gap="1.5rem">
          <v-label value="Enter Email" />
          <v-text-field v-model="email" />
        </v-stack>
        <v-button
          label="Sign up"
          label-transform="uppercase"
          :action="signup"
        />
        <v-text class="subscription-message" :class="{ success }">
          {{ message }}
        </v-text>
      </v-stack>
    </div>
  </v-overlay>
</template>

<script>
import { subscribe } from '~/services/mailchimp'

export default {
  name: 'AppDeveloperSignup',
  data() {
    return {
      email: '',
      success: true,
      message: '',
    }
  },
  methods: {
    async signup() {
      if (this.email.trim()) {
        this.success = false
        this.message = 'Submitting...'
        try {
          await subscribe({
            email: this.email.trim(),
            groups: ['Developer', 'Newsletter'],
          })
          this.message = 'Thank you for subscribing!'
        } catch (e) {
          this.success = false
          if (/subscribed/.test(e)) {
            this.message = 'Already Subscribed'
          } else if (/0 - /.test(e)) {
            this.message = 'Invalid email'
          } else {
            this.message = 'Something went wrong'
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
.signup-container {
  width: 25%;
  max-width: 960px;
  min-width: 280px;
  border-radius: 10px;
  background: #1c1c1c;
  opacity: 0.95;
  padding: 3rem;
}

.subscription-message {
  margin: 1rem;
  color: var(--color-orange);
}

.subscription-message.success {
  color: var(--color-white);
}

.close-btn {
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
}
</style>
