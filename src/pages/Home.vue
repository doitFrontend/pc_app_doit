<template>
  <div id="home">
    <div class="showImg"></div>
    <div class="container">
      <div class="inner">
        <h2>附近场馆&nbsp;&nbsp;<Button @click="toGym" size="small">更多>></Button></h2>
        <Row>
          <Col :sm="12" :md="12" :lg="8" v-for="(item, i) in goodLists" :key="i">
            <goods-item :imgSrc="item.orgImages" :baseRate="10" @goodItemDetails="gotoGymDetail(item)">
              <span slot="title" style="font-size: 16px;">{{item.orgName}}</span>
              <span slot="rate">9.7 201条评价</span>
              <span slot="address">{{item.city}}{{item.county}}{{item.adressDetail}}</span>
              <span slot="price">人均消费<span style="color: #ffac2d">￥100 起</span></span>
            </goods-item>
          </Col>
        </Row>
      </div>
    </div>
    <div class="container">
      <div class="inner">
        <h2>超值课程&nbsp;&nbsp;<Button size="small">更多>></Button></h2>
        <div style="margin:10px;">
          <Row>
          <Col :sm="18" :md="18" :lg="18">
            <div></div>
          </Col>
          <Col :sm="6" :md="6" :lg="6">
            <div></div>
            <div></div>
          </Col>
        </Row>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="inner">
        <h2>热门赛事&nbsp;&nbsp;<Button size="small">更多>></Button></h2>
        <Row>
          <Col :sm="12" :md="12" :lg="6" v-for="(item, i) in hotGameLists" :key="i">
            <goods-item :imgSrc="item.img" :baseRate="10" :o_height="410" :i_height="310">
              <span slot="title" style="font-size: 14px;">{{item.event}}</span><br>
              <span slot="address">{{item.title}}-{{item.time}}</span>
              <span slot="price"><span style="color: #ffac2d">￥{{item.price}} 起</span></span>
            </goods-item>
          </Col>
        </Row>
      </div>
    </div>
    <div class="container">
      <div class="inner">
        <h2>特惠热卖&nbsp;&nbsp;<Button size="small">更多>></Button></h2>
        <div style="margin:10px;">
          <Row>
            <Col :sm="12" :md="12" :lg="6">
              <div class="sale">
              </div>
            </Col>
            <Col :sm="12" :md="12" :lg="6" v-for="(item, i) in hotSaleLists" :key="i">
              <goods-item :imgSrc="item.img" :baseRate="10">
                <span slot="title" style="font-size: 16px;">{{item.title}}</span>
                <span slot="rate">{{item.rate}}</span>
                <span slot="price">商品价格<span style="color: #ffac2d">￥{{item.price}}</span></span>
              </goods-item>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GoodsItem from '@/components/GoodsItem.vue';
import { hotGameLists, hotSaleLists } from '@/utils/mockdata';
export default {
  name: 'Home',
  components: { GoodsItem },
  data() {
    return {
      goodLists: [],
      hotGameLists: [],
      hotSaleLists: [],
    };
  },
  created() {
    this.fetchData();
    this.hotGameLists = hotGameLists;
    this.hotSaleLists = hotSaleLists;
  },
  watch: {
    '$route': 'fetchData',
  },
  methods: {
    toGym() {
      this.$router.push({
        name: 'Gym',
      });
    },
    gotoGymDetail(item) {
      this.$router.push({
        path: `gym/${item.orgId}`,
        query: item,
      });
    },
    // 获取场馆信息
    fetchData() {
      let data = {
        orgId: '123456',
        city_likeDouble: this.$route.params.location || localStorage.getItem('currentCity'),
        county: '',
      };
      this.$axios({
        method: 'POST',
        url: 'listApiOrg.do',
        data: data,
      }).then(res => {
        if (res.data.code === 200) {
          this.goodLists = res.data.rows.slice(0, 6);
        } else {
          this.$Message.warning(res.code);
        }
      }).catch(error => {
        console.log(error);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#home {
  height: 100%;
  .showImg {
    width: 100%;
    height: 350px;
    background: url('../assets/swim.jpg') no-repeat;
    background-size: cover;
    background-position-y: -10em;
  }
  .container {
    padding-bottom: 6em;
    background: $g_background;
    .inner {
      height: 100%;
      width: $g_width;
      margin: auto;
      padding: 15px;
      background: #fff;
      border-radius: 4px;
      h2 {
        padding: 10px;
      }
      div.sale {
        height: ($o_default_height + 8px) * 2;
        background: url('../assets/temp/left.png') no-repeat;
        background-size: contain;
      }
    }
    &:nth-child(2) {
      padding-top: 6em;
    }
    &:nth-child(3) {
      .ivu-row {
        height: 300px;
        .ivu-col {
          height: 100%;
          &:nth-child(1) {
            div {
              height: inherit;
              background: url('../assets/temp/goswim.png') no-repeat;
              background-size: contain;
            }
          }
          &:nth-child(2) {
            div {
              margin-left: 1em;
              background: url('../assets/temp/gobasket.png') no-repeat;
              height: 48%;
              &:nth-child(2) {
                margin-top: 1em;
                background: url('../assets/temp/gopinpong.png') no-repeat;
              }
            }
          }
        }
      }
    };
  }
}
</style>
