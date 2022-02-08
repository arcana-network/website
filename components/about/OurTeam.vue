<template>
  <section style="margin-bottom: 10rem">
    <v-container>
      <v-stack justify="space-between">
        <app-section-descriptor
          title="Our team"
          heading="The Builders Behind Arcana"
        />
      </v-stack>
      <v-stack
        justify="space-between"
        md-direction="column"
        class="member-container"
        wrap
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
          designation: 'Co-Founder and CEO',
          image: 'Mayur',
          links: {
            linkedin: 'https://www.linkedin.com/in/mayurrelekar/',
            twitter: 'https://twitter.com/mayurrelekar',
          },
        },
        {
          name: 'Aravindh Kumar',
          designation: 'Co-Founder, Growth and Partnerships',
          image: 'Aravindh',
          links: {
            linkedin: 'https://www.linkedin.com/in/aravindhkumar61',
            twitter: 'https://twitter.com/Aravindh_Kumarr',
          },
        },
        {
          name: 'Ajay Shetty',
          designation: 'COO',
          image: 'Ajay',
          links: {
            linkedin: 'https://www.linkedin.com/in/ajayshetty88/',
            twitter: 'https://twitter.com/AjayShe59753410',
          },
        },
        {
          name: 'Sharan Grandigae',
          designation: 'CDO',
          image: 'Sharan',
          links: {
            linkedin: 'https://www.linkedin.com/in/sharangrandigae',
            twitter: 'https://twitter.com/sharangrandigae',
          },
        },
        {
          name: 'Narendran',
          designation: 'Principal Engineer',
          image: 'Naren',
          links: {
            linkedin: 'https://www.linkedin.com/in/dudewhocode/',
            twitter: 'https://twitter.com/DudeWhoCode',
            github: 'https://github.com/dudewhocode',
          },
        },
        {
          name: 'Abhishek',
          designation: 'Backend Developer',
          image: 'Abhishek',
          links: {
            linkedin: 'https://in.linkedin.com/in/makyl',
            github: 'https://github.com/makylfang',
          },
        },
      ],
      members: [
        {
          name: 'Prof. Bill Buchanan, O. B. E.',
          designation: 'Crypto Researcher',
          image: 'Bill',
          links: {
            linkedin: 'https://linkedin.com/in/billatnapier',
            twitter: 'https://twitter.com/billatnapier',
          },
        },
        {
          name: 'Anirudh',
          designation: 'Product Manager',
          image: 'Anirudh',
          links: {
            linkedin: 'https://www.linkedin.com/in/anirudh-venu-174121120/',
            twitter: 'https://twitter.com/anirvenu',
          },
        },
        {
          name: 'Saurav',
          designation: 'Blockchain Developer',
          image: 'Saurav',
          links: {
            linkedin: 'https://www.linkedin.com/in/sauravkanchan/',
            twitter: 'https://twitter.com/sauravnk30',
            github: 'https://github.com/SauravKanchan',
          },
        },
        {
          name: 'Ajith',
          designation: 'Lead Frontend Developer',
          image: 'Ajith',
          links: {
            linkedin: 'https://www.linkedin.com/in/ajithranka/',
            twitter: 'https://twitter.com/ajithranka',
            github: 'https://github.com/ajithranka',
          },
        },
        {
          name: 'Lakshmikanth',
          designation: 'DevOps',
          image: 'Lakshmikanth',
          links: {
            linkedin: 'http://linkedin.com/in/lakshmikanth-bharathi-2a4754b8',
            twitter: 'https://twitter.com/LxmikanthBarati',
            github: 'https://github.com/lakshmikanth-tesla',
          },
        },
        {
          name: 'Jobin',
          designation: 'Blockchain Developer Evangelist',
          image: 'Jobin',
          links: {
            linkedin: 'https://www.linkedin.com/in/the-injineer/',
            twitter: 'https://twitter.com/the_injineer',
            github: 'https://github.com/the-injineer',
          },
        },
        {
          name: 'Himank',
          designation: 'Blockchain Developer',
          image: 'Himank',
          links: {
            linkedin: 'https://linkedin.com/in/himankjain',
            github: 'https://github.com/steel-feel',
          },
        },
        {
          name: 'Naga Pramod',
          designation: 'Content Strategist',
          image: 'Naga',
          links: {
            linkedin: 'https://www.linkedin.com/in/naga-pramod/',
            twitter: 'https://twitter.com/dnagapramod',
          },
        },
        {
          name: 'Arush',
          designation: 'UI/UX Designer',
          image: 'Arush',
          links: {
            linkedin: 'https://www.linkedin.com/in/arush-pandya-33263b200/',
          },
        },
        {
          name: 'Shrinath',
          designation: 'Frontend Developer',
          image: 'Shrinath',
          links: {
            linkedin: 'https://www.linkedin.com/in/shrinath-prabhu-459107b2/',
            github: 'https://github.com/shrinathprabhu',
          },
        },
        {
          name: 'Maharshi',
          designation: 'Software Engineer',
          image: 'Maharshi',
          links: {
            linkedin: 'https://www.linkedin.com/in/maharshi-m-8b00a1219',
            github: 'https://github.com/mmjee',
          },
        },
        {
          name: 'Rohith',
          designation: 'Blockchain Developer',
          image: 'Rohith',
          links: {
            linkedin: 'https://www.linkedin.com/in/rohith-narahari-40211818b/',
            twitter: 'https://twitter.com/mr_deadpool_93',
            github: 'https://github.com/naraharirohith',
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

  @media (--viewport-large) {
    text-align: center;
  }
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
