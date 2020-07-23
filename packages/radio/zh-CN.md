## Radio 单选框

### 使用指南
``` javascript
import { RadioGroup, Radio, Laybg } from 'health-ui';

Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Radio)
```
### 代码演示

#### 基础用法

通过`v-model`绑定值当前选中项的 name

```html
<h-radio-group
  v-model="radio1"
  class="demo-radio-group"
>
  <h-radio :name="item.id" v-for="item of data1" :key="item.id">{{ item.text }}</h-radio>
</h-radio-group>
```

```javascript
export default {
  data() {
    return {
      data1: [{id:1,text:'清淡'},{id:2,text:'甜'},{id:3,text:'辣'},{id:4,text:'咸'},{id:5,text:'不挑食都可以'}]
    }
  }
};
```

#### 禁用状态

在`h-radio-group`上设置`disabled`属性禁止全部选项切换，在`h-radio`上设置`disabled`可以禁用单个选项

```html
<h-radio-group
  v-model="radio2"
  size="round"
  class="demo-radio-group"
  
>
  <h-radio disabled name="1">单选框1</h-radio>
  <h-radio name="2">单选框2 </h-radio>
  <h-radio name="3">单选框2</h-radio>
</h-radio-group>
```

#### 结合Laybg组件使用，h-radio-group设置replative

```html
<h-radio-group
  v-model="radio3"
  class="demo-radio-group"
>
  <h-Laybg size="10px" crevice="5px" fillet="https://jkyy-ai-ego.cs.jiankangyouyi.com/evaluation-tcm/1/sy_bg_zuoshang.png"/>
  <h-radio name="1">单选框1</h-radio>
  <h-radio name="2">单选框2</h-radio>
</h-radio-group>
```
#### 结合Popup组件 Cell组件使用

```html
<h-cell title="请选择口味" is-link @click="show=true" :value="radio1Text" />
<!-- get-container: h-cell作为弹窗触发点的时候，最好将 h-popup 挂载到祖先级或者body-->
<h-popup
  v-model="show"
  round="16px"
  get-container="body"  
>
  <h-radio-group
    v-model="radio4"
    size="round"
    class="demo-radio-group"
  >
    <h-radio @click="radioClick(item.text)" :name="item.id" v-for="item of data1" :key="item.id">{{ item.text }}</h-radio>
  </h-radio-group>
</h-popup>
```
```javascript
data() {
  return {
    show: false,
    radio1Text: "请选择",
    radio1: null,
    radio2: '2',
    radio4: null,
    data1: [{id:1,text:'清淡'},{id:2,text:'甜'},{id:3,text:'辣'},{id:4,text:'咸'},{id:5,text:'不挑食都可以'}]
  };
},

methods: {
  radioClick(val) {
    setTimeout(() => {    // 单选选项的动画为.56秒，开发中用sleep函数代替，这里只做演示
      this.show = false
      this.radio1Text = val
    },400)
  }
}
```

#### 自定义样式

```html
<h-cell title="请选择性别" name="iconbth-tongyong-jiantou" is-link @click="show1=true" :value="radio1Text1" />
<!-- get-container: h-cell作为弹窗触发点的时候，最好将 h-popup 挂载到祖先级或者body-->
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
```
```javascript
data() {
  return {
    show1: false,
    radio1Text1: "请选择",
    radio5: null,
    data2: [{id:1,text:'男',img:'https://jkyy-ai-ego.cs.jiankangyouyi.com/jkyy-evaluation-sy/1/boy.png',imgCheck: 'https://jkyy-ai-ego.cs.jiankangyouyi.com/jkyy-evaluation-sy/1/boy1.png'},{id:2,text:'女',img:'https://jkyy-ai-ego.cs.jiankangyouyi.com/jkyy-evaluation-sy/1/girl.png',imgCheck: 'https://jkyy-ai-ego.cs.jiankangyouyi.com/jkyy-evaluation-sy/1/girl1.png'}]
  };
},

methods: {
  radioClick1(val) {
    if(val === this.radio1Text1) this.show1 = false
    setTimeout(() => {
      this.show1 = false
      this.radio1Text1 = val
    },200)
  }
}
```
```css
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
```
### Radio API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| name | 标识符 | 任意类型 | - | - |
| disabled | 是否为禁用状态 | `Boolean` | `false` | - |
| custom | 是否为自定义 | `Boolean` | `false` | - |

### RadioGroup API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 当前选中项的标识符 | 任意类型 | - | - |
| disabled | 是否禁用所有单选框 | `Boolean` | `false` | - |
| size | 圆角的选择，可选`round` | `String` | `normal` | - |

### RadioGroup Event

| 事件名称 | 说明 | 回调参数 | 版本 |
|------|------|------|------|
| change | 当绑定值变化时触发的事件 | 当前选中项的 name | - |
