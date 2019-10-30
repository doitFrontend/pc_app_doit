<template>
  <div id="bookCard">
    <div class="container">
      <div class="inner">
        <Row>
          <Col :sm="4" :md="4" :lg="4"  class="leibie">
            <div class="label">卡类别 <span>|</span></div>
          </Col>
          <Col :sm="20" :md="20" :lg="20"  class="leibie2">
            <RadioGroup v-model="default_button" type="button" @on-change="changeCardType">
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
            <!-- TODO: 缺省页 -->
            <div v-if="!tempCardLists.length">暂无此类型卡</div>
            <Col v-else v-for="item in tempCardLists" :key="item.sportId" :sm="8" :md="8" :lg="8">
              <div class="item_ticket">
                <div class="ticket">
                  <div class="piece">
                    <!-- <div>
                      <Icon color="#fff" size="20" :custom="`iconfont ${item.icon.split('#')[1]}`" />
                      <span>{{item.typeName}}</span>
                    </div>
                    <div  class="ticket-dtail">
                      <b style="font-size:18px;">￥</b>{{item.price | toFixed(2)}}<br>
                      <div style="font-size: 16px;padding-top:10px">
                        {{item.frequency1}}卡
                      </div>
                    </div> -->
                    <div class="img" v-bind:style="{backgroundImage:'url(' + item.cardImages + ')'}" @click="toBookTicketDetails(item)"></div>
                  </div>
                </div>
                <div style="width:240px;background:rgba(248,248,248,1);margin: auto;padding:0 10px;">
                  <div style="font-size:12px;">
                    <p style="font-size:14px;line-height:18px;padding-top:15px;">{{item.typeName}}</p>
                    <Row>
                      <Col :sm="18" :md="18" :lg="18"  class="leibie">
                        <template>
                          <Progress :percent="25" />
                      </template>
                      </Col>
                      <Col v-if="percent > 80" :sm="6" :md="6" :lg="6"  class="leibie">
                        已售25%
                      </Col>
                      <Col v-else :sm="6" :md="6" :lg="6"  class="leibie">
                        即将售罄
                      </Col>
                    </Row>
                  </div>
                  <div class="price">
                    <div calss="price2">￥{{item.price | toFixed(2)}}</div>
                    <button-groups @countSum="countPriz" :item="item"></button-groups>
                  </div>
                </div>
                <!-- <div class="price">
                  <div calss="price2">￥{{item.price | toFixed(2)}}</div>
                  <button-groups @countSum="countPriz" :item="item"></button-groups>
                </div> -->
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
export default {
  name: 'bookCard',
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
      tempCardLists: [],
    };
  },
  methods: {
    // 获取票卡所有的类别
    getCardOrTicketTypes() {
      let data = {
        orgId: this.orgId,
        type: 'kw',
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
    // 切换卡类别
    changeCardType(label) {
      if (label !== '所有') {
        this.tempCardLists = this.cardLists.filter(item => JSON.parse(item.dictionaries)[18] === label);
      } else {
        this.tempCardLists = this.cardLists;
      }
    },
    countPriz({ item, sign }) {
      if (sign === 'ADD') {
        this.setToCart(item);
      } else {
        this.delFromCart(item);
      }
    },
    setToCart(item) {
      this.$store.commit('addCard', item);
    },
    delFromCart(item) {
      this.$store.commit('delCard', item);
    },
  },
  computed: {
    cardLists() {
      return this.$store.state.cardList;
    }
  },
  mounted() {
    this.$store.dispatch('getCardList');
    this.getCardOrTicketTypes(); // 获取票卡类别
    // 数据依赖于computed里的数据，computed数据来源于store，
    // 没有延迟的时候就是默认值，不是预期效果 TODO:
    setTimeout(() => {
      this.tempCardLists = this.cardLists;
    }, 500);
  },
};
</script>
<style lang="scss" scoped>
  @mixin div_commen {
    padding: 0.5em 1em 0.5em 1em;
    margin: 1em 1em 0 0;
    cursor: pointer;
  }
  #bookCard {
    .container {
      .inner {
        padding: 0 1em;
        & /deep/  .ivu-progress-text{display: none;}
        &:nth-child(1) {
          .label {
            text-align: center;
            font-size: 16px;
            letter-spacing:2px;
            span{padding-left: 10px;padding-right: 15px}
          }
        }
        &:nth-child(3) {
          min-height: 300px;
          // .item_ticket {
          //   width: 100%;
          //   height: inherit;
          //   padding: 2em;
          //   margin-bottom: 30px;
          //   &:hover {
          //     background: #e8eaec;
          //   }
          //   .ticket {
          //     width: 220px;
          //     height: 260px;
          //     margin: auto;
          //     display: flex;
          //     & > div.piece{ // 票 左右两块
          //       width: 100%;
          //       height: inherit;
          //       background: url(../assets/card.png) no-repeat;
          //       background-size: 220px 260px;
          //       position: relative;
          //       & > div.spot {
          //         width: 16px;
          //         height: 16px;
          //         background: #fff;
          //         border-radius: 50%;
          //         position: absolute;
          //         top: calc( 50% - (16px/2) );
          //       }
          //       .spot_left {
          //         left: -8px;
          //       }
          //       .spot_right {
          //         right: -8px;
          //       }
          //       & > div:nth-child(1) { // 票内容样式
          //         width: 100%;text-align: center;
          //         height: 40px;
          //         line-height: 40px;
          //         margin-top: 20px;
          //         font-size: 20px;font-weight: 200;
          //         color: #fff;
          //       }
          //       .ticket-dtail {
          //       width:80%;margin:auto;
          //       background: #fff;
          //       height:155px;
          //       border-radius: 5px;
          //       margin-top:15px;
          //       color:#333;
          //       font-size:32px;
          //       padding-top:30px;
          //       text-align: center;
          //       vertical-align: midd
          //       }
          //     }
          //   }
          //     .price {
          //     width: 100%;
          //     margin-top: 30px;
          //     display: flex;
          //     position: relative;
          //     .ivu-btn-group {
          //     text-align: right;
          //     position: absolute;
          //     right: 0;
          //     }
          //     & > div:nth-child(1) {
          //       width: 250px;
          //       font-size: 18px;
          //       color: #ed4014;
          //       line-height: 32px;
          //     }
          //   }
          // }
          .item_ticket {
            width: 100%;
            height: inherit;
            padding: 2em 0;
            margin-bottom: 30px;
            &:hover {
              background: #e8eaec;
            }
            .leibie{line-height: 32px;}
            .ticket {
              width: 240px;
              height: 240px;
              margin: auto;
              display: flex;
              background:rgba(248,248,248,1);
              & > div.piece{ // 票 左右两块
                width: 100%;
                height: inherit;
                position: relative;
                .img{width: 240px; height: 240px; background-size: cover; border-radius: 10px;background-repeat: no-repeat;background-size: 100% 100%;
                }
                .img:hover{cursor: pointer;}
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
                .ticket-dtail {
                width:80%;margin:auto;
                height:175px;
                border-radius: 5px;
                margin-top:15px;
                color:#333;
                font-size:32px;
                padding-top:30px;
                text-align: center;
                vertical-align: midd
                }
              }
            }
              .price {
              width: 100%;
              display: flex;
              position: relative;
              margin-top: 5px;
              padding-bottom: 15px;
              .ivu-btn-group {
              text-align: right;
              position: absolute;
              right: 0;
              font-size: 16px;
              }
              & > div:nth-child(1) {
                width: 250px;
                font-size: 18px;
                color: #ed4014;
                line-height: 32px;
              }
            }
            & /deep/  .ivu-progress-show-info .ivu-progress-outer{padding-right:30px;}
            & /deep/ .ivu-btn{position: relative;right: -5px}
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
