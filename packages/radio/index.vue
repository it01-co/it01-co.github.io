<template>
  <div
    :class="[b(`mode${custom}`,{ 
      disabled: isDisabled,
      checked: checked, 
    }),{
      'h-hairline--surround': !custom
    }]"
    @click="$emit('click')"
  >
    <span :class="b('input')">
      <input
        v-model="currentValue"
        type="radio"
        :value="name"
        :class="b('control')"
        :disabled="isDisabled"
      >
    </span>
    <template v-if="custom">
      <slot />
    </template>
    <span
      v-if="$slots.default && !custom"
      @click="onClickLabel"
    >
      <slot />
    </span>
  </div>
</template>

<script>
import create from '../utils/create';
import findParent from '../mixins/find-parent';

export default create({
  name: 'radio',

  mixins: [findParent],

  props: {
    name: null,
    value: null,
    disabled: Boolean,
    labelDisabled: Boolean,
    custom: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    currentValue: {
      get() {
        return this.parent ? this.parent.value : this.value;
      },

      set(val) {
        (this.parent || this).$emit('input', val);
      }
    },

    checked() {
      return this.currentValue === this.name;
    },

    isDisabled() {
      return this.parent
        ? this.parent.disabled || this.disabled
        : this.disabled;
    },
  },

  created() {
    this.findParent('h-radio-group');
  },

  methods: {
    onClickLabel() {
      if (!this.isDisabled && !this.labelDisabled) {
        this.currentValue = this.name;
      }
    }
  }
});
</script>
