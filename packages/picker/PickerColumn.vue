
<template>
  <div
    :class="[b(), className]"
    :style="columnStyle"
    ref="touchel"
  >
    <ul :class="b('wrapper')" :style="wrapperStyle" ref="wrapper" @transitionend="onTransitionEnd">
      <li
        v-for="(option, index) in options"
        :key="index"
        :style="optionStyle"
        class="h-ellipsis"
        :class="b('item', {
        disabled: isOptionDisabled(option),
        selected: index === currentIndex
        })"
        @click="onClickItem(index, true)"
      >
      {{getOptionText(option)}}
      </li>
    </ul>
  </div>
</template>

<script>
import create from '../utils/create';
import deepClone from '../utils/deep-clone';
import { isObj, range } from '../utils';
import TouchMixin from '../mixins/touch';
import { preventDefault } from '../utils/event';
const DEFAULT_DURATION = 200;
// 惯性滑动思路:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_LIMIT_TIME` 且 move
// 距离大于 `MOMENTUM_LIMIT_DISTANCE` 时，执行惯性滑动
const MOMENTUM_LIMIT_TIME = 300;
const MOMENTUM_LIMIT_DISTANCE = 15;

export default create({
  name: 'picker-column',
  mixins: [TouchMixin],
  props: {
    valueKey: String,
    className: String,
    itemHeight: Number,
    defaultIndex: Number,
    initialOptions: Array,
    visibleItemCount: Number,
    swipeDuration: String
  },

  data() {
    return {
      offset: 0,
      duration: 0,
      startOffset: 0,
      options: deepClone(this.initialOptions),
      currentIndex: this.defaultIndex
    };
  },

  created() {
    this.$parent.children && this.$parent.children.push(this);
    this.setIndex(this.currentIndex);
  },

  mounted () {
    // vue >2.6版本的，touch事件在ios 10.2 10.3机型上touchstart不执行（冒泡问题），故自己监听touch事件
    this.$nextTick(() => {
      this.$refs.touchel.addEventListener('touchstart', this.onTouchStart, {passive: true})
      this.$refs.touchel.addEventListener('touchmove', this.onTouchMove, {passive: false})
      this.$refs.touchel.addEventListener('touchend', this.onTouchEnd, {passive: true})
      this.$refs.touchel.addEventListener('touchcancel', this.onTouchEnd, {passive: true})
    })
  },

  destroyed() {
    const { children } = this.$parent;
    children && children.splice(children.indexOf(this), 1);
  },

  watch: {
    defaultIndex() {
      this.setIndex(this.defaultIndex);
    }
  },

  computed: {
    count() {
      return this.options.length;
    },

    baseOffset() {
      return this.itemHeight * (this.visibleItemCount - 1) / 2;
    },

    columnStyle() {
      return {
        height: this.itemHeight * this.visibleItemCount + 'px'
      };
    },

    wrapperStyle() {
      return {
        transform: `translate3d(0, ${this.offset + this.baseOffset}px, 0)`,
        transitionDuration: `${this.duration}ms`,
        transitionProperty: this.duration ? 'all' : 'none',
        lineHeight: `${this.itemHeight}px`,
      };
    },

    optionStyle() {
      return {
        height: this.itemHeight + 'px'
      };
    }
  },

  methods: {
    onTouchStart(event) {
      this.touchStart(event);

      if(this.moving) {
        const translateY = this.getElementTranslateY(this.$refs.wrapper);
        this.offset = Math.min(0, translateY - this.baseOffset);
        this.startOffset = this.offset;
      }else {
        this.startOffset = this.offset;
      }
      this.duration = 0;
      this.transitionEndTrigger = null;
      this.touchStartTime = Date.now();
      this.momentumOffset = this.startOffset;
    },

    onTouchMove(event) {
      event.preventDefault()
      this.moving = true;
      this.touchMove(event);

      if(this.direction === 'vertical') {
        preventDefault(event, true);
      }

      this.offset = range(
        this.startOffset + this.deltaY,
        -(this.count * this.itemHeight),
        this.itemHeight
      );

      const now = Date.now();
      if (now - this.touchStartTime > MOMENTUM_LIMIT_TIME) {
        this.touchStartTime = now;
        this.momentumOffset = this.offset;
      }

    },

    onTouchEnd() {
      const distance = this.offset - this.momentumOffset;
      const duration = Date.now() - this.touchStartTime;
      const allowMomentum =
        duration < MOMENTUM_LIMIT_TIME && Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

      if (allowMomentum) {
        this.momentum(distance, duration);
        return;
      }

      const index = this.getIndexByOffset(this.offset);
      this.moving = false;
      this.duration = DEFAULT_DURATION;
      this.setIndex(index, true);
    },

    onTransitionEnd() {
      this.stopMomentum();
    },

    onClickItem(index) {
      if (this.moving) {
        return;
      }

      this.duration = DEFAULT_DURATION;
      this.setIndex(index, true);
    },

    adjustIndex(index) {
      index = range(index, 0, this.count);

      for (let i = index; i < this.count; i++) {
        if (!this.isOptionDisabled(this.options[i])) return i;
      }

      for (let i = index - 1; i >= 0; i--) {
        if (!this.isOptionDisabled(this.options[i])) return i;
      }
    },

    isOptionDisabled(option) {
      return isObj(option) && option.disabled;
    },

    getElementTranslateY(element) {
      const style = window.getComputedStyle(element);
      const transform = style.transform || style.webkitTransform;
      const translateY = transform.slice(7, transform.length - 1).split(', ')[5];
      return Number(translateY);
    },

    getOptionText(option) {
      return isObj(option) && this.valueKey in option
        ? option[this.valueKey]
        : option;
    },

    setIndex(index, userAction) {
      index = this.adjustIndex(index) || 0;
      this.offset = -index * this.itemHeight;

      const trigger = () => {
        if (index !== this.currentIndex) {
          this.currentIndex = index;

          if(userAction) this.$emit('change', index);
        }
      };
      // 若有触发过 `touchmove` 事件，那应该
      // 在 `transitionend` 后再触发 `change` 事件
      if (this.moving) {
        this.transitionEndTrigger = trigger;
      } else {
        trigger();
      }
    },

    setValue(value) {
      const { options } = this;
      for (let i = 0; i < options.length; i++) {
        if (this.getOptionText(options[i]) === value) {
          return this.setIndex(i);
        }
      }
    },

    getValue() {
      return this.options[this.currentIndex];
    },

    getIndexByOffset(offset) {
      return range(Math.round(-offset / this.itemHeight), 0, this.count - 1);
    },

    momentum(distance, duration) {
      const speed = Math.abs(distance / duration);

      distance = this.offset + (speed / 0.002) * (distance < 0 ? -1 : 1);

      const index = this.getIndexByOffset(distance);

      this.duration = this.swipeDuration;
      this.setIndex(index, true);
    },

    stopMomentum() {
      this.moving = false;
      this.duration = 0;

      if (this.transitionEndTrigger) {
        this.transitionEndTrigger();
        this.transitionEndTrigger = null;
      }
    },
  },

  beforeDestroy () {
    window.removeEventListener('touchstart', this.onTouchStart, {passive: true})
    window.removeEventListener('touchmove', this.onTouchMove, {passive: false})
    window.removeEventListener('touchend', this.onTouchEnd, {passive: true})
    window.removeEventListener('touchcancel', this.onTouchEnd, {passive: true})
  }
});
</script>
