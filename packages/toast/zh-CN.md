## Toast 轻提示

### 使用指南

```javascript
import { Toast } from 'health-ui';

Vue.use(Toast);
```

### 代码演示

#### 文字提示

```javascript
Toast('提示内容');
```

#### 单例模式
Toast 默认采用单例模式，即同一时间只会存在一个 Toast，如果需要在同一时间弹出多个 Toast，可以参考下面的示例

```js
Toast.allowMultiple();

const toast1 = Toast('第一个 Toast');
const toast2 = Toast.success('第二个 Toast');

toast1.clear();
toast2.clear();
```

### 方法

| 方法名 | 参数 | 返回值 | 介绍 |
|------|------|------|------|
| Toast | `options | message` | toast 实例 | 展示提示 |
| Toast.clear | `clearAll` | `void` | 关闭提示 |
| Toast.allowMultiple | - | `void` | 允许同时存在多个 Toast |
| Toast.setDefaultOptions | `options` | `void` | 修改默认配置，对所有 Toast 生效 |
| Toast.resetDefaultOptions | - | `void` | 重置默认配置，对所有 Toast 生效 |

### Options

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| type | 提示类型，可选值为  `text` | `text` | - |
| position | 位置，可选值为 `top` `middle` `bottom` | `String` | `middle` | - |
| message | 内容 | `String` | `''` | - | - |
| mask | 是否显示背景蒙层 | `Boolean` | `false` | - |
| forbidClick | 是否禁止背景点击 | `Boolean` | `false` | - |
| duration | 展示时长，值为 0 时，toast 不会消失 | `Number` | `3000` | - |
| fillet | 圆角，可选值`fillet` | `String` |  | - |
