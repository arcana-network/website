<template>
  <VStack
    md-direction="column"
    justify="center"
    md-align="center"
    class="partner-card"
  >
    <div class="partner-image">
      <VImage :path="image" />
    </div>
    <VStack
      direction="column"
      align="start"
      md-align="center"
      class="partner-details"
      :class="{ 'align-self-center': !description }"
    >
      <VText font="sans" :weight="600" class="partner-name">{{ name }}</VText>
      <VStack class="partner-links">
        <a
          v-if="website"
          :href="website"
          target="_blank"
          class="partner-link-chip"
        >
          <VText font="sans" :weight="600">Website</VText>
        </a>
        <a
          v-if="github"
          :href="github"
          target="_blank"
          class="partner-link-chip"
        >
          <VText font="sans" :weight="600">Github</VText>
        </a>
        <a
          v-if="announcement"
          :href="announcement"
          target="_blank"
          class="partner-link-chip"
        >
          <VText font="sans" :weight="600">Announcement</VText>
        </a>
      </VStack>
      <VText v-if="description" color="secondary" class="partner-description">{{
        description
      }}</VText>
      <VStack class="partner-tags">
        <VText v-for="tag in tags" :key="name + tag" class="partner-tag">{{
          tag
        }}</VText>
      </VStack>
    </VStack>
  </VStack>
</template>

<script>
export default {
  name: 'Partner',
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    website: {
      type: String,
      default: '',
    },
    github: {
      type: String,
      default: '',
    },
    announcement: {
      type: String,
      default: '',
    },
    tags: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped lang="postcss">
@import url('../lib/media-query-helper.css');

.partner-card {
  gap: 1.5rem;

  @media (--viewport-medium) {
    border-bottom: 1px solid #353535;
    padding-bottom: 2rem;
  }
}

.partner-details {
  gap: 1rem;
  width: 100%;
  max-width: 20rem;
}

.partner-links,
.partner-tags {
  gap: 0.75rem;
}

.partner-links {
  @media (--viewport-medium) {
    width: 100%;
    justify-content: center;
  }
}

.partner-link-chip {
  padding: 6px 11px;
  background: radial-gradient(
    134.5% 939.99% at -23.59% -12.9%,
    #262626 0%,
    #3a3a3a60 31.41%,
    rgba(32, 32, 32, 0.76) 100%
  );
  box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  cursor: pointer;
}

.partner-tag {
  padding: 10px 13px;
  background: linear-gradient(141.48deg, #171717 -4.56%, #151515 135.63%);
  box-shadow: inset -2px -2px 4px rgba(57, 57, 57, 0.44),
    inset 5px 5px 10px rgba(11, 11, 11, 0.5);
  border-radius: 10px;
  font-size: 0.875rem;
}

.partner-description {
  max-width: 20rem;
  font-size: 0.875rem;

  @media (--viewport-medium) {
    text-align: center;
  }
}

.partner-name {
  font-size: 1.5rem;

  @media (--viewport-medium) {
    align-self: center;
    font-size: 1.25rem;
  }
}

.partner-image > * {
  @media (--viewport-medium) {
    max-width: 6rem;
  }
}
</style>
