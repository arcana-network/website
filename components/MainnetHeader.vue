<template>
  <header>
    <v-container>
      <v-stack justify="space-between" align="center">
        <NuxtLink to="/">
          <v-image
            path="images/arcana-logo-vertical.svg"
            alt="logo"
            class="cursor-pointer logo"
          />
        </NuxtLink>
        <nav class="header-menu header-menu-links" :class="{ show }">
          <v-stack align="center" :grow="1" justify="center">
            <template v-for="item in menuItems">
              <a
                v-if="item.external"
                :key="item.name"
                :href="item.link"
                target="_blank"
                class="header-menu-item"
                @click="closeMenu"
              >
                <v-text :weight="600" font="sans" color="primary">{{
                  item.name
                }}</v-text>
              </a>
              <NuxtLink
                v-else
                :key="item.name"
                :to="item.link"
                class="header-menu-item"
                :class="{
                  'active-link':
                    (!item.external && item.link === `/${currentLocation}/`) ||
                    (item.link === '/' && currentLocation === 'index'),
                }"
                @click.native="closeMenu"
              >
                <v-text :weight="600" font="sans" color="primary">{{
                  item.name
                }}</v-text>
              </NuxtLink>
            </template>
          </v-stack>
          <a
            :href="headerCta.link"
            class="tablet-remove cta-button-container"
            target="_blank"
          >
            <v-button
              :label="headerCta.label"
              label-transform="uppercase"
              :show="show"
              class="cta-button"
            />
          </a>
        </nav>
        <nav class="laptop-remove mobile-nav-header">
          <a
            :href="headerCta.link"
            class="cta-button-container laptop-remove"
            target="_blank"
          >
            <v-button
              :label="headerCta.label"
              label-transform="uppercase"
              :show="show"
              class="cta-button"
            />
          </a>
          <v-image
            :path="`icons/${icon}.svg`"
            class="cursor-pointer laptop-remove menu-icon"
            :class="{ show }"
            @click="showClicked"
          />
        </nav>
      </v-stack>
    </v-container>
  </header>
</template>

<script>
export default {
  name: 'MainnetHeader',
  data() {
    return {
      icon: 'menu',
      show: false,
      headerCta: {
        label: 'Start Building',
        link: process.env.ARCANA_DASHBOARD_URL,
      },
      menuItems: [
        {
          name: 'Docs',
          link: process.env.ARCANA_DOCS_URL,
          external: true,
        },
        {
          name: 'Technology',
          link: '/tech/',
        },
        {
          name: 'About',
          link: '/about/',
        },
      ],
    }
  },
  computed: {
    currentLocation() {
      return this.$nuxt.$route.name
    },
  },
  methods: {
    showClicked(ev) {
      this.show = !this.show
      setTimeout(() => {
        this.icon = this.show ? 'close' : 'menu'
      }, 200)
    },
    closeMenu() {
      this.show = false
      setTimeout(() => {
        this.icon = 'menu'
      }, 200)
    },
    onCTAClick() {
      this.closeMenu()
      if (this.cta?.action?.call) {
        this.cta.action.call()
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
@import url('../components/lib/media-query-helper.css');

.logo {
  height: 30px;
  width: 160px;
}

header {
  padding: 1.5rem 0;
  z-index: 10000;
  position: relative;
}

.header-menu {
  display: flex;
  flex: 1;
  justify-content: space-between;
}

.header-menu-links {
  flex: 1;
  justify-content: center;
}

.header-menu-links * + * {
  margin-left: 4vw;
}

@media (--viewport-medium) {
  .header-menu-links > * + * {
    margin-left: 0;
    margin-top: 2rem;
  }
}

.header-menu-item {
  text-decoration: none;
  padding: 0.5rem;
  cursor: pointer;
  white-space: nowrap;
}

.header-menu-item:hover {
  opacity: 0.85;
}

.header-menu-item:active {
  transform: scale(0.98);
}

.active-link > span {
  color: var(--color-blue);
}

.cta-button-container {
  text-decoration: none;
}

.cta-button {
  height: 40px;
  width: 160px;
  padding: 0;
  font-size: 14px;
  @media (--viewport-medium) {
    height: 30px;
    width: 120px;
    font-size: 10px;
  }
}

.mobile-nav-header {
  display: flex;
  align-items: center;
}

@media (--viewport-medium) {
  .header-menu {
    position: absolute;
    max-height: 0;
    top: 100%;
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

  .header-menu.show {
    max-height: 100vh;
    padding: 1rem;
  }
  .menu-icon {
    transition: transform 0.4s;
    width: 1rem;
    margin-left: 2vw;
  }
  .menu-icon.show {
    transform: rotate(-180deg);
  }
}
</style>
