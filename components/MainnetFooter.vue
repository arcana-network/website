<template>
  <footer>
    <v-stack class="footer-social-link-container">
      <a href="https://twitter.com/arcananetwork" target="_blank">
        <v-image
          path="images/twitter-white.svg"
          class="footer-social-link"
          alt="Arcana twitter page"
        />
      </a>
      <a href="https://t.me/ArcanaNetwork" target="_blank">
        <v-image
          path="images/telegram-white.svg"
          class="footer-social-link"
          alt="Arcana telegram channel"
        />
      </a>
      <a :href="ARCANA_DISCORD_URL" target="_blank">
        <v-image
          path="images/discord-white.svg"
          class="footer-social-link"
          alt="Arcana discord channel"
        />
      </a>
      <a href="https://forum.arcana.network" target="_blank">
        <v-image
          path="images/discourse-white.svg"
          class="footer-social-link"
          alt="Arcana discourse channel"
        />
      </a>
      <a href="https://www.youtube.com/c/ArcanaNetwork" target="_blank">
        <v-image
          path="images/youtube-white.svg"
          class="footer-social-link"
          alt="Arcana Youtube channel"
        />
      </a>
    </v-stack>
  </footer>
</template>

<script>
const ARCANA_DISCORD_URL = process.env.ARCANA_DISCORD_URL

export default {
  name: 'AppFooter',
  data() {
    return {
      ARCANA_DISCORD_URL,
    }
  },
}
</script>

<style lang="postcss" scoped>
@import url('./lib/media-query-helper.css');

footer {
  background-size: cover;
  overflow-x: hidden;
  padding-bottom: 40px;
}

.footer-social-link-container {
  justify-content: center;
  align-items: baseline;
}

.footer-social-link-container * + * {
  margin-left: 35px;
}

.footer-social-link {
  width: 3rem;
  height: 25px !important;
}
</style>
