<template>
  <demo-section>
    <demo-block :title="$t('title')">
      <div class="lay-comtainer">
        <h-Laybg crevice="0px" size="10px" fillet="https://jkyy-ai-ego.cs.jiankangyouyi.com/evaluation-tcm/1/sy_bg_zuoshang.png"/>
      </div>
    </demo-block>
    <demo-block :title="$t('title1')">
      <div class="lay-comtainer">
        <h-Laybg color='red' crevice="5px" fillet="decoration"/>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title: '贴边显示',
      title1: '间隙显示'
    },
    'en-US': {
      title1: 'tiebian',
      title1: 'jianxi'
    }
  },

  data() {
    return {
    };
  },
  methods: {
    
  }
};
</script>

<style lang="less">
@import '../../style/var.less';
.lay-comtainer {
  width: 345px;
  height: 260px;
  background-color: #fff;
  position: relative;
  margin: 0 auto;
  box-shadow:0px 6px 20px 0px rgba(187,166,153,0.1);
}
</style>
