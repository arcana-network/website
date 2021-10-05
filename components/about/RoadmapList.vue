<template>
  <section>
    <v-container>
      <v-stack direction="column">
        <app-section-descriptor title="Roadmap" heading="Eyes on the Road" />
        <v-stack gap="1rem" class="laptop-remove">
          <v-dropdown
            v-model="selectedYear"
            :options="years"
            class="roadmap-dropdown"
          />
          <v-dropdown
            v-model="selectedQuarter"
            :options="quarters"
            class="roadmap-dropdown"
          />
        </v-stack>
        <v-stack>
          <v-stack
            direction="column"
            style="margin-top: 1.5rem"
            class="tablet-remove mobile-remove"
          >
            <div v-for="year in years" :key="year">
              <v-chip
                class="clickable-chip"
                @click="() => (selectedYear = year)"
              >
                <v-text :weight="600">{{ year }}</v-text>
              </v-chip>
              <ul v-if="selectedYear === year" style="padding: 0">
                <li
                  v-for="quarter in quarters"
                  :key="quarter + year"
                  class="quarter"
                  :class="{
                    'selected-quarter': selectedQuarter === quarter,
                  }"
                  @click.stop="() => (selectedQuarter = quarter)"
                >
                  <v-text>{{ quarter }}</v-text>
                </li>
              </ul>
            </div>
          </v-stack>
          <ul>
            <li
              v-for="item in roadmap[selectedYear][selectedQuarter]"
              :key="item.milestone"
            >
              <v-heading :level="4" class="milestone-heading">
                {{ item.month }} {{ selectedYear }}
              </v-heading>
              <v-text color="secondary">{{ item.milestone }}</v-text>
            </li>
          </ul>
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
      selectedYear: '2019',
      selectedQuarter: 'Q1',
      roadmap: {
        2019: {
          Q1: [],
          Q2: [
            {
              month: 'June',
              milestone:
                'Newfang Founded. Work on decentralised storage network.',
            },
          ],
          Q3: [],
          Q4: [
            {
              month: 'October',
              milestone: 'Newfang PoC on Testnet',
            },
          ],
        },
        2020: {
          Q1: [
            {
              month: 'February',
              milestone: 'Work on Skizzle commences',
            },
          ],
          Q2: [],
          Q3: [
            {
              month: 'August',
              milestone: 'Skizzle Launched',
            },
          ],
          Q4: [
            {
              month: 'December',
              milestone:
                'Pivot from Newfang to Arcana. Arcana is a privacy and storage stack.',
            },
          ],
        },
        2021: {
          Q1: [],
          Q2: [
            {
              month: 'Q2',
              milestone:
                'Arcana DKG v1. Distributed key generation based on Cachin et. al.',
            },
            {
              month: 'Q2',
              milestone: 'Storage network using min.io as base file system',
            },
            {
              month: 'Q2',
              milestone:
                'ArcanaStore JS SDK. SDK to perform storage and access control.',
            },
          ],
          Q3: [
            {
              month: 'Q3',
              milestone:
                'ArcanaAuth JS SDK. SDK to perform end user authentication and key management.',
            },
            {
              month: 'Q3',
              milestone: 'Basic Permissions',
            },
            {
              month: 'Q3',
              milestone: 'Polygon SDK implementation',
            },
          ],
          Q4: [
            {
              month: 'Q4',
              milestone: 'Arcana Alpha Testnet launch',
            },
            {
              month: 'Q4',
              milestone: 'Arcana Alpha Bug Bounty launch',
            },
            {
              month: 'Q4',
              milestone: 'Arcana server-side SDK (Golang)',
            },
            {
              month: 'Q4',
              milestone: 'Web Wallet',
            },
            {
              month: 'Q4',
              milestone: 'Usage graph privacy',
            },
            {
              month: 'Q4',
              milestone: 'Advanced Permissions',
            },
            {
              month: 'Q4',
              milestone: 'Arcana DKG v2 based on Kokoris-Kogias et. al.',
            },
            {
              month: 'Q4',
              milestone: 'Token Contracts',
            },
            {
              month: 'Q4',
              milestone: 'Arcana Beta Testnet launch',
            },
            {
              month: 'Q4',
              milestone: 'Arcana Beta Bug Bounty launch',
            },
          ],
        },
        2022: {
          Q1: [
            {
              month: 'Q1',
              milestone: 'Arcana Public Token Sale and TGE',
            },
            {
              month: 'Q1',
              milestone: 'Arcana Mainnet launch',
            },
          ],
          Q2: [],
          Q3: [],
          Q4: [],
        },
      },
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

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

.roadmap-dropdown {
  width: 50%;
  max-width: 12rem;
}

ul li {
  list-style: none;
}

.milestone-heading {
  margin: 1.5rem 0 0.5rem 0;
}

.clickable-chip {
  background: radial-gradient(
    134.5% 939.99% at -23.59% -12.9%,
    #262626 0%,
    rgba(26, 26, 26, 0.86293) 31.41%,
    rgba(32, 32, 32, 0.49) 100%
  );
  box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem 5rem;
  margin: 1rem 2rem 0.5rem 0;
  cursor: pointer;
}

.quarter {
  margin: 0.25rem 2rem 0.25rem 0;
  padding: 0.65rem 0;
  text-align: center;
  cursor: pointer;
}

.selected-quarter {
  background: linear-gradient(
      87.28deg,
      rgba(255, 38, 103, 0.6) -16.82%,
      rgba(255, 175, 55, 0) 49.13%
    ),
    radial-gradient(
      71.51% 71.51% at 88.17% 103.23%,
      rgba(255, 219, 92, 0.6) 0,
      rgba(255, 219, 92, 0.496875) 32.29%,
      rgba(255, 219, 92, 0) 100%
    ),
    radial-gradient(
      50% 50% at 63.98% 28.49%,
      rgba(255, 255, 255, 0.8) 0,
      rgba(255, 255, 255, 0.8) 23.44%,
      rgba(255, 255, 255, 0) 100%
    ),
    radial-gradient(
      32.26% 32.26% at 62.37% 28.49%,
      rgba(255, 255, 255, 0.8) 0,
      rgba(255, 255, 255, 0.216) 100%
    ),
    linear-gradient(326.58deg, #ffe177 -3.92%, #ff975c 112.32%);
  box-shadow: inset 0 -7px 66px rgba(255, 111, 66, 0.37);
  border-radius: 1rem;
}

.selected-quarter * {
  color: black;
}
</style>
