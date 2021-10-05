<template>
  <section style="margin-bottom: 10rem">
    <v-container>
      <v-stack justify="space-between">
        <app-section-descriptor
          title="Our team"
          heading="The backbone of our company"
        />
        <!-- <v-button type="link" label="View all" label-transform="uppercase" /> -->
      </v-stack>
      <v-stack justify="space-between">
        <v-stack
          v-for="member in members"
          :key="member.name + member.designation"
          direction="column"
          align="center"
        >
          <div class="position-relative member-image-container">
            <div class="position-relative member-image">
              <v-image :path="`images/${member.image}.png`" />
            </div>
            <div class="position-relative" style="bottom: 10%">
              <v-image path="images/team-member-ellipse.svg" />
            </div>
            <v-stack direction="column" gap="1rem" class="social-links">
              <a
                v-if="member.links.linkedin"
                href="https://google.com"
                target="__blank"
              >
                <v-image path="images/linkedin.svg" />
              </a>
              <a
                v-if="member.links.twitter"
                href="https://google.com"
                target="__blank"
              >
                <v-image path="images/twitter.svg" />
              </a>
            </v-stack>
          </div>
          <v-text :weight="600" line-height="1.5rem" size="1.25rem">
            {{ member.name }}
          </v-text>
          <v-text
            color="secondary"
            size="1.125rem"
            transform="uppercase"
            style="margin-top: 1rem"
          >
            {{ member.designation }}
          </v-text>
        </v-stack>
      </v-stack>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'OurTeam',
  data() {
    return {
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
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
.member-image {
  text-align: center;
  z-index: 10;
}

.social-links {
  position: absolute;
  top: 10%;
  right: 10%;
  z-index: 20;
  cursor: pointer;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.4s;
}

.member-image-container:hover .social-links {
  visibility: visible;
  opacity: 1;
}
</style>
