<template>
  <div class="select-box">
    <VStack class="mobile-remove tablet-remove" gap="2rem" wrap>
      <div
        v-for="option in options"
        :key="option"
        class="select-button-card"
        :class="{ 'selected-button': option === value }"
        @click.stop="$emit('change', option)"
      >
        <span class="button-text">{{ option }}</span>
      </div>
    </VStack>
    <VDropdown
      class="laptop-remove select-box-dropdown"
      :options="options"
      :value="value"
      placeholder="Select a value"
      @change="$emit('change', $event.value)"
    ></VDropdown>
  </div>
</template>

<script>
export default {
  name: 'VSelectBox',
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.select-button-card {
  padding: 1rem 1.5rem;
  border-radius: 20px;
  cursor: pointer;
}

.select-button-card .button-text {
  color: var(--color-grey);
  font-family: var(--font-sans);
  font-size: 2rem;
}

.selected-button {
  background: linear-gradient(141.48deg, #161616 -4.56%, #151515 135.63%);
  box-shadow: inset -2px -5px 10px rgba(57, 57, 57, 0.44),
    inset 5px 5px 10px rgba(11, 11, 11, 0.5);
}

.selected-button .button-text {
  color: var(--color-blue);
  font-weight: 600;
}

.select-box-dropdown {
  width: 100%;
  max-width: 24rem;
}
</style>

<style>
.custom-select__trigger,
.custom-option {
  font-size: 1.25rem !important;
}
</style>
