<template>
  <ButtonGroup shape="circle">
    <Button class="btn-remove" style="font-weight: 700" @click="minusNum(item)"><Icon type="md-remove" size="14" color="#333" style="position: relative;top:-7px" /></Button>
    <Input v-model="item.num" placeholder="Enter something..." style="width: 50px;float:left;border-radius: 0 !important;position: relative;"/>
    <Button class="addnum" @click="addNum(item)"><Icon type="md-add" size="14" color="#333" style="position: relative;top:-7px"/></Button>
    <!-- <Button  type="primary"  style="position: relative;left:-100px;z-index:-10">{{item.num}}</Button> -->
  </ButtonGroup>
</template>
<script>
export default {
  name: 'ButtonGroups2',
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
    };
  },
  computed: {},
  methods: {
    addNum(item) {
      this.$emit('countSum', { item, sign: 'ADD' });
    },
    minusNum(item) {
      if (item.num === 0) { // 逻辑里面进一步判断是否可以继续减
        return;
      }
      // (item.num === 1) && (this.isShow = false);
      this.$emit('countSum', { item, sign: 'MINUS' });
    },
    // 点击动画效果
    // beforeEnter(el) {
    //   el.style.transform = 'translate(0, 0)';
    // },
    // enter(el, done) {
    //   el.offsetWidth;
    //   let shopCart = document.querySelector('#cart');
    //   el.style.transform = `translate(${shopCart.offsetLeft}px, ${shopCart.offsetTop}px)`;
    //   el.style.transition = 'all .4s ease-in-out';
    //   done(); // 去除停顿时间
    // },
    // afterEnter(el) {
    //   this.isBallShow = false;
    // },
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
    .ivu-btn-group{ margin:0 5px;}
  .ivu-btn-primary{background: #e5e5e5;border: none; width: 40px;height: 30px;color: #333333;font-size: 14px;line-height: 30px;}
  .ivu-btn-group:not(.ivu-btn-group-vertical) > .ivu-btn:first-child,.ivu-btn-group:not(.ivu-btn-group-vertical)>.ivu-btn:nth-child(3){
        width: 28px;
        height: 22px;
        margin:0 -5px;
        color: #fff;
        font-size: 18px;
        z-index:10;
        &:focus{outline: 0px}
  }
  .ivu-btn-group-circle .ivu-btn{
        border-radius: 4px;
  }
  .btn-remove{background: #f7f7f7 !important;text-align: center}

</style>
