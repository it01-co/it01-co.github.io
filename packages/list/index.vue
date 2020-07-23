<template>
  <div ref="placeholder" :class="b()" role="feed" :aria-busy="innerLoading">
    <slot />
    <div
      v-if="loading"
      :class="b('loading')"
    >
      <slot name="loading">
        <loading :class="b('loading-icon')" />
        <span :class="b('loading-text')">{{ loadingText || $t('loadingTip') }}</span>
      </slot>
    </div>
    <div
      v-if="finished && finishedText"
      :class="b('finished-text')"
    >
      {{ finishedText }}
    </div>
    <div v-if="this.error && this.errorText" @click="clickErrorText" :class="b('error-text')">
      {{errorText}}
    </div>
  </div>
</template>

<script>
import create from '../utils/create';
import { isHidden } from '../utils/style';
import { BindEventMixin } from '../mixins/bind-event';
import scrollUtils from '../utils/scroll';
import Loading from '../loading';

export default create({
  name: 'list',
  mixins: [
    BindEventMixin(function(bind) {
      if (!this.scroller) {
        this.scroller = scrollUtils.getScrollEventTarget(this.$el);
      }

      bind(this.scroller, 'scroll', this.check);
    })
  ],
  model: {
    prop: 'loading'
  },

  props: {
    error: Boolean,
    loading: Boolean,
    finished: Boolean,
    loadingText: String,
    finishedText: String,
    errorText: String,
    immediateCheck: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 300
    },
    direction: {
      type: String,
      default: 'down'
    }
  },
  data() {
    return {
      innerLoading: this.loading
    };
  },
  updated() {
    this.innerLoading = this.loading;
  },
  mounted() {
    if (this.immediateCheck) {
      this.check();
    }
  },

  watch: {
    loading: 'check',
    finished: 'check'
  },

  methods: {
    check() {
      this.$nextTick(() => {
        if (this.innerLoading || this.finished || this.error) {
          return;
        }
        const { $el: el, scroller, offset, direction } = this;
        let scrollerRect;
        if (scroller.getBoundingClientRect) {
          scrollerRect = scroller.getBoundingClientRect();
        } else {
          scrollerRect = {
            top: 0,
            bottom: scroller.innerHeight
          };
        }
        const scrollerHeight = scrollerRect.bottom - scrollerRect.top;
        /* istanbul ignore next */
        if (!scrollerHeight || isHidden(el)) {
          return false;
        }

        let isReachEdge = false;
        const placeholderRect = this.$refs.placeholder.getBoundingClientRect();

        if (direction === 'up') {
          isReachEdge = placeholderRect.top - scrollerRect.top <= offset;
        } else {
          isReachEdge = placeholderRect.bottom - scrollerRect.bottom <= offset;
        }

        if (isReachEdge) {
          this.innerLoading = true;
          this.$emit('input', true);
          this.$emit('load');
        }
      });
    },
    clickErrorText() {
      this.$emit('update:error', false);
      this.check();
    }
  }
});
</script>
