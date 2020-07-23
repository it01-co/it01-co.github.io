<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')  + '：radio1值为' + radio1">
      <h-radio-group
        v-model="radio1"
        class="demo-radio-group"
      >
        <h-radio :name="item.id" v-for="item of data1" :key="item.id">{{ item.text }}</h-radio>
      </h-radio-group>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <h-radio-group
        v-model="radio2"
        size="round"
        class="demo-radio-group"
        
      >
        <h-radio disabled name="1">{{ $t('radio') }} 1</h-radio>
        <h-radio name="2">{{ $t('radio') }} 2</h-radio>
        <h-radio name="3">{{ $t('radio') }} 2</h-radio>
      </h-radio-group>
    </demo-block>
    
    <demo-block title="结合Laybg组件使用，h-radio-group设置replative">
      <h-radio-group
        v-model="radio3"
        class="demo-radio-group"
      >
        <h-Laybg size="10px" crevice="5px" fillet="https://jkyy-ai-ego.cs.jiankangyouyi.com/evaluation-tcm/1/sy_bg_zuoshang.png"/>
        <h-radio name="1">{{ $t('radio') }} 1</h-radio>
        <h-radio name="2">{{ $t('radio') }} 2</h-radio>
      </h-radio-group>
    </demo-block>

    <demo-block title="结合Popup组件 Cell组件使用">
      <h-cell title="请选择口味" name="iconbth-tongyong-jiantou" is-link @click="show=true" :value="radio1Text" />
      <h-popup
        v-model="show"
        round="16px"
        get-container="body"
      >
        <h-radio-group
          size="round"
          v-model="radio4"
          class="demo-radio-group"
        >
          <h-radio @click="radioClick(item.text)" :name="item.id" v-for="item of data1" :key="item.id">{{ item.text }}</h-radio>
        </h-radio-group>
      </h-popup>
    </demo-block>

    <demo-block title="自定义样式">
      <h-cell title="请选择性别" name="iconbth-tongyong-jiantou" is-link @click="show1=true" :value="radio1Text1" />
      <h-popup
        v-model="show1"
        position="top"
        get-container="body"
      >
        <h-radio-group
          v-model="radio5"
          class="demo-radio-group1"
        >
          <h-radio custom @click="radioClick1(item.text)" :name="item.id" v-for="item of data2" :key="item.id">
            <img :src="radio5===item.id?item.imgCheck:item.img" :alt="item.text">
          </h-radio>
        </h-radio-group>
      </h-popup>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      radio: '单选框',
    },
    'en-US': {
      radio: 'Radio',
    }
  },

  data() {
    return {
      show: false,
      show1: false,
      radio1Text: "请选择",
      radio1Text1: "请选择",
      radio1: null,
      radio2: '2',
      radio3: null,
      radio4: null,
      radio5: null,
      data1: [{id:1,text:'清淡'},{id:2,text:'甜'},{id:3,text:'辣'},{id:4,text:'咸'},{id:5,text:'不挑食都可以,不挑食都可以,不挑食都可以,不挑食都可以'}],
      data2: [{id:1,text:'男',img:'https://jkyy-ai-ego.cs.jiankangyouyi.com/jkyy-evaluation-sy/1/boy.png',imgCheck: 'https://jkyy-ai-ego.cs.jiankangyouyi.com/jkyy-evaluation-sy/1/boy1.png'},{id:2,text:'女',img:'https://jkyy-ai-ego.cs.jiankangyouyi.com/jkyy-evaluation-sy/1/girl.png',imgCheck: 'https://jkyy-ai-ego.cs.jiankangyouyi.com/jkyy-evaluation-sy/1/girl1.png'}]
    };
  },

  methods: {
    radioClick(val) {
      if(val === this.radio1Text) this.show = false
      setTimeout(() => {
        this.show = false
        this.radio1Text = val
      },400)
    },
    radioClick1(val) {
      if(val === this.radio1Text1) this.show1 = false
      setTimeout(() => {
        this.show1 = false
        this.radio1Text1 = val
      },200)
    }
  }
};
</script>

<style lang="less">
.demo-radio-group {
  position: relative;
  margin: 0 auto;
}
.demo-radio-group1 {
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 35px 45px;
  margin: 0 auto;
  .h-radio__modetrue {
    position: relative;  // 必写
    display: inline-block;
    overflow: hidden;
    user-select: none;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
  @keyframes genderCheck {
    0%{
      transform: scale(1);
      backface-visibility: hidden;
    }
    50%{
      transform: scale(.9);
      backface-visibility: hidden;
    }
    100%{
      transform: scale(1);
      backface-visibility: hidden;
    }
  }
  .h-radio__modetrue--checked {
    animation: genderCheck .2s ease;
    backface-visibility: hidden;
  }
  .h-radio__modetrue--disabled {
    opacity: .4;
  }
}
</style>
