<template>
  <v-stack
    align="start"
    direction="column"
    sm-direction="column"
    gap="20px"
    sm-gap="30px"
    class="tabs"
  >
    <v-stack
      align="start"
      class="tab-titles"
      direction="row"
      sm-direction="row"
      gap="3.75rem"
      sm-gap="1.875rem"
    >
      <div
        v-for="(tabTitle, tabIndex) in tabsList"
        :key="tabTitle"
        class="tab-title-wrapper"
        @click="selectTab(tabIndex)"
      >
        <v-text
          class="tab-title"
          line-height="1.2"
          :class="{
            'tab-title--selected': tabIndex === selectedTabIndex,
          }"
          :data-variant="variant"
        >
          {{ tabTitle }}
        </v-text>
      </div>
    </v-stack>
    <template v-for="(tabTitle, tabIndex) in tabsList">
      <div
        v-if="tabIndex === selectedTabIndex"
        :key="tabTitle"
        style="width: 100%"
      >
        <slot :name="`tab-${tabIndex}`" />
      </div>
    </template>
  </v-stack>
</template>

<script>
export default {
  name: 'VTabs',
  props: {
    tabsList: {
      type: Array,
      required: true,
    },
    variant: {
      type: String,
      default: 'underlined',
      validator: (value) => ['underlined', 'pressed'].includes(value),
    },
  },
  data() {
    return {
      selectedTabIndex: 0,
    }
  },
  methods: {
    selectTab(index) {
      this.selectedTabIndex = index
    },
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

.tab-titles {
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 80vw;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  @media (--viewport-small) {
    width: 90vw;
  }
}
.tab-titles::-webkit-scrollbar {
  display: none;
}

.tab-title-wrapper {
  cursor: pointer;
  flex: 0 0 auto;
  user-select: none;
}

.tab-title[data-variant='underlined'] {
  display: block;
  font-family: var(--font-sans);
  font-size: 2.1875rem;
  color: var(--color-grey);
  border-bottom: 4px solid transparent;
  font-weight: 300;

  @media (--viewport-small) {
    font-size: 1.25rem;
  }
}

.tab-title[data-variant='pressed'] {
  display: inline-block;
  font-family: var(--font-serif);
  font-size: 1.125rem;
  color: var(--color-white);
  font-weight: 400;
  padding: 0.5rem 1.3rem;
}

.tab-title--selected[data-variant='underlined'] {
  color: var(--color-white);
  border-color: currentColor;
  font-weight: 700;
}

.tab-title--selected[data-variant='pressed'] {
  color: var(--color-blue);
  font-weight: 600;
  background: linear-gradient(141.48deg, #161616 -4.56%, #151515 135.63%);
  box-shadow: inset -2px -2px 4px rgba(57, 57, 57, 0.44),
    inset 5px 5px 10px rgba(11, 11, 11, 0.5);
  border-radius: 10px;
}
</style>
