<template>
<div id="MyTicketDetail">
      <div class="container">
      <div class="inner">
        <div class="personalCenter">
          <div class="personalCenter_left">
            <personal-center-nav></personal-center-nav>
          </div>
          <div class="personalCenter_right">
            <h2 id="org_name">票详情</h2>
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
        </div>
      </div>
    </div>
</div>
</template>
<script>
import PersonalCenterNav from '@/components/PersonalCenterNav.vue';
export default {
  name: 'MyTicketDetail',
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
#MyTicketDetail {
height: 100%;
background-color: $g_background;
.container {
    padding-bottom: 6em;
    background: $g_background;
    .inner {
    height: 100%;
    width: $g_width;
    margin: auto;
    padding: 1em;
    background: #fff;
    border-radius: 4px;
    .personalCenter {
        margin-top: 4em;
        display: flex;
        .personalCenter_right {
          background: #fff;
          width: 1000px;
          border: 1px solid #ddd;
          text-align: left;
          padding:20px;
          line-height: 24px;
          font-size: 14px;
          h2 {
            text-align: left;
            font-size: 20px;
            font-weight: 500;
            border-bottom: 1px  solid #ddd;
            line-height: 30px;
            margin-bottom: 10px;
            padding-bottom: 10px;
            }
          .ticket_detail{
            span{
              color: rgb(153, 153, 153);
              }
            }
        }
        .personalCenter_left {
          width: 260px;
          background: #fff;
          padding: 1em 2em;
          margin-left: 1em;
          h2 {
            width: 100%;
          }
          ul {
            li {
              padding: 0.2em 0;
            }
          }
        }
      }
    }
    &:nth-child(2) {
    padding-top: 6em;
    }
}
}
</style>
