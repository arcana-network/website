<template>
  <section id="our-investors">
    <v-container>
      <v-stack direction="column" align="start" style="margin-bottom: 3rem">
        <app-section-descriptor
          title="Our investors"
          heading="They’re Awesome Investors. And They Chose To Back Us!"
          style="max-width: 40rem"
        />
        <app-section-descriptor
          description="Every one of these great investors are well known and well respected in their own right. Through us, they’re helping shape the world like the way they envision it should be. "
          style="max-width: 60rem"
        />
      </v-stack>
      <v-stack wrap>
        <div
          v-for="investor in initialInvestors"
          :key="investor.name"
          class="investor-blurb"
        >
          <about-investor :investor="investor" />
        </div>
      </v-stack>
      <v-stack v-if="currentPage === 'about'" wrap>
        <div
          v-for="investor in otherInvestors"
          :key="investor.name"
          class="investor-blurb"
        >
          <about-investor :investor="investor" />
        </div>
      </v-stack>
      <v-stack align="center" justify="center" style="margin: 2rem 0">
        <v-button
          v-if="currentPage !== 'about'"
          type="link"
          label="View all investors"
          label-transform="uppercase"
          style="margin-top: 1rem"
          :action="goToInvestors"
        />
      </v-stack>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'OurInvestors',
  data() {
    return {
      initialInvestors: [
        {
          image: 'images/investors/republic.png',
          name: 'Republic Crypto',
          description:
            'Republic Crypto is a first-of-its-kind compliant and inclusive blockchain investment and financing platform by CoinList and Republic. Republic Crypto is based out of the US and has been investing in most anticipated projects in the Crypto and blockchain domain.',
        },
        {
          image: 'images/investors/woodstock.png',
          name: 'Woodstock',
          description:
            'Woodstock is an emerging technology investment fund that focuses on investing in domains such as decentralized finance (DeFi), NFT and tokenization, and web 3.0 protocols.',
        },
        {
          image: 'images/investors/dcg.png',
          name: 'Digital Currency Group',
          description:
            'Digital Currency Group is a New York based venture capital firm that invests in Bitcoin and blockchain companies by leveraging its network, capital, and insights.',
        },
        {
          image: 'images/investors/symbolic-capital.png',
          name: 'Symbolic Capital',
        },
        {
          image: 'images/investors/shl.png',
          name: 'SHL Capital',
          description:
            'Sahil Lavingia is a US based investor who is the founder and CEO of Gumroad. He was also the employee #2 at Pinterest. Sahil is currently investing over $10 million a year into early-stage technology startups.',
        },
        {
          image: 'images/investors/fenbushi.png',
          name: 'Fenbushi Capital',
          description:
            'Fenbushi Capital is one of the most active blockchain-centered venture capital firms in the whole of Asia. Founded in 2015 by blockchain and traditional finance veterans, Fenbushi Capital has so far supported over 60 projects in the blockchain space.',
        },
        {
          image: 'images/investors/ld-capital.png',
          name: 'LD Capital',
          description:
            'LD Capital is one of the most prominent investment firms based out of China that exclusively focuses on securities, equity investment and trading, and blockchain investment. LD Capital has a track record of investing in more than 200 companies.',
        },

        {
          image: 'images/investors/arcanum.png',
          name: 'Arcanum Capital',
          description:
            'Arcanum Capital is a US-based seed-stage venture capital firm that’s focused on empowering enterprises and teams working in decentralized applications and networks. Arcanum has been active in the Indian blockchain space since 2013.',
        },
        {
          image: 'images/investors/paradigm-shift.png',
          name: 'Paradigm Shift VC',
          description:
            "India's first truly Global Venture Capital Firm. Backing Indian Founders building for Global Markets and disruptive innovation in the US. Web 2 + Web 3",
        },
        {
          image: 'images/investors/au21.png',
          name: 'AU21 Capital',
          description:
            'AU21 Capital is a venture capital firm based out of San Francisco that backs promising entrepreneurs in the Blockchain space. It was founded in 2017 by Chandler Guo, co-founder of Gate.io and Kenzi Wang, former VP and GM at Huobi Global. ',
        },
        {
          image: 'images/investors/ganesh.png',
          name: 'Ganesh Swami',
          designation: 'CEO, Covalent',
        },
        {
          image: 'images/investors/balaji-s.png',
          name: 'Balaji. S',
          designation: 'Ex-CTO, Coinbase',
          description:
            'Balaji Srinivasan is an entrepreneur and angel investor who has co-founded Earn.com, Counsyl, Teleport, and Coin Center. He also served as the former CTO of Coinbase and General Partner at Andreessen Horowitz. ',
        },
        {
          image: 'images/investors/jd-kanani.png',
          name: 'JD Kanani',
          designation: 'Co-Founder, Polygon',
          description:
            'JD Kanani is the co-founder and CEO of Polygon (formerly Matic). ',
        },
        {
          image: 'images/investors/santiago-s.png',
          name: 'Santiago. S',
          designation: 'Ex-General Partner, Parafi Capital',
          description:
            'Santiago Santos is a de-fi investor who currently serves as the Advisor at Synthetix, a derivatives liquidity protocol. He is a former partner at ParaFi Capital and Director of Research and Growth at Elysium Health. ',
        },
        {
          image: 'images/investors/john-lilic.png',
          name: 'John Lilic',
          designation: 'Ex ConsenSys',
          description:
            'John Lilic is the co-founder and board member of Cope to Inspire and investor and product development advisor at Polygon (previously Matic). He served as the former MD for Global Business Technology Development, Strategy, and Operations at ConsenSys. ',
        },
      ],

      otherInvestors: [
        {
          image: 'images/investors/kenetic.png',
          name: 'Kenetic Capital',
          description:
            'Kenetic Capital is a Hong Kong-based venture capital firm that invests in digital assets and blockchain startups and companies. It was founded in 2016 by Jehan Chu and Lawrence Chu. ',
        },
        {
          image: 'images/investors/sandeep-n.png',
          name: 'Sandeep. N',
          designation: 'Co-Founder, Polygon',
          description:
            'Sandeep Nailwal co-founded Polygon (formerly Matic), and is currently serving as its Chief Operations Officer (COO). He has also founded a community-run fund called “Crypto Relief” to deliver COVID-19 relief in India. ',
        },
        {
          image: 'images/investors/kendrick-n.png',
          name: 'Kendrick. N',
          designation: 'CEO, Republic',
          description:
            'Kendrick Nguyen is the co-founder and CEO of Republic. He has co-founded two other fintech companies and advised several investment funds. Kendrick also served as the former General Counsel and Venture Hacker at AngelList. ',
        },
        {
          image: 'images/investors/nischal.png',
          name: 'Nischal Shetty',
          designation: 'Co-Founder and CEO, WazirX',
          description:
            'Nischal Shetty is the co-founder and CEO at WazirX, one of India’s top-rated cryptocurrency exchanges. He has previously founded Crowdfire, a marketing bot that helps e-sellers, bloggers, and YouTubers in growing their audience.',
        },
        {
          image: 'images/investors/siddharth-m.png',
          name: 'Siddharth. M',
          designation: 'Co-Founder, WazirX',
          description:
            'Siddharth Menon is a serial entrepreneur, co-founder and COO of WazirX, India’s largest crypto exchange, which is now Binance. He has also co-founded ventures such as Crowdfire, Justmigrate, and 3CRUMBS in the past. ',
        },
        {
          image: 'images/investors/tamar-m.png',
          name: 'Tamar. M',
          designation: 'Ecosystem Growth, Solana',
          description:
            'Tamar Menteshashvili heads Ecosystem Growth in Solana Labs and is an external government consultant. Before starting at Solana, Tamar worked with CoinMarketCap where she looked after the Growth & Community Initiatives. ',
        },
        {
          image: 'images/investors/aniket-j.png',
          name: 'Aniket. J',
          designation: 'Co-Founder, Biconomy',
          description:
            'Aniket Jindal is the co-founder and COO of Biconomy. His diverse background and work experiences span across multiple companies, including Polygon, WeStart, Nucleus Vision, and Binance. ',
        },
        {
          image: 'images/investors/ajit.png',
          name: 'Ajit Tripathi',
          designation: 'Head of Institutional Business, Aave',
          description:
            'Ajit Tripathi is the Head of Institutional Business at Aave, one of the world’s leading DeFi liquidity protocols. Ajit’s focus lies on bridging the gap between financial institutions and crypto/internet ecosystems.',
        },
      ],
      isInvestorsExpanded: false,
    }
  },
  computed: {
    currentPage() {
      return this.$nuxt.$route.name
    },
  },
  methods: {
    expandInvestors() {
      this.isInvestorsExpanded = true
    },
    goToInvestors() {
      window.open('/about/#our-investors', '_self')
    },
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

.investor-blurb {
  width: 20%;
  margin: 2rem 0;

  @media (--viewport-medium) {
    width: 33%;
  }

  @media (--viewport-small) {
    width: 100%;
    margin: 0.5rem 0;
  }
}

.other-investors {
  max-height: 0;
  opacity: 0;
  visibility: hidden;
  transition: max-height 0.3s, opacity 0.6s;
}

.other-investors.expanded {
  visibility: visible;
  max-height: 100%;
  opacity: 1;
}
</style>
