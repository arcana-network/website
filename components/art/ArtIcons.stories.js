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
          gap: '2rem',
          gridTemplateColumns: '1fr 1fr',
          height: '272px',
          width: '272px',
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
      <VText color="secondary" font="0.75rem">Scroll down &darr;</VText>
      <ArtIconEncryption animate-on-enter />
      <ArtIconEncryption animate-on-enter />
      <ArtIconEncryption animate-on-enter />
      <ArtIconEncryption animate-on-enter />
    </VStack>
  `,
})

export default {
  title: 'art/icons',
}
