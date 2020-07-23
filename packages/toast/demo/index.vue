<template>
  <demo-section>
    <demo-block :title="$t('title1')">
      <h-button @click="$toast({message: $t('text')})">{{ $t('title1') }}</h-button>
      <h-button @click="$toast({message: $t('longText'), fillet: 'fillet', forbidClick: true})">{{ $t('longTextButton') }}</h-button>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      loading: '加载中',
      title1: '文字提示',
      text: '提示内容',
      longText: '这是一条长文字提示，超过一定字数就会换行',
      longTextButton: '长文字提示'
    },
    'en-US': {
      title1: 'Text',
      text: 'Some messages',
      longText: 'This is a long message, text will wrap when over a certain length',
      longTextButton: 'Long Text'
    }
  },

  mounted () {
  }
};
</script>

<style lang="less">
.demo-toast {
  .h-button {
    margin-left: 15px;
  }
}
</style>
