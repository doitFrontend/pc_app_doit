<template>
  <div class="card" :style="{height: `${o_height}px`}">
    <!-- mode="horizonal"水平模式 height以图片的高度来填充 -->
    <div class="h">
      <Row type="flex" align="bottom" :gutter="24">
        <Col>
          <div>
            <img :style="{ width: `${i_width}px`, height: `${i_height}px`, backgroundSize: 'cover', borderRadius: '4px', }" :src="imgSrc" alt="">
          </div>
        </Col>
        <Col style="width: 464px;">
          <div class="title">
            <slot name="title"></slot>
          </div>
          <div>
            <Icon color="rgba(233,0,33,1)" type="ios-star" v-for="n in 4" :key="n"></Icon><Icon color="rgba(233,0,33,1)" type="ios-star" v-if="9.4 >= baseRate"></Icon><Icon color="rgba(233,0,33,1)" type="ios-star-half" v-else></Icon>
            <slot name="rate"></slot>
          </div>
          <div>
            <slot name="address"></slot>
          </div>
          <div>
            <slot name="price"></slot>
          </div>
          <slot></slot>
        </Col>
        <Col>
          <Button type="primary" @click="foldInfo">收起票务信息&nbsp;<Icon :type="!isFold? 'ios-arrow-up': 'ios-arrow-down'"></Icon></Button>
        </Col>
      </Row>
      <Row v-show="!isFold">
        <Col style="margin-left: 244px;">
          <div class="detail">
            <div class="item" v-for="(item, i) in arr" :key="i">
              <div class="img" style="background-image: url('http://img.doit10019.com/2ba448d7-67ba-4620-b835-b5c5cbca6f09')"></div>
              <h4>成人游泳票</h4>
              <div class="price">
                <div>￥20.0</div>
                <div>已售268</div>
              </div>
            </div>
            <div class="more" @click="moreItem">更多商品</div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script>
// import { oneOf } from '@/utils/index';
export default {
  name: 'GoodsItemNew',
  props: {
    imgSrc: {
      type: String,
    },
    baseRate: {
      type: Number,
      default: 6,
    },
    o_height: {
      type: Number,
      // default: '290px',
    },
    i_height: {
      type: Number,
      default: 126,
    },
    i_width: {
      type: Number,
      default: 220,
    },
    arr: {
      type: Array,
    },
  },
  data() {
    return {
      isFold: false,
    };
  },
  methods: {
    // toGoodItem() {
    //   this.$emit('goodItemDetails');
    // },
    foldInfo() {
      this.isFold = !this.isFold;
    },
    moreItem() {
      this.$emit('getMoreItem');
    }
  },
};
</script>
<style lang="scss" scoped>
  .card {
    background: #fff;
    // height: 280px;
    padding: 0.8em;
    border-radius: 6px;
    padding-top: 30px;
    padding-bottom: 30px;
    // cursor: pointer;
    &:hover {
      background: #f7f7f7;
    }
    div.h {
      .title {
        font-weight: 600;
        font-size: 1.2em;
      }
      .ivu-col {
        &:nth-child(2) {}
        .detail {
          width: 600px;
          height: 234px;
          margin-top: 1em;
          padding: 1em;
          background: #F3F3F3;
          border-radius: 4px;
          display: flex;
          align-items: center;
          .item {
            width: 158px;
            height: 100%;
            margin-right: 12px;
            background: #fff;
            color:rgba(51,51,51,1);
            .img {
              height: 158px;
              background-repeat: no-repeat;
              background-size: 100% 100%;
              border-radius:4px;
            }
            h4 {
              padding: 6px 0 0 1em;
            }
            .price {
              padding: 6px 1em;
              display: flex;
              justify-content: space-between;
              div:first-child{
                color:rgba(247,105,0,1);
              }
            }
          }
          .more {
            // height: 100%;
            // background: lightpink;
            font-size: 12px;
            color:rgba(51,51,51,1);
            &:hover {
              cursor: pointer;
              color: $g_default_color;
            }
            &::after {
              content: '>>'
            }
          }
        }
      }
    }
  }
</style>
