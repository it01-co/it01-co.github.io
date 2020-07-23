<template>
  <component
    :is="tag"
    :type="nativeType"
    :disabled="disabled"
    @touchstart="animationDisplay?changeActive():''" 
    @touchend="animationDisplay?removeActive():''"
    :style="[
      {transform: touchstart?'scale(.95)':'scale(1)'},
      touchstart?activeStyle:''
    ]"
    :class="b([
      type,
      size,
      {
        block,
        round,
        square,
        loading,
        disabled,
        unclickable: disabled || loading
      }
    ])"
    @click="onClick"
  >
    <loading
      v-if="loading"
      size="20px"
      :color="type === 'default' ? void 0 : ''"
    />
    <span
      v-else
      :class="b('text')"
    >
      <slot>{{ text }}</slot>
    </span>
  </component>
</template>

<script>
import create from '../utils/create';
export default create({
  name: 'button',
  data() {
    return {
      touchstart: false,
      longTimer: null,
      startTime: 0,
    }
  },
  props: {
    text: String,
    block: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    disabled: Boolean,
    nativeType: String,
    activeStyle: Object,
    animationDisplay: {
      type: Boolean,
      default: true
    },
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },

  methods: {
    onClick(event) {
      if (!this.loading && !this.disabled) {
        this.$emit('click', event);
      }
    },
    changeActive(){
      this.startTime = new Date().getTime();
      if(this.disabled || this.loading) return
      this.touchstart = true
    },
    removeActive(){
      let time = 200 - (new Date().getTime() - this.startTime)
      if(time < 0) time = 0
      this.longTimer = setTimeout(() => {
        this.touchstart = false
      },time)
    },
    beforeDestroy () {
      clearTimeout(this.longTimer)
      this.longTimer = null
    }
  }
});
</script>
