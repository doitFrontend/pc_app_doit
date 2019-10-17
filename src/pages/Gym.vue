<template>
  <div id="gym">
    <div class="showImg"></div>
    <div class="outcontainer">
      <div class="left">
        <div class="container">
          <div class="inner">
            <Row>
              <div>
                <Col :sm="3" :md="3" :lg="3"  class="leibie">
                  <div class="label">区域<span>|</span></div>
                </Col>
                <Col :sm="21" :md="21" :lg="21"  class="leibie2">
                  <RadioGroup v-model="default_button" type="button">
                    <Radio :label="default_button"></Radio>
                    <Radio v-for="(item, index) in fData" :key="index" :label="item.label"></Radio>
                  </RadioGroup>
                </Col>
              </div>
            </Row>
            <Row>
              <div>
                <Col :sm="3" :md="3" :lg="3"  class="leibie">
                  <div class="label">项目<span>|</span></div>
                </Col>
                <Col :sm="21" :md="21" :lg="21"  class="leibie2">
                  <RadioGroup v-model="default_button" type="button">
                    <Radio :label="default_button"></Radio>
                    <Radio v-for="(item, index) in sData" :key="index" :label="item.label"></Radio>
                  </RadioGroup>
                </Col>
              </div>
            </Row>
          </div>
        </div>
        <div class="container">
          <div class="inner">
            <Row v-for="(item, i) in goodLists" :key="i">
              <Col span="24">
                <goods-item-new @getMoreItem="toSaleItem(item)" mode="horizontal" :i_width="i_width" :imgSrc="item.orgImages" :baseRate="10">
                  <div class="text" slot="title">{{item.orgName}}</div>
                  <div class="text" slot="rate">201 条评价</div>
                  <div class="text" slot="address">{{item.city}}{{item.county}}{{item.adressDetail}}</div>
                  <div class="icons">
                    <div class="item" v-for="(item, index) in iconList" :key="index">
                      <Button shape="circle" :icon="item.icon"></Button>
                      <div>{{item.text}}</div>
                    </div>
                  </div>
                </goods-item-new>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div class="right">
        <h3 style="marginLeft: 1em;margin-top:5px;">猜你喜欢</h3>
        <Row v-for="(item, i) in goodLists" :key="i">
          <Col span="24">
            <goods-item :imgSrc="item.orgImages" :i_height="130" :baseRate="10">
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
  data() {
    return {
      goodLists: [],
      i_width: 220,
      fData: null,
      sData: [
        { label: '游泳', value: '' },
        { label: '羽毛球', value: '' },
        { label: '篮球', value: '' },
        { label: '瑜伽', value: '' },
        { label: '器械健身', value: '' },
        { label: '兵乓球', value: '' },
        { label: '台球', value: '' },
      ],
      iconList: [
        { text: '灯光', icon: 'ios-arrow-down' },
        { text: '休息室', icon: 'ios-arrow-down' },
      ],
    };
  },
  created() {
    this.fetchData();
    this.circleList(cityData, localStorage.getItem('currentCity'));
  },
  computed: {
    default_button() {
      return '所有';
    },
  },
  methods: {
    // toGoodDetails(item) {
    //   this.$router.push({
    //     path: `gym/${item.orgId}`,
    //     query: item,
    //   });
    // },
    toSaleItem(item) {
      console.log(item);
      this.$router.push({
        path: `gym/${item.orgId}`,
        query: item,
      });
    },
    // 获取场馆信息
    fetchData() {
      let data = {
        orgId: '123456',
        // city_likeDouble: localStorage.getItem('currentCity'),
        city_likeDouble: '',
        county: '',
        rcode_likeDouble: '游泳',
        doorType: 'pw',
      };
      this.$axios({
        method: 'POST',
        url: 'http://192.168.1.199:8080/diantuo/doorOrgTicketOrCardList.do',
        data: data,
      }).then(res => {
        if (res.data.code === 200) {
          this.goodLists = res.data.data;
        } else {
          this.$Message.warning(res.code);
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
          padding-top: 2em;
          .text {
            // padding: 1em 0;
          }
          .icons {
            height: 52px;
            display: flex;
            justify-content: flex-start;
            text-align: center;
            align-items: flex-end;
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
