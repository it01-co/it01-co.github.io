## Slider 侧边导航

### 使用指南
``` javascript
import { Slider, SliderGroup } from 'health-ui';

Vue.use(Slider);
Vue.use(SliderGroup);
```

### 代码演示

#### 基础用法

通过在`h-slider-group`上设置`active-key`属性来控制选中的`slider`

```html
<h-slider-group
  :active-key="activeKey"
  @change="onChange"
>
  <h-slider v-for="item of tabs" :key="item" :title="item" />
</h-slider-group>
```

``` javascript
export default {
  data() {
    return {
      activeKey: 2,
      tabs: ['主食','米饭','面条、粉','菜肴','水果','坚果']
    };
  },

  methods: {
    onChange(key) {
      this.activeKey = key;
    }
  }
};
```

### SliderGroup API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| active-key | 选中`Slider`的索引 | `String | Number` | `0` | - |

### SliderGroup Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| change | 切换导航时触发 | key: 当前选中导航的索引 |

### Slider API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| title | 内容 | `String` | `''` | - |
| url | 跳转链接 | `String` | - | - |

### Slider Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| click | 点击导航时触发 | key: 当前导航的索引 |
