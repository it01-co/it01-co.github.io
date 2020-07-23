<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <h-collapse v-model="active1">
        <h-collapse-item :title="$t('title1')">{{ $t('content1') }}</h-collapse-item>
        <h-collapse-item :title="$t('title2')">{{ $t('content2') }}</h-collapse-item>
        <h-collapse-item
          :title="$t('title3')"
          disabled
        >
          {{ $t('content3') }}
        </h-collapse-item>
      </h-collapse>
    </demo-block>

    <demo-block :title="$t('accordion')">
      <h-collapse
        v-model="active2"
        accordion
      >
        <h-collapse-item :title="$t('title1')">{{ $t('content1') }}</h-collapse-item>
        <h-collapse-item :title="$t('title2')">{{ $t('content2') }}</h-collapse-item>
        <h-collapse-item :title="$t('title3')">{{ $t('content3') }}</h-collapse-item>
      </h-collapse>
    </demo-block>

    <demo-block :title="$t('titleSlot')">
      <h-collapse v-model="active3">
        <h-collapse-item>
          <div slot="title">{{ $t('title1') }}<h-icon name="completed" /></div>
          {{ $t('content1') }}
        </h-collapse-item>
        <h-collapse-item
          :title="$t('title2')"
          :value="$t('content')"
          icon="pen"
        >
          {{ $t('content2') }}
        </h-collapse-item>
      </h-collapse>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      accordion: '手风琴',
      titleSlot: '自定义标题内容',
      title1: 'health-ui-1',
      title2: 'health-ui-2',
      title3: 'health-ui-2',
      content: '自定义内容',
      content1: 'Health - 丰富、多样的移动端 Vue 组件库',
      content2: 'Health - 丰富、多样的移动端 Vue 组件库',
      content3: 'Health - 丰富、多样的移动端 Vue 组件库'
    },
    'en-US': {
     
    }
  },

  data() {
    return {
      active1: [0],
      active2: 0,
      active3: []
    };
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-collapse {
  .completed {
    vertical-align: middle;
    margin-left: 5px;
    font-size: 15px;
  }
}
</style>
