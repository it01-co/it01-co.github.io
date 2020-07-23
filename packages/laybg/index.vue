<template>
  <div>
    <h-icon :color="color" :size="size" :class="b([`layout${item}`])" v-for="item of 4" :key="item" :name="fillet" :style="`padding: ${crevice}`" />
  </div>
</template>

<script>
import create from '../utils/create-basic';
import Icon from '../icon';
export default create({
  name: 'laybg',

  props: {
    fillet: String,
    color: String,
    size: String,
    crevice: {
      type: String,
      default: '5px'
    }
  },

  components: {
    Icon
  }
});
</script>
