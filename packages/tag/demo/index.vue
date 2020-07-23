<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <h-tag select>{{ $t('tag') }}</h-tag>
    </demo-block>

    <demo-block :title="$t('customColor')">
      <h-tag class="my-tag" select>多选题</h-tag>
    </demo-block>

    <demo-block title="带删除">  
      <h-button size="small" @click="add">添加</h-button><hr>
      <transition-group  name="list-complete">
        <!-- 对数组，增删操作不要使用索引作为key，原因自己google -->
        <h-tag class="list-complete-item" v-for="(item, i) in list" :key="item" @close="close(i, $event)" clear>{{ item }}</h-tag>
      </transition-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      customColor: '自定义颜色',
    },
    'en-US': {
      customColor: 'Custom Color',
    }
  },
  data() {
    return {
      list: ['瓜子','花生','八宝粥','长文字长文字长文字长文字长文字长文字长文字长文字长文字长文字长文字长文字长文字长文字长文字长文字','油条','老豆腐','豆浆'],
      num: 1
    }
  },
  methods: {
    close(i, e) {   // hack 待后续有更好的方法替代
      const el = e.currentTarget.parentElement;
      el.style.opacity=0;
      const timer = setTimeout(() => {
        this.list.splice(i,1);
        clearTimeout(timer);
      }, 320);
    },
    add() {
      this.list.push(`新增${this.num++}`)
    }
  }
};
</script>

<style lang="less">
.list-complete-item {
  transition: all .32s;
}
.list-complete-enter{
  opacity: 0;
}
.list-complete-leave-active {
  position: absolute;
}

.demo-tag {
  .h-tag--select {
    &:first-of-type {
      margin-left: 15px;
    }
  }
  .my-tag {
    color: #fff;
    background-color: rgba(255,130,152,1);
    &::after {
      border-top-color: rgba(196,100,117,1);
    }
  }
}
</style>
