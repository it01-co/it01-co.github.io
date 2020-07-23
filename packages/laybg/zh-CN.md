## Laybg 圆角修饰

### 使用指南
``` javascript
import { Laybg } from 'health-ui';

Vue.use(Laybg);
```

### 代码演示

#### 基础用法
`Laybg`起内使用的`absolute` 四个角依次旋转90deg，因此父级必须设置`relative`
`Laybg`的`name`属性支持传入图标名称或图片链接
`Laybg`的`size`属性支持px rem vh % 等 字体图标为字体大小，为图片时为图片宽度

```html
<h-Laybg crevice="0px" size="10px" fillet="https://jkyy-ai-ego.cs.jiankangyouyi.com/evaluation-tcm/1/sy_bg_zuoshang.png"/>
```

#### 显示间隙

```html
<h-Laybg color='red' crevice="5px" fillet="decoration"/>
```
### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| name | 图标名称或图片链接 | `String` | - | - |
| color | 图标颜色 | `String` | `inherit` | - |
| size | 图标大小，如 `20px` `2em` | `String` | `inherit` | - |
| crevice | 显示间隙，如 `20px` `2em`| `String` | `5px` | - |


