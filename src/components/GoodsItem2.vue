<template>
  <div class="card" @click="toGoodItem" :style="{height: `${o_height}px`}">
    <!-- mode="horizonal"水平模式 height以图片的高度来填充 -->
    <div v-if="isHorizonal" class="h">
      <Row type="flex" justify="start" :gutter="16">
        <Col>
          <div  v-for="(url,idx) in imgSrc.split(',')"   :key="idx" >
            <img v-if="idx === 0" :style="{ width: `${i_width}px`, height: '140px', backgroundSize: 'cover', }" :src="url" alt="">
          </div>
        </Col>
        <Col>
          <div class="title">
            <slot name="title"></slot>
          </div>
          <div>
            <Icon color="rgb(233, 0, 33)" type="ios-star" v-for="n in 4" :key="n"></Icon><Icon color="rgb(233, 0, 33)" type="ios-star" v-if="9.4 >= baseRate"></Icon><Icon color="rgb(233, 0, 33)" type="ios-star-half" v-else></Icon>
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
      </Row>
    </div>
    <div v-else class="v">
      <div  v-for="(url,idx) in imgSrc.split(',')"   :key="idx" >
        <img v-if="idx === 0" :style="{ width: 'inherit', height: `${i_height}px` }" :src="url" alt="">
      </div>
      <div>
        <slot name="title"></slot>
      </div>
      <div>
        <slot name="address"></slot>
      </div>
      <div style="padding-bottom:15px;">
        <slot name="price"></slot>
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
import { oneOf } from '@/utils/index';
export default {
  name: 'GoodsItem2',
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
      default: 200,
    },
    i_width: {
      type: Number,
      default: 200,
    },
    mode: {
      type: String,
      validator(value) {
        return oneOf(value, ['horizontal', 'vertical']);
      },
      default: 'vertical',
    }
  },
  computed: {
    isHorizonal() {
      return this.mode === 'horizontal';
    },
  },
  methods: {
    toGoodItem() {
      this.$emit('goodItemDetails');
    },
  },
};
</script>
<style lang="scss" scoped>
  .card {
    background: #fff;
    // height: 280px;
    margin: 0 0.8em;
    border-radius: 6px;
    cursor: pointer;
    text-align: center;
    &:hover {
      background: #f7f7f7;
    }
    div.h {
      background: #F7F7F7;
      .title {
        font-weight: 600;
        font-size: 1.2em;
      }
    }
    div.v {
      background: #F7F7F7;
      width: 100%;
      // height: 200px;
      margin-bottom: 30px;
      div {
        width: 100%;
        img {
          margin-top: 10px;
        }
      }
    }
  }
</style>
