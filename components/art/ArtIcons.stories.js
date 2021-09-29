import ArtIconEncryption from '~/components/art/ArtIconEncryption'
import VStack from '~/components/lib/VStack'
import VText from '~/components/lib/VText'

export const animateOnHover = () => ({
  components: { ArtIconEncryption, VStack },
  template: `
    <VStack
      align="center"
      justify="center"
      :style="{ minHeight: 'calc(100vh - 2rem)' }"
    >
      <div
        :style="{
          display: 'grid',
          gap: '4rem',
          gridTemplateColumns: '1fr 1fr',
          height: 'calc(240px + 4rem)',
          width: 'calc(240px + 4rem)',
        }"
      >
        <ArtIconEncryption animate-on-hover />
        <ArtIconEncryption animate-on-hover />
        <ArtIconEncryption animate-on-hover />
        <ArtIconEncryption animate-on-hover />
      </div>
    </VStack>
  `,
})

export const animateOnEnter = () => ({
  components: { ArtIconEncryption, VStack, VText },
  template: `
    <VStack
      align="center"
      direction="column"
      gap="50vh"
      justify="center"
      :style="{ marginTop: '1vh', marginBottom: '50vh' }"
    >
      <VText color="secondary" size="0.75rem">Scroll down &darr;</VText>
      <ArtIconEncryption animate-on-enter />
      <ArtIconEncryption animate-on-enter />
      <ArtIconEncryption animate-on-enter />
      <ArtIconEncryption animate-on-enter />
    </VStack>
  `,
})

export const sizes = () => ({
  components: { ArtIconEncryption, VStack },
  template: `
    <VStack direction="column" justify="center" :style="{ height: '100vh' }">
      <VStack align="center" gap="3rem" justify="center">
        <ArtIconEncryption :size="100" />
        <ArtIconEncryption :size="120" />
        <ArtIconEncryption :size="140" />
      </VStack>
      <VStack align="center" gap="3rem" justify="center">
        <ArtIconEncryption :size="100" />
        <ArtIconEncryption :size="120" />
        <ArtIconEncryption :size="140" />
      </VStack>
      <VStack align="center" gap="3rem" justify="center">
        <ArtIconEncryption :size="100" />
        <ArtIconEncryption :size="120" />
        <ArtIconEncryption :size="140" />
      </VStack>
      <VStack align="center" gap="3rem" justify="center">
        <ArtIconEncryption :size="100" />
        <ArtIconEncryption :size="120" />
        <ArtIconEncryption :size="140" />
      </VStack>
    </VStack>
  `,
})

export default {
  title: 'art/icons',
}
