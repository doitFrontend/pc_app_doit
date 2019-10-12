<template>
  <div id="bookTicket">
    <div class="container">
      <div class="inner">
        <Row>
          <Col :sm="3" :md="3" :lg="3"  class="leibie">
            <div class="label">票类别 <span>|</span></div>
          </Col>
          <Col :sm="21" :md="21" :lg="21"  class="leibie2">
            <RadioGroup v-model="default_button" type="button">
              <Radio label="所有"></Radio>
              <Radio v-for="(item, i) in ticketOrCardTypeList" :key="i" :label="item"></Radio>
            </RadioGroup>
          </Col>
        </Row>
      </div>
      <Divider />
      <div class="inner">
        <div class="" style="margin:0 20px">
          <Row :gutter="16">
            <div v-if="!ticketList.length">暂无数据</div>
            <Col v-else v-for="item in ticketList" :key="item.sportId" :sm="8" :md="8" :lg="8">
              <div class="item_ticket">
                <div class="ticket">
                  <div class="piece">
                    <div>
                      <Icon color="#fff" size="28" type="md-headset" />
                      <span>{{item.title}}</span>
                    </div>
                    <div  class="ticket-dtail">
                      <b style="font-size:18px;">￥</b>{{item.price | toFixed(2)}}<br>
                      <div style="font-size: 16px;padding-top:10px">
                        限时：{{item.time}}</br>{{item.timeSlotStr}}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div calss="price2">￥{{item.price}}.00</div>
                  <button-groups @countSum="countPriz" :item="item"></button-groups>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonGroups from './ButtonGroups';
// import Mock from 'mockjs';
export default {
  name: 'BookTicket',
  components: {
    ButtonGroups,
  },
  props: {
    orgId: {
      type: String,
    }
  },
  data() {
    return {
      MockData: {},
      ticketOrCardTypeList: [],
      default_button: '所有',
    };
  },
  methods: {
    // 获取票卡所有的类别
    getCardOrTicketTypes() {
      let data = {
        orgId: this.orgId,
        type: 'pw',
      };
      this.$axios({
        method: 'POST',
        url: 'getCardOrTicketTypes.do',
        data: data,
      }).then(res => {
        if (res.data.code === 200) {
          this.ticketOrCardTypeList = res.data.data;
        } else {
          this.$Message.warning(res.code);
        }
      }).catch(error => {
        console.log(error);
      });
    },
    countPriz({ item, sign }) {
      if (sign === 'ADD') {
        this.setToCart(item);
      } else {
        this.delFromCart(item);
      }
    },
    setToCart(item) {
      this.$store.commit('addTicket', item);
    },
    delFromCart(item) {
      this.$store.commit('delTicket', item);
    },
  },
  filters: {
    toFixed(value) {
      return value.toFixed(2);
    }
  },
  computed: {
    ticketList() {
      return this.$store.state.ticketList;
    }
  },
  mounted() {
    this.$store.dispatch('getTicketList');
    this.getCardOrTicketTypes(); // 获取票卡类别
  },
};
</script>
<style lang="scss" scoped>
  @mixin div_commen {
    padding: 0.5em 1em 0.5em 1em;
    margin: 1em 1em 0 0;
    cursor: pointer;
  }
  #bookTicket {
    .container {
      .inner {
        padding: 0 1em;
        &:nth-child(1) {
          .label {
            text-align: center;
            font-size: 16px;
            span{padding-left: 10px;padding-right: 15px}
          }
        }
        &:nth-child(3) {
          min-height: 500px;
          .item_ticket {
            width: 100%;
            height: inherit;
            padding: 2em;
            margin-bottom: 30px;
            &:hover {
              background: #e8eaec;
            }
            .ticket {
              width: 240px;
              height: 280px;
              margin: auto;
              display: flex;
              & > div.piece{ // 票 左右两块
                width: 100%;
                height: inherit;
                background: url(../assets/ticket.png) no-repeat;
                position: relative;
                & > div.spot {
                  width: 16px;
                  height: 16px;
                  background: #fff;
                  border-radius: 50%;
                  position: absolute;
                  top: calc( 50% - (16px/2) );
                }
                .spot_left {
                  left: -8px;
                }
                .spot_right {
                  right: -8px;
                }
                & > div:nth-child(1) { // 票内容样式
                  width: 100%;text-align: center;
                  height: 40px;
                  line-height: 40px;
                  margin-top: 20px;
                  font-size: 24px;font-weight: 200;
                  color: #fff;
                }
                .ticket-dtail {
                width:80%;margin:auto;
                height:175px;
                border-radius: 5px;
                margin-top:15px;
                color:#333;
                font-size:40px;
                padding-top:30px;
                text-align: center;
                vertical-align: midd
                }
              }
            }
              .price {
              width: 90%;
              margin-top: 30px;
              display: flex;
              position: relative;
              .ivu-btn-group {
              text-align: right;
              position: absolute;
              right: 0;
              }
              & > div:nth-child(1) {
                width: 250px;
                font-size: 18px;
                color: #ed4014;
                padding-left: 10px;
                line-height: 32px;
              }
            }
          }
        }
      }
    }
  }
  // .ivu-radio-default {
  //   margin: 0 0 1em 1em;
  // }
  // .ivu-radio-wrapper {
  //   border-radius: 4px !important;
  //   border: 1px solid #dcdee2 !important;
  //   &::before {
  //     content: none;
  //   }
  //   &::after {
  //     content: none;
  //   }
  // }
</style>
