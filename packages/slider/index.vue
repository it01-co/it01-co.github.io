<template>
  <a
    :class="[b({ select })]"
    :href="url"
    @click="onClick"
  >
    {{ title }}
  </a>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'slider',

  props: {
    url: String,
    title: String
  },

  inject: ['hSliderGroup'],

  created() {
    this.parent.sliders.push(this);
  },

  beforeDestroy() {
    this.parent.sliders = this.parent.sliders.filter(item => item !== this);
  },

  computed: {
    parent() {
      return this.hSliderGroup;
    },

    select() {
      return (
        this.parent.sliders.indexOf(this) === +this.parent.activeKey
      );
    }
  },

  methods: {
    onClick() {
      const index = this.parent.sliders.indexOf(this);
      this.$emit('click', index);
      this.parent.$emit('change', index);
    }
  }
});
</script>
