<template>
<div id="MyCard">
            <h2 id="org_name">我的卡</h2>
            <div>
              <Row>
                <Col span="8" v-for="(item, i) in ticketLists" :key="i">
                  <div class="ticket" @click="toTicketDetails(item)" style="position: relative;">
                    <div>
                      <p>{{item.title}}</p>
                      <p>{{item.endtime}}</p>
                      </div>
                      <ul><li class="key">限时{{item.time}}分钟</li><li class="key">{{item.timeSlotStr}}</li></ul>
                      <i data-v-1bdd6705="" class="ivu-icon ivu-icon-md-headset" style="font-size: 24px; color: rgb(255, 255, 255);position: absolute;bottom:10px;;left:10px;"></i>
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
    this.ticketLists = ticketLists;
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
  h2 {
    text-align: left;
    font-size: 18px;
    font-weight: 500;
    border-bottom: 1px  solid #ddd;
    line-height: 30px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    }
  .ticket{
    color: #fff;
    background-color: rgb(91, 155, 213);
    width: 100%;
    height: 106px;
    width: 260px;
    margin: 0 auto;
    position: relative;
    margin: 20px auto;
    border-radius: 5px;
    padding: 10px;
    line-height: 20px;
    &:hover{cursor: pointer;}
    >div{
      text-align: left;
    }
    ul {
      list-style:none;
      text-align: right;
      margin-top: 7px;
    }
  }
}
</style>
