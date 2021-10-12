<template>
  <div class="container">
    <div v-if="showLoader">Loading...</div>
    <div v-else-if="showCountdown" class="countdown-container">
      <v-stack
        class="countdown-content"
        align="center"
        direction="column"
        gap="2rem"
        justify="center"
      >
        <v-image path="images/arcana-logo-vertical.svg" />
        <v-text
          class="uppercase"
          font="sans"
          :weight="700"
          size="2.625rem"
          line-height="1em"
          gradient="linear-gradient(180deg, #47E7FF 0%, #14A7F0 100%)"
        >
          Launching website in
        </v-text>
        <v-text
          class="tabular-nums uppercase"
          font="sans"
          :weight="700"
          size="10.635rem"
          line-height="120px"
          gradient="linear-gradient(180deg, #47E7FF 0%, #14A7F0 100%)"
        >
          {{ String(remainingHours).padStart(2, '0')
          }}<v-text
            class="uppercase"
            font="sans"
            :weight="700"
            size="1.25rem"
            line-height="100px"
            gradient="linear-gradient(180deg, #47E7FF 0%, #14A7F0 100%)"
          >
            hrs
          </v-text>
          {{ String(remainingMinutes).padStart(2, '0')
          }}<v-text
            class="uppercase"
            font="sans"
            :weight="700"
            size="1.25rem"
            line-height="120px"
            gradient="linear-gradient(180deg, #47E7FF 0%, #14A7F0 100%)"
          >
            mins
          </v-text>
        </v-text>
        <v-stack
          align="center"
          direction="column"
          gap="0.25rem"
          style="margin-top: 2rem"
        >
          <v-text font="sans" line-height="1.5rem" :weight="700" size="1rem">
            Until launch, the website is encrypted.
          </v-text>
          <v-text
            font="sans"
            line-height="1.5rem"
            :weight="700"
            size="1.125rem"
          >
            BUT, if you can break the code and enter it below, you can gain
            access to the website before it goes live.
          </v-text>
        </v-stack>

        <v-input-group :class="{ shakeX: incorrectPasswordEntered }">
          <input
            v-model="passwordInput"
            class="password-input"
            type="text"
            placeholder="Password"
            @input="handlePasswordInput"
            @keyup.enter="handlePasswordSubmit"
          />
          <v-button :action="handlePasswordSubmit" label=" →" />
        </v-input-group>
        <v-text
          color="link"
          font="serif"
          :weight="600"
          size="1rem"
          line-height="1.2em"
        >
          Hint: The year when the privacy big bang begins.
        </v-text>
      </v-stack>
      <div class="countdown-footer">
        <v-text font="serif" :weight="500" size="1rem" line-height="1.5em">
          Crack the password, see the website before launch and share it with
          the community on twitter. Don’t forget to tag us on
          <a
            class="twitter-link"
            href="https://twitter.com/ArcanaNetwork"
            target="_blank"
          >
            @ArcanaNetwork </a
          >.
        </v-text>
      </div>
    </div>
    <slot v-else />
  </div>
</template>

<script>
const LAUNCH_COUNTDOWN_BYPASS_KEY = 'arcana-bypass-launch-countdown'

export default {
  name: 'AppLaunchCountdown',
  data() {
    return {
      currentTime: new Date().toISOString(),
      launchTime: '2021-10-13T02:30:00.000Z',
      passwordAnswer: '2021',
      passwordInput: '',
      showCountdown: true,
      showLoader: true,
      incorrectPasswordEntered: false,
      timerIntervalId: null,
    }
  },
  computed: {
    deltaInSeconds() {
      return Math.floor(
        (new Date(this.launchTime) - new Date(this.currentTime)) / 1000
      )
    },
    remainingHours() {
      if (this.deltaInSeconds < 0) return 0
      return Math.floor(this.deltaInSeconds / 3600) % 24
    },
    remainingMinutes() {
      if (this.deltaInSeconds < 0) return 0
      return (
        Math.floor((this.deltaInSeconds - this.remainingHours * 3600) / 60) % 60
      )
    },
    remainingSeconds() {
      if (this.deltaInSeconds < 0) return 0
      return (
        this.deltaInSeconds -
        this.remainingHours * 3600 -
        this.remainingMinutes * 60
      )
    },
  },
  mounted() {
    this.showLoader = false
    this.showCountdown =
      window.localStorage.getItem(LAUNCH_COUNTDOWN_BYPASS_KEY) !== 'true'
    if (this.showCountdown) {
      this.timerIntervalId = setInterval(() => {
        this.currentTime = new Date().toISOString()
      }, 1000)
    }
  },
  beforeDestroy() {
    if (this.timerIntervalId) {
      clearInterval(this.timerIntervalId)
    }
  },
  methods: {
    handlePasswordInput() {
      if (this.incorrectPasswordEntered === true) {
        this.incorrectPasswordEntered = false
      }
    },
    handlePasswordSubmit() {
      if (this.passwordInput === this.passwordAnswer) {
        this.showCountdown = false
        clearInterval(this.timerIntervalId)
        window.localStorage.setItem(LAUNCH_COUNTDOWN_BYPASS_KEY, true)
      } else {
        this.passwordInput = ''
        this.incorrectPasswordEntered = true
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
@import url('./lib/media-query-helper.css');

.container,
.countdown-container,
.countdown-content {
  width: 100vw;
  height: 100vh;
}

.countdown-container {
  background: url('~assets/images/launch-countdown-background.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.countdown-footer {
  background: #010101;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem 1rem;
  width: 100%;
  text-align: center;
}

.twitter-link {
  color: var(--color-blue);
  text-decoration: none;
}

.center {
  text-align: center;
}

.uppercase {
  text-transform: uppercase;
}

.tabular-nums {
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
}

.password-input {
  background: linear-gradient(141.48deg, #161616 -4.56%, #151515 135.63%);
  border-radius: 10px;
  box-shadow: inset -2px -2px 4px rgba(57, 57, 57, 0.44),
    inset 5px 5px 10px rgba(11, 11, 11, 0.5);
  color: white;
  font-family: 'Sora', serif;
  font-size: 14px;
  line-height: 24px;
  padding: 1rem;
  width: 439px;

  @media (--viewport-small) {
    width: 295px;
  }
}

.password-input::placeholder {
  opacity: 0.5;
}

@keyframes shakeX {
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-5px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(5px, 0, 0);
  }
}

.shakeX {
  animation: shakeX 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}
</style>
