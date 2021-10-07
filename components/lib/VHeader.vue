<template>
  <header>
    <v-container>
      <v-stack justify="space-between" align="center">
        <NuxtLink to="/">
          <v-image :path="logo" alt="logo" class="cursor-pointer logo" />
        </NuxtLink>
        <nav class="header-menu" :class="{ show }">
          <a
            v-for="item in menuItems"
            :key="item.name"
            :href="item.link"
            :target="item.external ? '__blank' : ''"
            class="header-menu-item"
            :class="{
              'active-link': !item.extenal && item.link === currentLocation,
            }"
          >
            <v-text :weight="600" font="sans" color="primary">
              {{ item.name }}
            </v-text>
          </a>
        </nav>
        <v-stack gap="3vw">
          <v-button
            v-if="cta"
            :label="cta.label"
            :action="cta.action"
            label-transform="uppercase"
            :show="show"
            style="visibility: hidden"
          />
          <v-image
            :path="`icons/${icon}.svg`"
            class="
              cursor-pointer
              laptop-remove
              tablet-remove
              mobile-show
              menu-icon
            "
            :class="{ show }"
            @click="showClicked"
          />
        </v-stack>
      </v-stack>
    </v-container>
  </header>
</template>

<script>
export default {
  name: 'VHeader',
  props: {
    logo: {
      type: String,
      default: null,
    },
    menuItems: {
      type: Array,
      default() {
        return []
      },
    },
    cta: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      icon: 'menu',
      show: false,
      currentLocation: '',
    }
  },
  mounted() {
    this.currentLocation = window.location.pathname
  },
  methods: {
    showClicked(ev) {
      this.show = !this.show
      setTimeout(() => {
        this.icon = this.show ? 'close' : 'menu'
      }, 200)
    },
  },
}
</script>

<style scoped>
@import url('./media-query-helper.css');

header {
  margin: 1.5rem 0;
}

.header-menu-item {
  text-decoration: none;
  padding: 0.75rem 2rem;
}

.header-menu-item:hover {
  opacity: 0.7;
}

.header-menu-item:active {
  transform: scale(0.98);
}

.active-link {
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
  border-radius: 10px;
}

.active-link > * {
  color: #2d2d2d;
}

@media (--viewport-large) {
  .header-menu > * + * {
    margin-left: 1vw;
  }
}

@media (--viewport-medium) {
  .header-menu > * + * {
    margin-left: 1vw;
  }
}

@media (--viewport-small) {
  .header-menu {
    position: fixed;
    max-height: 0;
    top: 4.8rem;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: #1f2024;
    text-align: center;
    transition: max-height 0.4s, padding 0.6s;
    padding: 0;
    box-shadow: 0 10px 27px rgba(31, 32, 36, 0.5);
    z-index: 10000;
    overflow: hidden;
  }
  .header-menu > * {
    display: block;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }
  .header-menu.show {
    max-height: 100%;
    padding: 1rem;
  }
  .menu-icon {
    transition: transform 0.4s;
    width: 1.5rem;
  }
  .menu-icon.show {
    transform: rotate(-180deg);
  }
}
</style>
