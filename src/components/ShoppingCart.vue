<template>
  <div ref="cart" id="cart">
    <!-- <transition-group tag="div"> -->
      <div  v-if="totalCartPriz.count > 0" class="item"  :style="{ top: `${-(shoppingCartList.length+1)*50}px` }">
        <div>购物车</div>
        <div>清除物品</div>
        </div>
      <div v-for="(item, i) in shoppingCartList" v-if="item.num > 0" :key="i+item" :style="{ top: `${-(i+1)*50}px` }" class="item">
        <div>
          {{item.title}}
        </div>
        <ButtonGroup size="small">
          <Button @click="handleNum(item, 'del')"><Icon type="ios-remove"/></Button>
          <Button style="width: 30px;">{{item.num}}</Button>
          <Button @click="handleNum(item, 'add')"><Icon type="ios-add"/></Button>
        </ButtonGroup>
        <div>￥{{(item.price * item.num).toFixed(2)}}</div>
      </div>
    <!-- </transition-group> -->
    <div class="item">
      <Badge :count="totalCartPriz.count">
        <Icon size="36" color="#fff" type="ios-cart"/>
      </Badge>
      ￥{{totalCartPriz.p}}
      <!-- shoppingCart -->
      <!-- num{{totalCartPriz.count}} -->
      <div @click="toCheckout">去结算 ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShoppingCart',
  computed: {
    shoppingCartList() {
      return this.$store.getters.realShoppingCart;
    },
    totalCartPriz() {
      return this.$store.getters.totalCartPriz;
    },
  },
  methods: {
    handleNum(item, sign) {
      switch (sign) {
        case 'add':
          item.num++;
          break;
        default:
          item.num--;
          break;
      }
    },
    toCheckout() {
      this.$router.push({
        name: 'Checkout',
        params: {},
      });
    },
  },
};
</script>
<style lang="scss" scoped>
$box_shadow: inset 2px 2px 8px #eee;
#cart {
  background: lightblue;
  width: 278px;
  height: 50px;
  position: fixed;
  bottom: 0;
  // right: 100px;
  left: calc(calc(100% - 1000px)/2 + 862px);
  z-index: 100;
  box-shadow: $box_shadow;
  .item {
    height: inherit;
    width: inherit;
    position: absolute;
    background: #f7f7f7;
    box-shadow: $box_shadow;
    padding: 0 0.5em 0 0.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    border-bottom: 1px solid grey;
    & > div:nth-child(1)  {
      width: 100px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    & > div:nth-child(3)  {
      width: 65px;
      color: #f60;
    }
    &:last-child {
      background: $g_default_color;
      // box-shadow: none;
      display: flex;
      justify-content: space-between;
      color: #fff;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
      padding-right: 0;
      div {
        height: inherit;
        padding: 10px 20px;
        background: #f60;
      }
    }
  }
}
</style>
