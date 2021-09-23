<template>
  <footer>
    <v-container>
      <v-stack align="center" justify="space-around" :grow="1">
        <v-image src="/images/arcana-footer.svg" />
      </v-stack>
      <v-stack
        justify="space-between"
        md-direction="column"
        md-align="center"
        class="footer-navigation-container"
      >
        <v-stack direction="column">
          <a href="mailto:hello@arcana.network">
            <v-text font="sans" :weight="700" class="footer-mailing">
              hello@arcana.network
            </v-text>
          </a>
          <v-stack style="margin-top: 3rem" md-justify="space-evenly">
            <a href="https://twitter.com/arcananetwork" target="__blank">
              <v-image
                src="/images/twitter-white.svg"
                class="footer-social-link"
              />
            </a>
            <a
              style="margin-left: 3rem"
              href="https://t.me/ArcanaNetwork"
              target="__blank"
            >
              <v-image
                src="/images/telegram-white.svg"
                class="footer-social-link"
              />
            </a>
          </v-stack>
        </v-stack>
        <v-stack
          class="footer-links-container"
          justify="space-between"
          :grow="1"
        >
          <v-stack direction="column" class="footer-links">
            <a><v-text>Technology</v-text></a>
            <a><v-text>About</v-text></a>
            <a><v-text>Technical Paper</v-text></a>
            <a><v-text>Blog</v-text></a>
          </v-stack>
          <v-stack direction="column" class="footer-links">
            <a><v-text>Careers</v-text></a>
            <a><v-text>Privacy</v-text></a>
            <a><v-text>Terms of use</v-text></a>
          </v-stack>
        </v-stack>
      </v-stack>
    </v-container>
  </footer>
</template>

<script>
import VContainer from './lib/VContainer.vue'
import VImage from './lib/VImage.vue'
import VStack from './lib/VStack.vue'
import VText from './lib/VText.vue'
export default {
  components: { VContainer, VImage, VStack, VText },
}
</script>

<style lang="postcss" scoped>
@import url('./lib/media-query-helper.css');

.footer-logo {
  margin: 0 auto;
  width: 8rem;
  height: auto;

  @media (--viewport-medium) {
    width: 6rem;
  }
}

.footer-navigation-container {
  margin-top: 10rem;
}

.footer-links-container {
  @media (--viewport-large) {
    max-width: 50%;
  }

  @media (--viewport-medium) {
    width: 100%;
    margin-top: 3rem;
  }
}

.footer-links > * + * {
  margin-top: 5rem;
}

.footer-social-link {
  width: 3rem;
}

a {
  text-decoration: none;
}

.footer-links a * {
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.875rem;

  @media (--viewport-medium) {
    font-size: 1.125rem;
    line-height: 1.375rem;
  }
}

.footer-mailing {
  font-size: 1.75rem;
  line-height: 2.25rem;

  @media (--viewport-medium) {
    font-size: 1.125rem;
    line-height: 1.5rem;
  }
}
</style>
