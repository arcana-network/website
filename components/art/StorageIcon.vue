<template>
  <v-intersect
    :root-margin="`0px 0px -${bottomScrollTrigger}px 0px`"
    :threshold="0.5"
    @enter="onEnter"
  >
    <svg
      ref="iconStorage"
      :height="size"
      :width="size"
      fill="none"
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Decentralised Storage</title>
      <g class="crater" @mouseenter="onHover">
        <g filter="url(#icon-storage-a)">
          <circle cx="61" cy="61" r="50" fill="url(#icon-storage-b)" />
        </g>
        <g filter="url(#icon-storage-c)">
          <ellipse
            fill="url(#icon-storage-d)"
            fill-opacity=".5"
            rx="20"
            ry="20"
            transform="matrix(.41565 .90953 -.90749 .42008 65.1 60.03)"
          />
        </g>
      </g>
      <g class="orbs">
        <g class="orb">
          <circle cx="110" cy="60" r="7.5" fill="url(#icon-storage-i)" />
          <circle cx="110" cy="60" r="7.5" fill="url(#icon-storage-j)" />
          <circle cx="110" cy="60" r="7.5" fill="url(#icon-storage-k)" />
        </g>
        <g class="orb">
          <circle cx="60" cy="110" r="7.5" fill="url(#icon-storage-l)" />
          <circle cx="60" cy="110" r="7.5" fill="url(#icon-storage-m)" />
          <circle cx="60" cy="110" r="7.5" fill="url(#icon-storage-n)" />
        </g>
        <g class="orb">
          <circle cx="10" cy="60" r="7.5" fill="url(#icon-storage-r)" />
          <circle cx="10" cy="60" r="7.5" fill="url(#icon-storage-s)" />
          <circle cx="10" cy="60" r="7.5" fill="url(#icon-storage-t)" />
        </g>
        <g class="orb">
          <circle cx="60" cy="10" r="7.5" fill="url(#icon-storage-o)" />
          <circle cx="60" cy="10" r="7.5" fill="url(#icon-storage-p)" />
          <circle cx="60" cy="10" r="7.5" fill="url(#icon-storage-q)" />
        </g>
      </g>
      <g class="diamond" filter="url(#icon-storage-e)">
        <rect
          width="38.26"
          height="38.26"
          fill="url(#f)"
          rx="5"
          transform="scale(.99678 1.0032) rotate(45 -7.9 89.82)"
        />
        <rect
          width="38.26"
          height="38.26"
          fill="url(#icon-storage-g)"
          rx="5"
          transform="scale(.99678 1.0032) rotate(45 -7.9 89.82)"
        />
        <rect
          width="38.26"
          height="38.26"
          fill="url(#icon-storage-h)"
          rx="5"
          transform="scale(.99678 1.0032) rotate(45 -7.9 89.82)"
        />
      </g>
      <defs>
        <radialGradient
          id="icon-storage-d"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(143.64 8.35 15.66) scale(45.4638 47.2478)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset="1" stop-color="#8C8C8C" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="icon-storage-g"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(132.51 9.53 10.7) scale(16.7446)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".14" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity=".27" />
        </radialGradient>
        <radialGradient
          id="icon-storage-h"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(141.49 10.34 9.73) scale(24.4499)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset=".34" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="icon-storage-j"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(132.51 44.08 53.57) scale(6.56404)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".14" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity=".27" />
        </radialGradient>
        <radialGradient
          id="icon-storage-k"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(141.49 46.8 48.48) scale(9.58457)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset=".34" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="icon-storage-m"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(132.51 7.22 68.17) scale(6.56404)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".14" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity=".27" />
        </radialGradient>
        <radialGradient
          id="icon-storage-n"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(141.49 12.28 65.39) scale(9.58457)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset=".34" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="icon-storage-p"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(132.51 29.8 16.85) scale(6.56404)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".14" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity=".27" />
        </radialGradient>
        <radialGradient
          id="icon-storage-q"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(141.49 30.2 14.07) scale(9.58457)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset=".34" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="icon-storage-s"
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
          id="icon-storage-t"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(141.49 -4.2 30.66) scale(9.58457)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset=".34" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <linearGradient
          id="icon-storage-b"
          x1="11"
          x2="145.1"
          y1="2.8"
          y2="163.35"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="icon-storage-f"
          x1="35.18"
          x2="1.23"
          y1="42.79"
          y2="-8.64"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3E3E3E" />
          <stop offset="1" stop-color="#0D0D0D" />
        </linearGradient>
        <linearGradient
          id="icon-storage-i"
          x1="117.79"
          x2="104.48"
          y1="69.77"
          y2="49.61"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3E3E3E" />
          <stop offset="1" stop-color="#0D0D0D" />
        </linearGradient>
        <linearGradient
          id="icon-storage-l"
          x1="66.79"
          x2="53.48"
          y1="121.41"
          y2="101.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3E3E3E" />
          <stop offset="1" stop-color="#0D0D0D" />
        </linearGradient>
        <linearGradient
          id="icon-storage-o"
          x1="66.79"
          x2="53.48"
          y1="18.77"
          y2="-1.39"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3E3E3E" />
          <stop offset="1" stop-color="#0D0D0D" />
        </linearGradient>
        <linearGradient
          id="icon-storage-r"
          x1="15.79"
          x2="2.48"
          y1="69.77"
          y2="49.61"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3E3E3E" />
          <stop offset="1" stop-color="#0D0D0D" />
        </linearGradient>
        <filter
          id="icon-storage-a"
          width="156"
          height="154"
          x="-40"
          y="6"
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
          id="icon-storage-c"
          width="134.93"
          height="136.47"
          x="-2.37"
          y="-8.2"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="22" />
        </filter>
        <filter
          id="icon-storage-e"
          width="49.81"
          height="57.13"
          x="36.09"
          y="27.08"
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
          <feOffset dy="-7" />
          <feGaussianBlur stdDeviation="33" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.37 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="-7" />
          <feGaussianBlur stdDeviation="33" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.37 0" />
          <feBlend in2="effect1_innerShadow" result="effect2_innerShadow" />
        </filter>
      </defs>
    </svg>
  </v-intersect>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'ArtStorageIcon',
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
    orbs() {
      return this.$refs.iconStorage.querySelectorAll('.orb')
    },
    orbsGroup() {
      return this.$refs.iconStorage.querySelectorAll('.orbs')
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
.diamond {
  pointer-events: none;
}
</style>
