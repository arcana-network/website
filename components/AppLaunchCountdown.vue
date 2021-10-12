<template>
  <div>
    <div v-if="showLoader">Loading...</div>
    <v-stack
      v-else-if="showCountdown"
      align="center"
      class="container"
      direction="column"
      gap="3rem"
      justify="center"
    >
      <v-text>
        Launching in {{ remainingHours }} hours, {{ remainingMinutes }} minutes,
        {{ remainingSeconds }} seconds!
      </v-text>

      <input
        v-model="passwordInput"
        class="password-input"
        type="text"
        placeholder="Password"
        @input="handlePasswordInput"
        @keyup.enter="handlePasswordSubmit"
      />
      <v-button :action="handlePasswordSubmit" label="Crack the password!" />
      <v-text v-if="showTryAgainMessage">Sorry, try again.</v-text>
    </v-stack>
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
      launchTime: '2021-10-12T18:30:00.000Z',
      showLoader: true,
      showCountdown: true,
      timerIntervalId: null,
      passwordAnswer: '2021',
      passwordInput: '',
      showTryAgainMessage: false,
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
    this.showCountdown =
      window.localStorage.getItem(LAUNCH_COUNTDOWN_BYPASS_KEY) !== 'true'
    if (this.showCountdown) {
      this.timerIntervalId = setInterval(() => {
        this.currentTime = new Date().toISOString()
      }, 1000)
    }
    this.showLoader = false
  },
  beforeDestroy() {
    if (this.timerIntervalId) {
      clearInterval(this.timerIntervalId)
    }
  },
  methods: {
    handlePasswordInput() {
      if (this.showTryAgainMessage === true) {
        this.showTryAgainMessage = false
      }
    },
    handlePasswordSubmit() {
      if (this.passwordInput === this.passwordAnswer) {
        clearInterval(this.timerIntervalId)
        window.localStorage.setItem(LAUNCH_COUNTDOWN_BYPASS_KEY, true)
        this.showCountdown = false
      } else {
        this.showTryAgainMessage = true
        this.passwordInput = ''
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.container {
  width: 100vw;
  height: 100vh;
}

.password-input {
  padding: 1rem;
  border-radius: 4px;
}
</style>
