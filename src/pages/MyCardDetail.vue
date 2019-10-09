<template>
<div id="MyCardDetail">
  <h2 id="org_name">卡详情</h2>
  <div class="ticket_detail">
    <Row>
      <Col span="12">
      <div class="" style="border-top: 1px  solid #ddd;border-left: 1px  solid #ddd;">
        <div class="div1"><span>卡名称：</span><p>健身器材票（非家属）</p></div>
        <div class="div1"><span>卡号：</span><p>13163153213523232</p></div>
        <div class="div1"><span>使用项目：</span><p>器械健身</p></div>
        <div class="div1"><span>使用状态：</span><p>未使用</p></div>
        <div class="div1" style="height:200px;"><span>有效期：</span><p>2019-09-12 19:25:32</p></div>
      </div>
      </Col>
      <Col span="12">
      <div style="border-top: 1px  solid #ddd;">
        <div class="div1"><span>商家名称：</span><p>大连理工大学</p></div>
        <div class="div1"><span>剩余额度：</span><p>￥186.00</p></div>
        <div class="div1"><span>使用人群：</span><p>不区分人群</p></div>
        <div class="div1"><span>使用时段：</span><p>00:00-23:00</p></div>
        <div class="div1" style="height:200px;"><span>二维码：</span><p>2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222</p></div>
      </div>
      </Col>
    </Row>
  </div>
</div>
</template>
<script>
import PersonalCenterNav from '@/components/PersonalCenterNav.vue';
export default {
  name: 'MyCardDetail',
  components: { PersonalCenterNav },
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
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
}
</style>
