<template>
  <demo-section>
    <demo-block :title="$t('type')">
      <div class="demo-button-row">
        <h-button tag="div" type="primary">{{ $t('primary') }}</h-button>
        <h-button type="default">{{ $t('default') }}</h-button>
      </div>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <h-button
        disabled
        type="primary"
      >
        {{ $t('disabled') }}
      </h-button>
      <h-button
        disabled
        type="default"
      >
        {{ $t('disabled') }}
      </h-button>
    </demo-block>

    <demo-block :title="$t('loading')">
      <h-button
        loading
        text="加载"
        type="primary"
      />
      <h-button
        loading
        text="加载"
        type="default"
      />
    </demo-block>

    <demo-block :title="$t('shape')">
      <h-button
        type="primary"
        square
      >
        {{ $t('square') }}
      </h-button>
      <h-button
        type="default"
        round
      >
        {{ $t('round') }}
      </h-button>
    </demo-block>

    <demo-block :title="$t('size')">
      <h-button round type="primary" size="large">{{ $t('large') }}</h-button>
      <h-button size="normal">{{ $t('normal') }}</h-button>
      <h-button size="small">{{ $t('small') }}</h-button>
      <h-button type="primary" size="mini">{{ $t('mini') }}</h-button>
    </demo-block>

    <demo-block title="自定义样式">
      <h-button
        class="coustBtn"
        round
        size="large"
        type="primary"
        :activeStyle="{ background: 'red',borderColor: '#000', color: 'blue' }"
      >
        <h-icon name="del" /> 开始测评
      </h-button>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      type: '按钮类型',
      size: '按钮尺寸',
      loading: '加载状态',
      shape: '按钮形状',
      default: '默认按钮',
      primary: '主要按钮',
      large: '大号按钮',
      normal: '普通按钮',
      small: '小型按钮',
      mini: '迷你按钮',
      square: '方形按钮',
      round: '圆形按钮'
    },
    'en-US': {
      type: 'Type',
      size: 'Size',
      loading: 'Loading',
      shape: 'Shape',
      default: 'Default',
      primary: 'Primary',
      large: 'Large',
      normal: 'Normal',
      small: 'Small',
      mini: 'Mini',
      square: 'Square',
      round: 'Round'
    }
  }
};
</script>

<style lang="less">
.demo-button {
  font-size: 0;
  .h-button {
    user-select: none;
    &--large {
      margin-bottom: 15px;
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: 10px;
    }

    .h-loading {
      margin: 0 18px;
    }
  }

  .h-doc-demo-block {
    padding: 0 15px;
  }

  .h-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: 10px;
  }
  .coustBtn {
    background-image: url(https://jkyy-ai-ego.cs.jiankangyouyi.com/evaluation-tcm/6/sy_button_bg.png);
    background-color: #54C6C9;
    border-color: #54C6C9;
    color: #ffffff;
    box-shadow: 0 12px 30px 0 rgba(84, 198, 201, 0.5);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 98.5% 92%;
    font-weight: bold;
  }
}
</style>
