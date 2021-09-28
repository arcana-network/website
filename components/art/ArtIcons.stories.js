import ArtIconEncryption from '~/components/art/ArtIconEncryption'
import VStack from '~/components/lib/VStack'

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
        <ArtIconEncryption />
        <ArtIconEncryption />
        <ArtIconEncryption />
        <ArtIconEncryption />
      </div>
    </VStack>
  `,
})

export default {
  title: 'art/icons',
}
