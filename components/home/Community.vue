<template>
  <section>
    <v-container>
      <v-stack direction="column">
        <app-section-descriptor
          title="Community"
          heading="Roll Up Your Sleeves and Get Involved"
          style="max-width: 28rem"
        />
        <app-section-descriptor
          description="We’re growing fast and need your help to make our eco-system stronger."
        />
        <app-section-descriptor
          description="If you’re technically inclined, take a look at the ways you can get involved below."
        />
      </v-stack>
      <v-stack
        md-direction="column-reverse"
        justify="space-between"
        align="center"
        md-align="start"
        style="margin-top: 1rem"
      >
        <div class="illustration-container">
          <v-image path="images/build-illustration.svg" class="illustration" />
        </div>
        <v-stack direction="column" align="start" style="max-width: 34rem">
          <app-section-descriptor
            heading="Build"
            description="If you have a great idea for an application to build on the Arcana stack, sign up here to get access to our developer dashboard and the SDK as soon as it’s available."
          />
          <v-button
            label="Build on Testnet"
            label-transform="uppercase"
            style="margin-top: 1.5rem"
            :action="onBuild"
          />
        </v-stack>
      </v-stack>
      <v-stack
        md-direction="column"
        justify="space-between"
        align="start"
        class="provide-section"
      >
        <v-stack direction="column" style="max-width: 32rem">
          <app-section-descriptor
            heading="Provide"
            description="If have resources such as computing power or storage, you could generate revenue using unused resources. We need storage providers, distributed key generators and network validators and if you're interested, sign up below. "
          />
          <div class="illustration-container">
            <v-image
              path="images/provide-illustration.png"
              class="illustration laptop-remove"
            />
          </div>
          <v-label
            value="how do you want to participate:"
            strong
            style="margin-top: 3rem"
          />
          <v-radio-group
            v-model="providerType"
            layout="column"
            :options="[providerTypes.STORAGE_PROVIDER, providerTypes.VALIDATOR]"
            name="provider-type"
            style="margin-top: 0.625rem"
          />
          <v-stack v-if="providerType" direction="column">
            <v-label
              v-if="providerType === providerTypes.STORAGE_PROVIDER"
              value="capacity"
              strong
              style="margin-top: 3rem"
            />
            <v-input-group
              v-if="providerType === providerTypes.STORAGE_PROVIDER"
              style="margin-top: 0.625rem"
            >
              <v-text-field
                v-model="capacity.value"
                type="number"
                style="width: 100%"
              />
              <v-dropdown
                v-model="capacity.unit"
                :options="['GB', 'TB']"
                style="width: 25ch"
              />
            </v-input-group>
            <v-label value="location" strong style="margin-top: 3rem" />
            <v-dropdown
              v-model="location"
              :options="[
                'Asia',
                'North America',
                'Europe',
                'Australia',
                'South America',
                'Africa',
              ]"
              placeholder="Select Location"
              style="margin-top: 0.625rem"
            />
            <v-label value="email" strong style="margin-top: 3rem" />
            <v-text-field
              v-model="email"
              placeholder="Enter here"
              style="margin-top: 0.625rem"
            />
            <v-button
              label="submit"
              label-transform="uppercase"
              style="margin-top: 3rem; width: 12rem"
              :action="submitProvider"
            />
          </v-stack>
          <v-text class="subscription-message" :class="{ success }">
            {{ message }}
          </v-text>
        </v-stack>
        <div class="illustration-container">
          <v-image
            path="images/provide-illustration.png"
            class="illustration tablet-remove mobile-remove"
          />
        </div>
      </v-stack>
    </v-container>
  </section>
</template>

<script>
import { groupTypes, providerTypes, subscribe } from '~/services/mailchimp'

export default {
  name: 'Community',
  data() {
    return {
      groupTypes,
      providerTypes,

      providerType: '',
      capacity: {
        value: 100,
        unit: 'GB',
      },
      location: '',
      email: '',
      success: true,
      message: '',
    }
  },
  methods: {
    async submitProvider() {
      if (this.email.trim() && this.providerType && this.location) {
        this.success = true
        this.message = 'Submitting...'
        try {
          const data = {
            email: this.email,
            groups: [groupTypes.PROVIDER, groupTypes.NEWSLETTER],
            providerType: this.providerType,
            location: this.location,
          }
          if (this.providerType === providerTypes.STORAGE_PROVIDER) {
            data.storage = {
              capacity: this.capacity.value,
              unit: this.capacity.unit,
            }
          }
          await subscribe(data)
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
        this.message = 'Enter all details to continue'
      }
    },
    onBuild() {
      window.open('https://testnet.arcana.network', '_blank')
    },
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

section {
  margin-top: 8rem !important;

  @media (--viewport-medium) {
    margin-top: 6rem !important;
  }
}

.provide-section {
  margin-top: 2rem;
}

.illustration {
  @media (--viewport-medium) {
    margin: 1rem auto;
    width: 100%;
    max-width: 420px;
  }
}

.subscription-message {
  margin: 1rem;
  color: var(--color-orange);
}

.subscription-message.success {
  color: var(--color-white);
}

.illustration-container {
  position: relative;
}

.illustration-container::before {
  content: '';
  position: absolute;
  inset: -20% -10%;
  z-index: -1;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(180, 247, 252, 0.2) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  filter: blur(40px);
}

.illustration-container:first-child::before {
  inset: -40%;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(248, 81, 142, 0.2) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  filter: none;
}
</style>
