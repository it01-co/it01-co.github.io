<template>
  <transition name="h-slide-down">
    <div
      v-show="value"
      :class="b()"
      :style="style"
    >
      {{ message }}
    </div>
  </transition>
</template>

<script>
import Popup from '../mixins/popup';
import create from '../utils/create';

export default create({
  name: 'notify',

  mixins: [Popup],

  props: {
    message: [String, Number],
    color: {
      type: String,
      value: '#fff'
    },
    background: {
      type: String,
      value: '#f44'
    },
    duration: {
      type: Number,
      value: 3000
    },
    lockScroll: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    style() {
      return {
        color: this.color,
        background: this.background
      };
    }
  }
});
</script>
