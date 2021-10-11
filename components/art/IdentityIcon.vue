<template>
  <v-intersect
    :root-margin="`0px 0px -${bottomScrollTrigger}px 0px`"
    :threshold="0.5"
    @enter="onEnter"
  >
    <svg
      ref="iconIdentity"
      :width="size"
      :height="size"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 120 120"
    >
      <title>Identity and Access Management</title>
      <g class="crater" @mouseenter="onHover">
        <g filter="url(#icon-identity-a)">
          <circle cx="52" cy="56" r="50" fill="url(#icon-identity-b)" />
        </g>
        <g filter="url(#icon-identity-c)">
          <ellipse
            fill="url(#icon-identity-d)"
            fill-opacity=".5"
            rx="20"
            ry="20"
            transform="matrix(.42776 .9039 -.91294 .4081 48.37 67.8)"
          />
        </g>
      </g>
      <g class="diamond" filter="url(#icon-identity-e)">
        <rect
          width="22"
          height="22"
          fill="url(#icon-identity-f)"
          rx="5"
          transform="matrix(.71537 -.69874 .71005 .70415 84.4 46.3)"
        />
        <rect
          width="22"
          height="22"
          fill="url(#icon-identity-g)"
          rx="5"
          transform="matrix(.71537 -.69874 .71005 .70415 84.4 46.3)"
        />
        <rect
          width="22"
          height="22"
          fill="url(#icon-identity-h)"
          rx="5"
          transform="matrix(.71537 -.69874 .71005 .70415 84.4 46.3)"
        />
      </g>
      <g class="person">
        <g class="head">
          <ellipse
            cx="51.74"
            cy="37.29"
            fill="url(#icon-identity-i)"
            rx="14.32"
            ry="14.29"
          />
          <ellipse
            cx="51.74"
            cy="37.29"
            fill="url(#icon-identity-j)"
            rx="14.32"
            ry="14.29"
          />
          <ellipse
            cx="51.74"
            cy="37.29"
            fill="url(#icon-identity-k)"
            rx="14.32"
            ry="14.29"
          />
        </g>
        <g class="body">
          <path
            fill="url(#icon-identity-l)"
            d="M76.48 59.27c2.76 0 5.04 2.25 4.58 4.97a29.63 29.63 0 0 1-17.94 22.44 29.8 29.8 0 0 1-38.86-16.06 29.62 29.62 0 0 1-1.84-6.38c-.46-2.72 1.82-4.97 4.58-4.97h49.48Z"
          />
          <path
            fill="url(#icon-identity-m)"
            d="M76.48 59.27c2.76 0 5.04 2.25 4.58 4.97a29.63 29.63 0 0 1-17.94 22.44 29.8 29.8 0 0 1-38.86-16.06 29.62 29.62 0 0 1-1.84-6.38c-.46-2.72 1.82-4.97 4.58-4.97h49.48Z"
          />
          <path
            fill="url(#icon-identity-n)"
            d="M76.48 59.27c2.76 0 5.04 2.25 4.58 4.97a29.63 29.63 0 0 1-17.94 22.44 29.8 29.8 0 0 1-38.86-16.06 29.62 29.62 0 0 1-1.84-6.38c-.46-2.72 1.82-4.97 4.58-4.97h49.48Z"
          />
        </g>
      </g>
      <defs>
        <radialGradient
          id="icon-identity-d"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-29.47774 11.3816 -11.83257 -30.6457 19.67 11.46)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset="1" stop-color="#8C8C8C" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="icon-identity-g"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(132.51 5.48 6.15) scale(9.62726)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".14" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity=".27" />
        </radialGradient>
        <radialGradient
          id="icon-identity-h"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(141.49 5.94 5.6) scale(14.0574)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset=".34" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="icon-identity-j"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-8.46794 9.2172 -9.21897 -8.46956 55.28 31.14)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".14" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity=".27" />
        </radialGradient>
        <radialGradient
          id="icon-identity-k"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(141.55 22.44 25.29) scale(18.2825 18.2733)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset=".34" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="icon-identity-m"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-17.58731 19.14349 -19.1471 -17.59063 59.1 46.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".14" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity=".27" />
        </radialGradient>
        <radialGradient
          id="icon-identity-n"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(141.55 21.92 33.72) scale(37.9712 37.9523)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset=".34" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <linearGradient
          id="icon-identity-b"
          x1="2"
          x2="136.1"
          y1="-2.2"
          y2="158.35"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="icon-identity-f"
          x1="20.23"
          x2=".71"
          y1="24.6"
          y2="-4.97"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3E3E3E" />
          <stop offset="1" stop-color="#0D0D0D" />
        </linearGradient>
        <linearGradient
          id="icon-identity-i"
          x1="63.75"
          x2="38.42"
          y1="54.95"
          y2="16.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3E3E3E" />
          <stop offset="1" stop-color="#0D0D0D" />
        </linearGradient>
        <linearGradient
          id="icon-identity-l"
          x1="76.68"
          x2="24.08"
          y1="95.96"
          y2="16.09"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3E3E3E" />
          <stop offset="1" stop-color="#0D0D0D" />
        </linearGradient>
        <filter
          id="icon-identity-a"
          width="156"
          height="154"
          x="-49"
          y="1"
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
          id="icon-identity-c"
          width="135.54"
          height="135.41"
          x="-19.4"
          y=".1"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="22" />
        </filter>
        <filter
          id="icon-identity-e"
          width="27.18"
          height="33.75"
          x="86.5"
          y="25.97"
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
  name: 'ArtIdentityIcon',
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
    diamond() {
      return this.$refs.iconIdentity.querySelectorAll('.diamond')
    },
  },
  mounted() {
    gsap.set(this.diamond, { transformOrigin: '50% 50%' })
  },
  methods: {
    animate() {
      if (this.isAnimating) return

      gsap.to(this.diamond, {
        duration: 0.75,
        rotation: 360,
        ease: 'power3.out',
        onStart: () => {
          this.isAnimating = true
        },
        onComplete: () => {
          this.isAnimating = false
          gsap.set([this.diamond], { rotation: 0 })
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
.diamond,
.person {
  pointer-events: none;
}
</style>
