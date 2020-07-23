## Button 按钮

### 使用指南
``` javascript
import { Button } from 'health-ui';

Vue.use(Button);
```

### 代码演示

#### 按钮类型
支持`default`、`primary`二种类型，默认为`default`

```html
<h-button type="primary">主要按钮</h-button>
<h-button type="default">默认按钮</h-button>

```

#### 禁用状态

通过`disabled`属性来禁用按钮，此时按钮不可点击

```html
<h-button disabled type="primary">禁用状态</h-button>
<h-button disabled type="default">禁用状态</h-button>
```

#### 加载状态

```html 
<h-button text="加载" loading type="primary" />
<h-button text="加载" loading type="default" />
```

#### 按钮形状

```html 
<h-button square type="primary">方形按钮</h-button>
<h-button round type="default">圆形按钮</h-button>
```

#### 按钮尺寸
支持`large`、`normal`、`small`、`mini`四种尺寸，默认为`normal`

```html 
<h-button round type="primary" size="large">大号按钮</h-button>
<h-button size="normal">普通按钮</h-button>
<h-button size="small">小型按钮</h-button>
<h-button type="primary" size="mini">迷你按钮</h-button>
```
#### 自定义样式
支持`large`、`normal`、`small`、`mini`四种尺寸，默认为`normal`

```html 
<h-button
  class="coustBtn"
  round
  size="large"
  type="primary"
  :activeStyle="{ background: 'red',borderColor: '#000', color: 'blue' }"
>
  <h-icon name="del" /> 开始测评
</h-button>
```
```css
.coustBtn {
  background-image: url(https://jkyy-ai-ego.cs.jiankangyouyi.com/evaluation-tcm/6/sy_button_bg.png);
  background-color: #54C6C9;
  border-color: #54C6C9;
  color: #ffffff;
  box-shadow: 0 12px 30px 0 rgba(84, 198, 201, 0.5);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 98.5% 92%;
  font-weight: bold;
}
```


### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| type | 类型，可选值为 `primary` | `String` | `default` | - |
| size | 尺寸，可选值为 `large` `small` `mini` | `String` | `normal` | - |
| text | 文字 | `String` | - | - |
| tag | HTML 标签 | `String` | `button` | - |
| native-type | 原生 type 属性 | `String` | - | - |
| disabled | 是否禁用按钮 | `Boolean` | `false` | - |
| loading | 是否显示为加载状态 | `Boolean` | `false` | - |
| plain | 是否为朴素按钮 | `Boolean` | `false` | - |
| square | 是否为方形按钮 | `Boolean` | `false` | - |
| round | 是否为圆形按钮 | `Boolean` | `false` | - |
| animationDisplay | 是否显示动画 | `Boolean` | `true` | - |
| activeStyle | 按下时的样式 | `Object` |  | - |

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| click | 点击按钮且按钮状态不为加载或禁用时触发 | - |
