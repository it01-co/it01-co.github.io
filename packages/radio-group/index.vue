<template>
  <div :class="b([size])">
    <slot />
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'radio-group',

  props: {
    value: null,
    disabled: Boolean,
    size: {
      default: 'normal',
      type: String
    }
  },

  watch: {
    value(value) {
      this.$emit('change', value);
    }
  }
});
</script>