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
        <!-- <Row :gutter="16">
          <Col :sm="2" :md="2" :lg="2">
            <div style="line-height: 2.6em;text-align:center;font-size:16px;">区域：</div>
          </Col>
          <Col :sm="22" :md="22" :lg="22">
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
        </Row> -->
        <Row>
          <Col :sm="3" :md="3" :lg="3"  class="leibie">
            <div class="label">所在区域 <span>|</span></div>
          </Col>
          <Col :sm="21" :md="21" :lg="21"  class="leibie2">
            <RadioGroup v-model="default_button" type="button">
              <Radio label="北京"></Radio>
                <Radio label="上海"></Radio>
                <Radio label="江苏"></Radio>
                <Radio label="深圳"></Radio>
                <Radio label="杭州"></Radio>
            </RadioGroup>
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
                <goods-item @goodItemDetails="toGoodDetails(item)" mode="horizontal" :i_width="i_width" :imgSrc="item.orgImages" :baseRate="10">
                  <span slot="title">{{item.orgName}}</span>
                  <span slot="rate">201 条评价</span>
                  <span slot="address">{{item.city}}{{item.county}}{{item.adressDetail}}</span>
                  <span slot="price">人均消费￥ 100 起</span>
                </goods-item>
              </Col>
            </Row>
          </Col>
          <Col :sm="6" :md="5" :lg="5">
            <h3 style="marginLeft: 1em;margin-top:5px;">猜你喜欢</h3>
            <Row v-for="(item, i) in goodLists" :key="i">
              <Col span="24">
                <goods-item :imgSrc="item.orgImages" :i_height="100" :baseRate="10">
                  <span slot="title">{{item.orgName}}</span>
                  <span slot="rate">201 条评价</span>
                  <span slot="address">{{item.city}}{{item.county}}{{item.adressDetail}}</span>
                  <span slot="price">人均消费￥ 100 起</span>
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
export default {
  name: 'Gym',
  components: { GoodsItem },
  data() {
    return {
      goodLists: [],
      MockData: {},
      i_width: 240,
      button1: '江苏',
      default_button: '北京',
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    toGoodDetails(item) {
      this.$router.push({
        path: `gym/${item.orgId}`,
        query: item,
      });
    },
    // 获取场馆信息
    fetchData() {
      let data = {
        orgId: '123456',
        city_likeDouble: localStorage.getItem('currentCity'),
        county: '',
      };
      this.$axios({
        method: 'POST',
        url: 'listApiOrg.do',
        data: data,
      }).then(res => {
        if (res.data.code === 200) {
          this.goodLists = res.data.rows;
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
    padding-bottom: 2em;
    background: $g_background;
    .inner {
      height: 100%;
      width: $g_width;
      margin: auto;
      padding: 15px;
      background: #fff;
      border-radius: 4px;
          &:nth-child(1) {
          .label {
            text-align: center;
            font-size: 16px;
            span{padding-left: 10px;padding-right: 15px}
          }
        }
        .leibie2{left: -40px;}
      h2 {
        padding-left: 0.5em;
      }
    }
    &:nth-child(2) {
      padding-top: 2em;
    }
  }
}
</style>
