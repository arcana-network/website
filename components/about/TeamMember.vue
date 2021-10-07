<template>
  <v-stack
    direction="column"
    md-direction="column-reverse"
    align="center"
    md-align="start"
  >
    <div
      class="position-relative member-image-container"
      :class="{ expanded: isMemberExpanded }"
    >
      <div class="position-relative member-image">
        <v-image :path="`images/${member.image}.png`" />
      </div>
      <div class="position-relative" style="margin-top: -15%">
        <v-image path="images/team-member-ellipse.svg" />
      </div>
      <v-stack direction="column" gap="1rem" class="social-links">
        <a
          v-if="member.links.linkedin"
          href="https://google.com"
          target="__blank"
        >
          <v-image path="images/linkedin.svg" />
        </a>
        <a
          v-if="member.links.twitter"
          href="https://google.com"
          target="__blank"
        >
          <v-image path="images/twitter.svg" />
        </a>
        <a
          v-if="member.links.github"
          href="https://google.com"
          target="__blank"
        >
          <v-image path="images/github.svg" />
        </a>
      </v-stack>
    </div>
    <v-stack
      md-justify="space-between"
      md-align="start"
      class="member-description-container"
    >
      <v-stack direction="column" align="center" md-align="start">
        <v-text :weight="600" line-height="1.5rem" size="1.25rem">
          {{ member.name }}
        </v-text>
        <v-text
          color="secondary"
          size="1.125rem"
          transform="uppercase"
          style="margin-top: 1rem"
        >
          {{ member.designation }}
        </v-text>
      </v-stack>
      <v-image
        path="icons/arrow-down.svg"
        class="member-expansion-icon"
        :class="{ expanded: isMemberExpanded }"
        @click.stop="toggleExpansionPanel"
      />
    </v-stack>
  </v-stack>
</template>

<script>
export default {
  name: 'TeamMember',
  props: {
    member: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      isMemberExpanded: false,
    }
  },
  methods: {
    toggleExpansionPanel() {
      this.isMemberExpanded = !this.isMemberExpanded
    },
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

.member-image-container {
  @media (--viewport-medium) {
    max-height: 0;
    opacity: 0;
    margin-top: 0;
    overflow: hidden;
    transition: max-height 0.1s, opacity 0.6s, margin-top 0.2s;
  }
}

.member-image-container.expanded {
  max-height: 100%;
  opacity: 1;
  margin-top: 2rem;
}

.member-image {
  text-align: center;
  z-index: 10;
}

.social-links {
  position: absolute;
  top: 10%;
  right: 10%;
  z-index: 20;
  cursor: pointer;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.4s;

  @media (--viewport-medium) {
    visibility: visible;
    opacity: 1;
  }
}

.member-image-container:hover .social-links {
  visibility: visible;
  opacity: 1;
}

.member-expansion-icon {
  transform: rotate(0);
  cursor: pointer;
  transition: transform 0.4s;
}

.member-expansion-icon.expanded {
  transform: rotate(-180deg);
}

@media (--viewport-medium) {
  .member-description-container {
    width: 100%;
    max-width: 24rem;
  }
}
</style>