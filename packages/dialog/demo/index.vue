<template>
  <demo-section>
    <demo-block :title="$t('alert1')">
      <h-button
        type="primary"
        plain
        @click="onClickAlert"
      >
        {{ $t('alert1') }}
      </h-button>
      <h-button
        type="primary"
        plain
        @click="onClickAlert2"
      >
        {{ $t('alert2') }}
      </h-button>
    </demo-block>

    <demo-block :title="$t('confirm')">
      <h-button
        type="primary"
        plain
        @click="onClickConfirm"
      >
        {{ $t('confirm') }}
      </h-button>
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <h-button
        plain
        @click="show = true"
      >
        {{ $t('advancedUsage') }}
      </h-button>
      <h-dialog
        v-model="show"
        show-cancel-button
        :before-close="beforeClose"
      >
      <div class="my-del">确认删除？</div>
      </h-dialog>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      alert1: '消息提示',
      alert2: '无标题提示',
      confirm: '消息确认',
      content: 'Health - 丰富、多样的移动端 Vue 组件库'
    },
    'en-US': {
      alert1: 'Alert',
      alert2: 'Alert without title',
      confirm: 'Confirm dialog'
    }
  },

  data() {
    return {
      show: false,
      username: '',
      password: ''
    };
  },

  methods: {
    onClickAlert() {
      this.$dialog.alert({
        title: this.$t('title'),
        message: this.$t('content')
      });
    },

    onClickAlert2() {
      this.$dialog.alert({
        message: this.$t('content')
      });
    },

    onClickConfirm() {
      this.$dialog.confirm({
        title: this.$t('title'),
        message: this.$t('content')
      });
    },

    beforeClose(action, done) {
      if (action === 'confirm') {
        setTimeout(done, 1000);
      } else {
        done();
      }
    }
  }
};
</script>

<style lang="less">
.demo-dialog {
  .h-doc-demo-block > .h-button {
    margin-left: 15px;
  }
  .my-del {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
