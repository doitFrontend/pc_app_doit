<template>
  <div id="city">
    <div class="container">
      <Row>
        <Col span="24">
          <Row :gutter="16">
            <Col span="12">
              按省份选择：
              <Select size="large" v-model="pModel" style="width: 140px;" @on-change="handleChooseProvince">
                <Option v-for="pItem in provinceList" :value="pItem.value" :key="pItem.value">{{pItem.label}}</Option>
              </Select>
              <Select :disabled="!(cityList.length)" size="large" v-model="cModel" style="width: 140px;">
                <Option v-for="cItem in cityList" :value="cItem.value" :key="cItem.value" @click.native="chooseCity(cItem.label, 'hot')">{{cItem.label}}</Option>
              </Select>
            </Col>
            <Col span="8">
              直接搜索：
              <el-autocomplete
                class="inline-input"
                size="medium"
                v-model="likeCityName"
                placeholder="请输入城市中文或拼音"
                :fetch-suggestions="querySearch"
                :trigger-on-focus="false"
                @select="handleSelect"
              ></el-autocomplete>
            </Col>
            <Col span="4">
              猜你在：<span class="letter" v-cloak @click="chooseCity(guessCityName, 'hot')">{{guessCityName}}</span>
            </Col>
          </Row>
        </Col>
        <Col span="24">
          热门城市：
          <span class="letter" v-for="(item, i) in hotCityList" :key="i" @click="chooseCity(item, 'hot')">{{item}}</span>
        </Col>
        <Col v-if="recentCityList.length" span="24">
          最近访问：
          <span class="letter" v-for="(item, i) in recentCityList" :key="i" @click="chooseCity(item, 'hot')">{{item}}</span>
        </Col>
        <Col span="24">
          按拼音首字母选择：
          <span class="letter" v-for="(item, i) in letterList" :key="i" @click="scrollToTarget(item)">{{item}}</span>
        </Col>
        <Col span="24" v-for="(item, i) in letterList" :key="i">
          <Row>
            <Col span="1">
              <div class="label" :id="item" :ref="item">{{item}}</div>
            </Col>
            <Col span="23">
              <span class="content" v-for="(itemIn, indexIn) in listData[item]" :key="indexIn" @click="chooseCity(itemIn, 'default')">{{itemIn.name}}</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
    <back-to-top :isBtnShow="isBtnShow"></back-to-top>
  </div>
</template>
<script>
import BackToTop from '@/components/BackToTop';
import cityJson from '@/utils/city.json';
import provinceCity from '@/utils/provinceCity';
import { ajax } from 'jquery';
import { GET_LOCATION_URL } from '../utils/urlManage';
export default {
  name: 'City',
  components: { BackToTop },
  data() {
    return {
      letterList: [],
      listData: {},
      hotCityList: ['北京', '上海', '广州', '深圳', '天津', '西安', '重庆', '杭州', '南京', '武汉', '成都'],
      isBtnShow: false,
      guessCityName: '',
      likeCityName: '',
      cityJsonTemp: [], // 用于模糊查询的所有城市数据
      provinceList: [],
      cityList: [],
      pModel: '',
      cModel: '',
    };
  },
  computed: {
    recentCityList: function() {
      let arr = localStorage['recentCity'] ? JSON.parse(localStorage['recentCity']) : [];
      return arr;
    },
  },
  created() {
    this.getCityList();
    this.getCityByGuess();
  },
  mounted() {
    window.addEventListener('scroll', this.fixHeader);
  },
  destroyed() {
    window.removeEventListener('scroll', this.fixHeader);
  },
  methods: {
    handleChooseProvince(pValue) {
      let tempCityList = (this.provinceList.filter(pItem => pItem.value === pValue));
      this.cityList = tempCityList[0].children;
    },
    handleSelect(item) {
      this.chooseCity(item.name, 'hot');
    },
    querySearch(queryString, cb) {
      var results = queryString ? this.cityJsonTemp.filter(this.cityFilter(queryString)) : this.cityJsonTemp;
      cb(results);
    },
    cityFilter(queryString) {
      return (cityItem) => {
        return cityItem.value.toLowerCase().indexOf(queryString.toLowerCase()) >= 0;
      };
    },
    getCityByGuess() {
      ajax({
        type: 'GET',
        url: GET_LOCATION_URL,
        dataType: 'jsonp',
        data: {},
      }).done(res => {
        if (res.status === 0) {
          this.guessCityName = res.result.ad_info.city;
        }
      });
    },
    getCityList() {
      // 省市级联
      this.provinceList = JSON.parse(JSON.stringify(provinceCity));
      // 直接搜索
      this.listData = cityJson;
      this.letterList = [...Object.keys(cityJson)];
      this.letterList.forEach((item) => {
        this.listData[item].forEach((itemIn) => {
          this.cityJsonTemp.push({
            ...itemIn,
            value: `${itemIn.name} ${itemIn.pinyin}`, // 必须要有value属性
          });
        });
      });
      // this.$axios({
      //   method: 'GET',
      //   url: '3rdApis/cities', // TODO: 解决第三方api问题
      //   // url: 'https://www.ele.me/restapi/shopping/v1/cities',
      //   data: {},
      // }).then(res => {
      //   this.listData = res.data;
      //   this.letterList = [...Object.keys(res.data)];
      // }).catch(error => {
      //   console.log(error); // 如果接口报错，就直接从本地取值
      //   this.listData = cityJson;
      //   this.letterList = [...Object.keys(cityJson)];
      // });
    },
    chooseCity(itemIn, sign) {
      let arr = localStorage['recentCity'] ? JSON.parse(localStorage['recentCity']) : [];
      switch (sign) {
        case 'hot':
          localStorage['currentCity'] = itemIn;
          if (arr.indexOf(itemIn) === -1) { // 只存localstorage里面不存在的
            arr.push(itemIn);
          }
          this.$router.push({
            name: 'Home',
            params: {
              location: itemIn,
            },
          });
          break;
        default:
          localStorage['currentCity'] = itemIn.name;
          if (arr.indexOf(itemIn.name) === -1) { // 只存localstorage里面不存在的
            arr.push(itemIn.name);
          }
          this.$router.push({
            name: 'Home', // Route with name 'home' does not exist Route名字有大小写之区分
            params: {
              location: itemIn.name,
            },
          });
          break;
      }
      localStorage['recentCity'] = JSON.stringify(arr);
    },
    scrollToTarget(id) {
      this.$refs[id][0].scrollIntoView(); // 利用scrollToView()回到视野中
      // document.getElementById(id).scrollIntoView();
    },
    fixHeader() {
      // 按钮
      if (window.pageYOffset >= 400) {
        this.isBtnShow = true;
      } else {
        this.isBtnShow = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
  #city {
    height: auto;
    background: $g_background;
    font-size: 16px;
    .container {
      width: $g_width;
      height: inherit;
      background: #fff;
      margin: 0 auto;
      & > .ivu-row {
        & > .ivu-col {
          // height: 200px;
          border-bottom: 1px solid rgb(199, 198, 198);
          padding: 2em;
          // &:nth-child(4) {
            .letter {
              display: inline-block;
              // background: #000;
              // margin: 0 0.5em;
              padding: 0.3em 0.6em;
              border-radius: 4px;
              &:hover {
                cursor: pointer;
                background: $g_default_color;
                color: #fff;
              }
            }
            .label {
              width: 40px;
              height: 40px;
              line-height: 40px;
              background: $g_default_color;
              border-radius: 50%;
              text-align: center;
              color: #fff;
            }
            .content {
              display: inline-block;
              // background: #000;
              margin: 0 1.5em;
              padding: 0.5em;
              border-radius: 10px;
              &:hover {
                cursor: pointer;
                background: $g_default_color;
                color: #fff;
              }
            }
          // }
        }
      }
    }
  }
</style>
