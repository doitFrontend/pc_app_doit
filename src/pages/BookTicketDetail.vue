<template>
  <div id="bookTicketDetail">
    <div class="inner">
      <div class="sale">
        <div class="sale_left">
          <div class="sale_info">
            <div class="left wrap">
              <div id="main">
                <div class="featured-wrapper">
                  <div id="featured-content">
                    <div class="featured-post">
                      <img src="../assets/1.jpg" alt="一组超酷的饮料类网站设计欣赏" class="featured-thumbnail " />
                    </div>
                    <div class="featured-post">
                      <img src="../assets/2.jpg" alt="一组超酷的饮料类网站设计欣赏" class="featured-thumbnail " />
                    </div>
                    <div class="featured-post">
                      <img src="../assets/3.jpg" alt="一组超酷的饮料类网站设计欣赏" class="featured-thumbnail " />
                    </div>
                    <div class="featured-post">
                      <img src="../assets/4.jpg" alt="一组超酷的饮料类网站设计欣赏" class="featured-thumbnail " />
                    </div>
                  </div>
                  <div id="slider-nav">
                    <ul id="slide-thumbs">
                      <li class><a><img src="../assets/1.jpg" alt="怎样给扁平化风格选择合适的字体（附字体案例）" class="slider-nav-thumbnail " /></a></li>
                      <li class><a><img src="../assets/2.jpg" alt="怎样给扁平化风格选择合适的字体（附字体案例）" class="slider-nav-thumbnail " /></a></li>
                      <li class><a><img src="../assets/3.jpg" alt="怎样给扁平化风格选择合适的字体（附字体案例）" class="slider-nav-thumbnail " /></a></li>
                      <li class><a><img src="../assets/4.jpg" alt="怎样给扁平化风格选择合适的字体（附字体案例）" class="slider-nav-thumbnail " /></a></li>
                      <li class><a><img src="../assets/5.jpg" alt="怎样给扁平化风格选择合适的字体（附字体案例）" class="slider-nav-thumbnail " /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div  class="right">
              <h3>瑜伽全天票</h3>
              <div class="info">
                <div><label>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</label><span>￥20.00</span></div>
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
                <div><label>项&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目</label><span>瑜伽</span></div>
              </div>
              <div style="margin:10px 0 20px;"><label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量</label></div>
              <button data-v-434690d6="" type="button" class="ivu-btn ivu-btn-default" style="width: 140px; font-size: 14px; border-radius: 4px; color: rgb(255, 255, 255); background: rgb(0, 161, 233); margin-left: 20px; margin-top: 3px;"><span style=" padding-left: 0px;">加入购物车</span></button>
            </div>
          </div>
          <div class="instructions">
            <h4><i></i>购买须知</h4>
            <div>
              <div>
                <label>配套服务</label>
                <p>
                  <ul><li><li></li></li></ul>
                </p>
              </div>
              <div>
                <label>有效期</label>
                <p>11111111111111</p>
              </div>
              <div>
                <label>使用时间</label>
                <p>2222222222222</p>
              </div>
              <div>
                <label>预约信息</label>
                <p>33333333333</p>
              </div>
              <div>
                <label>适用人数</label>
                <p>44444444444</p>
              </div>
              <div>
                <label>适用人群</label>
                <p></p>
              </div>
              <div>
                <label>使用规则</label>
                <p></p>
              </div>
              <div>
                <label>温馨提示</label>
                <p></p>
              </div>
            </div>
          </div>
          <div class="introduce">
            <h4><i></i>票介绍</h4>
          </div>
        </div>
        <div class="sale_right">
          <h2>看了又看</h2>
          <ul>
            <li>
              <div class="img" v-bind:style="{backgroundImage:'url(' + gymInfo.ticketImages + ')'}"></div>
              <p>网球2小时票</p>
              <p>￥30.00</p>
            </li>
            <li>
              <div class="img" v-bind:style="{backgroundImage:'url(' + gymInfo.ticketImages + ')'}"></div>
              <p>网球2小时票</p>
              <p>￥30.00</p>
            </li>
            <li>
              <div class="img" v-bind:style="{backgroundImage:'url(' + gymInfo.ticketImages + ')'}"></div>
              <p>网球2小时票</p>
              <p>￥30.00</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import ButtonGroups from './ButtonGroups';
export default {
  name: 'BookTicketDetail',
  // components: {
  // ButtonGroups,
  // },
  data() {
    return {
      tempGoodLists: [
        {
          project: '游泳',
          num: 6,
        },
      ],
    };
  },
  created() {
    this.gymInfo = this.$route.query;
  },

  methods: {
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
        margin-top: 20px;
      }
      .sale_left {
          background: #fff;
          width: $g_left_width;
          .sale_info{
            display: flex;
            .wrap {
              width: 420px;
              position: relative;
            }
            #main {
              clear: both;
              width: 100%;
              margin: 0 auto;
              position: relative;
              padding-top:10px;
            }
            .featured-wrapper {
              float: right;
              margin-bottom: 30px;
              width: 100%;
              overflow: hidden;
              position: relative;
              z-index: 1;
            }
            #featured-content {
              position: relative;
              margin-bottom: 20px;
              height:420px;
              overflow:hidden;
            }
            .featured-post {
              position: relative;
              overflow: hidden;
              float: left;
            }
            .featured-post img{width: 420px;height: 420px;}
            #slider-nav {
              position: relative;
              width: 120%;
              overflow: hidden;
              padding: 0;
              margin: 0;
            }
            #slide-thumbs {
              width: 100%;
              margin: 0;
            }
            #slider-nav li {
              float: left;
              list-style: none;
              width: 60px;
              margin: 0 30px 0 0px;
            }
            #slider-nav li a, #slider-nav li a:visited {
              border-bottom: none;
              padding: 0;
            }
            #slider-nav li.last { margin-right: 0; }
            #slider-nav li img { max-width: 100%;height: 60px; }
            .activeSlide img { opacity: 0.3!important; }
            .right{
              margin-left: 40px;
              margin-right: 30px;
              line-height: 40px;
              h3{
                text-indent: 10px;
                font-size: 16px;
                font-weight: normal;
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
              label{display: block;color: #888;}
              span{padding-left: 20px;display: block;}
            }
          }
          .instructions{
            line-height: 30px;
            >div>div{display: flex;}
            ul li{list-style: none;}
            label{margin-right: 30px;width: 60px;font-size: 14px;color: #333333;}
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
        background: #f7f7f7;
        margin-left: 1em;
        border:1px solid rgba(243,243,243,1);
        margin-top: 10px;
        h2 {
          width: 100%;
          line-height: 40px;
          background:rgba(248,248,248,1);
          padding-left: 20px;
          font-size: 16px;
          font-weight: normal;
          }
        ul {
          background: #fff;
          padding: 10px 0 10px 0;
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
              background-size: cover;
              border-radius: 10px;background-repeat: no-repeat;
              background-size: 100% 100%;
              margin-bottom: 10px;
              border: #f7f7f7 solid 1px;
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
