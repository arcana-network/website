export const animateOnHover = () => `
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
      <ArtIconStorage animate-on-hover />
      <ArtIconIdentity animate-on-hover />
      <ArtIconKeys animate-on-hover />
    </div>
  </VStack>
`

export const animateOnEnter = () => `
  <div>
    <div
      :style="{
        borderTop: '1px solid lightblue',
        bottom: '250px',
        position: 'fixed',
        width: '100%',
      }"
    ></div>
    <VStack
      align="center"
      direction="column"
      gap="50vh"
      justify="center"
      :style="{ marginTop: '1vh', marginBottom: '50vh' }"
    >
      <VText color="secondary" size="0.75rem">Scroll down &darr;</VText>
      <ArtIconEncryption animate-on-enter />
      <ArtIconStorage animate-on-enter />
      <ArtIconIdentity animate-on-enter />
      <ArtIconKeys animate-on-enter />
    </VStack>
  </div>
`

export const sizes = () => `
  <VStack direction="column" justify="center" :style="{ height: '100vh' }">
    <VStack align="center" gap="3rem" justify="center">
      <ArtIconEncryption :size="100" />
      <ArtIconEncryption :size="120" />
      <ArtIconEncryption :size="140" />
    </VStack>
    <VStack align="center" gap="3rem" justify="center">
      <ArtIconStorage :size="100" />
      <ArtIconStorage :size="120" />
      <ArtIconStorage :size="140" />
    </VStack>
    <VStack align="center" gap="3rem" justify="center">
      <ArtIconIdentity :size="100" />
      <ArtIconIdentity :size="120" />
      <ArtIconIdentity :size="140" />
    </VStack>
    <VStack align="center" gap="3rem" justify="center">
      <ArtIconKeys :size="100" />
      <ArtIconKeys :size="120" />
      <ArtIconKeys :size="140" />
    </VStack>
  </VStack>
`

export default {
  title: 'art/icons',
}
