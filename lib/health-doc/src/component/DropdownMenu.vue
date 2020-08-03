<template>
  <ul class="h-doc-dropdown" :style="{ top: top + 'px'}">
    <li v-for="(value, key) in nav" class="h-doc-dropdown__item">
      <a :href="value">{{ key }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'h-doc-dropdown',

  props: {
    nav: Object,
    top: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="less">
@import '../style/variable';

.h-doc-dropdown {
  position: absolute;
  top: 40px;
  right: 0px;
  padding: 8px 0;
  z-index: 10;
  background: #fff;
  border: 1px solid @h-doc-border-color;
  text-align: left;
  border-radius: 4px;

  &__item {
    display: block;
    line-height: 2.2;
    font-size: 13px;
    letter-spacing: 1px;
    cursor: pointer;

    a {
      display: block;
      padding: 0 20px;
      color: @h-doc-text-color;

      &:hover {
        color: @h-doc-blue;
      }
    }
  }
}
</style>
