<template>
  <section
    id="ecosystem-partners-section"
    :style="{ 'scroll-margin': sectionMargin }"
  >
    <VContainer>
      <VStack :id="$route.hash.replace('#', '')" direction="column">
        <AppSectionDescriptor title="Partners" />
        <VSelectBox
          class="partner-select-box"
          :options="partnerTypes"
          :value="selectedPartnerType"
          @change="updatePartnerType"
        />
        <div class="partners-container">
          <Partner
            v-for="partner in partners"
            :key="partner.name"
            :name="partner.name"
            :description="partner.description"
            :website="partner.website"
            :github="partner.github"
            :announcement="partner.announcement"
            :tags="partner.tags"
            :image="partner.image"
          />
        </div>
        <VStack v-if="partnersLength > 8" justify="center">
          <VButton
            type="link"
            :label="expandButtonLabel"
            :action="toggleIsExpanded"
          />
        </VStack>
      </VStack>
    </VContainer>
  </section>
</template>

<script>
import Partner from '~/components/ecosystem/Partner.vue'
import ecosystemPartners from '~/utils/ecosystem'

export default {
  name: 'OurPartners',
  components: {
    Partner,
  },
  data() {
    return {
      partnerTypes: ['Customers', 'Ecosystem Partners', 'Hackathons'],
      selectedPartnerType: 'Customers',
      ecosystemPartners,
      isExpanded: false,
      sectionMargin: '4rem',
    }
  },
  computed: {
    partners() {
      if (this.selectedPartnerType === 'Ecosystem Partners') {
        if (!this.isExpanded) {
          return ecosystemPartners.partners.slice(0, 8)
        }
        return ecosystemPartners.partners
      }
      if (!this.isExpanded) {
        return ecosystemPartners[this.selectedPartnerType.toLowerCase()].slice(
          0,
          8
        )
      }
      return ecosystemPartners[this.selectedPartnerType.toLowerCase()]
    },
    partnersLength() {
      if (this.selectedPartnerType === 'Ecosystem Partners') {
        return ecosystemPartners.partners.length
      }
      return ecosystemPartners[this.selectedPartnerType.toLowerCase()].length
    },
    expandButtonLabel() {
      return this.isExpanded ? 'VIEW LESS' : 'VIEW MORE'
    },
  },
  watch: {
    '$route.hash'() {
      this.setPartnerType(this.$route.hash)
      this.isExpanded = false
    },
  },
  mounted() {
    if (this.$route.hash) {
      this.setPartnerType(this.$route.hash)
      this.isExpanded = false
      this.sectionMargin = `${
        document.querySelector('.app-header').getBoundingClientRect().height
      }px`
      document
        .getElementById('ecosystem-partners-section')
        .scrollIntoView({ behavior: 'smooth' })
    }
  },
  methods: {
    setPartnerType(hash) {
      if (hash === '#customers') {
        this.selectedPartnerType = 'Customers'
      } else if (hash === '#ecosystem-partners') {
        this.selectedPartnerType = 'Ecosystem Partners'
      } else if (hash === '#hackathons') {
        this.selectedPartnerType = 'Hackathons'
      }
    },
    getRouteHash(partnerType) {
      if (partnerType === 'Customers') {
        return '#customers'
      } else if (partnerType === 'Ecosystem Partners') {
        return '#ecosystem-partners'
      } else if (partnerType === 'Hackathons') {
        return '#hackathons'
      }
    },
    updatePartnerType(e) {
      this.$router.push(this.getRouteHash(e))
      this.selectedPartnerType = e
    },
    toggleIsExpanded() {
      this.isExpanded = !this.isExpanded
    },
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

#ecosystem-partners-section {
  scroll-margin: 150px;
}

.partners-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 6rem;
  margin-block: 6rem;

  @media (--viewport-medium) {
    grid-template-columns: 1fr;
    row-gap: 2rem;
    margin-top: 4rem;
    margin-bottom: 2rem;
  }
}

.partner-select-box {
  margin-top: 1.25rem;
}
</style>
