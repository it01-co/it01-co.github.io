<template>
  <transition name="h-fade">
    <div
      v-show="visible"
      class="h-overlay"
      :class="className"
      :style="style"
      @touchmove.prevent.stop
      @click="$emit('click', $event)"
    />
  </transition>
</template>

<script>
export default {
  name: 'overlay',

  props: {
    zIndex: Number,
    visible: Boolean,
    className: String,
    custohtyle: Object
  },

  computed: {
    style() {
      return {
        zIndex: this.zIndex,
        ...this.custohtyle
      };
    }
  }
};
</script>
