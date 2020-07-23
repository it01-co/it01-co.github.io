<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <h-button :animationDisplay="false" @click="show1 = true">{{ $t('button1') }}</h-button>
      <h-popup v-model="show1">{{ $t('content') }}</h-popup>
    </demo-block>

    <demo-block :title="$t('position')">
      <h-button :animationDisplay="false" @click="show2 = true;">{{ $t('button2') }}</h-button>
      <h-popup
        v-model="show2"
        position="bottom"
      >
      </h-popup>

      <h-button :animationDisplay="false" @click="show3 = true">{{ $t('button3') }}</h-button>
      <h-popup
        v-model="show3"
        position="top"
      >
      </h-popup>

      <h-button :animationDisplay="false" @click="show4 = true">{{ $t('button4') }}</h-button>
      <h-popup
        v-model="show4"
        position="right"
      >
      </h-popup>

      <h-button :animationDisplay="false" @click="show5 = true">{{ $t('button5') }}</h-button>
      <h-popup
        v-model="show5"
        position="left"
      >
      </h-popup>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      position: '弹出位置',
      button1: '弹出 Popup',
      button2: '底部弹出',
      button3: '顶部弹出',
      button4: '右侧弹出',
      button5: '左侧弹出',
    },
    'en-US': {
      position: 'Position',
      button1: 'Show Popup',
      button2: 'From Bottom',
      button3: 'From Top',
      button4: 'From Right',
      button5: 'From Left',
    }
  },

  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
    };
  },

  methods: {
    showDialog() {
      this.$dialog.confirm({
        title: 'confirm标题',
        message: '弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。'
      });
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-popup {
  .h-button {
    margin: 10px 0 10px 15px;
  }

  .h-popup {
    width: 60%;
    padding: 20px;
    box-sizing: border-box;

    &--bottom {
      width: 100%;
      height: 100px;
      border-radius: 0;
    }

    &--top {
      color: @white;
      width: 100%;
      border-radius: 0;
      height: 100px;
    }

    &--left,
    &--right {
      width: 100px;
      height: 100%;
    }
  }
}
</style>
