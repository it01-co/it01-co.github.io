<template>
  <section class="h-doc-demo-block">
    <h2 class="h-doc-demo-block__title">{{ title }}</h2>
    <slot />
  </section>
</template>

<script>
export default {
  name: 'h-doc-demo-block',

  props: {
    title: String
  }
};
</script>

<style lang="less">
@import '../style/variable';

.h-doc-demo-block {
  &__title {
    margin: 0;
    font-weight: normal;
    font-size: 14px;
    color: @h-doc-text-light-blue;
    padding: 35px 15px 15px;
  }

  &:first-of-type {
    .h-doc-demo-block__title {
      padding-top: 20px;
    }
  }
}
</style>
