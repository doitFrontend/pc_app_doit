<template>
    <div id="checkout">
        <div class="container">
            <h2>订单详情</h2>
            <Row>
                <Col span="8">
                    <h3>票</h3>
                    <div v-if="!ticketOrder.length" class="ticketElse">暂无商品, 请选购</div>
                    <div v-else class="ticket">
                        <!-- {{ticketOrder}} -->
                        <Row class="header">
                            <Col span="10">商品</Col>
                            <Col span="9">时长</Col>
                            <Col span="2">份数</Col>
                            <Col span="3">小计</Col>
                        </Row>
                        <Row class="content" v-for="(item, index) in ticketOrder" :key="index">
                            <Col span="10">{{item.typeName}}</Col>
                            <Col span="9">{{item.time}}</Col>
                            <Col span="2">{{item.num}}</Col>
                            <Col span="3">￥{{item.price}}</Col>
                        </Row>
                    </div>
                </Col>
                <Col span="8">
                    <h3>卡</h3>
                    <div v-if="!cardOrder.length" class="ticketElse">暂无商品, 请选购</div>
                    <div v-else class="ticket">
                        <!-- {{cardOrder}} -->
                        <Row class="header">
                            <Col span="19">商品</Col>
                            <Col span="2">份数</Col>
                            <Col span="3">小计</Col>
                        </Row>
                        <Row class="content" v-for="(item, index) in cardOrder" :key="index">
                            <Col span="19">{{item.typeName}}</Col>
                            <Col span="2">{{item.num}}</Col>
                            <Col span="3">￥{{item.price}}</Col>
                        </Row>
                    </div>
                </Col>
                <Col span="8">
                    <h3>场地</h3>
                    <div v-if="!fieldOrder.length" class="ticketElse">暂无商品, 请选购</div>
                    <div v-else class="ticket">
                        <!-- {{fieldOrder}} -->
                        <Row class="header">
                            <Col span="7">商品</Col>
                            <Col span="12">时间</Col>
                            <Col span="2">份数</Col>
                            <Col span="3">小计</Col>
                        </Row>
                        <Row class="content" v-for="(item, index) in fieldOrder" :key="index">
                            <Col span="7">{{item.place}}</Col>
                            <Col span="12">{{item.setCustomTimeMe}} {{item.time}}</Col>
                            <Col span="2">{{item.num}}</Col>
                            <Col span="3">￥{{item.money}}</Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <div class="total">
                <div class="left"></div>
                <div class="right">
                    <span>合计</span>
                    <span>{{totalCartPriz.p}}</span>
                    <span @click="toPayment">确认下单</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  computed: {
    ticketOrder() {
      return this.$store.state.shoppingCartObj.ticketCart;
    },
    cardOrder() {
      return this.$store.state.shoppingCartObj.cardCart;
    },
    fieldOrder() {
      return this.$store.state.shoppingCartObj.fieldCart;
    },
    totalCartPriz() {
      return this.$store.getters.totalCartPriz;
    },
  },
  methods: {
    toPayment() {
      this.$router.push({
        name: 'Payment',
        params: {
          money: this.totalCartPriz.p,
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
$min_height: 440px;
#checkout {
    width: $g_width;
    margin: auto;
    min-height: $min_height;
    padding: 1em 2em;
    .container {}
    h2 {
        border-bottom: 1px solid #E5E5E5;
        padding: 0.5em 1em;
    }
    h3 {
        padding: 1em 1em 0 1em;
    }
    .ticketElse {
        margin: 1em 1em;
        padding: 1em 1em;
        border: 1px solid #E5E5E5;
        min-height: $min_height;
    }
    .ticket {
        padding: 1em 1em;
        min-height: $min_height;
        .header {
            padding: 0.5em 0.5em;
            background: #E5E5E5;
            border: 1px solid #E5E5E5;
        }
        .content {
            padding: 0.5em 0.5em;
            border: 1px solid #E5E5E5;
            margin-top: -1px;
        }
    }
    .total {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #E5E5E5;
        padding-top: 1em;
        .right {
            display: flex;
            align-items: center;
            span {
                font-size: 24px;
                font-weight: 500;
                &:nth-child(1) {}
                &:nth-child(2) {
                    &::before {
                        content: '￥';
                        font-size: 20px;
                        color: #F76900;
                    }
                }
                &:nth-child(3) {
                    font-size: 16px;
                    color: #fff;
                    background: red;
                    padding: 0.6em 1.4em;
                    margin-left: 2em;
                    border-radius: 10px;
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>
