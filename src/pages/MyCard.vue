<template>
<div id="MyCard">
            <h2 id="org_name">我的卡</h2>
            <div>
              <Row>
                <Col span="8" v-for="(item, i) in ticketLists" :key="i">
                  <div class="ticket" @click="toTicketDetails(item)">
                    <div>
                      <p><i class="ivu-icon ivu-icon-md-headset"></i>{{item.title}}票</p>
                    </div>
                    <ul>
                      <li>余额：{{item.price }}元</li>
                      <li>有效期至：{{item.endtime}}</li>
                    </ul>
                    <p>大连理工大学</p>
                  </div>
                </Col>
              </Row>
            </div>
</div>
</template>
<script>
import PersonalCenterNav from '@/components/PersonalCenterNav.vue';
import { ticketLists } from '@/utils/mockdata';
export default {
  name: 'MyCard',
  components: { PersonalCenterNav },
  data() {
    return {
      ticketLists: [],
      MockData: {},
    };
  },
  created() {
    this.ticketLists = ticketLists.ticketLists;
    console.log(this.ticketLists);
  },
  methods: {
    toTicketDetails(item) {
      console.log(item);
      this.$router.push({
        path: `MyCard/${item.id}`,
        query: item,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#MyCard{
height: 100%;
font-size: 12px;
font-family: MicrosoftYaHei;
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
  .ticket{
    color:rgba(255,255,255,1);
    background: url('../assets/mycard.png') no-repeat;
    width: 100%;
    height: 130px;
    width: 260px;
    background-size:260px 130px;
    margin: 0 auto;
    position: relative;
    margin: 20px auto;
    border-radius: 5px;
    padding: 10PX;
    line-height: 20px;
    &:hover{cursor: pointer;}
    >div{
      text-align: left;
      p{
        font-size: 14px;
        font-weight: 500;
        i{padding-right: 10PX;}
        }
    }
    ul {
      list-style:none;
      margin-top: 10px;
      line-height: 20px;
      text-align: left;
      li:first-child{
        font-size: 16px;
        font-weight: bold;
        color:rgba(110,62,22,1);
        i{font-size: 16px;
        font-style: normal;
        font-weight: normal;
        }
      }
      li:last-child{margin-top:5px; opacity: 0.7;}
    }
    >p{
      font-size: 14px;
      color:#fff;
      font-weight: normal;
      margin-top: 17px;
      opacity: 0.8;
      color:rgba(110,62,22,1);
    }
  }
}
</style>
