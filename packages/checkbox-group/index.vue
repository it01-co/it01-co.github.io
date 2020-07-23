<template>
  <div :class="b([size])">
    <slot />
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'checkbox-group',

  props: {
    max: Number,
    value: Array,
    disabled: Boolean,
    size: {
      default: 'normal',
      type: String
    }
  },

  watch: {
    value(val) {
      this.$emit('change', val);
    }
  },

  methods: {
    toggleUnique() {
      this.$children.some(item => {
        if(item.unique) {
          if(this.value.includes(item.name)) this.value.splice(this.value.indexOf(item.name),1)
          return
        }
      })
    }
  }
});
</script>
