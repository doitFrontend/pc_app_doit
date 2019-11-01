<template>
  <div id="gym">
    <div class="showImg"></div>
    <div class="outcontainer">
      <div class="left">
        <div class="container">
          <div class="inner">
            <Row>
              <div>
                <Col :sm="4" :md="4" :lg="4"  class="leibie">
                  <div class="label">区&nbsp;&nbsp;&nbsp;&nbsp;域<span>|</span></div>
                </Col>
                <Col :sm="20" :md="20" :lg="20"  class="leibie2">
                  <RadioGroup v-model="default_button" type="button" @on-change="handleChange(default_button, '')">
                    <Radio label="所有"></Radio>
                    <Radio v-for="(item, index) in fData" :key="index" :label="item.label"></Radio>
                  </RadioGroup>
                </Col>
              </div>
            </Row>
            <Row>
              <div>
                <Col :sm="4" :md="4" :lg="4"  class="leibie">
                  <div class="label">项&nbsp;&nbsp;&nbsp;&nbsp;目<span>|</span></div>
                </Col>
                <Col :sm="20" :md="20" :lg="20"  class="leibie2">
                  <RadioGroup v-model="default_button1" type="button" @on-change="handleChange('', default_button1)">
                    <Radio label="所有"></Radio>
                    <Radio v-for="(item, index) in sData" :key="index" :label="item.label"></Radio>
                  </RadioGroup>
                </Col>
              </div>
            </Row>
          </div>
        </div>
        <div class="container">
          <div class="inner">
            <Row v-for="(item, i) in tempGoodLists" :key="i">
              <Col span="24">
                <goods-item-new v-if="showType === 'pw' || showType === 'kw'" :arr="item.cardOrTicketMap.data" @getMoreItem="toSaleItem(item)" mode="horizontal" :i_width="i_width" :imgSrc="item.orgImages" :baseRate="10">
                  <div class="text" slot="title">{{item.orgName}}</div>
                  <div class="text" slot="rate">201 条评价</div>
                  <div class="text" slot="address">{{item.city}}{{item.county}}{{item.adressDetail}}</div>
                  <div class="icons">
                    <div class="item">
                      <c-icon type="dengguang"  :size="30"></c-icon>
                      <div>灯光</div>
                    </div>
                    <div class="item">
                      <c-icon type="xiuxishi"  :size="30"></c-icon>
                      <div>休息室</div>
                    </div>
                    <div class="item">
                      <c-icon type="xiyu"  :size="30"></c-icon>
                      <div>浴室</div>
                    </div>
                    <div class="item">
                      <c-icon type="gengyigui"  :size="30"></c-icon>
                      <div>更衣柜</div>
                    </div>
                    <div class="item">
                      <c-icon type="wuxianwang"  :size="30"></c-icon>
                      <div>无线网</div>
                    </div>
                    <div class="item">
                      <c-icon type="tingche"  :size="30"></c-icon>
                      <div>停车</div>
                    </div>
                  </div>
                </goods-item-new>
                <goods-item-new v-else-if="showType === 'cd'" :arr="item.fieldSales" @getMoreItem="toSaleItem(item)" mode="horizontal" :i_width="i_width" :imgSrc="item.orgImages" :baseRate="10">
                  <div class="text" slot="title">{{item.orgName}}</div>
                  <div class="text" slot="rate">201 条评价</div>
                  <div class="text" slot="address">{{item.city}}{{item.county}}{{item.adressDetail}}</div>
                  <div class="icons">
                    <div class="item">
                      <c-icon type="dengguang"  :size="30"></c-icon>
                      <div>灯光</div>
                    </div>
                    <div class="item">
                      <c-icon type="xiuxishi"  :size="30"></c-icon>
                      <div>休息室</div>
                    </div>
                    <div class="item">
                      <c-icon type="xiyu"  :size="30"></c-icon>
                      <div>浴室</div>
                    </div>
                    <div class="item">
                      <c-icon type="gengyigui"  :size="30"></c-icon>
                      <div>更衣柜</div>
                    </div>
                    <div class="item">
                      <c-icon type="wuxianwang"  :size="30"></c-icon>
                      <div>无线网</div>
                    </div>
                    <div class="item">
                      <c-icon type="tingche"  :size="30"></c-icon>
                      <div>停车</div>
                    </div>
                  </div>
                </goods-item-new>
              </Col>
            </Row>
          </div>
          <Spin size="large" fix v-if="spinShow"></Spin>
        </div>
      </div>
      <div class="right">
        <h3 style="marginLeft: 1em;margin-top:5px;">猜你喜欢</h3>
        <Row v-for="(item, i) in goodLists" :key="i">
          <Col span="24">
            <goods-item :imgSrc="item.orgImages" :i_height="130" :baseRate="10"  @goodItemDetails="toSaleItem(item)">
              <span slot="title">{{item.orgName}}</span>
              <span slot="rate">201 条评价</span>
              <span slot="address">{{item.city}}{{item.county}}{{item.adressDetail}}</span>
            </goods-item>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>
<script>
import GoodsItemNew from '@/components/GoodsItemNew.vue';
import GoodsItem from '@/components/GoodsItem.vue';
import cityData from '../utils/provinceCity';
export default {
  name: 'Gym',
  components: { GoodsItemNew, GoodsItem },
  watch: {
    '$route': {
      handler: 'handleRoute',
      immediate: true,
    },
  },
  data() {
    return {
      default_button: '所有',
      default_button1: '所有',
      spinShow: true,
      goodLists: [],
      tempGoodLists: [],
      i_width: 220,
      fData: null,
      showType: '', // 展示模块
      sData: [
        { label: '游泳', value: '' },
        { label: '羽毛球', value: '' },
        { label: '篮球', value: '' },
        { label: '乒乓球', value: '' },
        { label: '足球', value: '' },
        { label: '健身', value: '' },
        { label: '蹦床', value: '' },
        { label: '攀岩', value: '' },
        { label: '射击', value: '' },
        { label: '射箭', value: '' },
        { label: '台球', value: '' },
        { label: '滑雪', value: '' },
        { label: '旱冰', value: '' },
        { label: '直冰', value: '' },
        { label: '冲浪', value: '' },
        { label: '跳伞', value: '' },
        { label: '风洞', value: '' },
        { label: '垂钓', value: '' },
        { label: '蹦极', value: '' },
      ],
      iconList: [
        { text: '灯光', icon: 'ios-arrow-down' },
        { text: '休息室', icon: 'ios-arrow-down' },
      ],
    };
  },
  created() {
    this.circleList(cityData, localStorage.getItem('currentCity'));
  },
  // computed: {
  //   default_button: {
  //     get() {
  //       return '所有';
  //     },
  //     set(newVal, oldVal) {

  //     },
  //   },
  // },
  methods: {
    handleChange(county, rcode_likeDouble) {
      this.fetchData('pw', county, rcode_likeDouble);
      // console.log(county);
      // console.log(rcode_likeDouble);
      // if (rcode_likeDouble === '所有') {
      //   this.tempGoodLists = this.goodLists.filter(item => item);
      // } else {
      //   this.tempGoodLists = this.goodLists.filter(item => item.rcode_likeDouble === rcode_likeDouble);
      // }
      // if (county === '所有') {
      //   this.tempGoodLists = this.goodLists.filter(item => item);
      // } else {
      //   this.tempGoodLists = this.goodLists.filter(item => item.county === county);
      // }
      // if (county === '所有') {
      //   if (rcode_likeDouble === '所有') {
      //     this.tempGoodLists = this.goodLists.filter(item => item);
      //   } else {
      //     this.tempGoodLists = this.goodLists.filter(item => item.rcode_likeDouble === rcode_likeDouble);
      //   }
      // } else {
      //   if (rcode_likeDouble === '所有') {
      //     this.tempGoodLists = this.goodLists.filter(item => item.county === county);
      //   } else {
      //     this.tempGoodLists = this.goodLists.filter(item => (item.rcode_likeDouble === rcode_likeDouble) && (item.county === county));
      //   }
      // }
    },
    handleRoute(to, from) {
      this.spinShow = true;
      switch (to.path) {
        case '/bookCard':
          this.fetchData('kw');
          break;
        case '/bookField':
          this.fetchDataField();
          break;
        case '/train':
          this.fetchDataField();
          break;
        case '/mall':
          this.fetchDataField();
          break;
        default:
          this.fetchData('pw');
          break;
      }
    },
    // toGoodDetails(item) {
    //   this.$router.push({
    //     path: `gym/${item.orgId}`,
    //     query: item,
    //   });
    // },
    toSaleItem(item) {
      // alert(11);
      this.$router.push({
        path: `gym/${item.orgId}`,
        query: item,
      });
    },
    // 获取场馆信息(票、卡)
    fetchData(type, county, rcode_likeDouble) {
      this.showType = type;
      if (county === '所有') {
        county = '';
      }
      if (rcode_likeDouble === '所有') {
        rcode_likeDouble = '';
      }
      let data = {
        orgId: '123456',
        // city_likeDouble: localStorage.getItem('currentCity'),
        city_likeDouble: '',
        county: county,
        rcode_likeDouble: rcode_likeDouble,
        doorType: type,
      };
      this.$axios({
        method: 'POST',
        url: '/doorOrgTicketOrCardList.do',
        data: data,
      }).then(res => {
        this.spinShow = false;
        if (res.data.code === 200) {
          this.goodLists = res.data.data;
          this.tempGoodLists = this.goodLists;
        } else {
          this.$Message.warning(res.code);
        }
      }).catch(error => {
        console.log(error);
      });
    },
    // 获取场馆信息(场地)
    fetchDataField() {
      this.showType = 'cd';
      let data = {
        orgId: '123456',
        // city_likeDouble: localStorage.getItem('currentCity'),
        city_likeDouble: '',
        county: '',
        project: '篮球',

      };
      this.$axios({
        method: 'POST',
        url: '/listOrgWithFields.do',
        data: data,
      }).then(res => {
        this.spinShow = false;
        if (res) {
          this.goodLists = res.data;
          this.tempGoodLists = this.goodLists;
        } else {
          this.$Message.warning(res);
        }
      }).catch(error => {
        console.log(error);
      });
    },
    circleList(list, currentCity) {
      for (let i = 0; i < list.length; i++) {
        if (list[i].label.indexOf(currentCity) !== -1) {
          if (list[i].children) {
            if (list[i].children.length > 1) {
              this.fData = list[i].children;
            } else {
              this.fData = list[i].children[0].children;
            }
          } else {
            this.fData = list;
          }
          // break;
        } else {
          list[i].children && this.circleList(list[i].children, currentCity);
        }
      }
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
  .outcontainer {
    width: $g_width;
    background: $g_background;
    border-radius: 4px;
    margin: 2em auto;
    display: flex;
    .left {
      width: 900px;
      .container {
        .inner { // 搜索框
          height: 100%;
          margin: auto;
          padding: 15px;
          background: #fff;
          border-radius: 4px;
          &:nth-child(1) {
            .label {
              text-align: center;
              font-size: 16px;
              span{
                padding: 0 15px;
              }
            }
          }
        }
        &:nth-child(2) { // 下列表
          position: relative;
          min-height: 400px;
          padding-top: 2em;
          .text {
            // padding: 1em 0;
          }
          .icons {
            height: 52px;
            display: flex;
            justify-content: flex-start;
            text-align: center;
            .item {
              width: 48px;
              height: inherit;
              margin-right: 10px;
              padding: 4px;
            }
          }
        }
      }
    }
    .right { // 右侧列表
      width: 280px;
      margin-left: 2em;
      background: #fff;
      padding: 1em;
      h3 {
        padding: 8px 0 8px 1em;
        margin: 0 !important;
        background: #EDF1F2;
      }
      .ivu-row {
        margin-top: 1em;
      }
    }
  }
}
</style>
