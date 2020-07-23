## Collapse 折叠面板

### 使用指南
``` javascript
import { Collapse, CollapseItem } from 'health-ui';

Vue.use(Collapse).use(CollapseItem);
```

### 代码演示

#### 基础用法
通过`v-model`控制展开的面板列表，`activeNames`为数组格式

```html
<h-collapse v-model="activeNames">
  <h-collapse-item title="health-ui-1" name="1">
    Health - 丰富、多样的移动端 Vue 组件库
  </h-collapse-item>
  <h-collapse-item title="health-ui-2" name="2">
    Health - 丰富、多样的移动端 Vue 组件库
  </h-collapse-item>
  <h-collapse-item title="health-ui-3" name="3" disabled>
    Health - 丰富、多样的移动端 Vue 组件库
  </h-collapse-item>
</h-collapse>
```

``` javascript
export default {
  data() {
    return {
      activeNames: ['1']
    };
  }
};
```

#### 手风琴
通过`accordion`可以设置为手风琴模式，最多展开一个面板，此时`activeName`为字符串格式

```html
<h-collapse v-model="activeName" accordion>
  <h-collapse-item title="health-ui-1" name="1">
    Health - 丰富、多样的移动端 Vue 组件库
  </h-collapse-item>
  <h-collapse-item title="health-ui-2" name="2">
    Health - 丰富、多样的移动端 Vue 组件库
  </h-collapse-item>
  <h-collapse-item title="health-ui-3" name="3">
    Health - 丰富、多样的移动端 Vue 组件库
  </h-collapse-item>
</h-collapse>
```

``` javascript
export default {
  data() {
    return {
      activeName: '1'
    };
  }
};
```

#### 自定义标题内容

```html
<h-collapse v-model="activeNames">
  <h-collapse-item name="1">
    <div slot="title">health-ui-1<h-icon name="completed" /></div>
    Health - 丰富、多样的移动端 Vue 组件库
  </h-collapse-item>
  <h-collapse-item
    title="health-ui-2"
    name="2"
    icon="pen"
    value="自定义内容"
  >
    Health - 丰富、多样的移动端 Vue 组件库
  </h-collapse-item>
</h-collapse>
```



### Collapse API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 当前展开面板的 name | `Array | String | Number` | - |
| accordion | 是否开启手风琴模式 | `Boolean` | `false` |

### Collapse Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| change | 切换面板时触发 | activeNames: `string | array` |

### CollapseItem API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|------|
| name | 唯一标识符，默认为索引值 | `String | Number` | `index` | - |
| icon | 标题栏左侧图标名称或图片链接，可选值见 Icon 组件 | `String` | - | - |
| title | 标题栏左侧内容 | `String | Number` | - | - |
| value | 标题栏右侧内容 | `String | Number` | - | - |
| label | 标题栏描述信息 | `String | Number`  | - | - |
| border | 是否显示内边框 | `Boolean` | `true` | - |
| is-link | 是否展示标题栏右侧箭头并开启点击反馈 | `Boolean` | `true` | - |
| disabled | 是否禁用面板 | `Boolean` | `false` | - |
| title-class | 左侧标题额外类名 | `String` | - | - |
| value-class | 右侧内容额外类名 | `String` | - | - |
| label-class | 描述信息额外类名 | `String` | - | - |

### CollapseItem Slot

| 名称 | 说明 |
|------|------|
| - | 面板内容 |
| value | 自定义显示内容 |
| icon | 自定义`icon` |
| title | 自定义`title` |
| right-icon | 自定义右侧按钮，默认是`arrow` |

