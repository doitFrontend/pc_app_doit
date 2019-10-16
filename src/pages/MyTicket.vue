<template>
<div id="MyTicket">
            <h2 id="org_name">我的票</h2>
            <div>
              <Row>
                <div v-if="!myTicketLists.length">暂无数据</div>
                <Col span="8" v-for="(item, i) in myTicketLists" :key="i">
                  <div class="ticket" @click="toTicketDetails(item)">
                    <div>
                      <p><i class="ivu-icon ivu-icon-md-headset"></i>{{item.ticketTypeName }}票</p>
                    </div>
                    <ul>
                      <li><i>￥</i>{{item.ticketPrice|toFixed(2)}}<i></i></li>
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
// import { ticketLists } from '@/utils/mockdata';
export default {
  name: 'MyTicket',
  components: { },
  props: {
    orgId: {
      type: String,
    }
  },
  data() {
    return {
      // ticketLists: [],
      //  MockData: {},
      myTicketLists: [],
    };
  },
  created() {
    // this.ticketLists = ticketLists.ticketLists;
    // console.log(this.ticketLists);
  },
  methods: {
    // 获取票卡所有的类别
    getMyTicketLists() {
      let data = {
        orgId: 'c4f67f3177d111e986f98cec4bb1848c',
        memberId: '2014011166',
      };
      this.$axios({
        method: 'POST',
        url: 'card/myTicketForPortal.do',
        data: data,
      }).then(res => {
        if (res.data.code === 200) {
          this.myTicketLists = res.data.rows;
        } else {
          this.$Message.warning(res.code);
        }
      }).catch(error => {
        console.log(error);
      });
    },
    toTicketDetails(item) {
      console.log(item);
      this.$router.push({
        path: `MyTicket/${item.id}`,
        query: item,
      });
    },
  },
  mounted() {
    this.getMyTicketLists(); // 获取票卡类别
  },
};
</script>
<style lang="scss" scoped>
#MyTicket{
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
    background-color: rgb(91, 155, 213);
    background: url('../assets/myticket.png') no-repeat;
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
        font-size: 20px;
        font-weight: bold;
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
    }
  }
}
</style>
