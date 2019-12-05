<template>
  <div id="bookTicketDetail">
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
                      <swiper-slide class="slide-1"></swiper-slide>
                      <swiper-slide class="slide-2"></swiper-slide>
                      <swiper-slide class="slide-3"></swiper-slide>
                      <swiper-slide class="slide-4"></swiper-slide>
                      <swiper-slide class="slide-5"></swiper-slide>
                      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                    </swiper>
                    <!-- swiper2 Thumbs -->
                    <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
                      <swiper-slide class="slide-1"></swiper-slide>
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
              <h3>瑜伽全天票</h3>
              <div class="info">
                <div><label>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</label><span>￥{{gymInfo.price | toFixed(2)}}</span></div>
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
                <div><label>项&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目</label><span>{{gymInfo.typeName}}</span></div>
              </div>
              <ul style="margin:10px 0 20px;">
                <li>
                  <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量</label>
                  <button-groups2 @countSum="countPriz" :item="gymInfo"></button-groups2>
                </li>
              </ul>
              <button data-v-434690d6="" type="button" class="ivu-btn ivu-btn-default" style="width: 120px; font-size: 14px;line-height:32px; border-radius: 4px; color: rgb(255, 255, 255); background: rgb(0, 161, 233); margin-left: 20px; margin-top: 3px;"><span style=" padding-left: 0px;">加入购物车</span></button>
            </div>
          </div>
          <div class="instructions">
            <h4><i></i>购买须知</h4>
            <div>
              <div>
                <label>配套服务</label>
                <p>
                  <ul>
                    <li class="item">
                      <c-icon type="dengguang"  :size="28"></c-icon>
                      <div>灯光</div>
                      <div>正常提供</div>
                    </li>
                    <li class="item">
                      <c-icon type="xiuxishi"  :size="28"></c-icon>
                      <div>休息室</div>
                      <div>200<i>/300</i></div>
                    </li>
                    <li class="item">
                      <c-icon type="xiyu"  :size="28"></c-icon>
                      <div>浴室</div>
                      <div>正常提供</div>
                    </li>
                    <li class="item">
                      <c-icon type="gengyigui"  :size="28"></c-icon>
                        <div>更衣柜</div>
                        <div>200<i>/300</i></div>
                    </li>
                    <li class="item">
                      <c-icon type="wuxianwang"  :size="28"></c-icon>
                      <div>无线网</div>
                      <div>正常提供</div>
                    </li>
                    <li class="item">
                      <c-icon type="tingche"  :size="28"></c-icon>
                      <div>停车</div>
                      <div>200<i>/300</i></div>
                    </li>
                    <li class="item">
                      <c-icon type="tingche"  :size="28"></c-icon>
                      <div>水质</div>
                      <div>合格</div>
                    </li>
                    <li class="item">
                      <c-icon type="tingche"  :size="28"></c-icon>
                      <div>饱和度</div>
                      <div>繁忙</div>
                    </li>
                  </ul>
                </p>
              </div>
              <div>
                <label>有效期</label>
                <p>{{JSON.parse(gymInfo.dictionaries)[20]}}</p>
              </div>
              <div>
                <label>使用时间</label>
                <p>{{JSON.parse(gymInfo.dictionaries)[21]}}</p>
              </div>
              <div>
                <label>预约信息</label>
                <p>请您提前1天预约</p>
              </div>
              <div>
                <label>适用人数</label>
                <p>每张票最多1人使用</p>
              </div>
              <div>
                <label>适用人群</label>
                <p>{{JSON.parse(gymInfo.dictionaries)[3]}}</p>
              </div>
              <div>
                <label>使用规则</label>
                <p>不再与其他优惠同享</p>
              </div>
              <div>
                <label>温馨提示</label>
                <p>为了保障您的权益，建议使用点拓线上支付。若使用其他支付方式导致纠纷，点拓不承担任何责任，感谢您的理解和支持！</p>
              </div>
            </div>
          </div>
          <div class="introduce">
            <h4><i></i>票介绍</h4>
            <div class="img">
              <img src="../assets/introduce.png" />
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
  name: 'BookTicketDetail',
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
  #bookTicketDetail {
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
            >div>div:first-child{margin: 20px 0 10px 0}
            ul li{
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
          .introduce{
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
            i{border-left: 3px solid #00A1E9;padding-left: 20px;}
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
              width: 218px; height: 218px;
              background-size: cover;
              background-image:url('../assets/3.png');
              border-radius: 10px;background-repeat: no-repeat;
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
