<template>
  <section>
    <v-container>
      <v-stack direction="column">
        <app-section-descriptor title="Roadmap" heading="Eyes on the Road" />
        <v-stack gap="1rem">
          <v-dropdown
            v-model="selectedYear"
            :options="years"
            style="width: 50%; max-width: 12rem"
          />
          <v-dropdown
            v-model="selectedQuarter"
            :options="quarters"
            style="width: 50%; max-width: 12rem"
          />
        </v-stack>
      </v-stack>
    </v-container>
  </section>
</template>

<script>
import VDropdown from '../lib/VDropdown.vue'
export default {
  name: 'RoadmapList',
  components: { VDropdown },
  data() {
    return {
      years: ['2019', '2020', '2021', '2022'],
      quarters: ['Q1', 'Q2', 'Q3', 'Q4'],
      selectedYear: '0',
      selectedQuarter: '',
    }
  },
  mounted() {
    this.selectedYear = new Date().getFullYear().toString()
    const currentMonth = new Date().getMonth() + 1
    const currentQuarterIndex = parseInt(currentMonth / 4)
    this.selectedQuarter = this.quarters[currentQuarterIndex]
  },
}
</script>