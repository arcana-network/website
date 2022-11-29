<template>
  <section>
    <VContainer>
      <VStack direction="column">
        <AppSectionDescriptor
          title="Community"
          heading="Join Arcana's Ecosystem and Feature your Project"
        />
      </VStack>
      <VStack
        md-direction="column-reverse"
        justify="space-between"
        align="center"
        md-align="start"
        class="join-community-container"
      >
        <div class="illustration-container">
          <VImage
            path="images/join-ecosystem-illustration.png"
            class="illustration join-ecosystem-illustration"
          />
        </div>
        <VStack direction="column" align="start" style="max-width: 34rem">
          <AppSectionDescriptor
            heading="Join the Ecosystem"
            description="Want to build with Arcana? Checkout our docs to get started or participate in one of our initiatives with ecosystem partners. Reach out to us if need guidance at any stage."
          />
          <a
            href="https://dashboard.beta.arcana.network"
            target="_blank"
            style="margin-top: 2.5rem"
          >
            <VButton label="Get Started" label-transform="uppercase" />
          </a>
        </VStack>
      </VStack>
      <VStack
        md-direction="column"
        justify="space-between"
        align="center"
        md-align="start"
        class="share-project-container"
      >
        <VStack direction="column" align="start" style="max-width: 34rem">
          <AppSectionDescriptor
            heading="Share your Project"
            description="Are you building on Arcana and want to feature your project on our ecosystem page? Submit your app below."
          />
          <a
            href="https://forms.gle/CVhPMQFvjkkvV3UL6"
            target="_blank"
            style="margin-top: 2.5rem"
          >
            <VButton label="Submit" label-transform="uppercase" />
          </a>
        </VStack>
        <div class="illustration-container">
          <VImage
            path="images/share-project-illustration.png"
            class="illustration share-project-illustration"
          />
        </div>
      </VStack>
    </VContainer>
  </section>
</template>

<script>
export default {
  name: 'JoinCommunity',
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

section {
  margin-top: 8rem !important;
  margin-bottom: 2rem;

  @media (--viewport-medium) {
    margin-top: 6rem !important;
  }
}

.join-community-container {
  margin-top: 8rem;

  @media (--viewport-medium) {
    margin-top: 2rem;
  }
}

.share-project-container {
  margin-top: 4rem;

  @media (--viewport-medium) {
    margin-top: 2rem;
  }
}

.illustration-container {
  @media (--viewport-medium) {
    width: 100%;
    text-align: center;
  }
}

.illustration {
  margin-inline: 2rem;

  @media (--viewport-medium) {
    width: 100%;
    margin-inline: 0;
    max-width: 320px;
    margin-top: 2.5rem;
  }
}

.join-ecosystem-illustration {
  @media (--viewport-medium) {
    width: 80%;
  }
}
</style>
