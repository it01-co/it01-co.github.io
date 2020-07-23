<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <h-slider-group
        :active-key="activeKey"
        @change="onChange"
      >
        <h-slider v-for="item of tabs" :key="item" :title="item" />
      </h-slider-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {

  data() {
    return {
      activeKey: 2,
      tabs: ['主食','米饭','面条、粉','菜肴','水果','坚果']
    };
  },

  methods: {
    onChange(key) {
      this.activeKey = key;
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-slider {
  background-color: rgb(226,231,240);
  .h-slider-group {
    margin-left: 15px;
  }
}
</style>
