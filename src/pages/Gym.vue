<template>
  <div id="gym">
    <div class="showImg"></div>
    <div class="container">
      <div class="inner">
        <!-- <Row :gutter="16">
          <Col :sm="4" :md="4" :lg="2">
            <div>体育项目：</div>
          </Col>
          <Col :sm="18" :md="18" :lg="22">
            <div></div>
          </Col>
        </Row> -->
        <!-- <Divider /> -->
        <Row :gutter="16">
          <Col :sm="2" :md="2" :lg="2">
            <div style="line-height: 2.6em;">区域：</div>
          </Col>
          <Col :sm="2" :md="22" :lg="22">
            <div>
              <RadioGroup v-model="button1" type="button">
                <Radio label="北京"></Radio>
                <Radio label="上海"></Radio>
                <Radio label="江苏"></Radio>
                <Radio label="深圳"></Radio>
                <Radio label="杭州"></Radio>
              </RadioGroup>
            </div>
          </Col>
        </Row>
      </div>
    </div>
    <div class="container">
      <div class="inner">
        <Row>
          <Col :sm="18" :md="19" :lg="19">
            <Row v-for="(item, i) in goodLists" :key="i">
              <Col span="24">
                <goods-item @goodItemDetails="toGoodDetails(item)" mode="horizontal" :i_width="i_width" :imgSrc="item.img" :baseRate="10">
                  <span slot="title">{{item.title}}</span>
                  <span slot="rate">{{item.rate}}条评价</span>
                  <span slot="address">{{item.address}}</span>
                  <span slot="price">人均消费￥{{item.price}}</span>
                </goods-item>
              </Col>
            </Row>
          </Col>
          <Col :sm="6" :md="5" :lg="5">
            <h3 style="marginLeft: 1em;">猜你喜欢</h3>
            <Row v-for="(item, i) in goodLists" :key="i">
              <Col span="24">
                <goods-item :imgSrc="item.img" :i_height="100" :baseRate="10">
                  <span slot="title">{{item.title}}</span>
                  <span slot="rate">{{item.rate}}条评价</span>
                  <span slot="address">{{item.address}}</span>
                  <span slot="price">人均消费￥{{item.price}}</span>
                </goods-item>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>
<script>
import GoodsItem from '@/components/GoodsItem.vue';
import { goodLists } from '@/utils/mockdata';
export default {
  name: 'Gym',
  components: { GoodsItem },
  data() {
    return {
      goodLists: [],
      MockData: {},
      i_width: 240,
      button1: '江苏',
    };
  },
  created() {
    this.goodLists = goodLists;
  },
  methods: {
    toGoodDetails(item) {
      console.log(item);
      this.$router.push({
        path: `gym/${item.id}`,
        query: item,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#gym {
  height: 100%;
  background-color: $g_background;
  .showImg {
    width: $g_width;
    margin: auto;
    height: 360px;
    background: url('../assets/volleyball.jpg') no-repeat;
    background-size: cover;
    background-position-y: -20px;
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
    }
    &:nth-child(2) {
      padding-top: 6em;
    }
  }
}
</style>
