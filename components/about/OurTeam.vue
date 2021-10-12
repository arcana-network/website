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
      <v-stack v-if="!isTeamExpanded" align="center" justify="center">
        <v-button
          type="link"
          label="View more"
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
            linkedin: 'https://www.linkedin.com/in/mayurrelekar/',
            twitter: 'https://twitter.com/mayurrelekar',
          },
        },
        {
          name: 'Aravindh Kumar',
          designation: 'Growth',
          image: 'about-placeholder',
          links: {
            linkedin: 'https://www.linkedin.com/in/aravindhkumar61',
            twitter: 'https://twitter.com/Aravindh_Kumarr',
          },
        },
        {
          name: 'Ajay Shetty',
          designation: 'COO',
          image: 'about-placeholder',
          links: {
            linkedin: 'https://www.linkedin.com/in/ajayshetty88/',
            twitter: 'https://twitter.com/AjayShe59753410',
          },
        },
      ],
      members: [
        {
          name: 'Ajith',
          designation: 'Front End Developer',
          image: 'about-placeholder',
          links: {
            linkedin: 'https://www.linkedin.com/in/ajithranka/',
            twitter: 'https://twitter.com/ajithranka',
            github: 'https://github.com/ajithranka',
          },
        },
        {
          name: 'Lakshmikanth',
          designation: 'DevOps',
          image: 'about-placeholder',
          links: {
            linkedin: 'linkedin.com/in/lakshmikanth-bharathi-2a4754b8',
            twitter: 'https://twitter.com/LakshmikanthBh8',
            github: 'https://github.com/lakshmikanth-tesla',
          },
        },
        {
          name: 'Abhishek',
          designation: 'Backend Developer',
          image: 'about-placeholder',
          links: {
            linkedin: 'https://in.linkedin.com/in/makyl',
            github: 'https://github.com/makylfang',
          },
        },
        {
          name: 'Saurav',
          designation: 'Blockchain Developer',
          image: 'about-placeholder',
          links: {
            linkedin: 'https://www.linkedin.com/in/sauravkanchan/',
            twitter: 'https://twitter.com/sauravnk30',
            github: 'https://github.com/SauravKanchan',
          },
        },
        {
          name: 'Jobin',
          designation: 'Blockchain Developer Evangelist',
          image: 'about-placeholder',
          links: {
            linkedin: 'https://www.linkedin.com/in/the-injineer/',
            twitter: 'https://twitter.com/the_injineer',
            github: 'https://github.com/the-injineer',
          },
        },
        {
          name: 'Himank',
          designation: 'Blockchain Developer',
          image: 'about-placeholder',
          links: {
            linkedin: 'https://linkedin.com/in/himankjain',
            github: 'https://github.com/steel-feel',
          },
        },
        {
          name: 'Narendran',
          designation: 'Pricinpal Engineer',
          image: 'about-placeholder',
          links: {},
        },
        {
          name: 'Naga Pramod',
          designation: 'Content Strategist',
          image: 'about-placeholder',
          links: {
            linkedin: 'https://www.linkedin.com/in/naga-pramod/',
            twitter: 'https://twitter.com/dnagapramod',
          },
        },
        {
          name: 'Rohith',
          designation: 'Intern',
          image: 'about-placeholder',
          links: {
            linkedin: 'https://www.linkedin.com/in/rohith-narahari-40211818b/',
            twitter: 'https://twitter.com/mr_deadpool_93',
            github: 'https://github.com/naraharirohith',
          },
        },
        {
          name: 'Sharan',
          designation: 'Head of Design',
          image: 'about-placeholder',
          links: {},
        },
        {
          name: 'Arush',
          designation: 'UI/UX Designer',
          image: 'about-placeholder',
          links: {
            linkedin: 'https://www.linkedin.com/in/arush-pandya-33263b200/',
          },
        },
        {
          name: 'Shrinath',
          designation: 'Front End Developer',
          image: 'about-placeholder',
          links: {
            linkedin: 'https://www.linkedin.com/in/shrinath-prabhu-459107b2/',
            github: 'https://github.com/shrinathprabhu',
          },
        },
        {
          name: 'Anirudh',
          designation: 'Product Manager',
          image: 'about-placeholder',
          links: {
            linkedin: 'https://www.linkedin.com/in/anirudh-venu-174121120/',
            twitter: 'https://twitter.com/anirvenu',
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

  /* @media (--viewport-medium) {
    max-height: 100%;
    opacity: 1;
  } */
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
