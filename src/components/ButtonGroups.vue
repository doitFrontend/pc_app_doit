<template>
  <ButtonGroup shape="circle">
    <Button class="btn-remove" style="font-weight: 700" @click="minusNum(item)"><Icon type="md-remove" size="20" color="#bebebe" style="position: relative;top:-3px" /></Button>
    <Button  type="primary">{{item.num}}</Button>
    <Button  class="addnum" @click="addNum(item)"><Icon type="md-add" size="20" color="#fff"  style="position: relative;top:-3px"/></Button>
    <!-- <Button  @click="addNum(item, 'true')" style="width:100px;font-size:14px;border-radius: 4px;color: #fff;background: #00A1E9;margin-right:5px;margin-top:3px;">加入购物车</Button> -->
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
      this.$emit('countSum', { item, sign: 'MINUS' });
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
  .ivu-btn-primary{background: #e5e5e5;border: none; width: 40px;height: 30px;color: #333333;font-size: 14px;line-height: 30px;}
  .ivu-btn-group:not(.ivu-btn-group-vertical) > .ivu-btn:first-child,.ivu-btn-group:not(.ivu-btn-group-vertical)>.ivu-btn:last-child{
        border-radius: 32px;
        border-bottom-left-radius: 32px;
        border-top-left-radius: 32px;
        width: 30px;
        height: 30px;
        margin-left: 8px;
        margin-right: 8px;
        background:rgb(0, 161, 233);;
        color: #fff;
        font-size: 18px;
        &:focus{outline: 0px}
  }
  .btn-remove{background: #f7f7f7 !important;}

</style>
