<template>
    <div id="gymDetails">
      <div class="inner">
        <Carousel v-model="default_value" loop>
          <CarouselItem v-for="i in 3" :key="i">
            <div class="demo-carousel" :style="{backgroundImage: `url(${img})`}"></div>
          </CarouselItem>
        </Carousel>
        <div class="info">
          <div class="title">{{gymInfo.title}}</div>
          <div class="inside">
              <div class="left">
                <div class="moreInfo">
                  <Row>
                    <Col span="4"><div class="label">场馆介绍：</div></Col>
                    <Col span="20">{{gymInfo.intro}}</Col>
                    <Col span="4"><div class="label">场馆地址：</div></Col>
                    <Col span="20">{{gymInfo.address}}</Col>
                    <Col span="4"><div class="label">场馆电话：</div></Col>
                    <Col span="20">{{gymInfo.phone}}</Col>
                    <Col span="4"><div class="label">评分：</div></Col>
                    <Col span="20">{{gymInfo.rate}}分</Col>
                    <Col span="4"><div class="label">评论：</div></Col>
                    <Col span="20">{{gymInfo.comment}}条</Col>
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
        <div class="sale">
          <div class="sale_left">
            <Tabs value="ticket" type="card">
              <TabPane label="购票" name="ticket">
                <book-ticket></book-ticket>
              </TabPane>
              <TabPane label="购卡" name="card">
                暂未开放
                <book-card></book-card>
              </TabPane>
              <TabPane label="场地预定" name="field" style="overflow-x: auto; height: 820px;">
                <book-field></book-field>
              </TabPane>
            </Tabs>
          </div>
          <div class="sale_right">
            <h2>购买须知</h2>
            <ul>
              <li>
                <p>有效期</p>
                长期有效
              </li>
              <li>
                <p>使用时段</p>
                除有课时段外所有营业时段，具体以场馆为准
              </li>
              <li>
                <p>使用规则</p>
                无需预约
              </li>
              <li>
                <p>注意事项</p>
                刷钥匙取水后限15分钟淋浴。
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
    };
  },
  created() {
    this.gymInfo = this.$route.query;
    console.log(this.gymInfo);
  },
  methods: {
    handleReady({BMap}) {
      let stationGeo = new BMap.Geocoder();
      stationGeo.getPoint(this.gymInfo.address, (point) => {
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
        width: ($g_width - 20px);
        background: #fff;
        border: 1px solid #e8eaec;
        border-radius: 8px;
        margin: -30px auto;
        padding: 2em;
        position: relative;
        .title {
          text-align: center;
          font-size: 24px;
          font-weight: 600;
        }
        .inside {
          display: flex;
          height: 100%;
          .left {
            width: calc(100% - 300px);
            height: 200px;
            padding: 2em 3em;
            .moreInfo {
              font-size: 16px;
              font-weight: 500;
              line-height: 30px;
              .label {
                width: 120px;
              }
            }
          }
          .right {
            width: 300px;
            height: 410px;
            .bm-view {
              padding: 1em;
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .sale {
        margin-top: 4em;
        display: flex;
        .sale_left {
          background: #fff;
          width: 990px;
        }
        .sale_right {
          width: 280px;
          background: #fff;
          border: 1px solid #e8eaec;
          padding: 1em 2em;
          margin-left: 1em;
          h2 {
            width: 100%;
          }
          ul {
            li {
              padding: 0.2em 0;
            }
          }
        }
      }
    }
  }
</style>
