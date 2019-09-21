<template>
  <div id="home">
    <div class="showImg"></div>
    <div class="container">
      <div class="inner">
        <h2>附近场馆</h2>
        <Row>
          <Col :sm="12" :md="12" :lg="8" v-for="(item, i) in goodLists" :key="i">
            <goods-item :imgSrc="item.img" :baseRate="10" @goodItemDetails="gotoGym(item)">
              <span slot="title" style="font-size: 16px;">{{item.title}}</span>
              <span slot="rate">{{item.rate}} {{item.comment}}条评价</span>
              <span slot="address">{{item.address}}</span>
              <span slot="price">人均消费<span style="color: #ffac2d">￥{{item.price}}</span></span>
            </goods-item>
          </Col>
        </Row>
      </div>
    </div>
    <div class="container">
      <div class="inner">
        <h2>超值课程</h2>
        <Row>
          <Col :sm="15" :md="15" :lg="15">
            <div></div>
          </Col>
          <Col :sm="9" :md="9" :lg="9">
            <div></div>
            <div></div>
          </Col>
        </Row>
      </div>
    </div>
    <div class="container">
      <div class="inner">
        <h2>热门赛事</h2>
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
        <h2>特惠热卖</h2>
        <Row>
          <Col :sm="12" :md="12" :lg="6">
            <div class="sale">

            </div>
          </Col>
          <Col :sm="12" :md="12" :lg="6" v-for="(item, i) in MockData.hotSaleLists" :key="i">
            <goods-item :imgSrc="item.img" :baseRate="10">
              <span slot="title" style="font-size: 16px;">{{item.title}}</span>
              <span slot="rate">{{item.rate}} {{item.comment}}条评价</span>
              <span slot="address">{{item.address}}</span>
              <span slot="price">人均消费<span style="color: #ffac2d">￥{{item.price}}</span></span>
            </goods-item>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>
<script>
import GoodsItem from '@/components/GoodsItem.vue';
import { goodLists, hotGameLists } from '@/utils/mockdata';
import Mock from 'mockjs';
export default {
  name: 'Home',
  components: { GoodsItem },
  data() {
    return {
      goodLists: [],
      hotGameLists: [],
      hotSaleLists: [],
      MockData: {},
    };
  },
  created() {
    this.goodLists = goodLists;
    this.hotGameLists = hotGameLists;
    setTimeout(() => {
      this.MockData = Mock.mock({
        'hotSaleLists|6': [{
          'id|+1': 1,
          'img': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566215007264&di=2795f9a4d030891b83edeb928048237f&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F61c712f4a4da4e7b13e22de8a1a6a652348ee102.jpg', // 加载的动画 && 加载完没有图片的，给个默认图片
          'title': '点拓体育中心',
          'rate': 9.8,
          'comment': 58,
          'address': '世伦路',
          'price': 1000,
        }]
      });
    }, 500);
  },
  methods: {
    gotoGym(item) {
      this.$router.push({
        path: `gym/${item.id}`,
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
      padding: 1em;
      background: #fff;
      border-radius: 4px;
      h2 {
        padding-left: 0.5em;
      }
      div.sale {
        height: ($o_default_height + 8px) * 2;
        background: #000;
      }
    }
    &:nth-child(2) {
      padding-top: 6em;
    }
    &:nth-child(3) {
      // padding-top: 6em;
      .ivu-row {
        height: 300px;
        .ivu-col {
          height: 100%;
          &:nth-child(1) {
            div {
              height: inherit;
              background: url('../assets/temp/goswim.png') no-repeat;
              background-size: contain;
              background-position: center;
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
