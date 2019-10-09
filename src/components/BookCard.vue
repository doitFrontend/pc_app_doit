<template>
  <div id="bookCard">
    <div class="container">
      <div class="inner">
        <Row :gutter="16">
          <Col :sm="4" :md="4" :lg="4">
            <div class="label">卡类别：</div>
          </Col>
          <Col :sm="18" :md="18" :lg="18">
            <RadioGroup v-model="default_button" type="button">
              <Radio label="所有"></Radio>
              <Radio v-for="(item, i) in ticketOrCardTypeList" :key="i" :label="item"></Radio>
            </RadioGroup>
          </Col>
        </Row>
      </div>
      <Divider />
      <div class="inner">
        <Row >
          <div v-if="!cardLists.length">暂无数据</div>
          <Col v-else v-for="(item, index) in cardLists" :key="index" :sm="8" :md="8" :lg="8" >
            <div class="item_card">
              <div class="card">
                <div class="piece">
                  <div>
                    <Icon color="#fff" size="36" type="md-headset" />
                    <div>{{item.title}}</div>
                  </div>
                </div>
                <div class="piece">
                  <div>
                    ￥{{item.price}}<br>
                    <div style="font-size: 16px;">
                      有效期至：{{item.time}}
                    </div>
                  </div>
                </div>
              </div>
              <div class="price">
                <div calss="price2">{{item.price}}</div>
                <button-groups @countSum="countPriz" :item="item"></button-groups>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonGroups from './ButtonGroups';
export default {
  name: 'BookCard',
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
    },
  },
  mounted() {
    this.$store.dispatch('getCardList');
    this.getCardOrTicketTypes(); // 获取票卡类别
  },
};
</script>
<style lang="scss" scoped>
  #bookCard {
    .container {
      .inner {
        padding: 0 1em;
        &:nth-child(1) {
          .label {
            text-align: center;
          }
        }
        &:nth-child(3) {
          min-height: 500px;
          .item_card {
            width: 100%;
            height: inherit;
            padding: 2em;
            margin-bottom: 1em;
            &:hover {
              background: #e8eaec;
            }
            .card {
              width: 100%;
              height: 140px;
              background: $g_default_color;
              display: flex;
              border-radius: 10px;
              & > div.piece{ // 票 左右两块
                width: 50%;
                position: relative;
                & > div:nth-child(1) { // 票内容样式
                  width: 100%;
                  height: inherit;
                  padding: 1.2em;
                  text-align: center;
                  font-size: 20px;
                  color: #fff;
                }
              }
            }
            .price {
              width: 100%;
              margin-top: 10px;
              display: flex;
              position: relative;
              .ivu-btn-group {
              text-align: right;
              position: absolute;
              right: 0;
              }
              & > div:nth-child(1) {
                width: 250px;
                font-size: 14px;
                color: #dcdee2;
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
