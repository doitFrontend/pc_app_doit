<template>
    <div id="gymDetails">
      <div class="inner">
        <Carousel v-bind:autoplay="gymInfo.orgImages.split(',').length > 1" v-model="default_value" loop>
          <CarouselItem  v-for="(url,i) in gymInfo.orgImages.split(',')"   :key="i">
            <div class="demo-carousel" :style="{backgroundImage: `url(${url})`}"></div>
          </CarouselItem>
        </Carousel>
        <div style="display: flex;margin-top:20px;">
        </div>
        <div class="sale">
          <div class="sale_left">
            <div class="info">
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
                            <div>水质</div>
                            <div>合格</div>
                          </div>
                          <div class="item">
                            <c-icon type="tingche"  :size="28"></c-icon>
                            <div>饱和度</div>
                            <div>繁忙</div>
                          </div>
                        </Col>
                        <Col span="4"><label>场馆地址：</label></Col>
                        <Col span="20">{{gymInfo.city}}{{gymInfo.county}}{{gymInfo.adressDetail}}</Col>
                        <Col span="4"><label>场馆电话：</label></Col>
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
            <div style="height:20px; background: #f7f7f7;"></div>
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
              <TabPane label="培训" name="train">
                <train :orgId="gymInfo.orgId"></train>
              </TabPane>
              <TabPane label="商城" name="mall">
                <mall :orgId="gymInfo.orgId"></mall>
              </TabPane>
            </Tabs>
            <div class="comment">
              <h3>用户点评<span>（231）</span></h3>
              <div class="totalScore">
                <div>
                  <span>4.8</span>
                  <label>综合评分</label>
                </div>
                <div>
                  <label>环境好<span>(24)</span></label>
                  <label>性价比高<span>(36)</span></label>
                  <label>配套服务好<span>(36)</span></label>
                  <label>停车方便<span>(36)</span></label>
                  <label>便宜<span>(36)</span></label>
                </div>
              </div>
              <div class="title"><label>环境好<span>(24)</span></label><label>环境好<span>(24)</span></label></div>
              <ul>
                <li>
                  <div>
                    <div class="head"><img src="http://img.doit10019.com/d794cf31-b29f-4dc0-8e93-63d9f707d674"/></div>
                    <div class="name">柔***光</div>
                  </div>
                  <div>
                  <div>
                    <Row>
                      <Col :sm="12" :md="12" :lg="12" >
                        <template>
                          <Rate show-text allow-half disabled v-model="valueDisabled"></Rate>
                      </template>
                      </Col>
                      <Col :sm="12" :md="12" :lg="12"  style="text-align:right;color:#BEBEBE">
                      2019-10-18 11:26:32
                      </Col>
                    </Row>
                  </div>
                  <p>昨天中午去的，刚好水池在还水，当时游泳的人不是很多，环境还不错，水也比较干净，宝贝玩地都不愿回家，下午人渐渐 多了。不过美中不足的是:长头发游泳出来，没有吹风机吹头发，只能自然干！小伙伴们值得考虑哦。</p>
                    <dl>
                      <dd><img src="/static/img/erweima.fccf08c.jpg"/></dd>
                      <dd><img src="/static/img/erweima.fccf08c.jpg"/></dd>
                      <dd><img src="/static/img/erweima.fccf08c.jpg"/></dd>
                      <dd><img src="/static/img/erweima.fccf08c.jpg"/></dd>
                    </dl>
                    <label>篮球成年人年卡</label>
                    <p><label>南京信息工程大学体育馆回复：</label>非常感谢您的支持，对于您提出的意见我们也会及时改正，不断提高我们的服务水准，欢迎 再次光临。</p>
                  </div>
                </li>
                <li>
                  <div>
                    <div class="head"><img src="http://img.doit10019.com/d794cf31-b29f-4dc0-8e93-63d9f707d674"/></div>
                    <div class="name">柔***光</div>
                  </div>
                  <div>
                    <p>昨天中午去的，刚好水池在还水，当时游泳的人不是很多，环境还不错，水也比较干净，宝贝玩地都不愿回家，下午人渐渐 多了。不过美中不足的是:长头发游泳出来，没有吹风机吹头发，只能自然干！小伙伴们值得考虑哦。</p>
                    <dl>
                      <dd><img src="/static/img/erweima.fccf08c.jpg"/></dd>
                      <dd><img src="/static/img/erweima.fccf08c.jpg"/></dd>
                      <dd><img src="/static/img/erweima.fccf08c.jpg"/></dd>
                      <dd><img src="/static/img/erweima.fccf08c.jpg"/></dd>
                    </dl>
                    <label>篮球成年人年卡</label>
                    <p><label>南京信息工程大学体育馆回复：</label>非常感谢您的支持，对于您提出的意见我们也会及时改正，不断提高我们的服务水准，欢迎 再次光临。</p>
                  </div>
                </li>
              </ul>
              </div>
          </div>
          <div class="sale_right">
            <div style="padding:20px;text-align: center;background: #fff;" class="">
              <img data-v-64778763="" src="/static/img/erweima.fccf08c.jpg" alt="" srcset="">
              <p>关注场馆公众号</p>
            </div>
            <div>
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
            <div style="height:40px; background: #f7f7f7;"></div>
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
import Train from '@/components/Train';
import Mall from '@/components/Mall';
import ShoppingCart from '@/components/ShoppingCart';
export default {
  name: 'GymDetails',
  components: { BookTicket, BookCard, BookField, Train, Mall, ShoppingCart },
  data() {
    return {
      gymInfo: {},
      default_value: 0,
      center: {lng: 0, lat: 0},
      zoom: 17,
      img: 'http://img.doit10019.com/2ba448d7-67ba-4620-b835-b5c5cbca6f09',
      NOW_CHOSEN: 'ticket',
      valueDisabled: 3.8
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
          height: calc(100% - 100px);
          .left {
            width: calc(100% - 300px);
            height: 320px;
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
      .comment{
        background: rgb(248, 248, 248);
        line-height: 30px;
        h3{
          font-size: 16px;
          color: #333;
          line-height: 50px;
          font-weight: normal;
        }
        .totalScore{
          background: #fff;
          padding: 20px 30px;
          display: flex;
          div:first-child span{
          color: #00A1E9;
          font-size: 36px;
          display: block;
          }
          div:last-child{
            margin-left: 30px;
            margin-top: 20px;
            label{
            padding:  2px 10px;
            margin: 10px 5px;
            border:1px solid rgba(0,161,233,1);
            color: #00A1E9;
            border-radius:4px;
              }
            }
          }
          .title{
            height:30px;
            background:rgba(225,242,250,1);
            label{margin-left: 30px;}
            label:first-child{color: #00A1E9}
          }
          .head,.head img{width: 54px;height: 54px;border-radius:50%;}
          ul li{
            list-style: none;
            padding: 30px 30px 0px 30px;
            background: #fff;
            display: flex;
            line-height: 28px;
            > div:first-child{
              width: 54px;
              margin-right: 30px;
              text-align: center;
            }
            > div:last-child{border-bottom: solid 1px #F3F3F3;padding-bottom: 30px;}
            p{font-size: 14px;color: #6D6D6D}
            dl{
              dd{display: inline-block}
              dd img{width: 140px;max-height: 140px;}
            }
            label{color: #BEBEBE}
            p:last-child{
              color: #00A1E9;
              label{color: #00A1E9;}
            }
            & /deep/ .ivu-rate-star{color: red;font-size: 14px;}
            & /deep/ .ivu-rate-star-half .ivu-rate-star-content:before, & /deep/ .ivu-rate-star-full:before {
              color:red;
              }
            .leibie label{
              height: 24px;line-height: 24;padding: 0 10px;background: #F3F3F3;border-radius:12px;color: #333;display: inline-block
            }
          }
      }
      .sale {
        display: flex;
      }
      .sale_left {
          background: #fff;
          width: $g_left_width;
        }
      .sale_right {
        width: 280px;
        background: #f7f7f7;
        margin-left: 1em;
        h2 {
          width: 100%;
          line-height: 40px;
          background:rgba(237,241,242,1);
          padding-left: 20px;
          margin-top: 20px;
        }
        ul {
          background: #fff;
          height: calc(220px + 2em);
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
        img{
          width: 130px;
          height: 130px;
        }
      }
    }
  }
</style>
