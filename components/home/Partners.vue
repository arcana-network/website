<template>
  <section>
    <VContainer>
      <AppSectionDescriptor title="Partners" />
      <VStack justify="space-between" gap="2rem">
        <AppSectionDescriptor
          heading="Customers"
          description="Leading Partners across Gaming, DeFi, NFTs, and Social trust Arcana's products to create non-custodial wallets for seamless Web3 Auth, Data Store, and Access Management."
        />
        <VButton
          class="tablet-remove mobile-remove view-all-button"
          type="link"
          label="VIEW ALL"
          :action="() => $router.push('ecosystem#customers')"
        />
      </VStack>
      <div class="partner-container">
        <VStack
          v-for="customer in customers"
          :key="customer.name"
          direction="column"
          align="center"
          gap="1.25rem"
          class="partner-card"
        >
          <VImage :path="customer.image" class="partner-image" />
          <VText font="sans" :weight="600" class="partner-name">
            {{ customer.name }}
          </VText>
        </VStack>
      </div>
      <VStack justify="center" class="laptop-remove" style="margin-top: 3rem">
        <VButton
          type="link"
          label="VIEW ALL"
          :action="() => $router.push('ecosystem#customers')"
        />
      </VStack>
      <VStack justify="space-between" gap="2rem" class="ecosystem-partners">
        <AppSectionDescriptor
          heading="Ecosystem Partners"
          description="Arcana with its deep ecosystem partnerships with leading protocols and communities in Web3, runs developer initiatives for access to tools, grants, hackathons, and mentorship."
        />
        <VButton
          class="tablet-remove mobile-remove view-all-button"
          type="link"
          label="VIEW ALL"
          :action="() => $router.push('ecosystem#ecosystem-partners')"
        />
      </VStack>
      <div class="partner-container">
        <VStack
          v-for="partner in partners"
          :key="partner.name"
          direction="column"
          align="center"
          gap="1.25rem"
          class="partner-card"
        >
          <VImage :path="partner.image" class="partner-image" />
          <VText font="sans" :weight="600" class="partner-name">
            {{ partner.name }}
          </VText>
        </VStack>
      </div>
      <VStack justify="center" class="laptop-remove" style="margin-top: 3rem">
        <VButton
          type="link"
          label="VIEW ALL"
          :action="() => $router.push('ecosystem#ecosystem-partners')"
        />
      </VStack>
    </VContainer>
  </section>
</template>

<script>
import ecosystemPartners from '~/utils/ecosystem'

export default {
  name: 'Partners',
  computed: {
    partners() {
      return ecosystemPartners.partners.slice(0, 8)
    },
    customers() {
      return ecosystemPartners.customers.slice(0, 8)
    },
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

.view-all-button {
  margin-top: 2rem;
}

.ecosystem-partners {
  margin-top: 6rem;

  @media (--viewport-medium) {
    margin-top: 3rem;
  }
}

.partner-container {
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  row-gap: 6rem;

  @media (--viewport-medium) {
    grid-template-columns: 1fr 1fr;
    row-gap: 3rem;
  }
}

.partner-image {
  @media (--viewport-medium) {
    max-width: 6rem;
  }
}

.partner-name {
  font-size: 1.5rem;

  @media (--viewport-medium) {
    font-size: 1.25rem;
  }
}
</style>
