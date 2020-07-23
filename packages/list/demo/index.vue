<template>
  <demo-section>
    <h-tabs>
      <h-tab :title="$t('basicUsage')">
        <h-pull-refresh
          v-model="list[0].refreshing"
          @refresh="onRefresh(0)"
        >
          <h-list
            v-model="list[0].loading"
            :finished="list[0].finished"
            :finished-text="$t('finishedText')"
            @load="onLoad(0)"
          >
            <h-cell
              v-for="item in list[0].items"
              :key="item"
              :title="item"
            />
          </h-list>
        </h-pull-refresh>
      </h-tab>
      <h-tab :title="$t('errorInfo')">
        <h-pull-refresh
          v-model="list[1].refreshing"
          @refresh="onRefresh(1)"
        >
          <h-list
            v-model="list[1].loading"
            :finished="list[1].finished"
            :error.sync="list[1].error"
            :error-text="$t('errorText')"
            @load="onLoad(1)"
          >
            <h-cell
              v-for="item in list[1].items"
              :key="item"
              :title="item"
            />
          </h-list>
        </h-pull-refresh>
      </h-tab>
    </h-tabs>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      errorInfo: '错误提示',
      finishedText: '没有更多了',
      errorText: '请求失败，点击重新加载'
    },
    'en-US': {
      errorInfo: 'Error Info',
      finishedText: 'Finished',
      errorText: 'Request failed. Click to reload'
    }
  },

  data() {
    return {
      list: [{
        items: [],
        refreshing: false,
        loading: false,
        error: false,
        finished: false
      }, {
        items: [],
        refreshing: false,
        loading: false,
        error: false,
        finished: false
      }]
    };
  },

  methods: {
    onLoad(index, isRefresh) {
      const list = this.list[index];
      list.loading = true;
      setTimeout(() => {
        if (isRefresh) {
          list.items = [];
        }
        for (let i = 0; i < 10; i++) {
          const text = list.items.length + 1;
          list.items.push(text < 10 ? '0' + text : text);
        }
        list.loading = false;
        // 模拟错误请求
        if (index === 1 && list.items.length === 10 && !list.error) {
          list.error = true;
        } else {
          list.error = false;
        }
        if (list.items.length >= 40) {
          list.finished = true;
        }
      }, 500);
    },
    onRefresh(index) {
      const list = this.list[index];
      setTimeout(() => {
        list.error = false;
        list.finished = false;
        list.refreshing = false;
        this.onLoad(index, true);
      }, 1000);
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';
.demo-list {
  .h-cell {
    text-align: center;
  }
  .page-desc {
    margin: 0;
    padding: 5px 0;
    color: @gray;
    font-size: 14px;
    text-align: center;
    &--text {
      margin: 0;
    }
    &--option {
      margin: 12px;
    }
  }
  .h-checkbox__label {
    color: @gray;
  }
}
</style>
