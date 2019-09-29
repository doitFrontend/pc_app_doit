<template>
<div id="MyCard">
      <div class="container">
      <div class="inner">
        <div class="personalCenter">
          <div class="personalCenter_left">
            <personal-center-nav></personal-center-nav>
          </div>
          <div class="personalCenter_right">
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
        </div>
      </div>
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
#MyCard {
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
          text-align: center;
          padding:20px;
          h2 {
            text-align: left;
            font-size: 20px;
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
