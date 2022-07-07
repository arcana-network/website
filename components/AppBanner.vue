<template>
  <div class="banner">
    <v-text line-height="1.5" :weight="500" size="1rem">
      Arcana Beta Testnet coming soon! Launching in
      {{ countdown.days }} {{ pluralise(countdown.days, 'day', 'days') }}
      {{ countdown.hours }} {{ pluralise(countdown.hours, 'hr', 'hrs') }}
      {{ countdown.minutes }} {{ pluralise(countdown.minutes, 'min', 'mins') }}.
    </v-text>
  </div>
</template>

<script>
import { DateTime } from 'luxon'

export default {
  data() {
    return {
      countdown: '',
      countdownToDate: '11-07-2022 12:00:00',
    }
  },
  created() {
    const countdownToDate = this.getDateTimeFromFormat(this.countdownToDate)
    this.countdown = this.getCountdown(countdownToDate)
    setInterval(() => {
      this.countdown = this.getCountdown(countdownToDate)
    }, 60000)
  },
  methods: {
    getDateTimeFromFormat(date) {
      return DateTime.fromFormat(date, 'dd-MM-yyyy HH:mm:ss')
    },
    getCountdown(date) {
      const currentDate = DateTime.now()
      return date
        .diff(currentDate, ['days', 'hours', 'minutes', 'seconds'])
        .toObject()
    },
    pluralise(quantity, singular, plural) {
      if (quantity === 1) return singular
      return plural
    },
  },
}
</script>

<style lang="postcss" scoped>
@import url('./lib/media-query-helper.css');

.banner {
  background: linear-gradient(180deg, #0085ff -4.5%, #29c8fa 100.1%);
  padding: 0.75em 1.5em;
  color: white;
  text-align: center;
  @media (--viewport-small) {
    padding: 1rem 2rem;
  }
}
</style>
