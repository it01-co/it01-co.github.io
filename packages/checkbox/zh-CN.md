## Checkbox 复选框

### 使用指南
``` javascript
import { Checkbox, CheckboxGroup } from 'health-ui';

Vue.use(Checkbox).use(CheckboxGroup);
```

### 代码演示

#### 基础用法

通过`v-model`绑定 checkbox 的状态

```html
<h-checkbox v-model="checked">复选框</h-checkbox>
```

```javascript
export default {
  data() {
    return {
      checked: true
    };
  }
};
```

#### 禁用状态

```html
<h-checkbox v-model="checked" disabled>复选框</h-checkbox>
```

#### 复选框组

与`h-checkbox-group`一起使用，选中值是一个数组，通过`v-model`绑定在`h-checkbox-group`上，数组中的项即为选中的`Checkbox`的`name`属性设置的值，`center`可以控制内容是否居中

```html
<h-checkbox-group v-model="result">
  <h-checkbox
    v-for="(item, index) in list"
    center
    :key="item"
    :name="item"
  >
    复选框 {{ item }}
  </h-checkbox>
</h-checkbox-group>
```

```javascript
export default {
  data() {
    return {
      list: ['a', 'b', 'c'],
      result: ['a', 'b']
    };
  }
};
```

#### 设置最大可选数

```html
<h-checkbox-group v-model="result" :max="2">
  <h-checkbox
    v-for="(item, index) in list"
    :key="item"
    :name="item"
  >
    复选框 {{ item }}
  </h-checkbox>
</h-checkbox-group>
```

####  互斥用法

`unique`属性控制是否互斥

```html
<h-checkbox-group v-model="result1" size="round">
  <h-checkbox
    v-for="(item, index) in list1"
    :key="index"
    :name="item.optionCode"
    :unique="item.unique"
  >
    {{ item.optionContent }}
</h-checkbox>
</h-checkbox-group>
```
```javascript
export default {
  data() {
    list1: [{"optionCode":"1","optionContent":"爱吃红肉类或加工肉制品","unique":false},{"optionCode":"2","optionContent":"高盐饮食/爱吃腌制食物","unique":false},{"optionCode":"3","optionContent":"饭菜普遍油大","unique":false},{"optionCode":"4","optionContent":"蔬果摄入很少或几乎不吃","unique":false},{"optionCode":"5","optionContent":"以上皆无","unique":true}],
    result1: []
  }
}
```

#### 高级用法

此时你需要再引入`Button`,`Popup`,`Cell`和`Tag`组件

```html
<h-cell title="您平时的饮食喜好是" name="iconbth-tongyong-jiantou" is-link @click="show=true" :value="checkboxText.length?checkboxText.join('；'):'请选择'" />
<h-popup
  v-model="show"
  round="16px"
  get-container="body"
>
  <div class="demo-checkbox">
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
```
```javascript
export default {
  data() {
    show: false,
    list2: [{"optionCode":"1","optionContent":"爱吃红肉类或加工肉制品","unique":false},{"optionCode":"2","optionContent":"高盐饮食/爱吃腌制食物","unique":false},{"optionCode":"3","optionContent":"饭菜普遍油大","unique":false},{"optionCode":"4","optionContent":"蔬果摄入很少或几乎不吃","unique":false},{"optionCode":"5","optionContent":"以上皆无","unique":true}],
    result1: [],
    checkboxText: [],
    result2: []
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
}
```

### Checkbox API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| name | 标识符 | `any` | - | - |
| unique | 是否有互斥 | `Boolean` | `false` | - |
| v-model | 是否为选中状态 | `Boolean` | `false` | - |
| disabled | 是否禁用单选框 | `Boolean` | `false` | - |

### CheckboxGroup API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 所有选中项的标识符 | `Array` | - | - |
| disabled | 是否禁用所有单选框 | `Boolean` | `false` | - |
| max | 设置最大可选数，0 为无限制 | `Number` | `0` | - |
| size | 圆角的选择，可选`round` | `String` | `normal` | - |

### Checkbox Event

| 事件名称 | 说明 | 回调参数 |
|------|------|------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |

### CheckboxGroup Event

| 事件名称 | 说明 | 回调参数 |
|------|------|------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |

### Checkbox Slot

| 名称 | 说明 | slot-scope |
|------|------|------|
| - | 自定义文本 | - |

### Checkbox 方法

通过 ref 可以获取到 checkbox 实例并调用实例方法

| 方法名 | 参数 | 返回值 | 介绍 |
|------|------|------|------|
| toggle | - | - | 切换选中状态 |
