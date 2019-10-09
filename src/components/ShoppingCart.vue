<template>
  <div ref="cart" id="cart">
    <div style="background: lightpink;">
      <div v-if="ticketCart.length" class="title">票</div>
      <!-- {{shoppingCartObj.ticketCart}} -->
      <div v-for="(item, index) in ticketCart" :key="index">
        {{item.time}}-{{item.typeName}}-{{item.num}}-{{item.price}}
      </div>
    </div>
    <div>
      <div v-if="cardCart.length" class="title">卡</div>
      <!-- {{shoppingCartObj.cardCart}} -->
      <div v-for="(item, index) in cardCart" :key="index">
        {{item.endTime}}-{{item.typeName}}-{{item.num}}-{{item.price}}
      </div>
    </div>
    <div style="background: lightblue;">
      <div v-if="shoppingCartObj.fieldCart.length" class="title">场地</div>
      <!-- {{shoppingCartObj.fieldCart}} -->
      <div v-for="(item, index) in shoppingCartObj.fieldCart" :key="index">
        {{item.time}}-{{item.place}}-{{item.price}}
      </div>
    </div>
  </div>
</template>
<script>
// TODO: 场地灰化必须在当前事件之前
export default {
  name: 'ShoppingCart',
  data() {
    return {
      title_height: 26, // 同步修改
    };
  },
  computed: {
    shoppingCartObj() {
      console.log(this.$store.state.shoppingCartObj.fieldCart);
      return this.$store.state.shoppingCartObj;
    },
    ticketCart() {
      return this.shoppingCartObj.ticketCart.filter(item => item.num >= 1);
    },
    cardCart() {
      return this.shoppingCartObj.cardCart.filter(item => item.num >= 1);
    },
    ticketLength() {
      let count = 0;
      this.$store.state.shoppingCartObj.ticketCart.forEach((item) => {
        if (item.num > 0) {
          count++;
        }
      });
      return count;
    },
    cardLength() {
      let count = 0;
      this.$store.state.shoppingCartObj.cardCart.forEach((item) => {
        if (item.num > 0) {
          count++;
        }
      });
      return count;
    },
    fieldLength() {
      return this.$store.state.shoppingCartObj.fieldCart.length;
    },
    totalCartPriz() {
      return this.$store.getters.totalCartPriz;
    },
  },
  methods: {
    deleteField(fItem) {
      this.$store.commit('delFieldById', fItem);
    },
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
// $box_shadow: inset 2px 2px 8px #eee;
#cart {
  width: 278px;
  height: 50px;
  padding-bottom: 50px;
  position: fixed;
  bottom: 0;
  left: calc(calc(100% - #{$g_width})/2 + #{$g_left_width} + 1em);
  z-index: 100;
  background: #f60;
  display: flex;
  flex-direction: column-reverse;
  // box-shadow: $box_shadow;
  & > div.ticket, div.card, div.field {
    background: lightblue;
    height: inherit;
    width: inherit;
    position: absolute;
    padding: 0 1em;
    height: 26px;
    line-height: 26px;
  }
  & > div.ticketItem, div.cardItem, div.fieldItem {
    height: inherit;
    width: inherit;
    position: absolute;
    background: #f7f7f7;
    // box-shadow: $box_shadow;
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
  .item {
    height: inherit;
    width: inherit;
    position: absolute;
    background: #f7f7f7;
    // box-shadow: $box_shadow;
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
