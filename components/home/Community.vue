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
            label="Sign up now"
            label-transform="uppercase"
            style="margin-top: 1.5rem"
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
          <v-stack v-if="providerType" direction="column">
            <v-label
              v-if="providerType === 'Storage Provider'"
              value="capacity"
              strong
              style="margin-top: 3rem"
            />
            <v-input-group
              v-if="providerType === 'Storage Provider'"
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
            />
          </v-stack>
        </v-stack>
        <v-image path="images/provide-illustration.svg" class="illustration" />
      </v-stack>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'Community',
  data() {
    return {
      providerType: '',
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

section {
  padding: 6rem 0;

  @media (--viewport-small) {
    padding: 3rem 0;
  }
}

.provide-section {
  margin-top: 6rem;

  @media (--viewport-small) {
    margin-top: 2rem;
  }
}

.illustration {
  @media (--viewport-medium) {
    margin: 1rem auto;
    width: 100%;
    max-width: 420px;
  }
}
</style>
