<template>
<div id="MyOrderDetail">
  <h2 id="org_name">订单详情</h2>
  <div class="ticket_detail">
    <div class="order_state">
      <div class="order_state_l">
        <div>当前状态</div>
        <h3 class="color_progress"  v-if="myOrderInfo.orderMainPayStatus=='SUCCESS'">已付</h3>
        <h3 class="color_progress"  v-if="myOrderInfo.orderMainPayStatus=='REFUND'">已退</h3>
        <h3 class="color_progress"  v-if="myOrderInfo.orderMainPayStatus=='PARTREFUND'">部分已退</h3>
        <h3 class="color_progress"  v-if="myOrderInfo.orderMainPayStatus=='NOTPAY'">未支付</h3>
        <h3 class="color_progress"  v-if="myOrderInfo.orderMainPayStatus=='CLOSED'">已关闭</h3>
        <h3 class="color_progress"  v-if="myOrderInfo.orderMainPayStatus=='USERPAYING'">支付中</h3>
        <h3 class="color_progress"  v-if="myOrderInfo.orderMainPayStatus=='REVOKED'">已撤销</h3>
        <h3 class="color_progress"  v-if="myOrderInfo.orderMainPayStatus=='NOPAY'">未支付支付超时</h3>
        <h3 class="color_progress"  v-if="myOrderInfo.orderMainPayStatus=='PAYERROR'">支付失败</h3>
        <h3 class="color_progress"  v-if="myOrderInfo.orderMainPayStatus=='cancel'">取消支付</h3>

      </div>
      <div class="order_state_r">
        <template  v-if="myOrderInfo.orderMainPayStatus=='NOTPAY' || myOrderInfo.orderMainPayStatus=='CLOSED' || myOrderInfo.orderMainPayStatus=='NOPAY' || myOrderInfo.orderMainPayStatus=='PAYERROR'">
          <Steps :current="1">
            <Step title="已完成" content="提交订单"></Step>
            <Step title="进行中" content="买家付款"></Step>
            <Step title="待进行" content="付款成功"></Step>
          </Steps>
        </template>
        <template  v-if="myOrderInfo.orderMainPayStatus=='USERPAYING'">
          <Steps :current="2">
            <Step title="已完成" content="提交订单"></Step>
            <Step title="进行中" content="买家付款"></Step>
            <Step title="待进行" content="付款成功"></Step>
          </Steps>
        </template>
        <template  v-if="myOrderInfo.orderMainPayStatus=='SUCCESS' || myOrderInfo.orderMainPayStatus=='REFUND' || myOrderInfo.orderMainPayStatus=='PARTREFUND'">
          <Steps :current="3">
            <Step title="已完成" content="提交订单"></Step>
            <Step title="已完成" content="买家付款"></Step>
            <Step title="已完成" content="付款成功"></Step>
          </Steps>
        </template>
      </div>
    </div>
    <div class="order_information">
      <h4>订单信息</h4>
        <Row>
          <Col span="8">
            <ul>
              <li><em>订单编号：</em><span>{{ myOrderInfo.orderMainId }}</span></li>
              <li><em>下单时间：</em><span>{{ myOrderInfo.createTime }}</span></li>
              <li><em>支付状态：</em>
              <span  v-if="myOrderInfo.orderMainPayStatus=='SUCCESS'">已付</span>
              <span  v-if="myOrderInfo.orderMainPayStatus=='REFUND'">已退</span>
              <span  v-if="myOrderInfo.orderMainPayStatus=='PARTREFUND'">部分已退</span>
              <span  v-if="myOrderInfo.orderMainPayStatus=='NOTPAY'">未支付</span>
              <span  v-if="myOrderInfo.orderMainPayStatus=='CLOSED'">已关闭</span>
              <span  v-if="myOrderInfo.orderMainPayStatus=='USERPAYING'">支付中</span>
              <span  v-if="myOrderInfo.orderMainPayStatus=='REVOKED'">已撤销</span>
              <span  v-if="myOrderInfo.orderMainPayStatus=='NOPAY'">未支付支付超时</span>
              <span  v-if="myOrderInfo.orderMainPayStatus=='cancel'">取消支付</span>
              </li>
            </ul>
          </Col>
          <Col span="8">
            <ul>
              <li><em>商品总额：</em><span>{{ myOrderInfo.orderMainSumPrice}}</span></li>
              <li><em>支付金额：</em><span style="color: #fd683d;">¥{{ myOrderInfo.orderMainSumHaspay}}</span></li>
              <li><em>支付方式：</em><span>{{ myOrderInfo.orderMainPayType }}</span></li>
            </ul>
          </Col>
          <Col span="8">
          </Col>
        </Row>
    </div>
    <div class="good_information">
      <h4>商品信息</h4>
      <template>
        <Table border :columns="columns7" :data="data6"></Table>
      </template>
    </div>
  </div>
</div>
</template>
<script>
import PersonalCenterNav from '@/components/PersonalCenterNav.vue';
export default {
  name: 'MyOrderDetail',
  components: { PersonalCenterNav },
  data() {
    return {
      timer: null,
      myOrderInfo: {},
      columns7: [
        {
          title: '商品类型',
          key: 'orderChildProductType',
          width: 200,
          align: 'center',
          render: (h, params) => {
            return h('div', {}, params.row.orderChildProductType);
          }
        },
        {
          title: '商品信息',
          render: (h, params) => {
            let strEndTime = '有效期：';
            let strOrgName = '商家：';
            // return h('div', {}, str);
            return h('div', [
              h('h3', {
              }, params.row.cardType1.cardTypeName),
              h('span', {
                style: {
                  color: '#999',
                }
              }, strEndTime + JSON.parse(params.row.cardType1.rcode).有效期),
              h('p', {
                style: {
                  color: '#999',
                }
              }, strOrgName + '大连理工体育馆'),
            ]);
          },
          width: 400,
        },
        {
          title: '单价',
          align: 'center',
          key: 'orderChildProductPrice',
          render: (h, params) => {
            return h('div', {}, params.row.orderChildProductPrice);
          }
        },
        {
          title: '数量',
          align: 'center',
          render: (h, params) => {
            return h('div', {}, params.row.orderChildProductNum);
          }
        },
        {
          title: '金额',
          key: 'orderChildProductPrice',
          align: 'center',
          render: (h, params) => {
            return h('div', {}, params.row.orderChildProductPrice);
          }
        },
      ],
      data6: [],
      // data6: [
      //   {
      //     orderChildProductType: '场地',
      //     orderChildProductPrice: 18,
      //     orderChildProductNum: 1,
      //     orgName: 'New York No. 1 Lake Park',
      //     Name: '台球-预定',
      //     EndTime: '2016-10-03',
      //   },
      //   {
      //     orderChildProductType: '票',
      //     orderChildProductPrice: 24,
      //     orderChildProductNum: 1,
      //     orgName: 'London No. 1 Lake ParkLondon No. 1 Lake Park',
      //     Name: '篮球篇',
      //     EndTime: '2016-10-01'
      //   },
      //   {
      //     orderChildProductType: '卡',
      //     orderChildProductPrice: 30,
      //     orderChildProductNum: 1,
      //     orgName: 'Sydney No. 1 Lake Park',
      //     Name: '季卡',
      //     EndTime: '2016-10-02'
      //   },
      //   {
      //     orderChildProductType: '卡',
      //     orderChildProductPrice: 26,
      //     orderChildProductNum: 1,
      //     orgName: 'Ottawa No. 2 Lake Park',
      //     Name: '年卡',
      //     EndTime: '2016-10-04'
      //   },
      // ],
    };
  },
  created() {
    this.myOrderInfo = this.$route.query;
    console.log(this.myOrderInfo);
  },
  mounted() {
    this.getMyCardForPortal(this.myOrderInfo.orderMainId);
  },
  destroyed() {
  },
  methods: {
    getMyCardForPortal(orderMainId) {
      let data = {
        orgId: 'c4f67f3177d111e986f98cec4bb1848c',
        orderMainId: orderMainId,
      };
      this.$axios({
        method: 'POST',
        url: '/selectChildListByMainId.do',
        data: data,
      }).then(res => {
        if (res.data.code === 200) {
          console.log(res.data);
          this.data6 = res.data.data;
        } else {
          this.$Message.warning(res.code);
        }
      }).catch(error => {
        console.log(error);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#MyOrderDetail {
height: 100%;
background-color: #fff;
font-size: 14px;
word-break:break-all;
font-family:Microsoft YaHei;
  h2 {
        text-align: left;
        font-size: 16px;
        font-weight: 500;
        border-bottom: 1px  solid #ddd;
        line-height: 30px;
        margin-bottom: 10px;
        padding-bottom: 10px;
        font-weight: bold;
        }
      .ticket_detail{
        margin-top: 30px;
        text-align: left;
        line-height: 40px;
        h4{
          font-size: 14px;
          line-height: 40px;
          margin: 10px 0;
          }
        .order_state{
          display: flex;
          .order_state_l{
            width: 200px;
            border-right: 1px solid #bbbbbb;
            text-align: center;
            color: #1a1a1a;
            h3{color: #1bbb99;}
          }
          .order_state_r{
            margin-top: 20px;
            margin-left: 60px;
            width: 800px;
          }
        }
        .order_information{
          ul{
            list-style:none;
            line-height: 32px;
            em{font-style: normal;}
          }
        }
        .good_information{
          line-height: 24px;
          & /deep/.ivu-table-wrapper{
            margin-top: 20px;
            & /deep/.ivu-table{
              font-weight: normal;
              font-size: 14px;
              h3{font-size: 14px;font-weight: normal;}
              tr td{padding: 10px 0;}
              th{
                background: #f2f4f5;
                color: #999;
                text-align: center;
              }
          }
          }
        }
      }
}
</style>
