<template>
    <div id="gymDetails">
      <div class="inner">
        <Carousel autoplay v-model="default_value" loop>
          <CarouselItem v-for="i in 3" :key="i">
            <div class="demo-carousel" :style="{backgroundImage: `url(${gymInfo.orgImages})`}"></div>
          </CarouselItem>
        </Carousel>
        <div style="display: flex;margin-top:20px;">
            <div class="info sale_left">
              <div class="title">
                <span style="font-size:24px;margin-right:20px;">{{gymInfo.orgName}}</span>
                <Icon color="rgba(233,0,33,1)" type="ios-star" v-for="n in 4" :key="n"></Icon><Icon color="rgba(233,0,33,1);" type="ios-star" v-if="9.4 >= baseRate"></Icon><Icon color="rgba(233,0,33,1)" type="ios-star-half" v-else></Icon>
                <em>4.8</em>
              </div>
              <div class="moreInfo">
                <Row>
                  <Col span="3"><label>场馆场地：</label></Col>
                  <Col span="21" style="margin-left:-20px">日照游泳馆总建筑面积29200平方米，设有3500个坐席，主要由游泳馆、跳水馆、训练馆、戏水池等组成。该方案采用“阳光、海浪、沙滩、珍贝”日照独特的海滨城市元素，以“金色沙滩”为背景勾勒出阳光下海浪亲吻沙滩爱抚贝壳的画面。2010第二届中国水上运动会将在这里举行</Col>
                </Row>
              </div>
              <div class="inside">
                  <div class="left">
                    <div class="moreInfo">
                      <Row>
                        <Col span="4"><label>场馆场地：</label></Col>
                        <Col span="20"><span>篮球场</span><span>游泳馆</span><span>乒乓球场</span><span>羽毛球场</span></Col>
                        <Col span="4"><label>配套服务：</label></Col>
                        <Col span="20">
                          <div class="item">
                            <c-icon type="dengguang"  :size="28"></c-icon>
                            <div>灯光</div>
                            <div>正常提供</div>
                          </div>
                          <div class="item">
                            <c-icon type="xiuxishi"  :size="28"></c-icon>
                            <div>休息室</div>
                            <div>200<i>/300</i></div>
                          </div>
                          <div class="item">
                            <c-icon type="xiyu"  :size="28"></c-icon>
                            <div>浴室</div>
                            <div>正常提供</div>
                          </div>
                          <div class="item">
                            <c-icon type="gengyigui"  :size="28"></c-icon>
                            <div>更衣柜</div>
                            <div>200<i>/300</i></div>
                          </div>
                          <div class="item">
                            <c-icon type="wuxianwang"  :size="28"></c-icon>
                            <div>无线网</div>
                            <div>正常提供</div>
                          </div>
                          <div class="item">
                            <c-icon type="tingche"  :size="28"></c-icon>
                            <div>停车</div>
                            <div>200<i>/300</i></div>
                          </div>
                          <div class="item">
                            <c-icon type="tingche"  :size="28"></c-icon>
                            <div>停车</div>
                            <div>正常提供</div>
                          </div>
                          <div class="item">
                            <c-icon type="tingche"  :size="28"></c-icon>
                            <div>停车</div>
                            <div>正常提供</div>
                          </div>
                        </Col>
                        <Col span="4"><label>场馆场地：</label></Col>
                        <Col span="20">{{gymInfo.city}}{{gymInfo.county}}{{gymInfo.adressDetail}}</Col>
                        <Col span="4"><label>场馆场地：</label></Col>
                        <Col span="20">13915263362</Col>
                      </Row>
                    </div>
                  </div>
                  <div class="right">
                      <baidu-map class="bm-view"
                      :center="center"
                      :zoom="zoom"
                      @ready="handleReady">
                        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
                        <bm-marker :position="center"></bm-marker>
                      </baidu-map>
                  </div>
              </div>
            </div>
          <div class="sale_right">
            <h2>场馆公告</h2>
            <ul>
              <li>
                <p>场馆10月12日暂停营业通知</p>
              </li>
              <li>
                <p>羽毛球场馆限时免费开放，快来玩啊</p>
              </li>
              <li>
                <p>场馆将新增瑜伽项目，具体时间等通知</p>
              </li>
              <li>
                <p>购买游泳年卡限时打折</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="sale">
          <div class="sale_left">
            <Tabs :value="NOW_CHOSEN" type="card">
              <TabPane label="购票" name="ticket">
                <book-ticket :orgId="gymInfo.orgId"></book-ticket>
              </TabPane>
              <TabPane label="购卡" name="card">
                <book-card :orgId="gymInfo.orgId"></book-card>
              </TabPane>
              <TabPane label="场地预定" name="field">
                <book-field :orgId="gymInfo.orgId"></book-field>
              </TabPane>
            </Tabs>
          </div>
          <div class="sale_right">
            <h2>购买须知</h2>
            <ul>
              <li>
                <p>有效期</p>
                <p>长期有效</p>
              </li>
              <li>
                <p>使用时段</p>
                <p>除有课时段外所有营业时段，具体以场馆为准</p>
              </li>
              <li>
                <p>使用规则</p>
                <p>无需预约</p>
              </li>
              <li>
                <p>注意事项</p>
                <p>刷钥匙取水后限15分钟淋浴。</p>
              </li>
            </ul>
          </div>
        </div>
        <shopping-cart></shopping-cart>
      </div>
    </div >
</template>
<script>
import BookTicket from '@/components/BookTicket';
import BookCard from '@/components/BookCard';
import BookField from '@/components/BookField';
import ShoppingCart from '@/components/ShoppingCart';
export default {
  name: 'GymDetails',
  components: { BookTicket, BookCard, BookField, ShoppingCart },
  data() {
    return {
      gymInfo: {},
      default_value: 0,
      center: {lng: 0, lat: 0},
      zoom: 17,
      img: 'http://img.doit10019.com/2ba448d7-67ba-4620-b835-b5c5cbca6f09',
      NOW_CHOSEN: 'ticket',
    };
  },
  created() {
    this.gymInfo = this.$route.query;
    localStorage.setItem('orgId', this.gymInfo.orgId); // orgId存入, 供vuex中acitons使用
    this.NOW_CHOSEN = localStorage.getItem('NOW_CHOSEN');
  },
  methods: {
    handleReady({BMap}) {
      let stationGeo = new BMap.Geocoder();
      stationGeo.getPoint(`${this.gymInfo.city}${this.gymInfo.county}${this.gymInfo.adressDetail}`, (point) => {
        this.center = {
          lng: point.lng,
          lat: point.lat,
        };
      });
    },
  },
};
</script>
<style lang="scss" scoped>
  $sub_height: 470px;
  #gymDetails {
    padding-bottom: 6em;
    background: $g_background;
    .inner {
      height: 100%;
      width: $g_width;
      margin: auto;
      .ivu-carousel {
        width: $g_width;
        & /deep/ button.left {
          width: 40px;
          height: 80px;
          border-radius: 0;
        }
        & /deep/ button.right {
          width: 40px;
          height: 80px;
          border-radius: 0;
        }
        & /deep/ ul {
          bottom: 50px;
          button {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #fff;
          }
        }
        .demo-carousel {
          height: $sub_height;
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
      }
      .info {
        height: calc(#{$sub_height} + 2em) ;
        width: 910px;
        background: #fff;
        padding: 2em 0;
        position: relative;
        .title {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 10px;
          padding-left: 30px;
          line-height: 40px;
          em{font-style: normal;color: #E90021;padding-left: 10px;}
        }
        .moreInfo {
          font-size: 14px;
          font-weight: 500;
          line-height: 24px;
          color: #888;
          padding-left: 30px;
          & /deep/ .ivu-col-span-20,& /deep/ .ivu-col-span-4{margin-top: 10px;}
          label {
            width: 120px;
            color: #333;
          }
          span {background:rgba(243,243,243,1);display: inline-block;border-radius:4px;margin-right: 20px;padding: 0 10px;font-size: 12px;}
          .item {
            width: 70px;
            height: 70px;
            background:rgba(248,248,248,1);
            border-radius:4px;
            text-align: center;
            font-size: 12px;
            line-height: 18px;
            display: inline-block;
            margin-right: 10px;
            margin-top: 10px;
            div:last-child{
              color:rgba(0,161,233,1);
              i{
                font-style: normal;
                color: #333;
              }
            }
            }
        }
        .inside {
          display: flex;
          height: 100%;
          .left {
            width: calc(100% - 300px);
            height: 200px;
          }
          .right {
            width: 300px;
            height: 320px;
            padding-right: 30px;
            .bm-view {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .sale {
        margin-top: 4em;
        display: flex;
      }
      .sale_left {
          background: #fff;
          width: $g_left_width;
        }
      .sale_right {
        width: 280px;
        background: #fff;
        border: 1px solid #e8eaec;
        margin-left: 1em;
        h2 {
          width: 100%;
          line-height: 40px;
          background:rgba(237,241,242,1);
          padding-left: 20px;
        }
        ul {
          padding: 10px 20px;
          li {
            padding: 0.2em 0;
            list-style-type:none;
            p:first-child::before{
              content: "\2022";     //圆点
              color: #148AE0;       //颜色
              font-size: 16px;         //大小
              padding-right: 5px;
            }
            p:last-child{padding-left: 15px;}
          }
        }
      }
    }
  }
</style>
