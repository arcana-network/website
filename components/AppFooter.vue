<template>
  <footer>
    <v-container>
      <v-stack
        align="center"
        justify="space-around"
        :grow="1"
        class="footer-logo-container"
      >
        <v-image path="images/arcana-footer.svg" />
        <v-image path="images/footer-orbs.svg" class="position-absolute" />
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
                path="images/twitter-white.svg"
                class="footer-social-link"
                alt="Arcana twitter page"
              />
            </a>
            <a
              style="margin-left: 3rem"
              href="https://t.me/ArcanaNetwork"
              target="__blank"
            >
              <v-image
                path="images/telegram-white.svg"
                class="footer-social-link"
                alt="Arcana telegram channel"
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
            <a href="/tech/"><v-text>Technology</v-text></a>
            <a href="/about/"><v-text>About</v-text></a>
            <a
              href="https://www.notion.so/Arcana-Technical-Docs-a1d7fd0d2970452586c693e4fee14d08"
              target="__blank"
            >
              <v-text>Technical Paper</v-text>
            </a>
            <a href="/blog"><v-text>Blog</v-text></a>
          </v-stack>
          <v-stack direction="column" class="footer-links">
            <a
              href="https://angel.co/company/arcana-network/jobs"
              target="__blank"
            >
              <v-text>Careers</v-text>
            </a>
            <a href="/privacy"><v-text>Privacy</v-text></a>
            <a href="/terms"><v-text>Terms of use</v-text></a>
          </v-stack>
        </v-stack>
      </v-stack>
    </v-container>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style lang="postcss" scoped>
@import url('./lib/media-query-helper.css');

footer {
  background: url('~assets/images/footer_bg.svg') no-repeat;
  background-size: cover;

  @media (--viewport-small) {
    background: url('~assets/images/footer_bg_mobile.svg') no-repeat;
    background-size: 100%;
  }
}

.footer-logo-container {
  padding: 16rem 0;
  position: relative;

  @media (--viewport-small) {
    padding: 8rem 0;
  }
}

.footer-logo {
  margin: 0 auto;
  width: 8rem;
  height: auto;

  @media (--viewport-medium) {
    width: 6rem;
  }
}

.footer-navigation-container {
  padding: 6rem 0;

  @media (--viewport-small) {
    padding: 3rem 0;
  }
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
  margin-top: 3rem;
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

@media (--viewport-small) {
  .footer-logo-container > *:first-child {
    width: 40%;
  }

  .footer-logo-container > *:last-child {
    width: 150%;
  }
}
</style>
