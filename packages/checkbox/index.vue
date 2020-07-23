<template>
  <div @click="toggle" :class="[b([{ disabled: isDisabled, checked,center }]),'h-hairline--surround']">
    <slot />
  </div>
</template>

<script>
import create from '../utils/create';
import findParent from '../mixins/find-parent';

export default create({
  name: 'checkbox',

  mixins: [findParent],

  props: {
    name: null,
    value: null,
    disabled: Boolean,
    center: {
      type: Boolean,
      default: false
    },
    unique: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    checked: {
      get() {
        return this.parent
          ? this.parent.value.indexOf(this.name) !== -1
          : this.value;
      },

      set(val) {
        if (this.parent) {
          this.setParentValue(val);
        } else {
          this.$emit('input', val);
        }
      }
    },

    isDisabled() {
      return (this.parent && this.parent.disabled) || this.disabled;
    },
  },

  watch: {
    value(val) {
      this.$emit('change', val);
    }
  },

  created() {
    this.findParent('h-checkbox-group');
  },

  methods: {
    toggle(target) {
      if (!this.isDisabled && !(target === 'label')) {
        this.checked = !this.checked;
      }
    },

    setParentValue(val) {
      const { parent } = this;
      const value = parent.value.slice();
      if (val) {
        if (parent.max && value.length >= parent.max) return;
        if (value.indexOf(this.name) === -1) {
          if(this.unique) {
            value.length = 0
            value.push(this.name);
            parent.$emit('input', value);
          }else {
            value.push(this.name);
            parent.$emit('input', value);
            this.$nextTick(()=>{parent.toggleUnique()})
          }
        }
      } else {
        const index = value.indexOf(this.name);
        /* istanbul ignore else */
        if (index !== -1) {
          value.splice(index, 1);
          parent.$emit('input', value);
        }
      }
    }
  }
});
</script>
