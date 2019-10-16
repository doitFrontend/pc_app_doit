<template>
  <div id="payment">
    <h2>支付金额<span>{{money}}</span></h2>
    <div class="inner">
      <h2>支付方式</h2>
      <div class="payway">
          <div class="log">
            <Icon size="40" color="rgb(4, 172, 238)" custom="icon iconfont icon-qq" />
          </div>
          <div class="log">
            <Icon size="38" color="rgb(10, 183, 14)" custom="iconfont icon-weixin" />
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.$route.params);
  },
  computed: {
    money() {
      return this.$route.params.money;
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
