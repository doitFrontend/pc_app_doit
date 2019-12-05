<template>
  <div  id="bookMallDetail">
    <div class="inner">
      <div class="sale">
        <div class="sale_left">
          <div class="sale_info">
            <div class="left">
              <template>
                <!-- <md-card>
                  <md-card-actions>
                  </md-card-actions>
                  <md-card-media  style="height: 500px"> -->
                    <!-- swiper1 -->
                    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
                      <!-- <swiper-slide class="slide-1" v-bind:style="{backgroundImage:'url(' + gymInfo.productPurchaseAndSale.productImages + ')'}"></swiper-slide> -->
                      <swiper-slide class="slide-2"></swiper-slide>
                      <swiper-slide class="slide-3"></swiper-slide>
                      <swiper-slide class="slide-4"></swiper-slide>
                      <swiper-slide class="slide-5"></swiper-slide>
                      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                    </swiper>
                    <!-- swiper2 Thumbs -->
                    <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
                      <!-- <swiper-slide class="slide-1" v-bind:style="{backgroundImage:'url(' + gymInfo.productPurchaseAndSale.productImages + ')'}"></swiper-slide> -->
                      <swiper-slide class="slide-2"></swiper-slide>
                      <swiper-slide class="slide-3"></swiper-slide>
                      <swiper-slide class="slide-4"></swiper-slide>
                      <swiper-slide class="slide-5"></swiper-slide>
                    </swiper>
                  <!-- </md-card-media>
                </md-card> -->
              </template>
            </div>
            <div  class="right">
              <!-- <h3>{{gymInfo.productPurchaseAndSale.productName}}</h3> -->
              <div class="info">
                <!-- <div><label>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</label><span>￥{{gymInfo.productSalePrice}}</span></div> -->
                <Row>
                  <Col :sm="12" :md="12" :lg="12"  class="leibie">
                    <template>
                      <Progress :percent="25" />
                  </template>
                  </Col>
                  <Col :sm="6" :md="6" :lg="6"  class="leibie">
                    已售25%
                  </Col>
                </Row>
                <!-- <div><label>项&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目</label><span>{{JSON.parse(gymInfo.codeReplay)[1]}}</span></div>
                <div><label>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</label><span>{{JSON.parse(gymInfo.codeReplay)[3]}}</span></div> -->
              </div>
              <ul style="margin:10px 0 20px;">
                <li>
                  <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;颜&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;色</label>
                  <radio-group v-model="buttonSize" type="button">
                    <radio>黑色布帽</radio>
                    <radio>红色布帽</radio>
                  </radio-group>
                </li>
                <li>
                  <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尺&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</label>
                  <radio-group v-model="buttonSize" type="button">
                    <radio>M</radio>
                    <radio>L</radio>
                    <radio>XL</radio>
                    <radio>XXL</radio>
                  </radio-group>
                </li>
                <li>
                  <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量</label>
                  <button-groups2 @countSum="countPriz" :item="gymInfo"></button-groups2>
                </li>
                <slot name="size"></slot>
              </ul>
              <button data-v-434690d6="" type="button" class="ivu-btn ivu-btn-default" style="width: 120px; font-size: 14px;line-height:32px; border-radius: 4px; color: rgb(255, 255, 255); background: rgb(0, 161, 233); margin-left: 20px; margin-top: 3px;"><span style=" padding-left: 0px;">加入购物车</span></button>
            </div>
          </div>
          <div class="instructions">
            <h4><i></i>购买须知</h4>
            <div>
              <!-- <div>
                <label>品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;牌</label>
                <p>{{gymInfo.productPurchaseAndSale.productName}}</p>
              </div> -->
              <!-- <div>
                <label>货&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号</label>
                <p>{{gymInfo.productPurchaseAndSale.productName}}</p>
              </div>
              <div>
                <label>使用人群</label>
                <p>{{JSON.parse(gymInfo.dictionaries)[20]}}</p>
              </div>
              <div>
                <label>吊&nbsp;&nbsp;牌&nbsp;&nbsp;价</label>
                <p>{{gymInfo.productSalePrice}}</p>
              </div> -->
              <div>
                <label>上市时间</label>
                <p>2019年</p>
              </div>
              <div>
                <label>款&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;式</label>
                <p>纯色泳帽</p>
              </div>
              <div>
                <label>材&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;质</label>
                <p>布艺</p>
              </div>
              <div>
                <label>温馨提示</label>
                <p>为了保障您的权益，建议使用点拓线上支付。若使用其他支付方式导致纠纷，点拓不承担任何责任，感谢您的理解和支持！</p>
              </div>
            </div>
          </div>
          <div class="introduce">
            <h4><i></i>商品介绍</h4>
            <div class="img">
              <!-- <img v-bind:style="{backgroundImage:'url(' + gymInfo.productPurchaseAndSale.productImages + ')'}"> -->
            </div>
          </div>
        </div>
        <div class="sale_right">
          <h2>看了又看</h2>
          <ul>
            <li>
              <div class="img"></div>
              <p>网球2小时票</p>
              <p>￥30.00</p>
            </li>
            <li>
              <div class="img"></div>
              <p>网球2小时票</p>
              <p>￥30.00</p>
            </li>
            <li>
              <div class="img"></div>
              <p>网球2小时票</p>
              <p>￥30.00</p>
            </li>
          </ul>
        </div>
      </div>
      <shopping-cart></shopping-cart>
    </div>
  </div>
</template>
<script>
// var slider_settings = { "timeout": "600" };
import ButtonGroups2 from '@/components/ButtonGroups2';
import ShoppingCart from '@/components/ShoppingCart';
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  name: 'BookMallDetail',
  components: {
    ButtonGroups2,
    swiper,
    swiperSlide,
    ShoppingCart,
  },
  data() {
    return {
      swiperOptionTop: {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 5,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 20,
        slidesPerView: 5,
        touchRatio: 0.2,
        loop: true,
        loopedSlides: 5,
        slideToClickedSlide: true,
      },
    };
  },
  created() {
    console.log(this.$route.query);
    this.gymInfo = this.$route.query;
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
  methods: {
    countPriz({ item, sign }) {
      if (sign === 'ADD') {
        console.log(item);
        this.setToCart(item);
      } else {
        this.delFromCart(item);
      }
    },
    setToCart(item) {
      this.$store.commit('addTicket2', item);
    },
    delFromCart(item) {
      this.$store.commit('delTicket2', item);
    },
  },
};
</script>
<style lang="scss" scoped>
  $sub_height: 470px;
  #bookMallDetail {
    padding-bottom: 6em;
    background: #fff;
    .inner {
      height: 100%;
      width: $g_width;
      margin: auto;
      .sale {
        display: flex;
        margin-top: 30px;
      }
      .sale_left {
          background: #fff;
          width: $g_left_width;
          .sale_info{
            display: flex;
            .left {
              width: 420px;
              .swiper-container {
                background-color: #fff;
              }
              .swiper-slide {
                background-size: cover;
                background-position: center;
                &.slide-1 {
                  background-image:url('../assets/ticket1.png');
                }
                &.slide-2 {
                  background-image:url('../assets/2.png');
                }
                &.slide-3 {
                  background-image:url('../assets/3.png');
                }
                &.slide-4 {
                  background-image:url('../assets/4.png');
                }
                &.slide-5 {
                  background-image:url('../assets/5.png');
                }
              }
              & /deep/.swiper-slide{height: 420px;width: 420px;}
              .gallery-top {
                height: 420px;
                width: 420px;
              }
              .gallery-thumbs {
                height: 20%!important;
                box-sizing: border-box;
                padding: 20px 0;
              }
              .gallery-thumbs .swiper-slide {
                width: 20%;
                height: 70px!important;
                opacity: 0.4;
              }
              .gallery-thumbs .swiper-slide-active {
                opacity: 1;
              }
            }
            .right{
              margin-left: 40px;
              margin-right: 30px;
              line-height: 40px;
              h3{
                text-indent: 10px;
                font-size: 16px;
                font-weight: normal;
                line-height: 20px;
                margin-bottom: 15px;
              }
              .info{
                width: 440px;
                background: #F8F8F8;
                min-height: 116px;
                border-radius:4px;
                padding-left: 20px;
                padding-top: 10px;
                padding-bottom: 10px;
                line-height: 32px;
                div{display: flex;}
                div:first-child span{color: #F76900;font-size: 20px;}
                & /deep/  .ivu-progress-text {
                  display: none;
                  }
              }
              & /deep/ .ivu-radio-group-button .ivu-radio-wrapper {line-height: 26px;height: 28px;}
              label{display: inline-block;color: #888;margin-right: 20px;}
              span{display: block;}
              ul li{
                list-style: none;
                & /deep/ .ivu-radio-group-button .ivu-radio-wrapper{
                      border: 1px solid #dcdee2;
                      padding: 0 15px;
                      border-radius: 4px;
                      margin-right:15px;
                }
                & /deep/ .ivu-input-wrapper .ivu-input{line-height: 20px;height: 22px;text-align: center}
                & /deep/ .ivu-radio-wrapper-checked{
                  border:1px solid  #00A1E9 !important;
                  color: #00A1E9;
                  }
              }
            }
          }
          .instructions{
            line-height: 32px;
            font-size: 14px;
            margin-bottom: 20px;
            >div>div{display: flex;}
            >div>div.fw{margin: 20px 0 10px 0}
            ul li.item{
              list-style: none;
              background: #F8F8F8;
              width: 70px;
              height: 70px;
              display: inline-block;
              margin-right: 15px;
              border-radius:4px;
              text-align: center;
              font-size: 12px;
              line-height: 18px;
              i{font-style: normal;}
              }
            label{margin-right: 30px;width: 60px;font-size: 14px;color: #333333;}
          }
          .teachers{
            color: #333;
            .ivu-row .ivu-col > div{
              width: 210px;height: 250px;background: #F1FBFF;margin-left: 15px;padding: 15px;margin:15px 0;
              dl {
                display: flex;
                dd,dt{padding: 0 5px;line-height: 20px;}
                dt div:first-child{margin-top: 5px;}
                dt div:nth-child(2){
                  color: #00A1E9;
                  i{font-style: normal;padding: 0 2px;}
                  }
                img{width: 60px;height: 60px; border-radius:50%;}
              }
              p{
                margin-top: 5px;line-height: 24px;color: #6D6D6D;
                width: 180px;height: 120px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
              }
              a{text-align: center;width: 100%;display: inline-block;margin-top: 10px;color: #00A1E9;}
            }
            .ivu-row .ivu-col > div:first-child{margin-left: 0;}
          }
          .introduce{
            color: #6D6D6D;
            line-height: 24px;
            p{text-indent: 2em;font-size: 14px;margin-bottom: 10px;}
            .img{
              height: auto;
              max-width: 100%;
              border-radius: 4px;
            }
          }
          h4{
            font-size: 14px;
            line-height: 30px;
            padding: 5px 0px;
            background: #F8F8F8;
            font-weight: normal;
            margin: 10px 0;
            i{border-left: 3px solid #00A1E9;padding-left: 20px}
            }
        }
      .sale_right {
        width: 280px;
        margin-left: 1em;
        h2 {
          width: 100%;
          line-height: 40px;
          background:rgba(248,248,248,1);
          padding-left: 20px;
          font-size: 16px;
          font-weight: normal;
          border:1px solid rgba(243,243,243,1);
          border-bottom: none;
          }
        ul {
          background: #fff;
          padding: 10px 0 10px 0;
          border:1px solid rgba(243,243,243,1);
          li {
            padding: 10px 30px;
            list-style-type:none;
            text-align: center;
            p{
              line-height:24px;
            }
            p:last-child{padding-left: 15px;color:rgba(247,105,0,1);}
          }
          .img{
              width: 220px; height: 220px;
              background: url("../assets/ticket1.png");
              background-size: cover;
              background-repeat: no-repeat;
              background-size: 100% 100%;
              margin-bottom: 10px;
              }
        }
        img{
          width: 130px;
          height: 130px;
        }
      }
    }
  }
</style>
