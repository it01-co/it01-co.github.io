## Tab 标签页

### 使用指南
``` javascript
import { Tab, Tabs } from 'health-ui';

Vue.use(Tab).use(Tabs);
```

### 代码演示

#### 基础用法（等分）

默认情况下启用第一个标签，可以通过`v-model`绑定当前激活的标签索引

```html
<h-tabs v-model="active">
  <h-tab
    :title="`标签${index}`"
    v-for="index in 4"
    :key="index"
  >
    内容{{ index }}
  </h-tab>
</h-tabs>
```

```javascript
export default {
  data() {
    return {
      active: 2
    };
  }
}
```
#### 基础用法（左对齐）

`average` 默认true，区分等不等份

```html
<h-tabs :average="false">
  <h-tab title="食物参照量">食物参照量</h-tab>
  <h-tab title="每日营养目标">每日营养目标</h-tab>
</h-tabs>
```


#### 横向滚动

多于 4 个标签时，Tab 可以横向滚动

```html
<h-tabs>
  <h-tab v-for="index in 8" :title="'标签 ' + index">
    内容 {{ index }}
  </h-tab>
</h-tabs>
```

#### 禁用标签

设置`disabled`属性即可禁用标签。如果需要监听禁用标签的点击事件，可以在`h-tabs`上监听`disabled`事件

```html
<h-tabs @disabled="onClickDisabled">
  <h-tab title="标签 1">内容 1</h-tab>
  <h-tab title="标签 2" disabled>内容 2</h-tab>
  <h-tab title="标签 3">内容 3</h-tab>
</h-tabs>
```

```javascript
export default {
  methods: {
    onClickDisabled(index, title) {
      this.$toast(title + '已被禁用');
    }
  }
};
```

#### 样式风格

`Tab`支持两种样式风格：`middle`和`top`，默认为`middle`样式，可以通过`type`属性修改样式风格

```html
<h-tabs type="top">
  <h-tab title="标签 1">内容 1</h-tab>
  <h-tab title="标签 2">内容 2</h-tab>
  <h-tab title="标签 3">内容 3</h-tab>
</h-tabs>
```

#### 点击事件

可以在`h-tabs`上绑定`click`事件，事件传参为标签对应的索引和标题

```html
<h-tabs @click="onClick">
  <h-tab title="标签 1">内容 1</h-tab>
  <h-tab title="标签 2">内容 2</h-tab>
</h-tabs>
```

```javascript
export default {
  methods: {
    onClick(index, title) {
      this.$toast(title);
    }
  }
};
```

#### 粘性布局

通过`sticky`属性可以开启粘性布局，粘性布局下，当 Tab 滚动到顶部时会自动吸顶

```html
<h-tabs v-model="active" sticky>
  <h-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </h-tab>
</h-tabs>
```

#### 自定义标签

通过 title 插槽可以自定义标签内容

```html
<h-tabs v-model="active">
  <h-tab v-for="index in 2">
    <div slot="title">
      <h-icon name="more-o" />选项
    </div>
    内容 {{ index }}
  </h-tab>
</h-tabs>
```

#### 切换动画

通过`animated`属性可以开启切换标签内容时的转场动画

```html
<h-tabs v-model="active" animated>
  <h-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </h-tab>
</h-tabs>
```

#### 滑动切换

通过`swipeable`属性可以开启滑动切换标签页

```html
<h-tabs v-model="active" swipeable>
  <h-tab v-for="index in 8" :title="'选项 ' + index">
    内容 {{ index }}
  </h-tab>
</h-tabs>
```
#### 自定义日历用法

```html
<h-tabs
  :active="todayIndex"
  swipeable
  animated
  :lineShow="false"
  :average="false"
  class="calendar"
>
  <h-tab v-for="(item, i) in data" :key="`${i}`">
    <template slot="title">
      <div :class="{top: true, today: isToday(item)}">{{item | getCutWeek}}</div>
      <div :class="{bto: true, rest: item.getDay() === 6 || item.getDay() === 0}">{{item | getCutDay}}</div>
    </template>
    {{item}}
  </h-tab>
</h-tabs>
```

```javascript
export default { 
  data() {
    return {
      data:[],
      todayIndex: 0
    };
  },
  filters: {
    // 获取当前天的值
    getCutDay: function (date) {
        return date.getDate();
    },
    // 获取当前天对应的周 或者今日
    getCutWeek: function (date) {
      if(date.getFullYear() === new Date().getFullYear() && date.getMonth() === new Date().getMonth() && date.getDate() === new Date().getDate()) return '今日'
      let weekNum = date.getDay()
      let weekString;
      if (weekNum == 1) {
          weekString = "一"
      } else if (weekNum == 2) {
          weekString = "二"
      } else if (weekNum == 3) {
          weekString = "三"
      } else if (weekNum == 4) {
          weekString = "四"
      } else if (weekNum == 5) {
          weekString = "五"
      } else if (weekNum == 6) {
          weekString = "六"
      } else {
          weekString = "日"
      }
      return weekString;
    }
  },
  created() {
    this.data = this.getDateList(new Date(this.getNextDate(-5)),new Date(this.getNextDate(25)))
    this.todayIndex = this.data.findIndex(date => date.getFullYear() === new Date().getFullYear() && date.getMonth() === new Date().getMonth() && date.getDate() === new Date().getDate())
  },
  methods: {
    isToday(date) {
      if(date.getFullYear() === new Date().getFullYear() && date.getMonth() === new Date().getMonth() && date.getDate() === new Date().getDate()) {
        return true
      }else {
        return false
      }
    },
    getDateList (startDate, endDate) {
      const dateList = []
      dateList.push(new Date(startDate))
      while (true) {
        startDate.setDate(startDate.getDate() + 1)
        if (startDate.getTime() < endDate.getTime()) {
          dateList.push(new Date(startDate))  
        } else {
          break
        }
      }
      dateList.push(new Date(endDate))
      return dateList
    },
    getNextDate(day) {  
      var dd = new Date();
      dd.setDate(dd.getDate() + day);
      var y = dd.getFullYear();
      var m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
      var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
      return y + "-" + m + "-" + d;
    },
    onClickDisabled(index, title) {
      this.$toast(title + this.$t('disabled'));
    },

    onClick(index, title) {
      this.$toast(title);
    },

    onScroll(e) {
      console.log(e);
    }
  }
}
```

### Tabs API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 当前标签的索引 | `String` `Number` | `0` | - |
| type | 样式类型，可选值为`top` | `String` | `middle` | - |
| duration | 动画时间，单位秒 | `Number` | `0.32` | - |
| line-width | 底部条宽度，单位 px | `Number` | - | - |
| swipeable | 是否开启手势滑动切换 | `Boolean` | `false` | - |
| sticky | 是否使用粘性定位布局 | `Boolean` | `false` | - |
| offset-top | 粘性定位布局下与顶部的最小距离，单位 px | `Number` | `0` | - |
| swipe-threshold | 滚动阈值，标签数量超过多少个可滚动 | `Number` | `4` | - |
| animated | 是否开启切换标签内容时的转场动画 | `Boolean` | `false` | - |
| ellipsis | 是否省略过长的标题文字 | `Boolean` | `true` | - |
| shadow | 是否显示左右阴影 | `Boolean` | `true` | - |

### Tab API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| title | 标题 | `String` | - | - |
| disabled | 是否禁用标签 | `Boolean` | `false` | - |
| average | 是否等分 | `Boolean` | `true` | - |

### Tab Slot

| 名称 | 说明 |
|------|------|
| - | 标签页内容 |
| title | 自定义标签 |

### Tabs Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| click | 点击标签时触发 | index：标签索引，title：标题 |
| change | 当前激活的标签改变时触发 | index：标签索引，title：标题 |
| disabled | 点击被禁用的标签时触发 | index：标签索引，title：标题 |
| scroll | 滚动时触发 | { scrollTop: 距离顶部位置, isFixed: 是否吸顶 } |
