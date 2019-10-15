<template>
  <div class="card" @click="toGoodItem" :style="{height: `${o_height}px`}">
    <!-- mode="horizonal"水平模式 height以图片的高度来填充 -->
    <div class="h">
      <Row type="flex" align="bottom" :gutter="24">
        <Col>
          <div>
            <img :style="{ width: `${i_width}px`, height: `${i_height}px`, backgroundSize: 'cover', }" :src="imgSrc" alt="">
          </div>
        </Col>
        <Col style="width: 484px;">
          <div class="title">
            <slot name="title"></slot>
          </div>
          <div>
            <Icon color="#ffac2d" type="ios-star" v-for="n in 4" :key="n"></Icon><Icon color="#ffac2d" type="ios-star" v-if="9.4 >= baseRate"></Icon><Icon color="#ffac2d" type="ios-star-half" v-else></Icon>
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
            <div class="item" v-for="(i) in 3" :key="i">
              {{i}}
            </div>
            <div class="more">更多商品</div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script>
// import { oneOf } from '@/utils/index';
export default {
  name: 'GoodsItem',
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
  },
  data() {
    return {
      isFold: false,
    };
  },
  methods: {
    toGoodItem() {
      return; // test
      // this.$emit('goodItemDetails');
    },
    foldInfo() {
      this.isFold = !this.isFold;
    },
  },
};
</script>
<style lang="scss" scoped>
  .card {
    background: #fff;
    // height: 280px;
    padding: 0.8em;
    border-radius: 6px;
    cursor: pointer;
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
            margin-right: 0.5em;
            background: lightpink;
          }
          .more {
            // height: 100%;
            // background: lightpink;
            font-size: 14px;
            &::after {
              content: '>>'
            }
          }
        }
      }
    }
  }
</style>
