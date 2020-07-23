## Popup 弹出层

### 使用指南
``` javascript
import { Popup } from 'health-ui';

Vue.use(Popup);
```

### 代码演示

#### 基础用法
`popup`默认从中间弹出

```html
<h-popup v-model="show">内容</h-popup>
```

```javascript
export default {
  data() {
    return {
      show: false
    }
  }
};
```

#### 弹出位置
通过`position`属性设置 Popup 弹出位置

```html
<h-popup v-model="show" position="top">
  内容
</h-popup>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 当前组件是否显示 | `Boolean` | `false` | - |
| overlay | 是否显示蒙层 | `Boolean` | `true` | - |
| position | 位置，可选值为 `top` `bottom` <br> `right` `left` | `String` | `center` | - |
| round | 圆角显示，自动匹配各个位置 `20px` `2rem`等 | `String`| 0 | - |
| overlay-class | 自定义蒙层类名 | `String` | - | - |
| overlay-style | 自定义蒙层样式 | `Object` | - | - |
| transition | transition 名称 | `String` | - | - |
| get-container | 指定挂载的节点，可以传入选择器，<br>或一个返回节点的函数 | `String | () => HTMLElement` | - | - |
| close-on-click-overlay | 是否在点击蒙层后关闭 | `Boolean` | `true` | - |
| lock-scroll | 是否锁定背景滚动 | `Boolean` | `true` | - |
| lazy-render | 是否在显示弹层时才渲染节点 | `Boolean` | `true` | - |

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| click-overlay | 点击蒙层时触发 | - |
