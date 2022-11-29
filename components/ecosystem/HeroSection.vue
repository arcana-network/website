<template>
  <section>
    <VContainer>
      <VStack justify="space-between" md-direction="column-reverse">
        <VStack direction="column" style="max-width: 38rem">
          <VHeading :level="1">Our Ecosystem</VHeading>
          <AppSectionDescriptor
            description="Join Arcana's Vibrant ecosystem of Customers, Partners, and Developers."
          />
        </VStack>
        <div class="illustration-container">
          <VImage class="ecosystem-illustration" path="images/ecosystem.png" />
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
}

.illustration-container {
  position: relative;
  text-align: right;
  margin-top: -4rem;
  overflow: visible;

  @media (--viewport-medium) {
    text-align: center;
    margin-top: 0;
  }
}

/* .illustration-container::before {
  content: '';
  position: absolute;
  inset: -20%;
  z-index: -1;
  background: radial-gradient(
    50% 40% at 50% 40%,
    rgba(248, 81, 142, 0.2) 0%,
    rgba(0, 0, 0, 0) 100%
  );
} */

.ecosystem-illustration {
  width: min(100%, 32rem);
  align-self: center;

  @media (--viewport-medium) {
    width: min(100%, 20rem);
    margin: 2rem auto;
  }
}
</style>
