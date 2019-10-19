<template>
  <div id="payment">
    <h2>支付金额<span>{{money}}</span></h2>
    <div class="inner">
      <h2>支付方式</h2>
      <div class="payway">
          <div class="log" @click="showQRcode">
            <c-icon type="zhifubao" :size="40"></c-icon>
          </div>
          <div class="log" @click="showQRcode">
            <c-icon type="weixin" :size="40"></c-icon>
          </div>
      </div>
    </div>
    <Modal v-model="showModal" width="10">
      <h2 slot="header">请扫码支付</h2>
      <canvas id="canvas" style="width: 180px;height: 180px;"></canvas>
      <div slot="footer"></div>
    </Modal>
  </div>
</template>
<script>
import QRCode from 'qrcode';
export default {
  created() {
    console.log(this.$route.params);
    console.log(this.money);
    if (!this.money) {
      this.$router.push('checkout');
    }
  },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    money() {
      return this.$route.params.money;
    },
  },
  methods: {
    showQRcode() {
      this.showModal = true;
      this.qrcode(Math.random());
    },
    qrcode(cardNo) {
      let canvas = document.getElementById('canvas');
      let myDate = new Date().getTime();
      QRCode.toCanvas(canvas, cardNo + '&' + myDate, function(error) {
        if (error) {
          console.error(error);
        }
        console.log('success!');
      });
    },
  },
};
</script>
<style lang="scss" scoped>
  #payment {
    width: $g_width;
    margin: auto;
    min-height: 500px;
    padding: 1em 2em;
    & > h2 {
      border-bottom: 1px solid #E5E5E5;
      padding: 0.5em 1em;
      & > span {
        margin-left: 2em;
        font-size: 20px;
        color: #F76900;
        &::before {
          content: '￥';
          font-size: 16px;
        }
      }
    }
    .inner {
      display: flex;
      padding: 9px 18px;
      .payway {
        margin-left: 3em;
        display: flex;
        .log {
          border-radius: 8px;
          padding: 1em;
          &:hover {
            background: rgb(207, 206, 206);
            cursor: pointer;
          }
          .ivu-icon {
            padding: 12px;
          }
        }
      }
    }
  }
</style>
