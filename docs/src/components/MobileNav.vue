<!-- eslint-disable  -->
<template>
  <h-collapse
    v-model="active"
    class="mobile-nav"
  >
    <h-collapse-item
      class="mobile-nav__item"
      :title="group.groupName"
      :name="group.groupName"
    >
      <template v-for="(navItem, index) in group.list">
        <h-cell
          v-if="!navItem.disabled"
          :key="index"
          :to="'/' + base + navItem.path"
          :title="navItem.title"
          is-link
        />
      </template>
    </h-collapse-item>
  </h-collapse>
</template>

<script>
export default {
  props: {
    base: String,
    group: Object
  },

  data() {
    return {
      active: []
    };
  }
};
</script>

<style lang="less">
.mobile-nav {
  &__item {
    margin-bottom: 20px;
  }

  &::after {
    display: none;
  }

  .h-collapse-item__content {
    padding: 0;
  }

  .h-collapse-item__title {
    font-size: 16px;
    line-height: 36px;
    align-items: center;
  }
}
</style>
