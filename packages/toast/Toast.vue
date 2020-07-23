<template>
  <transition name="h-fade-toast">
    <div
      v-show="value"
      :class="b([position, fillet])"
    >
      <div>{{ message }}</div>
    </div>
  </transition>
</template>

<script>
import create from '../utils/create';
import Popup from '../mixins/popup';

export default create({
  name: 'toast',

  mixins: [Popup],

  props: {
    forbidClick: Boolean,
    message: [String, Number],
    position: {
      type: String,
      default: 'middle'
    },
    fillet: {
      type: String,
      default: 'default'
    }
  },

  data() {
    return {
      clickable: false
    };
  },

  mounted() {
    this.toggleClickale();
  },

  destroyed() {
    this.toggleClickale();
  },

  watch: {
    value() {
      this.toggleClickale();
    },

    forbidClick() {
      this.toggleClickale();
    }
  },

  methods: {
    toggleClickale() {
      const clickable = this.value && this.forbidClick;
      if (this.clickable !== clickable) {
        this.clickable = clickable;
        const action = clickable ? 'add' : 'remove';
        document.body.classList[action]('h-toast--unclickable');
      }
    }
  }
});
</script>
