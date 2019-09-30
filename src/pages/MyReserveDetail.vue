<template>
<div id="MyReserveDetail">
  <h2 id="org_name">场地详情</h2>
  <div class="ticket_detail">
    <Row>
      <Col span="8">
        <div><span>名称：</span>aaaa</div>
        <div><span>价格：</span>222</div>
        <div><span>状态：</span></div>
      </Col>
      <Col span="8">
        <div><span>使用项目：</span>器械健身</div>
        <div><span>使用人群：</span>不区分人群</div>
        <div><span>使用时段：</span>00:00-23:59</div>
      </Col>
      <Col span="8">
        <div><span>有效期：</span>2019-09-12 19:25:32</div>
        <div><span>二维码：</span>11111111</div>
      </Col>
    </Row>
  </div>
</div>
</template>
<script>
import PersonalCenterNav from '@/components/PersonalCenterNav.vue';
export default {
  name: 'MyReserveDetail',
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
#MyReserveDetail {
height: 100%;
background-color: #fff;
  h2 {
        text-align: left;
        font-size: 18px;
        font-weight: 500;
        border-bottom: 1px  solid #ddd;
        line-height: 30px;
        margin-bottom: 10px;
        padding-bottom: 10px;
        }
      .ticket_detail{
        text-align: left;
        line-height: 24px;
        span{
          color: rgb(153, 153, 153);
          }
        }
}
</style>
