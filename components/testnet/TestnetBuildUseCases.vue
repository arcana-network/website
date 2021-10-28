<template>
  <v-stack class="build-usecases" direction="column" gap="6rem">
    <v-stack
      direction="column"
      sm-direction="column"
      gap="3.125rem"
      sm-gap="3.75rem"
    >
      <v-stack
        v-for="useCase in useCasesList"
        :key="useCase.key"
        direction="row"
        sm-direction="column"
        gap="1.875rem"
        sm-gap="1.5rem"
        justify="space-between"
      >
        <v-heading class="build-usecases-heading" :level="3" line-height="1.2">
          {{ useCase.heading }}
        </v-heading>
        <v-text
          class="build-usecases-description"
          color="secondary"
          line-height="1.5"
          :weight="400"
        >
          {{ useCase.description }}
        </v-text>
      </v-stack>
    </v-stack>

    <v-card class="build-callout">
      <v-stack
        align="center"
        direction="column"
        sm-direction="column"
        gap="1.25rem"
        sm-gap="2.5rem"
      >
        <div>
          <v-text
            class="build-callout-text"
            font="serif"
            line-height="1.5"
            :weight="600"
          >
            Have an idea? Sign up and try out our SDK.
          </v-text>
          <v-text
            class="build-callout-text"
            font="serif"
            line-height="1.5"
            :weight="600"
          >
            Join our Discord community if you are stuck along the way or want to
            share any feedback.
          </v-text>
        </div>
        <v-stack
          direction="row"
          sm-direction="row"
          gap="1.875rem"
          sm-gap="1rem"
        >
          <v-button
            label="Sign Up"
            type="button"
            variant="primary"
            label-size="1.125"
            :label-weight="600"
            label-transform="uppercase"
          />
          <v-button
            label="Join Discord"
            type="button"
            variant="outline"
            label-size="1.125"
            :label-weight="600"
            label-transform="uppercase"
          />
        </v-stack>
      </v-stack>
    </v-card>
  </v-stack>
</template>

<script>
export default {
  name: 'TestnetBuildUseCases',
  data() {
    return {
      useCasesList: [
        {
          key: 'gaming',
          heading: 'Gaming',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
        },
        {
          key: 'nfts',
          heading: 'NFTs',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
        },
        {
          key: 'file-sharing',
          heading: 'File Sharing',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
        },
        {
          name: 'identity',
          heading: 'Identity',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
        },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

.build-usecases {
  margin-top: 1.875rem;
}

.build-usecases-heading {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2.25rem;
  font-weight: 700;
  min-width: 12rem;
  letter-spacing: normal;

  @media (--viewport-small) {
    font-size: 1.25rem;
    font-size: 600;
  }
}

.build-usecases-description {
  font-size: 1.375rem;
  max-width: 42ch;

  @media (--viewport-small) {
    font-size: 1rem;
  }
}

.build-callout {
  @media (--viewport-small) {
    padding: 2rem 0;
    border-radius: 0;
    width: 100vw;
    margin-left: -5%;
  }
}

.build-callout-text {
  display: block;
  text-align: center;
  font-size: 1.875rem;
  max-width: 40ch;

  @media (--viewport-small) {
    font-size: 1.25rem;
    max-width: 35ch;
  }
}

.build-callout-text:not(:first-child) {
  margin-top: 1.875rem;
}
</style>
