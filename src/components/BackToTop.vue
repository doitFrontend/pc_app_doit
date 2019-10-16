<template>
  <div v-show="isBtnShow" @click="handleBackTop" class="backTop">
    <Icon size="16" color="#fff" type="ios-arrow-up" />
  </div>
</template>
<script>
export default {
  name: 'BackToTop',
  props: {
    isBtnShow: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    handleBackTop() {
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>
<style lang="scss" scoped>
  .backTop {
    position: fixed;
    right: 2em;
    bottom: 60px;
    font-size: 12px; // 用em单位必须标明font-size大小
    width: 3em;
    height: 3em;
    background: #515a6e;
    border-radius: 5px;
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
</style>
