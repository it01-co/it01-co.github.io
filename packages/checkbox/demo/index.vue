<template>
  <demo-section>
    <demo-block :title="$t('basicUsage') +'：'+ checkbox1">
      <h-checkbox style="margin-left: 15px" v-model="checkbox1">{{ $t('checkbox') }}</h-checkbox>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <h-checkbox
        :value="false"
        disabled
        style="margin-left: 15px"
      >
        {{ $t('checkbox') }}
      </h-checkbox>
      <h-checkbox
        :value="true"
        disabled
        style="margin-left: 15px"
      >
        {{ $t('checkbox') }}
      </h-checkbox>
    </demo-block>

    <demo-block :title="$t('title3')">
      <h-checkbox-group v-model="result">
        <h-checkbox
          v-for="(item, index) in list"
          center
          :key="index"
          :name="item"
        >
          {{ $t('checkbox') }} {{ item }}
        </h-checkbox>
      </h-checkbox-group>
    </demo-block>

    <demo-block :title="$t('title4')">
      <h-checkbox-group
        v-model="result3"
        :max="2"
      >
        <h-checkbox
          v-for="(item, index) in list"
          :key="index"
          :name="item"
        >
          {{ $t('checkbox') }} {{ item }}
        </h-checkbox>
      </h-checkbox-group>
    </demo-block>

    <demo-block :title="' 互斥用法：result1值为' + result1">
      <h-checkbox-group v-model="result1"  size="round">
        <h-checkbox
          v-for="(item, index) in list1"
          :key="index"
          :name="item.optionCode"
          :unique="item.unique"
        >
          {{ item.optionContent }}
      </h-checkbox>
      </h-checkbox-group>
      
    </demo-block>

    <demo-block :title="' 高级用法：result1值为' + result2">
      <h-cell title="您平时的饮食喜好是" name="iconbth-tongyong-jiantou" is-link @click="show=true" :value="checkboxText.length?checkboxText.join('；'):'请选择'" />
      <h-popup
        v-model="show"
        round="16px"
        get-container="body"
      >
        <div class="demo-checkbox">
          <h-tag class="my-tag" select>多选题</h-tag>
          <h-checkbox-group v-model="result2" size="round">
            <h-checkbox
              center
              v-for="(item, index) in list2"
              :key="index"
              :name="item.optionCode"
              :unique="item.unique"
            >
                {{ item.optionContent }}
            </h-checkbox>
          </h-checkbox-group>
          <h-button @click="commit" :disabled="!result2.length" class="demo-btn" round type="primary" size="large">大号按钮</h-button>
        </div>
      </h-popup>
    </demo-block>

  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      checkbox: '复选框',
      title3: '复选框组',
      title4: '设置最大可选数为2',
    },
    'en-US': {
      checkbox: 'Checkbox',
      title3: 'Checkbox Group',
      title4: 'Maximum amount of checked options',
    }
  },

  data() {
    return {
      show: false,
      checkboxText: [],
      checkbox1: true,
      list: [
        'a',
        'b',
        'c'
      ],
      list1: [{"optionCode":"1","optionContent":"爱吃红肉类或加工肉制品","unique":false},{"optionCode":"2","optionContent":"高盐饮食/爱吃腌制食物","unique":false},{"optionCode":"3","optionContent":"饭菜普遍油大","unique":false},{"optionCode":"4","optionContent":"蔬果摄入很少或几乎不吃","unique":false},{"optionCode":"5","optionContent":"以上皆无","unique":true}],
      list2: [{"optionCode":"1","optionContent":"爱吃红肉类或加工肉制品","unique":false},{"optionCode":"2","optionContent":"高盐饮食/爱吃腌制食物","unique":false},{"optionCode":"3","optionContent":"饭菜普遍油大","unique":false},{"optionCode":"4","optionContent":"蔬果摄入很少或几乎不吃","unique":false},{"optionCode":"5","optionContent":"以上皆无","unique":true}],
      result1: [],
      result2: [],
      result: ['a', 'b'],
      result3: [],
    };
  },
  methods: {
    commit() {
      this.checkboxText = []
      this.list2.forEach(item => {
        this.result2.forEach(check => {
          if(item.optionCode === check) this.checkboxText.push(item.optionContent)
          setTimeout(() => {
            this.show = false
          },400)
        })
      })
    }
  }
};
</script>

<style lang="less">
.h-checkbox-group {
  margin: 0 auto;
}

.demo-checkbox {
  position: relative;
  .my-tag {
    position: absolute;
    top: -12px;
    left: -10px;
    z-index: 222;
  }
  .demo-btn {
    width: 305px;
    box-shadow:0px 12px 36px 0px rgba(109,143,253,0.5);
    margin: 0 20px 20px;
  }
}
</style>
