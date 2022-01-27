<template>
  <section>
    <v-container>
      <app-section-descriptor
        title="Open Positions"
        heading="We’re Currently Hiring for a Number of Different Positions Around the World"
        style="max-width: 62rem"
      />
      <v-tabs :tabs-list="teams" variant="pressed">
        <template v-for="(team, index) in teams" #[`tab-${index}`]>
          <div :key="team">
            <div v-if="positionsByTeam[team].length === 0">
              <v-stack
                justify="space-between"
                md-direction="column"
                class="no-positions"
              >
                <v-stack
                  direction="column"
                  gap="1.875rem"
                  style="max-width: 42rem"
                >
                  <v-text
                    font="sans"
                    :weight="600"
                    class="no-positions-title"
                    line-height="1.2"
                  >
                    Sorry, there are no positions available at this time!
                  </v-text>
                  <v-text
                    font="serif"
                    :weight="600"
                    class="no-positions-description"
                    line-height="1.5"
                    color="secondary"
                    >Thank you for your interest about employment opportunities
                    at Arcana Network. Currently we do not have any open
                    positions, however if you are interested in possible future
                    opportunities please send your CV to
                    <a href="mailto:hello@arcana.network" class="mail-link"
                      >hello@arcana.network</a
                    >.</v-text
                  >
                </v-stack>
                <v-image
                  class="no-positions-illustration"
                  path="images/no-positions-illustration.svg"
                />
              </v-stack>
            </div>
            <div v-else class="positions-grid">
              <v-card
                v-for="position in positionsByTeam[team]"
                :key="position.title"
                class="position-card"
              >
                <v-stack
                  direction="column"
                  justify="space-between"
                  style="height: 100%"
                  gap="1.25rem"
                >
                  <div>
                    <v-text
                      font="sans"
                      :weight="600"
                      size="1.25rem"
                      line-height="1.2"
                      letter-spacing="0.9"
                      >{{ position.title }}</v-text
                    >
                    <ul class="requirements-list">
                      <li
                        v-for="requirement in position.requirements"
                        :key="requirement"
                      >
                        <v-text
                          color="secondary"
                          font="serif"
                          :weight="400"
                          size="1rem"
                          line-height="1.5"
                          >{{ requirement }}</v-text
                        >
                      </li>
                    </ul>
                  </div>

                  <v-stack
                    direction="row"
                    sm-direction="column"
                    justify="space-between"
                    gap="2rem"
                    sm-gap="2rem"
                    align="center"
                    sm-align="start"
                  >
                    <v-stack direction="column" gap=".5rem">
                      <v-stack align="baseline" gap=".5rem">
                        <v-image path="icons/location.svg" />
                        <v-text
                          class="position-details"
                          font="serif"
                          size="1rem"
                          line-height="1.25"
                          letter-spacing="0.45px"
                          >{{ position.location }}</v-text
                        >
                      </v-stack>
                      <v-text
                        class="position-details"
                        font="serif"
                        size="1rem"
                        line-height="1.25"
                        letter-spacing="0.45px"
                        >Salary & Equity: {{ position.compensation }}</v-text
                      >
                    </v-stack>
                    <v-button
                      :action="() => openLink(position.link)"
                      class="apply-button"
                      label="Apply now"
                      label-size="1rem"
                      :label-weight="600"
                      label-transform="uppercase"
                      type="button"
                      variant="primary"
                    ></v-button>
                  </v-stack>
                </v-stack>
              </v-card>
            </div>
          </div>
        </template>
      </v-tabs>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'OpenPositions',
  data() {
    return {
      teams: ['Engineering', 'Marketing', 'Sales', 'Design'],
      positionsByTeam: {
        Engineering: [
          {
            title: 'Blockchain Lead Developer',
            requirements: [
              'Experience in managing a team of engineers for at least 2+ years',
              'Experience with Geth (Go Ethereum) or equivalent blockchain nodes and p2p',
              'Deep understanding of Blockchain, Solidity, Assembly, and the EVM',
            ],
            location: 'Bengaluru | Remote',
            compensation: '$120k – $200k | 0.5% – 2.0%',
            link: 'https://angel.co/company/arcana-network/jobs/1705690-blockchain-lead-developer',
          },
          {
            title: 'Cryptographer and Protocol Designer',
            requirements: [
              'Verifiable Delay Function (VDF) implementation',
              'Distributed key generation (DKG) and management (DKMS)',
              'Zero knowledge proofs',
            ],
            location: 'Bengaluru | Remote',
            compensation: '$100k – $150k | 0.5% – 1.0%',
            link: 'https://angel.co/company/arcana-network/jobs/1257558-cryptographer-and-protocol-designer',
          },
          {
            title: 'QA Engineer',
            requirements: [
              'Design and develop a QA framework. Automate parts of the framework wherever feasible.',
              'Develop and implement test cases, scripts, plans, and procedures (manual and automated)',
            ],
            location: 'India | Remote',
            compensation: '₹10L – ₹20L | No equity',
            link: 'https://angel.co/company/arcana-network/jobs/1783368-qa-engineer',
          },
          {
            title: 'Senior Golang Engineer',
            requirements: [
              'Strong Go development skills – structuring, reading and navigating go codebases',
              'Have written scalable APIs and worked with databases',
              'Are comfortable with systems programming',
            ],
            location: 'Europe | India | USA | Remote',
            compensation: '$50k – $120k | No equity',
            link: 'https://angel.co/company/arcana-network/jobs/1829880-senior-golang-engineer',
          },
          {
            title: 'Solidity/Blockchain Developer',
            requirements: [
              'Good experience in Solidity',
              'Good experience in Web3JS, EthersJS',
              'OpenZeppelin Contracts and other standard contracts and EIPs',
            ],
            location: 'Bengaluru | Remote',
            compensation: '₹25L – ₹40L | No equity',
            link: 'https://angel.co/company/arcana-network/jobs/1319203-solidity-blockchain-developer',
          },
          {
            title: 'Sr. Protocol Developer (Golang)',
            requirements: [
              'Have 3+ years of development experience',
              'Have 3+ years of Golang development experience in production',
            ],
            location: 'Bengaluru | Remote',
            compensation: '$40k – $60k | No equity',
            link: 'https://angel.co/company/arcana-network/jobs/1338647-sr-protocol-developer-golang',
          },
        ],
        Marketing: [
          {
            title: 'Lead Developer Evangelist',
            requirements: [
              'Ideate, Organise, and Execute Hackathon’s with end to end ownership, at a frequency aligned with our goals and roadmap',
              'Identify Partnership and sponsorship opportunities with other hackathons in the Blockchain ecosystem',
            ],
            location: 'Europe | India | USA | Remote',
            compensation: '$40k – $100k | No equity',
            link: 'https://angel.co/company/arcana-network/jobs/1822884-lead-developer-evangelist',
          },
          {
            title: 'Technical Docs Writer',
            requirements: [
              'Be fully responsible for the quality, discoverability and accuracy of our docs',
              'Document new products, features, and APIs',
              'Document standards, guidelines, and best practices on documentation for developers',
            ],
            location: 'India | Remote',
            compensation: '₹10L – ₹20L | No equity',
            link: 'https://angel.co/company/arcana-network/jobs/1837985-technical-docs-writer',
          },
        ],
        Sales: [
          {
            title: 'Business Developement',
            requirements: [
              'Lead strategic partnerships with blockchain and crypto projects that are a good fit for Arcana',
              'Create innovative proposals for potential partners that drive value for both parties',
            ],
            location: 'Europe | India | USA | Remote',
            compensation: '$40k – $120k | No equity',
            link: 'https://angel.co/company/arcana-network/jobs/1825008-business-development',
          },
        ],
        Design: [],
      },
    }
  },
  methods: {
    openLink(link) {
      window.open(link, '_blank')
    },
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

.positions-grid {
  display: grid;
  grid-gap: 1.875rem;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 2.5rem;

  @media (--viewport-small) {
    grid-gap: 1.25rem;
    grid-template-columns: 1fr;
  }
}

.position-card {
  @media (--viewport-small) {
    padding: 1.875rem;
  }
}

.requirements-list {
  list-style: none;
  padding-left: 1rem;
  margin-top: 1.4rem;
}

.requirements-list li {
  position: relative;
}
.requirements-list li::before {
  content: '•';
  color: var(--color-grey);
  position: absolute;
  left: -1rem;
  top: 0.25em;
}

.position-details {
  color: #cac9ca;
}

.apply-button {
  padding: 0.5rem 1.5rem;
}

.no-positions {
  margin-top: 6rem;
  margin-bottom: 6rem;

  @media (--viewport-medium) {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
  @media (--viewport-small) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
}

.no-positions-title {
  font-size: 2.25rem;

  @media (--viewport-small) {
    font-size: 1.25rem;
  }
}

.no-positions-description {
  font-size: 1.375rem;

  @media (--viewport-small) {
    font-size: 1rem;
  }
}

.no-positions-illustration {
  max-width: 42rem;
  width: 100%;
}

.mail-link {
  color: var(--color-blue);
  text-decoration: none;
}
</style>
