<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <h-cell-group>
        <h-cell
          :title="$t('cell')"
          :value="$t('content')"
        />
        <h-cell
          :title="$t('cell')"
          :value="$t('content')"
          :label="$t('desc')"
        />
      </h-cell-group>
    </demo-block>

    <demo-block :title="$t('largeSize')">
      <h-cell
        :title="$t('cell')"
        :value="$t('content')"
        size="large"
      />
      <h-cell
        :title="$t('cell')"
        :value="$t('content')"
        size="large"
        :label="$t('desc')"
      />
    </demo-block>

    <demo-block :title="$t('showIcon')">
      <h-cell
        :title="$t('cell')"
        :value="$t('content')"
        icon="pen"
      />
    </demo-block>

    <demo-block :title="$t('valueOnly')">
      <h-cell :value="$t('content')" />
    </demo-block>

    <demo-block :title="$t('showArrow')">
      <h-cell
        :title="$t('cell')"
        is-link
      />
      <h-cell
        :title="$t('cell')"
        is-link
        :value="$t('content')"
      />
      <h-cell
        :title="$t('cell')"
        is-link
        arrow-direction="down"
        :value="$t('content')"
      />
    </demo-block>

    <demo-block :title="$t('router')">
      <h-cell
        :title="$t('cell')"
        is-link
        url=""
      />
      <h-cell
        :title="$t('cell')"
        is-link
        to="index"
      />
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <h-cell
        :value="$t('content')"
        icon="pen"
        is-link
      >
        <template slot="title">
          <span class="custom-text">{{ $t('cell') }}</span>
          <h-icon name="pen" />
        </template>
      </h-cell>
      <h-cell
        :title="$t('cell')"
        icon="pen"
        is-link
      />
      <h-cell :border="false">
        <template slot="title">
          <i class="titImg"/>
          <div class="rightText">
            <h3>大盘鸡</h3>
            <p>114打卡/60克</p>
          </div>
        </template>
        <h-icon
          slot="right-icon"
          name="refresh-fill"
          size="36px"
          style="line-height: normal"
        />
      </h-cell>
      <h-cell :border="false">
        <template slot="title">
          <i class="titImg"/>
          <div class="rightText">
            <h3>大盘鸡</h3>
            <p>114打卡/60克</p>
          </div>
        </template>
        <h-icon
          slot="right-icon"
          name="refresh-fill"
          size="36px"
          style="line-height: normal"
        />
      </h-cell>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      cell: '单元格',
      valueOnly: '只设置 value',
      showIcon: '展示图标',
      showArrow: '展示箭头',
      largeSize: '单元格大小',
      router: '页面跳转'
    },
    'en-US': {
      cell: 'Cell title',
      valueOnly: 'Value only',
      showIcon: 'Left Icon',
      showArrow: 'Link',
      largeSize: 'Size',
      router: 'Router'
    }
  }
};
</script>

<style lang="less">
.demo-cell {
  .custom-text {
    margin-right: 5px;
    vertical-align: middle;
  }

  .custom-icon {
    line-height: 24px;
  }
  .titImg {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #000;
    display: inline-block;
    vertical-align: middle;
  }
  .rightText {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    h3 {
      font-size:15px;
      font-weight:600;
      color:rgba(38,38,38,1);
      line-height:15px;
      margin-bottom: 8px;
    }
    p {
      font-size:12px;
      font-weight:400;
      color:rgba(140,140,140,1);
      line-height:12px;
    }
  }
}
</style>
