<template>
  <div :class="['h-doc-simulator', { 'h-doc-simulator-fixed': isFixed }]">
    <iframe ref="iframe" :src="src" :style="simulatorStyle" frameborder="0" />
  </div>
</template>

<script>
export default {
  name: 'h-doc-simulator',

  props: {
    src: String
  },

  data() {
    return {
      scrollTop: window.scrollY,
      windowHeight: window.innerHeight
    };
  },

  mounted() {
    window.addEventListener('scroll', () => {
      this.scrollTop = window.scrollY;
    });
    window.addEventListener('resize', () => {
      this.windowHeight = window.innerHeight;
    });
  },

  computed: {
    isFixed() {
      return this.scrollTop > 60;
    },

    simulatorStyle() {
      const height = Math.min(640, this.windowHeight - 90);
      return {
        height: height + 'px'
      };
    }
  }
};
</script>

<style lang="less">
@import '../style/variable';

.h-doc-simulator {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  border-radius: 6px;
  background: #fafafa;
  box-sizing: border-box;
  right: @h-doc-padding;
  width: @h-doc-simulator-width;
  min-width: @h-doc-simulator-width;
  top: calc(@h-doc-padding + @h-doc-header-top-height);
  box-shadow: #ebedf0 0 4px 12px;

  @media (max-width: 1300px) {
    width: @h-doc-simulator-small-width;
    min-width: @h-doc-simulator-small-width;
  }

  @media (max-width: 1100px) {
    left: 750px;
    right: auto;
  }

  @media (min-width: @h-doc-row-max-width) {
    right: 50%;
    margin-right: calc(-@h-doc-row-max-width/2 + 40px);
  }

  &-fixed {
    position: fixed;
    top: @h-doc-padding;
  }

  iframe {
    width: 100%;
    display: block;
  }
}
</style>
