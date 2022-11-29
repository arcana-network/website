<template>
  <VContainer>
    <VStack
      md-direction="column"
      md-align="center"
      justify="center"
      class="counter-container"
    >
      <div class="counter">
        <VText font="sans" :weight="600" class="counter-count">00+</VText>
        <VText color="secondary" class="counter-name">Partnerships</VText>
      </div>
      <div class="counter">
        <VText font="sans" :weight="600" class="counter-count">00+</VText>
        <VText color="secondary" class="counter-name">Hackathons Built</VText>
      </div>
      <div class="counter">
        <VText font="sans" :weight="600" class="counter-count">000+</VText>
        <VText color="secondary" class="counter-name">SDK Downloads</VText>
      </div>
    </VStack>
  </VContainer>
</template>

<style scoped lang="postcss">
@import url('../lib/media-query-helper.css');

.counter-container {
  margin-block: 6rem;
  gap: 6rem;

  @media (--viewport-medium) {
    gap: 3rem;
  }
}

.counter {
  display: grid;
  column-gap: 1rem;
  grid-template-columns: auto auto;

  @media (--viewport-medium) {
    max-width: 18rem;
    width: 100%;
    column-gap: 2rem;
    align-items: center;
    grid-template-columns: 6rem auto;
  }
}

.counter-count {
  font-size: 3rem;

  @media (--viewport-medium) {
    font-size: 2rem;
  }
}

.counter-name {
  font-size: 1.25rem;

  @media (--viewport-medium) {
    font-size: 1rem;
  }
}
</style>
