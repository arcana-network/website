<template>
  <header>
    <v-container>
      <v-stack justify="space-between" align="center">
        <NuxtLink to="/">
          <v-image :src="logo" alt="logo" class="cursor-pointer logo" />
        </NuxtLink>
        <v-header-navigation
          v-if="menuItems.length"
          :menu-items="menuItems"
          class="mobile-remove"
        />
        <v-stack gap="1.5rem">
          <v-button
            v-if="cta"
            :label="cta.label"
            :action="cta.action"
            label-transform="uppercase"
          />
          <v-image
            :src="menuIcon"
            class="cursor-pointer laptop-remove tablet-remove mobile-show"
            @click.stop="() => (show = true)"
          />
        </v-stack>
      </v-stack>
      <!-- <v-header-navigation
        v-if="menuItems.length"
        :menu-items="menuItems"
        :show="true"
        class="laptop-remove tablet-remove"
      /> -->
    </v-container>
  </header>
</template>

<script>
import MenuIcon from '../../assets/icons/menu.svg'
import VButton from './VButton.vue'
import VContainer from './VContainer.vue'
import VHeaderNavigation from './VHeaderNavigation.vue'
import VImage from './VImage.vue'
import VStack from './VStack.vue'
export default {
  name: 'VHeader',
  components: { VContainer, VStack, VButton, VImage, VHeaderNavigation },
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
      menuIcon: MenuIcon,
      show: false,
    }
  },
  methods: {},
}
</script>

<style scoped>
@import url('./media-query-helper.css');

header {
  margin: 1.5rem 0;
}
</style>
