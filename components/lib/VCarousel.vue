<template>
  <div class="position-relative slider">
    <transition-group :name="'slide-' + transitionName" tag="div">
      <div :key="currentSlide" class="slide position-absolute">
        <slot />
      </div>
    </transition-group>
    <v-stack
      class="icons position-absolute"
      style="top: 90%; width: 100%"
      gap="1.5rem"
      md-justify="space-around"
      sm-justify="space-evenly"
    >
      <v-image :src="arrowLeft" @click.stop="(ev) => $emit('prev', ev)" />
      <v-image :src="arrowRight" @click.stop="(ev) => $emit('next', ev)" />
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
  props: {
    currentSlide: {
      type: [String, Number],
      required: true,
    },
    transitionName: {
      type: String,
      required: true,
      validator: (value) => ['next', 'prev'].includes(value),
    },
  },
  data() {
    return {
      arrowLeft: ArrowLeftIcon,
      arrowRight: ArrowRightIcon,
    }
  },
}
</script>

<style lang="postcss" scoped>
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

.slider {
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
}

.icons > * {
  object-fit: cover;
  cursor: pointer;
}
</style>
