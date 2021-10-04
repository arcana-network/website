import VStack from '~/components/lib/VStack'
import VText from '~/components/lib/VText'

export const colors = () => ({
  components: { VStack, VText },
  template: `
    <v-stack direction="column" gap="2rem">
      <v-text color="primary">
        The quick brown fox jumps over the lazy dog.
      </v-text>
      <v-text color="secondary">
        The quick brown fox jumps over the lazy dog.
      </v-text>
      <v-text color="link">
        The quick brown fox jumps over the lazy dog.
      </v-text>
    </v-stack>
  `,
})

export default {
  title: 'VText',
}
