<template>
<div id="MyReserve">
  <h2 id="org_name">我的场地</h2>
  <div>
    <Row>
      <Col span="8" v-for="(item, i) in ticketLists" :key="i">
        <div class="ticket" @click="toTicketDetails(item)" >
          <Row style="padding:15px" >
            <Col span="13" class="ticket-l">
            <i data-v-1bdd6705="" class="ivu-icon ivu-icon-md-headset" style="font-size: 24px; color: rgb(255, 255, 255);"></i>
            <p>{{item.title}}</p>
            <p>{{item.endtime}}</p>
            </Col>
            <Col span="11">
            <ul><li>￥{{item.price}}</li><li class="key">限时{{item.time}}分钟</li><li class="key">{{item.timeSlotStr}}</li></ul>
            </Col>
          </Row>
          <div class="sale-cycle-left"></div>
          <div class="sale-cycle-right"></div>
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
  name: 'MyReserve',
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
        path: `MyReserve/${item.id}`,
        query: item,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#MyReserve {
height: 100%;
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
    color: #fff;
    background-color: rgb(91, 155, 213);
    width: 100%;
    height: 106px;
    width: 260px;
    margin: 0 auto;
    position: relative;
    margin: 20px auto;
    line-height: 20px;
    &:hover{cursor: pointer;}
    .ticket-l{border-right: dashed 1px #fff;height:76px;}
    .sale-cycle-left {
      position: absolute;
      top: 50%;
      left: -5px;
      z-index: 100;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #fff;
      margin-top: -5px;
    }
    .sale-cycle-right {
      position: absolute;
      top: 50%;
      right: -5px;
      z-index: 100;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #fff;
      margin-top: -5px;
    }
    ul {
      list-style:none;
      li:last-child  {
        border-top: dashed 1px #fff;
        padding-top: 5px;
        margin-top: 5px;
        margin-left: 5px
      }
    }
  }
}
</style>
