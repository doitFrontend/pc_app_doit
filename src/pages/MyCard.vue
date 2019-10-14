<template>
<div id="MyCard">
            <h2 id="org_name">我的卡</h2>
            <div>
              <Row>
                <Col span="8" v-for="(item, i) in myCardForPortal" :key="i">
                  <div class="ticket" @click="toCardDetails(item)">
                    <div>
                      <p><i class="ivu-icon ivu-icon-md-headset"></i>{{item.cardTypeName}}</p>
                    </div>
                    <ul>
                      <li v-if="item.cardType=='时间'">余额：{{item.leftmoney }}分钟</li>
                      <li v-if="item.cardType=='次'">余额：{{item.leftmoney }}次</li>
                      <li v-if="item.cardType=='金额'">余额：{{item.leftmoney }}元</li>
                      <li v-if="item.cardType=='点'">余额：{{item.leftmoney }}点</li>
                      <li v-if="item.cardType=='小时'">余额：{{item.leftmoney }}小时</li>
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
// import { ticketLists } from '@/utils/mockdata';
export default {
  name: 'MyCard',
  components: { PersonalCenterNav },
  props: {
    orgId: {
      type: String,
    }
  },
  data() {
    return {
      // ticketLists: [],
      MockData: {},
      myCardForPortal: [],
    };
  },
  created() {
    // this.ticketLists = ticketLists.ticketLists;
    // console.log(this.ticketLists);
  },
  methods: {
    // 获取票卡所有的类别
    getMyCardForPortal() {
      let data = {
        orgId: 'c4f67f3177d111e986f98cec4bb1848c',
        memberId: '2014011166',
      };
      this.$axios({
        method: 'POST',
        url: 'card/myCardForPortal.do',
        data: data,
      }).then(res => {
        if (res.data.code === 200) {
          this.myCardForPortal = res.data.rows;
        } else {
          this.$Message.warning(res.code);
        }
      }).catch(error => {
        console.log(error);
      });
    },
    toCardDetails(item) {
      console.log(item);
      this.$router.push({
        path: `MyCard/${item.id}`,
        query: item,
      });
    },
  },
  mounted() {
    this.getMyCardForPortal(); // 获取票卡类别
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
