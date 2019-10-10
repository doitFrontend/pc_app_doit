<template>
  <div ref="cart" id="cart">
    <div class="self">
      <div>
        <Badge :count="totalCount">
          <Icon size="24" color="#000" type="ios-cart"/>
        </Badge>
      </div>
      <div class="money">{{totalCartPriz.p}}</div>
      <div @click="toCheckout">去结算</div>
    </div>
    <!-- ticket -->
    <div class="ticket">
      <div v-if="ticketCart.length" class="title">票</div>
      <div class="content" v-for="(item, index) in ticketCart" :key="index">
        <div>{{item.typeName}}</div>
        <ButtonGroup size="small">
          <Button @click="handleNum(item, 'del')"><Icon type="ios-remove"/></Button>
          <Button style="width: 30px;">{{item.num}}</Button>
          <Button @click="handleNum(item, 'add')"><Icon type="ios-add"/></Button>
        </ButtonGroup>
        <div>{{item.price * item.num}}</div>
      </div>
    </div>
    <!-- card -->
    <div class="card">
      <div v-if="cardCart.length" class="title">卡</div>
      <div class="content" v-for="(item, index) in cardCart" :key="index">
        <div>{{item.typeName}}</div>
        <ButtonGroup size="small">
          <Button @click="handleNum(item, 'del')"><Icon type="ios-remove"/></Button>
          <Button style="width: 30px;">{{item.num}}</Button>
          <Button @click="handleNum(item, 'add')"><Icon type="ios-add"/></Button>
        </ButtonGroup>
        <div>{{item.price * item.num}}</div>
      </div>
    </div>
    <!-- field -->
    <div class="field">
      <div v-if="shoppingCartObj.fieldCart.length" class="title">场地</div>
      <div class="content" v-for="(item, index) in shoppingCartObj.fieldCart" :key="index">
        <div>{{item.place}}</div>
        <div>
          <div>{{item.setCustomTimeMe}}</div>
          <div>{{item.time}}</div>
        </div>
        <div>{{item.price * item.num}}</div>
        <div @click="deleteField(index)">删除</div>
      </div>
    </div>
  </div>
</template>
<script>
// TODO: 场地灰化必须在当前事件之前
export default {
  name: 'ShoppingCart',
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
    totalCount() {
      let count = 0;
      this.ticketCart.forEach((item) => {
        count += item.num;
      });
      this.cardCart.forEach((item) => {
        count += item.num;
      });
      count += this.shoppingCartObj.fieldCart.length;
      return count;
    },
    totalCartPriz() {
      return this.$store.getters.totalCartPriz;
    },
  },
  methods: {
    deleteField(index) {
      this.$store.commit('delFieldById', index);
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
@mixin item {
  background: #fff;
  .title {
    padding: 2px 2em;
    width: 100%;
    background: #EDF1F2;
  }
  .content {
    padding: 10px 0;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #999;
    align-items: center;
    & > div:nth-child(3) {
      color: #F76900;
      &::before {
        content: '￥';
        font-size: 16px;
      }
    }
  }
}
#cart {
  width: 278px;
  height: 40px;
  padding-bottom: 40px;
  position: fixed;
  bottom: 0;
  left: calc(calc(100% - #{$g_width})/2 + #{$g_left_width} + 1em);
  z-index: 100;
  background: #EDF1F2;
  display: flex;
  flex-direction: column-reverse;
  .self {
    position: fixed;
    bottom: 0;
    // background: #f60;
    display: flex;
    width: inherit;
    height: 40px;
    line-height: 40px;
    // padding: 0 0 0 1em;
    // justify-content: space-between;
    & > div:nth-child(1) {
      flex-grow: 1;
      text-align: center;
    }
    & > .money {
      flex-grow: 1;
      text-align: center;
      color: #F76900;
      &::before {
        content: '￥';
        font-size: 16px;
      }
    }
    & > div:nth-child(3) {
      flex-grow: 2;
      background: #F76900;
      text-align: center;
      color: #fff;
      &:hover {
        cursor: pointer;
      }
    }
  }
  & > div.ticket {
    @include item;
  }
  & > div.card {
    @include item;
  }
  & > div.field {
    @include item;
    .content > div:last-child {
      color: $g_default_color;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
