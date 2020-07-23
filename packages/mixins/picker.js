/**
 * Common Picker Props
 */

export default {
  props: {
    title: String,
    loading: Boolean,
    cancelButtonText: String,
    confirmButtonText: String,
    visibleItemCount: {
      type: Number,
      default: 7
    },
    itemHeight: {
      type: Number,
      default: 34
    },
    swipeDuration: {
      type: String,
      default: "1000"
    }
  }
};
