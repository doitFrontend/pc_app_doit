<template>
  <div class="card" @click="toGoodItem" :style="{height: `${o_height}px`}">
    <!-- mode="horizonal"水平模式 height以图片的高度来填充 -->
    <div v-if="isHorizonal" class="h">
      <Row type="flex" justify="start" :gutter="16">
        <Col>
          <div>
            <img :style="{ width: `${i_width}px`, height: '140px', backgroundSize: 'cover', }" :src="imgSrc" alt="">
          </div>
        </Col>
        <Col>
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
      </Row>
    </div>
    <div v-else class="v">
      <div>
        <img :style="{ width: 'inherit', height: `${i_height}px` }" :src="imgSrc" alt="">
      </div>
      <div>
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
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
import { oneOf } from '@/utils/index';
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
    }
    div.v {
      width: 100%;
      // height: 200px;
      div {
        width: 100%;
        img {
            padding-bottom: 1em;
        }
      }
    }
  }
</style>
