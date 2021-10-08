<template>
  <v-intersect
    :root-margin="`0px 0px -${bottomScrollTrigger}px 0px`"
    :threshold="0.5"
    @enter="onEnter"
  >
    <svg
      ref="iconEncryption"
      :height="size"
      :width="size"
      fill="none"
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>End to End Encryption</title>
      <g class="crater" @mouseenter="onHover">
        <g filter="url(#icon-encryption-a)">
          <circle cx="60" cy="60" r="50" fill="url(#icon-encryption-b)" />
        </g>
        <g filter="url(#icon-encryption-c)">
          <ellipse
            fill="url(#icon-encryption-d)"
            fill-opacity=".5"
            rx="20"
            ry="20"
            transform="matrix(.4149 .90986 -.90714 .42083 62.56 58.5)"
          />
        </g>
      </g>
      <g class="orbs">
        <g class="orb">
          <circle cx="10" cy="60" r="7.5" fill="url(#icon-encryption-e)" />
          <circle cx="10" cy="60" r="7.5" fill="url(#icon-encryption-f)" />
          <circle cx="10" cy="60" r="7.5" fill="url(#icon-encryption-g)" />
        </g>
        <g class="orb">
          <circle cx="110" cy="60" r="7.5" fill="url(#icon-encryption-h)" />
          <circle cx="110" cy="60" r="7.5" fill="url(#icon-encryption-i)" />
          <circle cx="110" cy="60" r="7.5" fill="url(#icon-encryption-j)" />
        </g>
      </g>
      <g class="shield">
        <path
          fill="url(#icon-encryption-k)"
          d="m57.69 27.17-20.7 14.94A4.78 4.78 0 0 0 35 45.98V59.4c0 15.2 9.26 28.9 23.34 34.64 1.5.61 3.2.6 4.69-.04A36.35 36.35 0 0 0 85 60.6V45.96c0-1.52-.71-2.96-1.92-3.88L63.64 27.25a5 5 0 0 0-5.95-.08Z"
        />
        <path
          fill="url(#icon-encryption-l)"
          d="m57.69 27.17-20.7 14.94A4.78 4.78 0 0 0 35 45.98V59.4c0 15.2 9.26 28.9 23.34 34.64 1.5.61 3.2.6 4.69-.04A36.35 36.35 0 0 0 85 60.6V45.96c0-1.52-.71-2.96-1.92-3.88L63.64 27.25a5 5 0 0 0-5.95-.08Z"
        />
        <path
          fill="url(#icon-encryption-m)"
          d="m57.69 27.17-20.7 14.94A4.78 4.78 0 0 0 35 45.98V59.4c0 15.2 9.26 28.9 23.34 34.64 1.5.61 3.2.6 4.69-.04A36.35 36.35 0 0 0 85 60.6V45.96c0-1.52-.71-2.96-1.92-3.88L63.64 27.25a5 5 0 0 0-5.95-.08Z"
        />
      </g>
      <defs>
        <radialGradient
          id="icon-encryption-d"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-34.47397 25.34681 -26.33044 -35.81178 22.94 21.93)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset="1" stop-color="#8C8C8C" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="icon-encryption-f"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(132.51 -6.92 31.13) scale(6.56404)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".14" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity=".27" />
        </radialGradient>
        <radialGradient
          id="icon-encryption-g"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(141.49 -4.2 30.66) scale(9.58456)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset=".34" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="icon-encryption-i"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(132.51 43.64 53.38) scale(6.56404)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".14" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity=".27" />
        </radialGradient>
        <radialGradient
          id="icon-encryption-j"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(141.49 46.36 48.32) scale(9.58456)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset=".34" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="icon-encryption-l"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-14.78486 22.58073 -20.7753 -13.60275 66.18 44.95)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".14" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity=".27" />
        </radialGradient>
        <radialGradient
          id="icon-encryption-m"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(131.91 23.47 37.42) scale(37.4245 38.1834)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset=".34" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <linearGradient
          id="icon-encryption-b"
          x1="10"
          x2="144.1"
          y1="1.8"
          y2="162.35"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="icon-encryption-e"
          x1="15.79"
          x2="2.48"
          y1="69.77"
          y2="49.61"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3E3E3E" />
          <stop offset="1" stop-color="#0D0D0D" />
        </linearGradient>
        <linearGradient
          id="icon-encryption-h"
          x1="116.92"
          x2="103.61"
          y1="69.77"
          y2="49.61"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3E3E3E" />
          <stop offset="1" stop-color="#0D0D0D" />
        </linearGradient>
        <linearGradient
          id="icon-encryption-k"
          x1="80.97"
          x2="13.64"
          y1="103.28"
          y2="30.42"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3E3E3E" />
          <stop offset="1" stop-color="#0D0D0D" />
        </linearGradient>
        <filter
          id="icon-encryption-a"
          width="156"
          height="154"
          x="-41"
          y="5"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            radius="22"
            result="effect1_innerShadow"
          />
          <feOffset dx="-97" dy="49" />
          <feGaussianBlur stdDeviation="14.5" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix
            values="0 0 0 0 0.108333 0 0 0 0 0.108333 0 0 0 0 0.108333 0 0 0 0.72 0"
          />
          <feBlend in2="shape" result="effect1_innerShadow" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius="28"
            result="effect2_innerShadow"
          />
          <feOffset dx="-10" dy="-26" />
          <feGaussianBlur stdDeviation="16.5" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
          <feBlend in2="effect1_innerShadow" result="effect2_innerShadow" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="5" dy="5" />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.21 0" />
          <feBlend in2="effect2_innerShadow" result="effect3_innerShadow" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="-2" dy="-2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix
            values="0 0 0 0 0.3125 0 0 0 0 0.3125 0 0 0 0 0.3125 0 0 0 0.1 0"
          />
          <feBlend in2="effect3_innerShadow" result="effect4_innerShadow" />
        </filter>
        <filter
          id="c"
          width="132.11"
          height="133.66"
          x="-3.5"
          y="-8.33"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="22" />
        </filter>
      </defs>
    </svg>
  </v-intersect>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'ArtEncryptionIcon',
  props: {
    animateOnEnter: {
      type: Boolean,
      default: false,
    },
    animateOnHover: {
      type: Boolean,
      default: false,
    },
    bottomScrollTrigger: {
      type: Number,
      default: 250,
    },
    size: {
      type: Number,
      default: 120,
    },
  },
  data() {
    return {
      isAnimating: false,
    }
  },
  computed: {
    orbsGroup() {
      return this.$refs.iconEncryption.querySelectorAll('.orbs')
    },
    orbs() {
      return this.$refs.iconEncryption.querySelectorAll('.orb')
    },
  },
  mounted() {
    gsap.set([this.orbsGroup, this.orbs], { transformOrigin: '50% 50%' })
  },
  methods: {
    animate() {
      if (this.isAnimating) return

      gsap.to([this.orbsGroup, this.orbs], {
        duration: 0.75,
        rotation: '360',
        ease: 'power3.out',
        onStart: () => {
          this.isAnimating = true
        },
        onComplete: () => {
          this.isAnimating = false
          gsap.set([this.orbsGroup, this.orbs], { rotation: 0 })
        },
      })
    },
    onEnter() {
      if (this.animateOnEnter) {
        this.animate()
      }
    },
    onHover() {
      if (this.animateOnHover) {
        this.animate()
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.orb,
.shield {
  pointer-events: none;
}
</style>
