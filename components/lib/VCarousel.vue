<template>
  <div class="slider">
    <transition-group :name="'slide-' + transitionName" tag="div">
      <div :key="currentSlide" ref="carousel" class="slide">
        <slot />
      </div>
    </transition-group>
    <v-stack class="icons" gap="2rem" justify="center">
      <v-image :src="arrowLeft" @click.stop="changeSlide(-1)" />
      <v-image :src="arrowRight" @click.stop="changeSlide(1)" />
    </v-stack>
  </div>
</template>

<script>
import VStack from './VStack.vue'
import VImage from './VImage.vue'
import ArrowLeftIcon from '~/assets/icons/arrow-left.svg'
import ArrowRightIcon from '~/assets/icons/arrow-right.svg'
export default {
  name: 'VCarousel',
  components: { VStack, VImage },
  props: {},
  data() {
    return {
      arrowLeft: ArrowLeftIcon,
      arrowRight: ArrowRightIcon,
      transitionName: '',
      currentSlide: 0,
    }
  },
  computed: {
    totalSlides() {
      return this.$refs.carousel.children.length
    },
  },
  mounted() {
    this.updateSlides()
  },
  methods: {
    enterPreviousSlide() {
      this.transitionName = 'prev'
      if (this.currentSlide - 1 >= 0) {
        this.currentSlide--
      } else {
        this.currentSlide = this.totalSlides - 1
      }
    },
    enterNextSlide() {
      this.transitionName = 'next'
      if (this.currentSlide + 1 < this.totalSlides) {
        this.currentSlide++
      } else {
        this.currentSlide = 0
      }
    },
    changeSlide(position) {
      if (position === 1) {
        this.enterNextSlide()
      } else {
        this.enterPreviousSlide()
      }
      // Using setTimeout to update classes after transition event is fired
      // Updating carousel classes before transition event does nothing
      setTimeout(() => {
        this.updateSlides()
      }, 10)
    },
    updateSlides() {
      this.$refs.carousel.children.forEach((child) => {
        child.classList = 'carousel-item'
      })
      this.$refs.carousel.children[this.currentSlide].classList =
        'carousel-item active-item'
    },
  },
}
</script>

<style lang="postcss" scoped>
.slider {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slider * {
  width: max-content;
  height: max-content;
}

.slide {
  width: 100%;
  top: 0;
  position: absolute;
}

.icons {
  position: absolute;
  top: 90%;
  width: 100%;
}

.icons > * {
  object-fit: cover;
  cursor: pointer;
}

/* GO TO NEXT SLIDE */
.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-next-enter {
  transform: translate(100%);
}
.slide-next-leave-to {
  transform: translate(-100%);
}

/* GO TO PREVIOUS SLIDE */
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-prev-enter {
  transform: translate(-100%);
}
.slide-prev-leave-to {
  transform: translate(100%);
}
</style>

<style lang="postcss">
.carousel-item {
  position: absolute;
  top: 0;
  color: white;
  display: none;
}

.carousel-item.active-item {
  display: initial;
}
</style>
