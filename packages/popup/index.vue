<template>
  <transition :name="currentTransition">
    <div
      v-if="shouldRender"
      v-show="value"
      :class="b({ [position]: position })"
      :style="style"
    >
      <slot />
    </div>
  </transition>
</template>

<script>
import create from '../utils/create';
import Popup from '../mixins/popup';

export default create({
  name: 'popup',

  mixins: [Popup],
  
  props: {
    round: {
      type: String,
      default: '0'
    },
    position: {
      type: String,
      default: 'center'
    },
    transition: String,
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    currentTransition() {
      return this.transition || (this.position ? `popup-slide-${this.position}` : 'h-fade');
    },
    style() {
      switch (this.position) {
        case 'center':
          return `border-radius: ${this.round}`
        case 'top':
          return `border-radius: 0 0 ${this.round} ${this.round}`
        case 'bottom':
          return `border-radius: ${this.round} ${this.round} 0 0`
        case 'right':
          return `border-radius: ${this.round} 0 0 ${this.round}`
        case 'left':
          return `border-radius: 0 ${this.round} ${this.round} 0`
        default:
          return `border-radius: ${this.round}`
      }
    }
  }
});
</script>
