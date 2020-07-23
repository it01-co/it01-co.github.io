## Tag 标记

### 使用指南
``` javascript
import { Tag } from 'health-ui';

Vue.use(Tag);
```

### 代码演示

#### 基础用法


```html
<h-tag select>标签</h-tag>
```

#### 自定义颜色

```html
<h-tag class="my-tag" select>多选题</h-tag>
```
```css
.my-tag {
  color: #fff;
  background-color: rgba(255,130,152,1);
  &::after {
    border-top-color: rgba(196,100,117,1);
  }
}
```
#### 带删除

```html
<h-button size="small" @click="add">添加</h-button><hr>
<transition-group  name="list-complete">
  <!-- 对数组，增删操作不要使用索引作为key，原因自己google -->
  <h-tag class="list-complete-item" v-for="(item, i) in list" :key="item" @close="close(i)" clear>{{ item }}</h-tag>
</transition-group>
```
```javascript
data() {
  return {
    list: ['瓜子','花生','八宝粥','长文字长文字长文字长文字长文字长文字长文字长文字长文字长文字长文字长文字长文字长文字长文字长文字','油条','老豆腐','豆浆'],
    num: 1
  }
},
methods: {
  close(i, e) {   // hack 待后续有更好的方法替代
    const el = e.currentTarget.parentElement;
    el.style.opacity=0;
    const timer = setTimeout(() => {
      this.list.splice(i,1);
      clearTimeout(timer);
    }, 320);
  },
  add() {
    this.list.push(`新增${this.num++}`)
  }
}
```
```css
.list-complete-item {
  transition: all .32s;
}
.list-complete-enter{
  opacity: 0;
}
.list-complete-leave-active {
  position: absolute;
}
```

### API

| 参数   | 说明       | 类型      | 默认值  | 版本 |
| ------ | ---------- | --------- | ------- | ---- |
| select | 带角样式   | `Boolean` | `false` | -    |
| clear  | 带关闭样式 | `Boolean` | `false` | -    |

### Slot

| 名称 | 说明                |
| ---- | ------------------- |
| -    | 自定义 Tag 显示内容 |
