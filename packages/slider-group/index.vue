<template>
  <div
    :class="b()"
  >
    <slot />
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'slider-group',

  props: {
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },

  provide() {
    return {
      hSliderGroup: this
    };
  },

  data() {
    return {
      sliders: []
    };
  }
});
</script>
