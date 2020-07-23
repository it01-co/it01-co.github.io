<template>
  <div :class="b()">
    <div
      :class="b('track')"
      :style="style"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
    >
      <div :class="b('head')">
        <slot
          v-if="status === 'normal'"
          name="normal"
        />
        <slot
          v-if="status === 'pulling'"
          name="pulling"
        >
          <span :class="b('text')">{{ pullingText || $t('pulling') }}</span>
        </slot>
        <slot
          v-if="status === 'loosing'"
          name="loosing"
        >
          <span :class="b('text')">{{ loosingText || $t('loosing') }}</span>
        </slot>
        <slot
          v-if="status === 'success'"
          name="success"
        >
          <span :class="b('text')">{{ successText || $t('success') }}</span>
        </slot>
        <slot
          v-if="status === 'loading'"
          name="loading"
        >
          <div :class="b('loading')">
            <loading />
            <span>{{ loadingText || $t('loadingTip') }}</span>
          </div>
        </slot>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import create from '../utils/create';
import { preventDefault } from '../utils/event';
import scrollUtils from '../utils/scroll';
import Touch from '../mixins/touch';

export default create({
  name: 'pull-refresh',

  mixins: [Touch],

  props: {
    disabled: Boolean,
    successText: String,
    pullingText: String,
    loosingText: String,
    loadingText: String,
    value: {
      type: Boolean,
      required: true
    },
    successDuration: {
      type: Number,
      default: 500
    },
    animationDuration: {
      type: Number,
      default: 300
    },
    headHeight: {
      type: Number,
      default: 50
    }
  },

  data() {
    return {
      status: 'normal',
      distance: 0,
      duration: 0
    };
  },

  computed: {
    style() {
      return {
        transition: `${this.duration}ms`,
        transform: this.distance ? `translate3d(0,${this.distance}px, 0)` : ''
      };
    },

    untouchable() {
      return this.status === 'loading' || this.status === 'success' || this.disabled;
    }
  },

  mounted() {
    this.scrollEl = scrollUtils.getScrollEventTarget(this.$el);
  },

  watch: {
    value(loading) {
      this.duration = this.animationDuration;

      if (!loading && this.successText) {
        this.status = 'success';
        setTimeout(() => {
          this.setStatus(0);
        }, this.successDuration);
      } else {
        this.setStatus(loading ? this.headHeight : 0, loading);
      }
    }
  },

  methods: {
    onTouchStart(event) {
      if (!this.untouchable && this.getCeiling()) {
        this.duration = 0;
        this.touchStart(event);
      }
    },

    onTouchMove(event) {
      if (this.untouchable) {
        return;
      }

      this.touchMove(event);

      if (!this.ceiling && this.getCeiling()) {
        this.duration = 0;
        this.startY = event.touches[0].clientY;
        this.deltaY = 0;
      }

      if (this.ceiling && this.deltaY >= 0) {
        if (this.direction === 'vertical') {
          this.setStatus(this.ease(this.deltaY));
          preventDefault(event);
        }
      }
    },

    onTouchEnd() {
      if (!this.untouchable && this.ceiling && this.deltaY) {
        this.duration = this.animationDuration;

        if (this.status === 'loosing') {
          this.setStatus(this.headHeight, true);
          this.$emit('input', true);

          this.$nextTick(() => {
            this.$emit('refresh');
          });
        } else {
          this.setStatus(0);
        }
      }
    },

    getCeiling() {
      this.ceiling = scrollUtils.getScrollTop(this.scrollEl) === 0;
      return this.ceiling;
    },

    ease(distance) {
      const { headHeight } = this;
      return Math.round(
        distance < headHeight
          ? distance
          : distance < headHeight * 2
            ? headHeight + (distance - headHeight) / 2
            : headHeight * 1.5 + (distance - headHeight * 2) / 4
      );
    },

    setStatus(distance, isLoading) {
      this.distance = distance;

      const status = isLoading
        ? 'loading'
        : distance === 0
          ? 'normal'
          : distance < this.headHeight
            ? 'pulling'
            : 'loosing';

      if (status !== this.status) {
        this.status = status;
      }
    }
  }
});
</script>
