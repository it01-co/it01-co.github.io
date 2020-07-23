<template>
  <i
    v-on="$listeners"
    :class="['health-AI h-icon', isSrc ? 'h-icon--image' : name]"
    :style="style"
  >
    <slot />
    <img
      :style="`width: ${size}`"
      v-if="isSrc"
      :src="name"
    >
  </i>
</template>

<script>
import create from '../utils/create-basic';
import isSrc from '../utils/validate/src';

export default create({
  name: 'icon',

  props: {
    name: String,
    size: String,
    color: String,
  },

  computed: {
    style() {
      return {
        color: this.color,
        fontSize: this.size
      };
    },

    isSrc() {
      return isSrc(this.name);
    }
  }
});
</script>
