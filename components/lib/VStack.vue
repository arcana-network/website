<template>
  <div class="stack-variables" :class="classes" :style="styles">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VStack',
  props: {
    direction: {
      type: String,
      default: 'row',
      validator: (value) => ['row', 'column'].includes(value),
    },
    justify: {
      type: String,
      default: null,
      validator: (value) =>
        [
          'space-between',
          'space-around',
          'space-evenly',
          'center',
          'baseline',
        ].includes(value),
    },
    align: {
      type: String,
      default: null,
      validator: (value) =>
        ['start', 'end', 'stretch', 'center', 'baseline'].includes(value),
    },
    gap: {
      type: String,
      default: null,
    },
    wrap: {
      type: Boolean,
    },
    grow: {
      type: Number,
      default: null,
    },
    smDirection: {
      type: String,
      default: null,
      validator: (value) => ['row', 'column'].includes(value),
    },
    smJustify: {
      type: String,
      default: null,
      validator: (value) =>
        [
          'space-between',
          'space-around',
          'space-evenly',
          'center',
          'baseline',
        ].includes(value),
    },
    smAlign: {
      type: String,
      default: null,
      validator: (value) =>
        ['start', 'end', 'stretch', 'center', 'baseline'].includes(value),
    },
    smGap: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      classes: {},
      styles: {},
    }
  },
  mounted() {
    this.classes = {
      flex: true,
    }
    this.classes[this.direction] = true
    if (this.align) {
      this.classes['flex-' + this.align] = true
    }
    if (this.justify) {
      this.classes['justify-' + this.justify] = true
    }
    if (this.gap) {
      this.styles['--flex-gap'] = this.gap
      this.classes.gap = true
    }
    if (this.grow) {
      this.styles['flex-grow'] = this.grow
    }
    if (this.wrap) {
      this.styles['flex-wrap'] = 'wrap'
    }
    if (this.smDirection) {
      this.classes['sm-' + this.smDirection] = true
    }
    if (this.smAlign) {
      this.classes['sm-flex-' + this.smAlign] = true
    }
    if (this.smJustify) {
      this.classes['sm-justify-' + this.smJustify] = true
    }
    if (this.smGap) {
      this.styles['--sm-flex-gap'] = this.gap
      this.classes['sm-gap'] = true
    }
  },
}
</script>

<style lang="postcss" scoped>
.stack-variables {
  --flex-gap: 0;
  --sm-flex-gap: 0;
}
.flex {
  display: flex;
}
.flex-start {
  align-items: flex-start;
}
.flex-end {
  align-items: flex-end;
}
.flex-center {
  align-items: center;
}
.flex-stretch {
  align-items: stretch;
}
.flex-baseline {
  align-items: baseline;
}
.justify-space-between {
  justify-content: space-between;
}
.justify-space-evenly {
  justify-content: space-evenly;
}
.justify-space-around {
  justify-content: space-around;
}
.justify-center {
  justify-content: center;
}
.justify-baseline {
  justify-content: baseline;
}
.row {
  flex-direction: row;
}
.column {
  flex-direction: column;
}
.wrap {
  flex-wrap: wrap;
}
.gap {
  margin: calc(-1 * var(--flex-gap)) 0 0 calc(-1 * var(--flex-gap));
  width: calc(100% + var(--flex-gap));
}
.gap > * {
  margin: var(--flex-gap) 0 0 var(--flex-gap);
}

@media (max-width: 767px) {
  .sm-flex {
    display: flex;
  }
  .sm-flex-start {
    align-items: flex-start;
  }
  .sm-flex-end {
    align-items: flex-end;
  }
  .sm-flex-center {
    align-items: center;
  }
  .sm-flex-stretch {
    align-items: stretch;
  }
  .sm-flex-baseline {
    align-items: baseline;
  }
  .sm-justify-space-between {
    justify-content: space-between;
  }
  .sm-justify-space-evenly {
    justify-content: space-evenly;
  }
  .sm-justify-space-around {
    justify-content: space-around;
  }
  .sm-justify-center {
    justify-content: center;
  }
  .sm-justify-baseline {
    justify-content: baseline;
  }
  .sm-row {
    flex-direction: row;
  }
  .sm-column {
    flex-direction: column;
  }
  .sm-wrap {
    flex-wrap: wrap;
  }
  .sm-gap {
    margin: calc(-1 * var(--flex-gap)) 0 0 calc(-1 * var(--flex-gap));
    width: calc(100% + var(--flex-gap));
  }
  .sm-gap > * {
    margin: var(--flex-gap) 0 0 var(--flex-gap);
  }
}
</style>