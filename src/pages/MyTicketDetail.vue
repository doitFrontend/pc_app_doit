<template>
<div id="MyTicketDetail">
  <h2 id="org_name">票详情</h2>
  <div class="ticket_detail">
    <Row>
      <Col span="12">
      <div class="" style="border-top: 1px  solid #ddd;border-left: 1px  solid #ddd;">
        <div class="div1"><span>票名称：</span><p>{{myTicketInfo.ticketTypeName}}</p></div>
        <div class="div1"><span>票价格：</span><p>￥{{myTicketInfo.ticketPrice}}</p></div>
        <div class="div1"><span>使用项目：</span><p>{{myTicketInfo.json[1]}}</p></div>
        <div class="div1"><span>有效期：</span><p>{{myTicketInfo.endtime}}</p></div>
        <div class="div1" style="height:200px;"><span>二维码：</span><p><canvas id="canvas"></canvas></p></div>
      </div>
      </Col>
      <Col span="12">
      <div style="border-top: 1px  solid #ddd;">
        <div class="div1"><span>商家名称：</span><p>大连理工大学</p></div>
        <div class="div1"><span>使用人群：</span><p>{{myTicketInfo.json[3]}}</p></div>
        <div class="div1"><span>使用时段：</span><p>{{myTicketInfo.starthour}}~{{myTicketInfo.endhour}}</p></div>
        <div class="div1"><span>使用状态：</span><p  v-if="myTicketInfo.status=='0'">已使用</p><p  v-if="!myTicketInfo.status=='0'">未使用</p></div>
        </div>
      </Col>
    </Row>
  </div>
</div>
</template>
<script>
import PersonalCenterNav from '@/components/PersonalCenterNav.vue';
import QRCode from 'qrcode';
export default {
  name: 'MyTicketDetail',
  components: { PersonalCenterNav },
  data() {
    return {
      timer: null,
      myTicketInfo: {},
    };
  },
  created() {
    this.myTicketInfo = this.$route.query;
    console.log(this.myTicketInfo);
  },
  mounted() {
    let d = document.getElementById('canvas');
    console.log(d);
    this.timer = setInterval(() => {
      this.qrcode(this.myTicketInfo.cardNo);
    }, 1000);
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
  },
};
</script>
<style lang="scss" scoped>
#MyTicketDetail {
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
        span{
          color:rgba(109,109,109,1);
          width: 120px;
          display: inline-block;
          background:rgba(244,244,244,1);
          text-indent: 15px;
          height: 100%;
          }
          p{
            padding-left: 15px;
            width: 340px;
            }
        .div1 {
          border: 1px  solid #ddd;
          border-top:none;
          border-left:none;
          display: flex;
        }
        }
}
</style>
