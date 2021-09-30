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
          >
            <v-text :weight="600" font="sans" color="primary">
              {{ item.name }}
            </v-text>
          </a>
        </nav>
        <v-stack gap="1.5rem">
          <v-button
            v-if="cta"
            :label="cta.label"
            :action="cta.action"
            label-transform="uppercase"
            :show="show"
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
import VButton from './VButton.vue'
import VContainer from './VContainer.vue'
import VImage from './VImage.vue'
import VStack from './VStack.vue'
import VText from './VText.vue'
export default {
  name: 'VHeader',
  components: { VContainer, VStack, VButton, VImage, VText },
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
    }
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
