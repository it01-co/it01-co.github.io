<template>
  <demo-section>
    <demo-block :title="$t('title1')">
      <h-loading />
      <h-loading color="white" />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title1: 'Circular',
    },
    'en-US': {
      title1: 'Circular',
    }
  }
};
</script>

<style lang="less">
.demo-loading {
  .h-loading {
    display: inline-block;
    margin: 5px 0 5px 20px;
  }

  .h-loading--white {
    padding: 10px;
    border-radius: 3px;
    background-color: rgba(0, 0, 0, .5);
  }
}
</style>
