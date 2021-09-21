<template>
  <div>
    <v-stack direction="column" gap="1.25rem">
      <v-text
        font="serif"
        :weight="700"
        size="1.125rem"
        line-height="1.42rem"
        letter-spacing="0.375rem"
        transform="uppercase"
      >
        <span style="margin-right: 1.25rem">|</span>
        <span>{{ title }}</span>
      </v-text>
      <v-heading :level="2">{{ heading }}</v-heading>
      <v-text
        color="secondary"
        :weight="400"
        size="1.375rem"
        line-height="2rem"
        style="padding-top: 0.825rem"
      >
        {{ description }}
      </v-text>
    </v-stack>
  </div>
</template>

<script>
import VHeading from './lib/VHeading.vue'
import VStack from './lib/VStack.vue'
import VText from './lib/VText.vue'
export default {
  name: 'AppSectionDescriptor',
  components: { VText, VStack, VHeading },
  props: {
    title: {
      type: String,
      default: null,
    },
    heading: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
  },
}
</script>