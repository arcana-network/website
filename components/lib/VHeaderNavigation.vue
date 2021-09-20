<template>
  <nav class="header-menu" :class="{ show: menuShow }">
    <a
      v-for="item in menuItems"
      :key="item.name"
      :href="item.link"
      :target="item.external ? '__blank' : ''"
      class="header-menu-item"
    >
      <v-text :weight="600" font="sans" color="primary">
        {{ item.name }}
      </v-text>
    </a>
  </nav>
</template>

<script>
import VText from './VText.vue'

export default {
  name: 'VHeaderNavigation',
  components: { VText },
  props: {
    menuItems: {
      type: Array,
      default() {
        return []
      },
    },
    show: Boolean,
  },
  computed: {
    menuShow() {
      return this.show
    },
  },
}
</script>

<style lang="postcss" scoped>
@import url('./media-query-helper.css');

.header-menu-item {
  text-decoration: none;
}

.header-menu-item:hover {
  opacity: 0.7;
}

.header-menu-item:active {
  opacity: 0.8;
}

@media (--viewport-large) {
  .header-menu > * + * {
    margin-left: 4vw;
  }
}

@media (--viewport-medium) {
  .header-menu > * + * {
    margin-left: 3vw;
  }
}

@media (--viewport-small) {
  /* .header-menu {
    display: none;
    position: fixed;
    z-index: 10000;
    background: black;
    width: 100%;
    top: 100%;
  }
  .header-menu > * {
    display: block;
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
  }
  .header-menu.show {
    display: block;
  } */
}
</style>
