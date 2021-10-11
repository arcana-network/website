<template>
  <section>
    <v-container>
      <app-section-descriptor
        title="Our culture"
        heading="At Arcana, Our Mission Is To Bring Ownership, Privacy and Security to User Data"
        style="max-width: 60rem"
      />
      <v-stack justify="space-between" wrap>
        <div
          v-for="culturePoint in culturePoints"
          :key="culturePoint.title"
          class="our-culture-points"
        >
          <v-blurb
            :image="culturePoint.icon"
            :alt="culturePoint.title"
            :title="culturePoint.title"
            :description="culturePoint.description"
          />
        </div>
      </v-stack>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'OurCulture',
  data() {
    return {
      culturePoints: [
        {
          icon: 'images/privacy.svg',
          title: 'Value Privacy',
          description:
            'Privacy is not a feature we build, it is a fundamental right.',
        },
        {
          icon: 'images/detail-oriented.svg',
          title: 'Be Detail-Oriented',
          description: 'Dot all the I’s and cross all your T’s.',
        },
        {
          icon: 'images/ownership.svg',
          title: 'Take Ownership',
          description:
            'See anything amiss, bring it to everyone’s notice. Or better yet, fix it!',
        },
        {
          icon: 'images/informed-decision.svg',
          title: 'Make Informed Decisions',
          description:
            'Ask questions, many many questions, no matter how silly you think they are.',
        },
        {
          icon: 'images/first-principle.svg',
          title: 'Learn From First Principles',
          description: 'Always ask why before what, how...',
        },
        {
          icon: 'images/life-work.svg',
          title: 'Life > Work',
          description:
            '“Me” time, time off for no specific reason... Yes, please.',
        },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

.our-culture-points {
  width: 30%;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

  @media (--viewport-medium) {
    width: 50%;
  }
}

.our-culture-points > * {
  margin: 0 auto;
  max-width: 12rem;
}

.our-culture-points > .blurb-description {
  font-size: 1.125rem !important;
  line-height: 1.375rem;

  @media (--viewport-medium) {
    font-size: 1rem;
    line-height: 1.125rem;
  }
}
</style>
