<template>
  <ButtonGroup shape="circle">
    <Button v-show="isShow" class="btn-remove" style="font-weight: 700" @click="minusNum(item)"><Icon type="md-remove" size="20" color="#bebebe" style="position: relative;top:-5px" /></Button>
    <Button v-show="isShow" type="primary">{{item.num}}</Button>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div v-show="isBallShow" class="ball"></div>
    </transition>
    <Button v-if="isShow" class="addnum" @click="addNum(item)"><Icon type="md-add" size="20" color="#fff"  style="position: relative;top:-5px"/></Button>
    <Button v-else @click="addNum(item, 'true')" style="width:100px;font-size:14px;border-radius: 4px;color: #fff;background: #00A1E9;margin-right:5px;margin-top:3px;">加入购物车</Button>
  </ButtonGroup>
</template>
<script>
export default {
  name: 'ButtonGroups',
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      isBallShow: false,
      isShow: false,
    };
  },
  computed: {},
  methods: {
    addNum(item, b) {
      b && (this.isShow = true);
      this.isBallShow = true;
      this.$emit('countSum', { item, sign: 'ADD' });
    },
    minusNum(item) {
      if (item.num === 0) { // 逻辑里面进一步判断是否可以继续减
        return;
      }
      (item.num === 1) && (this.isShow = false);
      this.$emit('countSum', { item, sign: 'MINUS' });
    },
    // 点击动画效果
    beforeEnter(el) {
      el.style.transform = 'translate(0, 0)';
    },
    enter(el, done) {
      el.offsetWidth;
      let shopCart = document.querySelector('#cart');
      el.style.transform = `translate(${shopCart.offsetLeft}px, ${shopCart.offsetTop}px)`;
      el.style.transition = 'all .4s ease-in-out';
      done(); // 去除停顿时间
    },
    afterEnter(el) {
      this.isBallShow = false;
    },
  },
};
</script>
<style lang="scss" scoped>
  .ball {
    width: 1.4em;
    height: 1.4em;
    background: $g_default_color;
    border-radius: 50%;
    position: absolute;
    top: 8px;
    right: 15px;
    z-index: 100;
  }
  .ivu-btn{padding: 0;}
  .ivu-btn-primary{background: #e5e5e5;border: none; width: 40px;height: 26px;color: #333333;font-size: 14px;line-height: 26px;}
  .ivu-btn-group:not(.ivu-btn-group-vertical) > .ivu-btn:first-child,.ivu-btn-group:not(.ivu-btn-group-vertical)>.ivu-btn:last-child{
        border-radius: 32px;
        border-bottom-left-radius: 32px;
        border-top-left-radius: 32px;
        width: 26px;
        height: 26px;
        margin-left: 8px;
        margin-right: 8px;
        background: #f76900;
        color: #fff;
        font-size: 18px;
        &:focus{outline: 0px}
  }
  .btn-remove{background: #f7f7f7 !important;}

</style>
