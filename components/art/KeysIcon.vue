<template>
  <v-intersect
    :root-margin="`0px 0px -${bottomScrollTrigger}px 0px`"
    :threshold="0.5"
    @enter="onEnter"
  >
    <svg
      ref="iconKeys"
      :height="size"
      :width="size"
      fill="none"
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Simple Keys Management</title>
      <g class="crater" @mouseenter="onHover">
        <g filter="url(#icon-keys-a)">
          <circle cx="51" cy="64" r="50" fill="url(#icon-keys-b)" />
        </g>
        <g filter="url(#icon-keys-c)">
          <ellipse
            fill="url(#icon-keys-d)"
            fill-opacity=".5"
            rx="20"
            ry="20"
            transform="rotate(65.3 49.3 57.96)"
          />
        </g>
      </g>
      <g class="key">
        <g class="key-bow-up">
          <circle cx="34.67" cy="63.79" r="22.79" fill="url(#icon-keys-e)" />
          <circle cx="34.67" cy="63.79" r="22.79" fill="url(#icon-keys-f)" />
          <circle cx="34.67" cy="63.79" r="22.79" fill="url(#icon-keys-g)" />
        </g>
        <g
          class="key-bow-down"
          transform="scale(1, -1) translate(0, -127)"
          opacity="0"
        >
          <circle cx="34.67" cy="63.79" r="22.79" fill="url(#icon-keys-e)" />
          <circle cx="34.67" cy="63.79" r="22.79" fill="url(#icon-keys-f)" />
          <circle cx="34.67" cy="63.79" r="22.79" fill="url(#icon-keys-g)" />
        </g>
        <g class="key-stem-up">
          <g filter="url(#icon-keys-k)">
            <rect
              width="60.54"
              height="5.44"
              x="57.46"
              y="47.12"
              fill="url(#icon-keys-l)"
              rx="2.72"
            />
            <rect
              width="60.54"
              height="5.44"
              x="57.46"
              y="47.12"
              fill="url(#icon-keys-m)"
              rx="2.72"
            />
            <rect
              width="60.54"
              height="5.44"
              x="57.46"
              y="47.12"
              fill="url(#icon-keys-n)"
              rx="2.72"
            />
          </g>
          <g filter="url(#icon-keys-o)">
            <rect
              width="47.62"
              height="2.72"
              x="70.38"
              y="56.65"
              fill="url(#icon-keys-p)"
              rx="1.36"
            />
            <rect
              width="47.62"
              height="2.72"
              x="70.38"
              y="56.65"
              fill="url(#icon-keys-q)"
              rx="1.36"
            />
            <rect
              width="47.62"
              height="2.72"
              x="70.38"
              y="56.65"
              fill="url(#icon-keys-r)"
              rx="1.36"
            />
          </g>
        </g>
        <g
          class="key-stem-down"
          transform="scale(1, -1) translate(0, -137)"
          style="opacity: 0"
        >
          <g filter="url(#icon-keys-k)">
            <rect
              width="60.54"
              height="5.44"
              x="57.46"
              y="47.12"
              fill="url(#icon-keys-l)"
              rx="2.72"
            />
            <rect
              width="60.54"
              height="5.44"
              x="57.46"
              y="47.12"
              fill="url(#icon-keys-m)"
              rx="2.72"
            />
            <rect
              width="60.54"
              height="5.44"
              x="57.46"
              y="47.12"
              fill="url(#icon-keys-n)"
              rx="2.72"
            />
          </g>
          <g filter="url(#icon-keys-o)">
            <rect
              width="47.62"
              height="2.72"
              x="70.38"
              y="56.65"
              fill="url(#icon-keys-p)"
              rx="1.36"
            />
            <rect
              width="47.62"
              height="2.72"
              x="70.38"
              y="56.65"
              fill="url(#icon-keys-q)"
              rx="1.36"
            />
            <rect
              width="47.62"
              height="2.72"
              x="70.38"
              y="56.65"
              fill="url(#icon-keys-r)"
              rx="1.36"
            />
          </g>
        </g>
        <g class="key-tip">
          <circle cx="111.44" cy="68.45" r="5" fill="url(#icon-keys-h)" />
          <circle cx="111.44" cy="68.45" r="5" fill="url(#icon-keys-i)" />
          <circle cx="111.44" cy="68.45" r="5" fill="url(#icon-keys-j)" />
        </g>
      </g>
      <defs>
        <radialGradient
          id="icon-keys-d"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-32.47387 24.0101 -24.98303 -33.78975 49.3 57.96)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset="1" stop-color="#8C8C8C" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="icon-keys-f"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(132.51 8.28 35.86) scale(19.944)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".14" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity=".27" />
        </radialGradient>
        <radialGradient
          id="icon-keys-g"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(141.49 11.1 34.16) scale(29.1215)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset=".34" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="icon-keys-i"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(132.51 41.75 57.93) scale(4.37603)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".14" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity=".27" />
        </radialGradient>
        <radialGradient
          id="icon-keys-j"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(141.49 44.84 52.86) scale(6.38971)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset=".34" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="icon-keys-m"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(174.4 46.42 26.66) scale(17.9877 3.50735)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".14" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity=".27" />
        </radialGradient>
        <radialGradient
          id="icon-keys-n"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(175.91 47.23 26.05) scale(30.3477 4.43233)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset=".34" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="icon-keys-q"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-14.08007 .8777 -.10942 -1.75526 100.08 57.42)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".14" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity=".27" />
        </radialGradient>
        <radialGradient
          id="icon-keys-r"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(177.4 49.77 29.86) scale(23.8327 2.21953)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset=".34" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <linearGradient
          id="icon-keys-b"
          x1="1"
          x2="135.1"
          y1="5.8"
          y2="166.35"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="icon-keys-e"
          x1="53.78"
          x2="13.35"
          y1="91.97"
          y2="30.71"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3E3E3E" />
          <stop offset="1" stop-color="#0D0D0D" />
        </linearGradient>
        <linearGradient
          id="icon-keys-h"
          x1="115.63"
          x2="106.76"
          y1="74.63"
          y2="61.19"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3E3E3E" />
          <stop offset="1" stop-color="#0D0D0D" />
        </linearGradient>
        <linearGradient
          id="icon-keys-l"
          x1="113.12"
          x2="112.5"
          y1="53.21"
          y2="42.74"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3E3E3E" />
          <stop offset="1" stop-color="#0D0D0D" />
        </linearGradient>
        <linearGradient
          id="icon-keys-p"
          x1="114.16"
          x2="113.96"
          y1="59.69"
          y2="54.45"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3E3E3E" />
          <stop offset="1" stop-color="#0D0D0D" />
        </linearGradient>
        <filter
          id="icon-keys-a"
          width="156"
          height="154"
          x="-50"
          y="9"
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
          id="icon-keys-c"
          width="129.85"
          height="130.94"
          x="-15.62"
          y="-7.51"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="22" />
        </filter>
        <filter
          id="icon-keys-k"
          width="60.54"
          height="12.44"
          x="57.46"
          y="40.12"
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
        <filter
          id="icon-keys-o"
          width="47.62"
          height="9.72"
          x="70.38"
          y="49.65"
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
  name: 'ArtKeysIcon',
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
    keyBowUp() {
      return this.$refs.iconKeys.querySelectorAll('.key-bow-up')
    },
    keyBowDown() {
      return this.$refs.iconKeys.querySelectorAll('.key-bow-down')
    },
    keyStemUp() {
      return this.$refs.iconKeys.querySelectorAll('.key-stem-up')
    },
    keyStemDown() {
      return this.$refs.iconKeys.querySelectorAll('.key-stem-down')
    },
  },
  methods: {
    animate() {
      if (this.isAnimating) return

      gsap
        .timeline({
          repeat: 1,
          yoyo: true,
          ease: 'power3.out',
          onStart: () => {
            this.isAnimating = true
          },
          onComplete: () => {
            this.isAnimating = false
            gsap.set([this.keyBowUp, this.keyStemUp], {
              opacity: 1,
            })
            gsap.set([this.keyBowDown, this.keyStemDown], {
              opacity: 0,
            })
          },
        })
        .to([this.keyBowUp, this.keyStemUp], {
          duration: 0.25,
          opacity: 0,
        })
        .to(
          [this.keyBowDown, this.keyStemDown],
          {
            duration: 0.25,
            opacity: 1,
          },
          '-=0.3'
        )
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
.key {
  pointer-events: none;
}
</style>
