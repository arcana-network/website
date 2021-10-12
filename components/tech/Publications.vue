<template>
  <section>
    <v-container class="publication-container">
      <v-stack md-direction="column" justify="space-between" align="center">
        <v-image
          path="images/publications-illustration.svg"
          class="publication-illustration"
        />
        <v-stack
          direction="column"
          gap="2rem"
          align="start"
          class="publication-description-container"
        >
          <app-section-descriptor
            title="Arcana’s Blog"
            heading="Keep up to date with Arcana Network and our research."
            description="We frequently not only write about updates and partnerships at Arcana but deep dive into research, share insights through ‘Engineering at Arcana’ and ‘Design at Arcana’ series, and break down the future of Web 3."
            class="publication-description"
          />
          <v-button
            label="View Blog"
            label-transform="uppercase"
            class="technical-paper-btn"
            :action="openTechnicalPaper"
          />
        </v-stack>
      </v-stack>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'Publications',
  methods: {
    openTechnicalPaper() {
      window.open(
        'https://www.notion.so/Arcana-Technical-Docs-a1d7fd0d2970452586c693e4fee14d08',
        '_blank'
      )
    },
  },
}
</script>

<style scoped>
@import url('../lib/media-query-helper.css');

section {
  margin-top: 10rem;
  background: #080808
    linear-gradient(
      180deg,
      rgba(116, 75, 75, 0.07) 15.02%,
      rgba(255, 255, 255, 0.07) 47.35%,
      rgba(32, 32, 32, 0) 100%
    );
}

.publication-container {
  background: #080808;
  padding: 4rem 0;
}

.publication-description-container {
  width: 100%;
  max-width: 40rem;
}

.publication-illustration {
  width: 100%;
  max-width: 40rem;
}

.publication-description {
  max-width: 24rem;
}

.technical-paper-btn {
  padding: 1rem 2rem;
}
</style>
