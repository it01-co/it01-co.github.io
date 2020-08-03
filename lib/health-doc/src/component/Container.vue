<template>
  <div class="h-doc-container h-doc-row" :class="{ 'h-doc-container--with-simulator': hasSimulator }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'h-doc-container',

  props: {
    hasSimulator: Boolean
  }
};
</script>

<style lang="less">
@import '../style/variable';

.h-doc-container {
  overflow: hidden;
  box-sizing: border-box;
  background-color: #fff;
  padding-left: @h-doc-nav-width;

  &--with-simulator {
    padding-right: calc(@h-doc-simulator-width + @h-doc-padding);

    @media (max-width: 1300px) {
      padding-right: calc(@h-doc-simulator-small-width + @h-doc-padding);
    }
  }
}
</style>
