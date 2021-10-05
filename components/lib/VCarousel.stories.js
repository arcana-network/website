export const carousel = () => `
  <v-container>
    <v-carousel style="height: 10rem">
        <v-stack align="center" justify="center" style="width: 100%">
            <v-text>Slide 1</v-text>
        </v-stack>
       <v-stack align="center" justify="center" style="width: 100%">
            <v-heading :level="2">Slide 2</v-heading>
        </v-stack>
        <v-stack align="center" justify="center" style="width: 100%">
            <v-text :weight="600">Slide 3</v-text>
        </v-stack>
    </v-carousel>
  </v-container>
`

export default {
  title: 'VCarousel',
}
