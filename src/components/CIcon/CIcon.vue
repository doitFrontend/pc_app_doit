<template>
  <div>
    <svg class="icon" aria-hidden="true" :style="cstyle">
      <use :xlink:href="iconfont"></use>
    </svg>
  </div>
</template>
<script>
import './iconfont/iconfont';
import './iconfont1/iconfont';
export default {
  name: 'CIcon',
  props: {
    size: {
      type: Number,
      default: 24,
    },
    type: {
      type: String,
      required: true,
    }
  },
  computed: {
    iconfont() {
      return `#icon-${this.type}`;
    },
  },
  data() {
    return {
      cstyle: {
        fontSize: `${this.size}px`,
      }
    };
  },
};
</script>
<style lang="scss" scoped>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
