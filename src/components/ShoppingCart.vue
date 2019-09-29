<template>
  <div ref="cart" id="cart">
    <!-- <transition-group tag="div"> -->
      <!-- <div class="header" :style="{ bottom: `${(cardLength + 1)*50 + (fieldLength + 1)*50 + (ticketLength + 1)*50 + 50}px`}">
        <div>购物车</div>
        <div>清除物品</div>
      </div> -->
      <!-- <div v-for="(item, i) in shoppingCartList"  :key="i+item" :style="{ top: `${-(i+1)*50}px` }" class="item">
        <div>
          {{item.title}}
        </div>
        <ButtonGroup size="small">
          <Button @click="handleNum(item, 'del')"><Icon type="ios-remove"/></Button>
          <Button style="width: 30px;">{{item.num}}</Button>
          <Button @click="handleNum(item, 'add')"><Icon type="ios-add"/></Button>
        </ButtonGroup>
        <div>￥{{(item.price * item.num).toFixed(2)}}</div>
      </div> -->
        <!-- 票 -->
        <div class="ticket" :style="{ bottom: `${(cardLength)*50 + (fieldLength + 1)*50 + (ticketLength)*50 + title_height*2}px`}">票</div>
        <div class="ticketItem"
          :style="{ bottom: `${(tIndex + 1)*50 + (fieldLength)*50 + (cardLength)*50 + title_height*2}px`}"
          v-for="(tItem, tIndex) in shoppingCartObj.ticketCart" :key="tIndex"
          v-if="tItem.num > 0">
          <div>
            {{tItem.title}}
          </div>
          <ButtonGroup size="small">
            <Button @click="handleNum(tItem, 'del')"><Icon type="ios-remove"/></Button>
            <Button style="width: 30px;">{{tItem.num}}</Button>
            <Button @click="handleNum(tItem, 'add')"><Icon type="ios-add"/></Button>
          </ButtonGroup>
          <div>￥{{(tItem.price * tItem.num).toFixed(2)}}</div>
        </div>
        <!-- 卡 -->
        <div class="card" :style="{ bottom: `${(cardLength)*50 + (fieldLength + 1)*50 + title_height}px`}">卡</div>
        <div class="cardItem"
          :style="{ bottom: `${(cardLength - cIndex)*50 + (fieldLength)*50 + title_height}px`}"
          v-for="(cItem, cIndex) in shoppingCartObj.cardCart" :key="cIndex"
          v-if="cItem.num > 0">
          <div>
            {{cItem.title}}
          </div>
          <ButtonGroup size="small">
            <Button @click="handleNum(cItem, 'del')"><Icon type="ios-remove"/></Button>
            <Button style="width: 30px;">{{cItem.num}}</Button>
            <Button @click="handleNum(cItem, 'add')"><Icon type="ios-add"/></Button>
          </ButtonGroup>
          <div>￥{{(cItem.price * cItem.num).toFixed(2)}}</div>
        </div>
        <!-- 场地 -->
        <div class="field" :style="{ bottom: `${(fieldLength + 1)*50}px`}">场地</div>
        <div class="fieldItem" :style="{ bottom: `${(fieldLength - fIndex)*50}px`}" v-for="(fItem, fIndex) in shoppingCartObj.fieldCart" :key="fIndex">
          {{fItem.place}}-{{fItem.time}}-{{fItem.price}}-{{fItem.status}}
          <span @click="deleteField(fIndex)">删除</span>
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
  data() {
    return {
      title_height: 26, // 同步修改
    };
  },
  computed: {
    shoppingCartObj() {
      // return this.$store.getters.realShoppingCart;
      return this.$store.state.shoppingCartObj;
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
      console.log(this.$store.state.shoppingCartObj.cardCart);
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
    deleteField(index) {
      this.$store.state.shoppingCartObj.fieldCart.splice(index, 1);
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
$box_shadow: inset 2px 2px 8px #eee;
#cart {
  width: 278px;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: calc(calc(100% - #{$g_width})/2 + #{$g_left_width} + 1em);
  z-index: 100;
  box-shadow: $box_shadow;
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
