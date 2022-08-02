<template>
  <v-stack
    direction="column"
    sm-direction="column-reverse"
    align="center"
    sm-align="start"
    class="investor-container"
  >
    <div style="position: relative">
      <v-image
        :path="investor.image"
        :alt="investor.name"
        class="investor-image"
        :class="{ expand: isExpanded }"
        @mouseenter="showDesc"
        @mouseleave="hideDesc"
      />
      <div
        v-if="investor.description"
        class="investor-description"
        :class="{ show: showDescription, expand: isExpanded }"
      >
        {{ investor.description }}
      </div>
    </div>
    <v-stack
      direction="row"
      justify="space-between"
      class="investor-details-container"
    >
      <div class="investor-details">
        <v-heading :level="4" :weight="600" class="investor-name">
          {{ investor.name }}
        </v-heading>
        <v-text
          v-if="investor.designation"
          font="serif"
          color="secondary"
          :weight="400"
          class="investor-designation"
        >
          {{ investor.designation }}
        </v-text>
      </div>
      <v-image
        class="laptop-remove tablet-remove mobile-show investor-expansion-icon"
        :class="{ expanded: isExpanded }"
        path="icons/arrow-down.svg"
        @click.stop="toggleInvestorImage"
      />
    </v-stack>
  </v-stack>
</template>

<script>
export default {
  name: 'Investor',
  props: {
    investor: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      isExpanded: false,
      showDescription: false,
    }
  },
  methods: {
    toggleInvestorImage() {
      this.isExpanded = !this.isExpanded
    },
    showDesc() {
      this.showDescription = true
    },
    hideDesc() {
      this.showDescription = false
    },
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

.investor-container {
  text-align: center;

  @media (--viewport-medium) {
    text-align: start;
  }
}

.investor-description {
  position: absolute;
  background: #262626
    radial-gradient(
      134.5% 939.99% at -23.59% -12.9%,
      #262626 0%,
      rgba(26, 26, 26, 0.86293) 31.41%,
      rgba(32, 32, 32, 0.49) 100%
    );
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.1s, opacity 0.6s;
  font-weight: 500;
  font-family: var(--font-serif);
  line-height: 1.5rem;
  width: 16rem;
  left: -5rem;
  top: calc(100% + 0.5rem);
  border-radius: 10px;
  padding: 1rem;
  color: white;
  z-index: 100;

  @media (--viewport-small) {
    left: 100%;
    top: 10%;
    width: calc(100vw - 12rem);
  }
}

.investor-description.show {
  visibility: visible;
  opacity: 1;
}

.investor-description.expand {
  @media (--viewport-small) {
    opacity: 1;
    visibility: visible;
  }
}

.investor-image {
  border-radius: 50%;
  cursor: pointer;
  width: 8rem;

  @media (--viewport-small) {
    max-height: 0;
    opacity: 0;
    margin-top: 0;
    transition: opacity 0.6s, max-height 0.1s, margin-top 0.6s;
  }
}

.investor-image.expand {
  max-height: 100%;
  opacity: 1;
  margin-top: 1rem;
}

.investor-details-container {
  @media (--viewport-small) {
    width: 100%;
  }
}

.investor-details {
  max-width: 10rem;

  @media (--viewport-medium) {
    text-align: center;
  }

  @media (--viewport-small) {
    text-align: unset !important;
    max-width: 100%;
  }
}

.investor-name {
  font-size: 1.125rem;
  line-height: 1.375rem;
  margin: 0.7rem 0 0.3rem;

  @media (--viewport-medium) {
    font-size: 1.2rem;
    line-height: 1.325rem;
    text-align: center;
  }

  @media (--viewport-small) {
    text-align: unset !important;
  }
}

.investor-designation {
  font-size: 1rem;
  line-height: 1.25rem;
  max-width: 10rem;

  @media (--viewport-medium) {
    font-size: 1rem;
    line-height: 1.25rem;
    text-align: center;
  }

  @media (--viewport-small) {
    text-align: unset !important;
  }
}

@media (--viewport-small) {
  .investor-container {
    text-align: start;
  }
}

.investor-expansion-icon {
  transform: rotate(0);
  cursor: pointer;
  transition: transform 0.4s;
}

.investor-expansion-icon.expanded {
  transform: rotate(-180deg);
}
</style>
