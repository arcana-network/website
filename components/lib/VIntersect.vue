<script>
export default {
  name: 'VIntersect',
  abstract: true,
  props: {
    threshold: {
      type: [Number, Array],
      default: 0,
    },
  },
  emits: ['enter', 'leave'],
  mounted() {
    this.observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0]
        this.$emit(firstEntry.isIntersecting ? 'enter' : 'leave', [firstEntry])
      },
      {
        threshold: this.threshold,
      }
    )

    this.$nextTick(() => {
      if (
        !this.$slots.default ||
        (this.$slots.default && this.$slots.default.length > 1)
      ) {
        // eslint-disable-next-line no-console
        console.warn('VIntersect must have exactly one child component.')
      }
      this.observer.observe(this.$slots.default[0].elm)
    })
  },
  destroyed() {
    this.observer.disconnect()
  },
  render() {
    return this.$slots.default ? this.$slots.default[0] : null
  },
}
</script>
