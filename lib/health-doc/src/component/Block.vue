<template>
  <div class="h-doc-block">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'h-doc-block'
};
</script>

<style lang="less">
@import '../style/variable';

.h-doc-block {
  display: flex;
  margin-bottom: 20px;

  .highlight {
    flex: 1;
    box-sizing: border-box;

    pre {
      word-break: break-all;
    }
  }
}
</style>
