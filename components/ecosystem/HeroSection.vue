<template>
  <section>
    <VContainer>
      <VStack justify="space-between" md-direction="column-reverse">
        <VStack direction="column" class="hero-description">
          <VHeading :level="1">Our Ecosystem</VHeading>
          <AppSectionDescriptor
            description="Join Arcana's Vibrant ecosystem of Customers, Partners, and Developers."
          />
        </VStack>
        <div class="illustration-container">
          <VImage
            class="ecosystem-illustration laptop-remove"
            path="images/ecosystem-illustration-mobile.png"
          />
        </div>
      </VStack>
    </VContainer>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

section {
  @media (--viewport-small) {
    margin-top: 0 !important;
  }

  @media (--viewport-gt-medium) {
    margin-top: 0 !important;
    height: 64vh;
    max-height: 44rem;
    background: url('~assets/images/ecosystem-illustration.png') no-repeat;
    background-size: contain;
    background-position: right;
  }
}

.hero-description {
  max-width: 38rem;
  margin-block: 6rem;

  @media (--viewport-medium) {
    margin-block: 2rem;
  }
}

.illustration-container {
  @media (--viewport-medium) {
    margin-inline: -20%;
    position: relative;
    text-align: center;
    margin-top: 0;
  }
}

.ecosystem-illustration {
  width: min(100%, 32rem);
  align-self: center;

  @media (--viewport-medium) {
    width: min(100%, 30rem);
  }
}
</style>
