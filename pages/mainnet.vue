<template>
  <main class="container color-primary">
    <MainnetHeader />
    <div class="content_container">
      <div class="center">
        <h1 class="heading font-sans">Mainnet Launching Soon</h1>
        <p class="heading_caption color-secondary font-serif">
          Join 50+ Web3 projects and 1000s of devs building scalable dApps using
          Arcana’s Auth, Store and Access
        </p>
      </div>
      <div class="center">
        <p v-if="loading" class="font-serif">Please Wait...</p>
        <div v-else class="center">
          <form v-if="!success" class="email_input_container font-serif">
            <input
              v-model="email"
              type="email"
              placeholder="Your email address"
              class="email_input_field"
            />
            <button
              class="email_input_button cursor-pointer"
              @click.prevent="signup"
            >
              Notify Me
            </button>
          </form>
          <div v-else class="email_success_message font-serif">
            <p>Awesome! You're on the List!</p>
          </div>
          <p class="subscription-error-message font-serif">
            {{ message }}
          </p>
        </div>
        <p class="email_input_caption color-secondary font-serif">
          Provide your email address to stay updated, get giveaways, NFT drops
          and more. We won’t spam, promise!
        </p>
      </div>
    </div>
    <MainnetFooter />
  </main>
</template>

<script>
import { groupTypes, subscribe } from '~/services/mailchimp'

export default {
  layout: 'default',
  data() {
    return {
      email: '',
      success: false,
      message: '',
      loading: false,
    }
  },
  head() {
    return {
      title: 'Mainnet - Arcana Network',
    }
  },
  methods: {
    async signup() {
      this.loading = true
      if (this.email.trim()) {
        try {
          await subscribe({
            email: this.email.trim(),
            groups: [groupTypes.MAINNET, groupTypes.NEWSLETTER],
          })
          this.success = true
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
        this.message = 'Enter your email address'
      }
      this.loading = false
    },
  },
}
</script>

<style lang="postcss" scoped>
@import url('../components/lib/media-query-helper.css');

.container {
  background: linear-gradient(
      344.06deg,
      rgba(0, 0, 0, 0) -94.53%,
      rgba(0, 0, 0, 0.62) 79.99%
    ),
    url('~assets/images/mainnet-bg.svg') no-repeat;
  background-size: cover;
  background-position: top left;
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media (--viewport-small) {
    background: linear-gradient(
        344.06deg,
        rgba(0, 0, 0, 0) -94.53%,
        rgba(0, 0, 0, 0.62) 79.99%
      ),
      url('~assets/images/mainnet-bg-mobile.svg') no-repeat;
    background-size: cover;
  }
}

.content_container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 100px;
}

.content_container * + * {
  margin-top: 15px;
}

.heading {
  margin: 0;
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
  font-family: var(--font-sans);
  @media (--viewport-small) {
    font-size: 32px;
  }
}

.heading_caption {
  font-size: 24px;
  text-align: center;
  max-width: 700px;
  @media (--viewport-small) {
    font-size: 16px;
    min-width: 350px;
  }
}

.email_input_container {
  border: 1px solid var(--color-white);
  min-width: 400px;
  display: flex;
  justify-content: space-between;
  padding: 2px;
  border-radius: 5px;
  font-size: 14px;
  @media (--viewport-small) {
    font-size: 12px;
    min-width: 300px;
  }
}

.email_input_field {
  padding: 8px !important;
  flex: 1;
  border: none;
  outline: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.email_input_button {
  margin: 0;
  padding: 8px 20px !important;
  border: none;
  outline: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  @media (--viewport-small) {
    padding: 6px 16px !important;
  }
}

.email_input_button:hover {
  transform: scale(1.1);
  transition: ease-in-out 500ms;
  border-radius: 5px;
}

.email_input_caption {
  text-align: center;
  max-width: 400px;
  color: var(--color-white);
  font-size: 14px;
  margin: 0;
  @media (--viewport-small) {
    font-size: 12px;
    max-width: 300px;
  }
}

.email_success_message {
  min-width: 400px;
  background-color: var(--color-white);
  color: var(--color-black);
  text-align: center;
  border-radius: 5px;
  font-size: 14px;
  text-transform: uppercase;
  @media (--viewport-small) {
    font-size: 12px;
    min-width: 300px;
  }
}

.subscription-error-message {
  color: var(--color-orange);
}
</style>
