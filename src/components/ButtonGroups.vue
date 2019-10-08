<template>
  <ButtonGroup shape="circle">
    <Button class="btn-remove" style="font-weight: 700" v-show="item.num > 0" @click="minusNum(item)"><Icon type="md-remove" size="24" color="#bebebe" style="position: relative;top:-3px" /></Button>
    <Button v-show="item.num > 0" type="primary">{{item.num}}</Button>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div v-show="isBallShow" class="ball"></div>
    </transition>
    <Button v-if="item.num > 0" class="addnum" @click="addNum(item)"><Icon type="md-add" size="24" color="#fff"  style="position: relative;top:-3px"  /></Button>
    <Button v-else @click="addNum(item)" style="width:120px;font-size:18px;border-radius: 32px;color: #fff;background: #f76900;margin-right:5px">加入购物车</Button>
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
    };
  },
  computed: {},
  methods: {
    addNum(item) {
      item.num++;
      this.isBallShow = true;
      this.$emit('countSum', { item, sign: 'ADD' });
    },
    minusNum(item) {
      if (item.num === 0) { // 逻辑里面进一步判断是否可以继续减
        return;
      }
      item.num--;
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
  .ivu-btn-primary{background: #e5e5e5;border: none; width: 40px;height: 28px;color: #333333;font-size: 18px}
  .ivu-btn-group:not(.ivu-btn-group-vertical) > .ivu-btn:first-child,.ivu-btn-group:not(.ivu-btn-group-vertical)>.ivu-btn:last-child{
        border-radius: 32px;
        border-bottom-left-radius: 32px;
        border-top-left-radius: 32px;
        width: 28px;
        height: 28px;
        margin-left: 10px;
        margin-right: 10px;
        background: #f76900;
        color: #fff;
        font-size: 18px;
        &:focus{outline: 0px}
  }
  .btn-remove{background: #f7f7f7 !important;}

</style>
