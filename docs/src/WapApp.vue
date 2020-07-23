<template>
  <div>
    <h-nav-bar
      v-show="title && showNav"
      class="h-doc-nav-bar"
      :title="title"
      left-arrow
      left-text="返回"
      @click-left="onBack"
    >
    </h-nav-bar>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
function getQueryString(name) {
  const arr = location.search.substr(1).split('&');
  for (let i = 0, l = arr.length; i < l; i++) {
    const item = arr[i].split('=');
    if (item.shift() === name) {
      return decodeURIComponent(item.join('='));
    }
  }
  return '';
}

export default {
  computed: {
    title() {
      const { name } = this.$route.meta;
      return name ? name.replace(/-/g, '') : '';
    },

    demoLink() {
      return ``;
    },

    showNav() {
      return getQueryString('hide_nav') !== '1';
    }
  },

  methods: {
    onBack() {
      history.back();
    }
  }
};
</script>

<style lang="less">
@import '../../packages/style/var';
html,body {
  width: 100%;
  min-width: 100%;
  &::-webkit-scrollbar {display:none}
}
body {
  line-height: 1;
  color: @text-color;
  background-color: #fafafa;
  font-family: 'PingFang SC', Helvetica, 'STHeiti STXihei', 'Microsoft YaHei', Tohoma, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.h-doc-nav-bar {
  .h-nav-bar__title {
    font-size: 15px;
    text-transform: capitalize;
  }

  .h-nav-bar__left,
  .h-nav-bar__right {
    cursor: pointer;
  }

  .h-nav-bar__right {
    font-size: 16px;

    .h-icon {
      vertical-align: -3px;
    }
  }
}

.h-doc-demo-section {
  margin-top: -46px;
  padding-top: 46px;
}
</style>
