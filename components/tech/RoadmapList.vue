<template>
  <section>
    <v-image
      path="images/roadmap-illustration.png"
      style="width: 100%; z-index: -1; margin-bottom: -12.5%"
    />
    <v-container>
      <v-stack direction="column">
        <app-section-descriptor title="Roadmap" heading="Eyes on the Road" />
        <v-stack gap="1rem" class="laptop-remove">
          <v-dropdown
            v-model="selectedYear"
            :options="years"
            class="roadmap-dropdown"
          />
          <!-- <v-dropdown
            v-model="selectedQuarter"
            :options="quarters"
            class="roadmap-dropdown"
          /> -->
        </v-stack>
        <v-stack style="margin-top: 4rem">
          <v-stack
            direction="column"
            style="margin: 1.5rem 6rem 0 0"
            class="tablet-remove mobile-remove"
          >
            <div v-for="year in years" :key="year">
              <v-chip
                class="clickable-chip"
                :class="{
                  'selected-year': selectedYear === year,
                }"
                @click="() => (selectedYear = year)"
              >
                <v-text :weight="600">{{ year }}</v-text>
              </v-chip>
              <!-- <ul v-if="selectedYear === year">
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
              </ul> -->
            </div>
          </v-stack>
          <ul>
            <li
              v-for="item in roadmap[selectedYear]"
              :key="selectedYear + item.quarter"
            >
              <v-heading
                :level="4"
                :weight="600"
                font="serif"
                class="milestone-heading"
              >
                {{ item.quarter }} {{ selectedYear }}
              </v-heading>
              <div v-for="milestone in item.milestones" :key="milestone">
                <v-text
                  color="secondary"
                  :weight="400"
                  size="1.125rem"
                  class="milestone-description"
                >
                  {{ milestone }}
                </v-text>
              </div>
            </li>
          </ul>
        </v-stack>
      </v-stack>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'RoadmapList',
  data() {
    const years = ['2019', '2020', '2021', '2022']
    const quarters = ['Q1', 'Q2', 'Q3', 'Q4']
    const selectedYear = new Date().getFullYear().toString()
    const currentMonth = new Date().getMonth()
    const currentQuarterIndex = parseInt(currentMonth / 3)
    const selectedQuarter = quarters[currentQuarterIndex]

    return {
      years,
      quarters,
      selectedYear,
      selectedQuarter,
      roadmap: {
        2019: [
          {
            quarter: 'Q2',
            milestones: [
              'Newfang Founded. Work on decentralised storage network.',
            ],
          },
          {
            quarter: 'Q4',
            milestones: ['Newfang PoC on Testnet.'],
          },
        ],
        2020: [
          {
            quarter: 'Q1',
            milestones: ['Work on Skizzle commences.'],
          },
          {
            quarter: 'Q3',
            milestones: ['Skizzle Launched.'],
          },

          {
            quarter: 'Q4',
            milestones: [
              'Pivot from Newfang to Arcana. Arcana is a privacy and storage stack.',
            ],
          },
        ],
        2021: [
          {
            quarter: 'Q1 to Q3',
            milestones: [
              'Arcana DKG v1. Distributed key generation based on Cachin et. al.',
              'Storage network using min.io as base file system.',
              'ArcanaStore JS SDK. SDK to perform storage and access control.',
              'ArcanaAuth JS SDK. SDK to perform end user authentication and key management.',
              'Basic Permissions.',
              'Polygon SDK implementation.',
            ],
          },
          {
            quarter: 'Q4',
            milestones: [
              'Arcana Alpha Testnet launch.',
              'Arcana Alpha Bug Bounty launch.',
              'Arcana server-side SDK (Golang).',
              'Web Wallet.',
              'Usage graph privacy.',
              'Advanced Permissions.',
              'Arcana DKG v2 based on Kokoris-Kogias et. al.',
              'Token Contracts.',
              'Arcana Beta Testnet launch.',
              'Arcana Beta Bug Bounty launch.',
            ],
          },
        ],
        2022: [
          {
            quarter: 'Q1',
            milestones: [
              'Arcana Public Token Sale and TGE.',
              'Arcana Mainnet launch.',
            ],
          },
        ],
      },
    }
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

.roadmap-dropdown {
  width: 50%;
  max-width: 12rem;
}

ul {
  padding: 0;
}

ul li {
  list-style: none;
}

.milestone-heading {
  margin: 1.5rem 0 0.5rem 0;
  font-size: 1.375rem;

  @media (--viewport-medium) {
    font-size: 1.25rem;
  }
}

.milestone-description {
  font-size: 1.375rem;
  line-height: 2rem;

  @media (--viewport-medium) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
}

.clickable-chip {
  background: radial-gradient(
    134.5% 939.99% at -23.59% -12.9%,
    #262626 0%,
    rgba(26, 26, 26, 0.86293) 31.41%,
    rgba(32, 32, 32, 0.49) 100%
  );
  box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
  padding: 1.5rem 5rem;
  margin: 1rem 2rem 0.5rem 0;
  cursor: pointer;
}

.clickable-chip > * {
  font-size: 1.375rem;

  @media (--viewport-medium) {
    font-size: 1.25rem;
  }
}

.quarter {
  margin: 0.5rem 2rem 0.5rem 0;
  text-align: center;
  cursor: pointer;
}

.quarter > * {
  font-size: 1.25rem;
  line-height: 2.5rem;
}

.selected-quarter,
.selected-year {
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

.selected-quarter > *,
.selected-year > * {
  color: black;
  font-weight: 600;
}
</style>
