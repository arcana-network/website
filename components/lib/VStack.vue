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
      validator: (value) =>
        ['row', 'column', 'row-reverse', 'column-reverse'].includes(value),
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
      validator: (value) =>
        ['row', 'column', 'row-reverse', 'column-reverse'].includes(value),
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
    mdDirection: {
      type: String,
      default: null,
      validator: (value) =>
        ['row', 'column', 'row-reverse', 'column-reverse'].includes(value),
    },
    mdJustify: {
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
    mdAlign: {
      type: String,
      default: null,
      validator: (value) =>
        ['start', 'end', 'stretch', 'center', 'baseline'].includes(value),
    },
    mdGap: {
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
  created() {
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
      this.styles['--sm-flex-gap'] = this.smGap
      this.classes['sm-gap'] = true
    }
    if (this.mdDirection) {
      this.classes['md-' + this.mdDirection] = true
    }
    if (this.mdAlign) {
      this.classes['md-flex-' + this.mdAlign] = true
    }
    if (this.mdJustify) {
      this.classes['md-justify-' + this.mdJustify] = true
    }
    if (this.mdGap) {
      this.styles['--md-flex-gap'] = this.mdGap
      this.classes['md-gap'] = true
    }
  },
}
</script>

<style lang="postcss" scoped>
@import url('./media-query-helper.css');

.stack-variables {
  --flex-gap: 0;
  --sm-flex-gap: 0;
  --md-flex-gap: 0;
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
.row-reverse {
  flex-direction: row-reverse;
}
.column-reverse {
  flex-direction: column-reverse;
}
.wrap {
  flex-wrap: wrap;
}
.gap {
  margin: calc(-1 * var(--flex-gap)) 0 0 calc(-1 * var(--flex-gap));
}
.gap > * {
  margin: var(--flex-gap) 0 0 var(--flex-gap);
}

@media (--viewport-medium) {
  .md-flex-start {
    align-items: flex-start;
  }
  .md-flex-end {
    align-items: flex-end;
  }
  .md-flex-center {
    align-items: center;
  }
  .md-flex-stretch {
    align-items: stretch;
  }
  .md-flex-baseline {
    align-items: baseline;
  }
  .md-justify-space-between {
    justify-content: space-between;
  }
  .md-justify-space-evenly {
    justify-content: space-evenly;
  }
  .md-justify-space-around {
    justify-content: space-around;
  }
  .md-justify-center {
    justify-content: center;
  }
  .md-justify-baseline {
    justify-content: baseline;
  }
  .md-row {
    flex-direction: row;
  }
  .md-column {
    flex-direction: column;
  }
  .md-row-reverse {
    flex-direction: row-reverse;
  }
  .md-column-reverse {
    flex-direction: column-reverse;
  }
  .md-wrap {
    flex-wrap: wrap;
  }
  .md-gap {
    margin: calc(-1 * var(--md-flex-gap)) 0 0 calc(-1 * var(--md-flex-gap));
  }
  .md-gap > * {
    margin: var(--md-flex-gap) 0 0 var(--md-flex-gap);
  }
}

@media (--viewport-small) {
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
  .sm-row-reverse {
    flex-direction: row-reverse;
  }
  .sm-column-reverse {
    flex-direction: column-reverse;
  }
  .sm-wrap {
    flex-wrap: wrap;
  }
  .sm-gap {
    margin: calc(-1 * var(--sm-flex-gap)) 0 0 calc(-1 * var(--sm-flex-gap));
  }
  .sm-gap > * {
    margin: var(--sm-flex-gap) 0 0 var(--sm-flex-gap);
  }
}
</style>
