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
          description="We’re growing fast and need your help make our eco-system stronger."
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
        style="margin-top: 4rem"
      >
        <v-image path="images/build-illustration.svg" class="illustration" />
        <v-stack direction="column" align="start" style="max-width: 34rem">
          <app-section-descriptor
            heading="Build"
            description="If you have a great idea for an application to build on the Arcana stack, sign up here to get access to our developer dashboard and the SDK as soon as it’s available."
          />
          <v-button
            label="Get started"
            label-transform="uppercase"
            style="margin-top: 1.5rem"
          />
        </v-stack>
      </v-stack>
      <v-stack
        md-direction="column"
        justify="space-between"
        align="start"
        style="margin-top: 4rem"
      >
        <v-stack direction="column" style="max-width: 32rem">
          <app-section-descriptor
            heading="Provide"
            description="If have resources such as computing power or storage, you could generate revenue using unused resources. We need storage providers, distributed key generators and network validators and if you're interested, sign up below. "
          />
          <v-label
            value="how do you want to participate:"
            strong
            style="margin-top: 3rem"
          />
          <v-radio-group
            v-model="providerType"
            layout="column"
            :options="['Storage Provider', 'Validator']"
            name="provider-type"
            style="margin-top: 0.625rem"
          />
          <v-label value="capacity" strong style="margin-top: 3rem" />
          <v-input-group style="margin-top: 0.625rem">
            <v-text-field
              v-model="capacity.value"
              type="number"
              style="width: 100%"
            />
            <v-dropdown
              v-model="capacity.unit"
              :options="['MB', 'GB']"
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
          />
        </v-stack>
        <v-image path="images/provide-illustration.svg" class="illustration" />
      </v-stack>
    </v-container>
  </section>
</template>

<script>
import AppSectionDescriptor from '../AppSectionDescriptor.vue'
import VButton from '../lib/VButton.vue'
import VContainer from '../lib/VContainer.vue'
import VDropdown from '../lib/VDropdown.vue'
import VImage from '../lib/VImage.vue'
import VInputGroup from '../lib/VInputGroup.vue'
import VLabel from '../lib/VLabel.vue'
import VRadioGroup from '../lib/VRadioGroup.vue'
import VStack from '../lib/VStack.vue'
import VTextField from '../lib/VTextField.vue'
export default {
  components: {
    VContainer,
    AppSectionDescriptor,
    VStack,
    VImage,
    VButton,
    VLabel,
    VRadioGroup,
    VInputGroup,
    VTextField,
    VDropdown,
  },
  data() {
    return {
      providerType: 'Storage Provider',
      capacity: {
        value: 100,
        unit: 'GB',
      },
      location: '',
      email: '',
    }
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

.illustration {
  @media (--viewport-medium) {
    margin: 4rem auto;
    width: 100%;
    max-width: 420px;
  }
}
</style>
