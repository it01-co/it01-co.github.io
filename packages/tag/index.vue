<template>
  <!-- <transition name="tagclear"> -->
    <span
      :class="b({
        select, clear
      })"
    >
      <slot />
      <h-icon @click="close($event)" class="icon__clear" v-if="clear" name="del-fill" />
    </span>
  <!-- </transition> -->
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'tag',

  props: {
    select: {
      default: false,
      type: Boolean
    },
    clear: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    close(e) {
      this.$emit('close',e)
    }
  }
});
</script>
