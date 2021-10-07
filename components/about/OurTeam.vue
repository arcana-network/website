<template>
  <section style="margin-bottom: 10rem">
    <v-container>
      <v-stack justify="space-between">
        <app-section-descriptor
          title="Our team"
          heading="The builders behind Arcana"
        />
      </v-stack>
      <v-stack
        justify="space-between"
        md-direction="column"
        class="member-container"
      >
        <div
          v-for="member in executiveMembers"
          :key="member.name + member.designation"
        >
          <about-team-member :member="member" />
        </div>
      </v-stack>
      <v-stack
        justify="space-between"
        md-direction="column"
        class="member-container other-members"
        :class="{ expanded: isTeamExpanded }"
        wrap
      >
        <div v-for="member in members" :key="member.name + member.designation">
          <about-team-member :member="member" />
        </div>
      </v-stack>
      <v-stack
        v-if="!isTeamExpanded"
        align="center"
        justify="center"
        class="mobile-remove tablet-remove"
      >
        <v-button
          type="link"
          label="View all"
          label-transform="uppercase"
          :action="expandTeam"
        />
      </v-stack>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'OurTeam',
  data() {
    return {
      executiveMembers: [
        {
          name: 'Mayur Relekar',
          designation: 'CEO',
          image: 'about-placeholder',
          links: {
            linkedin: '1',
            twitter: '1',
          },
        },
        {
          name: 'Aravindh Kumar',
          designation: 'Growth',
          image: 'about-placeholder',
          links: {
            linkedin: '1',
          },
        },
        {
          name: 'Ajay Shetty',
          designation: 'COO',
          image: 'about-placeholder',
          links: {
            twitter: '1',
            github: '1',
          },
        },
      ],
      members: [
        {
          name: 'Mayur Relekar',
          designation: 'CEO',
          image: 'about-placeholder',
          links: {
            linkedin: '1',
            twitter: '1',
          },
        },
        {
          name: 'Aravindh Kumar',
          designation: 'Growth',
          image: 'about-placeholder',
          links: {
            linkedin: '1',
          },
        },
        {
          name: 'Ajay Shetty',
          designation: 'COO',
          image: 'about-placeholder',
          links: {
            twitter: '1',
          },
        },
        {
          name: 'Mayur Relekar',
          designation: 'CEO',
          image: 'about-placeholder',
          links: {
            linkedin: '1',
            twitter: '1',
          },
        },
        {
          name: 'Aravindh Kumar',
          designation: 'Growth',
          image: 'about-placeholder',
          links: {
            linkedin: '1',
          },
        },
        {
          name: 'Ajay Shetty',
          designation: 'COO',
          image: 'about-placeholder',
          links: {
            twitter: '1',
          },
        },
        {
          name: 'Mayur Relekar',
          designation: 'CEO',
          image: 'about-placeholder',
          links: {
            linkedin: '1',
            twitter: '1',
          },
        },
        {
          name: 'Aravindh Kumar',
          designation: 'Growth',
          image: 'about-placeholder',
          links: {
            linkedin: '1',
          },
        },
        {
          name: 'Ajay Shetty',
          designation: 'COO',
          image: 'about-placeholder',
          links: {
            twitter: '1',
          },
        },
      ],
      isTeamExpanded: false,
    }
  },
  methods: {
    expandTeam() {
      this.isTeamExpanded = true
    },
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

.member-container {
  margin: 1rem 0;
}

.member-container > * {
  margin: 1rem 0;
  flex: 1 0 33%;
}

.other-members {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.4s, opacity 0.8s;

  @media (--viewport-medium) {
    max-height: 100%;
    opacity: 1;
  }
}

.expanded {
  opacity: 1;
  max-height: 100%;
}

@media (--viewport-medium) {
  .member-container > * + * {
    margin-top: 1rem;
  }
}
</style>
