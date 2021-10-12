<template>
  <section>
    <v-container>
      <v-stack justify="space-between" direction="column" align="start">
        <v-stack direction="column">
          <app-section-descriptor
            title="our investors"
            heading="They’re Awesome Investors. And They Chose To Back Us!"
            style="max-width: 40rem; margin-bottom: 1.25rem"
          />
          <app-section-descriptor
            description="Everyone of these investors are well known and well respected in their own right. Through us, they’re helping shape the world towards a more privacy preserving future"
            style="max-width: 60rem"
          />
        </v-stack>
        <v-button
          type="link"
          label="View all investors"
          label-transform="uppercase"
          style="margin-top: 2rem"
          :action="goToInvestors"
        />
      </v-stack>
    </v-container>
    <div
      class="position-relative investors"
      style="margin: 3rem auto 0; max-width: 1920px"
    >
      <div style="max-height: 540px; height: 50vh" />
      <div
        v-for="investor in investors"
        :key="investor.key"
        :class="['position-absolute', investor.cssClass]"
      >
        <v-image
          :path="investor.image"
          :title="investor.name"
          :alt="investor.name"
          @click.stop="showDesc(investor.key)"
        />
        <v-image
          v-if="investor.orb"
          :path="`images/orb-${investor.orb.color}.svg`"
          class="position-absolute"
          :style="investor.orb.style"
        />
      </div>
      <div v-if="investorDescription" class="investor-description-container">
        <v-stack direction="column" align="center">
          <v-image
            path="images/investor-close-btn.svg"
            class="investor-description-close-btn"
            @click.stop="hideDesc()"
          />
          <div class="investor-description">
            <v-stack align="center">
              <v-image
                path="images/investor-placeholder.png"
                class="mobile-remove"
              />
              <v-stack direction="column" style="padding: 2rem">
                <v-heading level="2" class="investor-name">
                  {{ selectedInvestor.name }}
                </v-heading>
                <v-text>{{ selectedInvestor.desc }}</v-text>
              </v-stack>
            </v-stack>
          </div>
        </v-stack>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Investors',
  data() {
    return {
      investorDescription: false,
      selectedInvestor: {},
      investors: [
        {
          key: 'balaji',
          name: 'Balaji Srinivasan',
          image: 'images/investors/balaji.png',
          desc: 'Investor, Arcana',
          cssClass: 'investor-balaji',
          orb: {
            color: 'red',
            style: 'right: 4%; top: 4%; width: 2rem',
          },
        },
        {
          key: 'tamar',
          name: 'Tamar Menteshashvili',
          image: 'images/investors/tamar.png',
          desc: 'Investor, Arcana',
          cssClass: 'investor-tamar',
          orb: {
            color: 'red',
            style: 'right: 10%; bottom: 15%; width: 1.2rem',
          },
        },
        {
          key: 'kendrick',
          name: 'Kendrick Nguyen',
          image: 'images/investors/kendrick.png',
          desc: 'Investor, Arcana',
          cssClass: 'investor-kendrick',
          orb: {
            color: 'yellow',
            style: 'right: -25%; bottom: -25%; width: 3rem',
          },
        },
        {
          key: 'santiago',
          name: 'Santiago Santos',
          image: 'images/investors/santiago.png',
          desc: 'Investor, Arcana',
          cssClass: 'investor-santiago',
          orb: {
            color: 'yellow',
            style: 'right: 3%; top: 3%; width: 2rem',
          },
        },
        {
          key: 'au21',
          name: 'AU21 Capital',
          image: 'images/investors/au21.png',
          desc: 'Investor, Arcana',
          cssClass: 'investor-au21',
          orb: {
            color: 'blue',
            style: 'left: -75%; bottom: -50%; width: 2rem',
          },
        },
        {
          key: 'kenetic',
          name: 'Kenetic Capital',
          image: 'images/investors/kenetic.png',
          desc: 'Investor, Arcana',
          cssClass: 'investor-kenetic',
          orb: {
            color: 'blue',
            style: 'right: -75%; top: -5%; width: 0.8rem',
          },
        },
        {
          key: 'john',
          name: 'John Lilic',
          image: 'images/investors/john.png',
          desc: 'Investor, Arcana',
          cssClass: 'investor-john',
        },
        {
          key: 'aniket',
          name: 'Aniket Jindal',
          image: 'images/investors/aniket.png',
          desc: 'Investor, Arcana',
          cssClass: 'investor-aniket',
          orb: {
            color: 'yellow',
            style: 'right: -50%; top: -75%; width: 4rem',
          },
        },
        {
          key: 'siddharth',
          name: 'Siddharth Menon',
          image: 'images/investors/siddharth.png',
          desc: 'Investor, Arcana',
          cssClass: 'investor-siddharth',
        },
      ],
    }
  },
  methods: {
    showDesc(value) {
      // Hide previously opened description modal
      this.investorDescription = false
      this.selectedInvestor = this.investors.find(
        (investor) => investor.key === value
      )
      setTimeout(() => {
        this.investorDescription = true
      }, 150)
    },
    hideDesc() {
      this.investorDescription = false
      this.selectedInvestor = {}
    },
    goToInvestors() {
      window.open('/about/#our-investors', '_self')
    },
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

.investors img {
  cursor: pointer;

  @media (--viewport-medium) {
    transform: scale(0.7);
  }
}

.investor-description-container {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.investor-description-close-btn {
  cursor: pointer;
}

.investor-description {
  margin-top: 0.5rem;
  background: #262626
    radial-gradient(
      134.5% 939.99% at -23.59% -12.9%,
      #262626 0%,
      rgba(26, 26, 26, 0.86293) 31.41%,
      rgba(32, 32, 32, 0.49) 100%
    );
  box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  overflow: hidden;
}

.investor-name {
  font-size: 2rem;
  margin-top: 0;
}

/* Investor positioning */
.investor-balaji {
  bottom: 10%;
  left: 5%;

  @media (--viewport-medium) {
    left: 0%;
    bottom: 2%;
  }
}

.investor-tamar {
  top: 0%;
  right: 25%;

  @media (--viewport-medium) {
    right: 0%;
  }
}

.investor-kendrick {
  top: 10%;
  left: 20%;

  @media (--viewport-medium) {
    top: 5%;
    left: 0%;
  }
}

.investor-au21 {
  bottom: 0%;
  left: 25%;

  @media (--viewport-medium) {
    bottom: -5%;
    left: 30%;
  }
}

.investor-kenetic {
  bottom: 0%;
  right: 15%;

  @media (--viewport-medium) {
    bottom: -20%;
    right: 10%;
  }
}

.investor-santiago {
  top: 15%;
  left: 50%;

  @media (--viewport-medium) {
    top: 5%;
    left: 35%;
  }
}

.investor-siddharth {
  top: 50%;
  right: 30%;

  @media (--viewport-medium) {
    top: 35%;
    right: 10%;
  }
}

.investor-aniket {
  top: 45%;
  right: 5%;

  @media (--viewport-medium) {
    top: 70%;
    right: 0%;
  }
}

.investor-john {
  top: 40%;
  left: 35%;

  @media (--viewport-medium) {
    left: 25%;
  }
}
</style>
