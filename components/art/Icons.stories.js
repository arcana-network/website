export const animateOnHover = () => `
  <v-stack
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
      <art-encryption-icon animate-on-hover />
      <art-storage-icon animate-on-hover />
      <art-identity-icon animate-on-hover />
      <art-keys-icon animate-on-hover />
    </div>
  </v-stack>
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
    <v-stack
      align="center"
      direction="column"
      gap="50vh"
      justify="center"
      :style="{ marginTop: '1vh', marginBottom: '50vh' }"
    >
      <v-text color="secondary" size="0.75rem">Scroll down &darr;</v-text>
      <art-encryption-icon animate-on-enter />
      <art-storage-icon animate-on-enter />
      <art-identity-icon animate-on-enter />
      <art-keys-icon animate-on-enter />
    </v-stack>
  </div>
`

export const sizes = () => `
  <v-stack direction="column" justify="center" :style="{ height: '100vh' }">
    <v-stack align="center" gap="3rem" justify="center">
      <art-encryption-icon :size="100" />
      <art-encryption-icon :size="120" />
      <art-encryption-icon :size="140" />
    </v-stack>
    <v-stack align="center" gap="3rem" justify="center">
      <art-storage-icon :size="100" />
      <art-storage-icon :size="120" />
      <art-storage-icon :size="140" />
    </v-stack>
    <v-stack align="center" gap="3rem" justify="center">
      <art-identity-icon :size="100" />
      <art-identity-icon :size="120" />
      <art-identity-icon :size="140" />
    </v-stack>
    <v-stack align="center" gap="3rem" justify="center">
      <art-keys-icon :size="100" />
      <art-keys-icon :size="120" />
      <art-keys-icon :size="140" />
    </v-stack>
  </v-stack>
`

export default {
  title: 'art/icons',
}
