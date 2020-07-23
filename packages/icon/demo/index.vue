<template>
  <demo-section>
    <h-tabs
      v-model="tab"
      sticky
    >
      <h-tab title="基础图标">
        <h-col
          v-for="icon in icons.basic"
          :key="icon"
          span="6"
          @click.native="noyify(icon)" 
        > 
          <h-icon v-clipboard:copy="invitationCode" :name="icon" />
          <span class="h-ellipsis">{{ icon }}</span>
        </h-col>
      </h-tab>
      <h-tab title="线框风格">
        <h-col
          v-for="icon in icons.outline"
          :key="icon"
          span="6"
          @click.native="noyify(icon)" 
        >
          <h-icon v-clipboard:copy="invitationCode" :name="icon" />
          <span class="h-ellipsis">{{ icon }}</span>
        </h-col>
      </h-tab>
      <h-tab title="实底风格">
        <h-col
          v-for="icon in icons.filled"
          :key="icon"
          span="6"
          @click.native="noyify(icon)" 
        >
          <h-icon v-clipboard:copy="invitationCode" :name="icon" />
          <span class="h-ellipsis">{{ icon }}</span>
        </h-col>
      </h-tab>
    </h-tabs>
    <div>{{ invitationCode }}</div>
  </demo-section>
</template>

<script>
import icons from '../icon'
export default {
  i18n: {
    'zh-CN': {
      title: '图标列表',
      basic: '基础图标'
    },
    'en-US': {
      title: 'Icon List',
      basic: 'Basic Icon'
    }
  },

  data() {
    return {
      tab: 0,
      icons,
      invitationCode: ''
    };
  },
  methods: {
    noyify(val) {
      this.invitationCode = '<h-icon name="'+ val +'" />'
      this.$notify({
        message: `复制成功：<h-icon name="${val}" />`,
        duration: 2000,
        background: '#1989fa'
      });
    }
  }
};
</script>

<style lang="less">
@import '../../style/var.less';
.demo-icon {
  font-size: 0;

  &-list {
    padding-top: 10px;
    box-sizing: border-box;
    min-height: calc(100vh - 65px);
  }

  .h-col {
    float: none;
    text-align: center;
    height: 100px;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    &:active {
      background-color: @active-color;
    }
    span {
      display: block;
      padding: 0 5px;
      font-size: 12px;
      line-height: 14px;
    }
  }

  .h-icon {
    display: inline-block;
    font-size: 32px;
    color: rgb(69, 90, 100);
    margin: 20px 0 10px!important;
  }
  .h-tabs__content {
    width: auto;
    margin: 20px;
    background-color: #fff;
  }
}
</style>
