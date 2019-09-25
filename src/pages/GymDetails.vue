<template>
    <div id="gymDetails">
      <div class="inner">
        <div>
          <div>{{gymInfo.title}}</div>
          <div>{{gymInfo.address}}</div>
          <div>评分：{{gymInfo.rate}}分</div>
          <div>评论：{{gymInfo.comment}}条</div>
        </div>
        <div>
          <Tabs value="ticket" type="card">
            <TabPane label="购票" name="ticket">
              <book-ticket></book-ticket>
            </TabPane>
            <TabPane label="购卡" name="card">
              暂未开放
              <!-- <book-card></book-card> -->
            </TabPane>
            <TabPane label="场地预定" name="field" style="overflow-x: auto; height: 820px;">
              <book-field></book-field>
            </TabPane>
          </Tabs>
        </div>
        <div>
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
    };
  },
  created() {
    console.log(this.$route);
    this.gymInfo = this.$route.query;
    console.log(this.gymInfo);
  },
};
</script>
<style lang="scss" scoped>
  #gymDetails {
    padding-bottom: 6em;
    background: $g_background;
    .inner {
      height: 100%;
      width: $g_width;
      margin: auto;
      & > div {
        display: inline-flex;
        &:nth-child(1) {
          display: block;
          background: #fff;
          border: 1px solid #e8eaec;
          border-radius: 4px;
          padding: 1em;
          & > div {
            font-size: 16px;
            &:nth-child(1) {
              font-weight: 600;
            }
          }
        }
        &:nth-child(2) {
          background: #fff;
          width: 1200px;
        }
        &:nth-child(3) {
          width: 274px;
          background: #fff;
          border: 1px solid #e8eaec;
          padding: 0 0.8em;
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
