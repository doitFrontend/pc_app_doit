<template>
<div id="MyCardDetail">
  <h2 id="org_name">卡详情</h2>
  <div class="ticket_detail">
    <div class="ticket_information">
      <Row>
        <Col span="12">
        <div class="" style="border-top: 1px  solid #ddd;border-left: 1px  solid #ddd;">
          <div class="div1"><span>卡名称：</span><p>{{myCardInfo.cardTypeName}}</p></div>
          <div class="div1"><span>卡号：</span><p>{{myCardInfo.cardNo}}</p></div>
          <div class="div1"><span>使用项目：</span><p>{{myCardInfo.json[1]}}</p></div>
          <div class="div1"><span>使用状态：</span><p  v-if="myCardInfo.status=='0'">未使用</p><p  v-if="!myCardInfo.status=='0'">未使用</p></div>
          <div class="div1" style="height:200px;"><span>有效期：</span><p  v-if="myCardInfo.endtime">{{myCardInfo.endtime}}</p><p  v-if="!myCardInfo.endtime">长期有效</p></div>
        </div>
        </Col>
        <Col span="12">
        <div style="border-top: 1px  solid #ddd;">
          <div class="div1"><span>商家名称：</span><p>大连理工大学</p></div>
          <div class="div1">
            <span>剩余额度：</span>
            <p v-if="myCardInfo.cardType=='时间'">余额：{{myCardInfo.leftmoney}}分钟</p>
            <p v-if="myCardInfo.cardType=='次'">余额：{{myCardInfo.leftmoney}}次</p>
            <p v-if="myCardInfo.cardType=='金额'">余额：{{myCardInfo.leftmoney}}元</p>
            <p v-if="myCardInfo.cardType=='点'">余额：{{myCardInfo.leftmoney}}点</p>
            <p v-if="myCardInfo.cardType=='小时'">余额：{{myCardInfo.leftmoney}}小时</p>
          </div>
          <div class="div1"><span>使用人群：</span><p>{{myCardInfo.json[3]}}</p></div>
          <div class="div1"><span>使用时段：</span><p>{{myCardInfo.json[36]}}</p></div>
          <div class="div1" style="height:200px;"><span>二维码：</span><p><canvas id="canvas"></canvas></p></div>
        </div>
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
import QRCode from 'qrcode';
export default {
  name: 'MyCardDetail',
  components: { PersonalCenterNav },
  data() {
    return {
      myCardInfo: {},
      myCardCredentialUseFlow: [],
      columns7: [
        {
          title: '项目名称',
          key: 'project',
          width: 100,
          align: 'center',
        },
        {
          title: '卡号',
          key: 'cardNo',
          width: 150,
          align: 'center',
        },
        {
          title: '入场时间',
          // key: 'name',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', {}, params.row.obj.intTime);
          }
        },
        {
          title: '出场时间',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', {}, params.row.obj.outTime);
          }
        },
        {
          title: '历时时长',
          align: 'center',
          render: (h, params) => {
            return h('div', {}, params.row.obj.timeDiff);
          }
        },
        {
          title: '进场闸机编号',
          align: 'center',
          render: (h, params) => {
            return h('div', {}, params.row.obj.inWaitno);
          }
        },
        {
          title: '出场闸机编号',
          align: 'center',
          render: (h, params) => {
            return h('div', {}, params.row.obj.outWaitno);
          }
        },
        {
          title: '扣除额度',
          align: 'center',
          render: (h, params) => {
            return h('div', {}, params.row.obj.subMoney);
          }
        },
      ],
      data6: [
        {
          project: '游泳',
          cardNo: '1111',
          obj: {
            intTime: '2019-09-27 18:45:00',
            outTime: '2019-09-27 20:45:00',
            timeDiff: '2小时',
            inWaitno: '1111111',
            outWaitno: '1111222',
            subMoney: '5元',
          }
        },
        {
          project: '篮球',
          cardNo: '1111',
          obj: {
            intTime: '2019-09-27 18:45:00',
            outTime: '2019-09-27 20:45:00',
            timeDiff: '2小时',
            inWaitno: '1111111',
            outWaitno: '1111222',
            subMoney: '5元',
          }
        },
        {
          project: '游泳',
          cardNo: '1111',
          obj: {
            intTime: '2019-09-27 18:45:00',
            outTime: '2019-09-27 20:45:00',
            timeDiff: '2小时',
            inWaitno: '1111111',
            outWaitno: '1111222',
            subMoney: '5元',
          }
        },
      ],
    };
  },
  created() {
    this.myCardInfo = this.$route.query;
    console.log(this.myCardInfo);
  },
  mounted() {
    let d = document.getElementById('canvas');
    console.log(d);
    this.qrcode(this.myCardInfo.cardNo);
    this.timer = setInterval(() => {
      this.qrcode(this.myCardInfo.cardNo);
    }, 1000 * 60);
    this.getMyCardForPortal(this.myCardInfo.cardId);
  },
  destroyed() {
    clearInterval(this.timer);
  },
  methods: {
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
    getMyCardForPortal(cardId) {
      let data = {
        orgId: 'c4f67f3177d111e986f98cec4bb1848c',
        cardId: cardId,
      };
      this.$axios({
        method: 'POST',
        url: '/listApiCredentialUseFlow.do',
        data: data,
      }).then(res => {
        if (res.data.code === 200) {
          // this.data6 = res.data.rows;
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
#MyCardDetail {
height: 100%;
background-color: #fff;
font-size: 14px;
word-break:break-all;
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
          margin: 10px;
          }
        .ticket_information{
          margin-bottom:20px;
          span{
            color:rgba(109,109,109,1);
            width: 120px;
            display: inline-block;
            background:rgba(244,244,244,1);
            text-indent: 15px;
            height: 100%;
            }
            p{
              display: inline-block;
              width: 340px;
              padding-left: 15px;
              }
          .div1 {
            border: 1px  solid #ddd;border-top:none;border-left:none;
            display: flex;
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
            .ivu-table-cell{padding-left: 0;padding-right: 0;}
          }
        }
      }
    }
}
</style>
