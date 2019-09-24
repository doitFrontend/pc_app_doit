<template>
    <div id="gymDetails">
      <div class="inner">
        <div>
          <Tabs value="ticket" type="card">
            <TabPane label="购票" name="ticket">
              <book-ticket></book-ticket>
            </TabPane>
            <TabPane label="购卡" name="card">
              <book-card></book-card>
            </TabPane>
            <TabPane label="场地预定" name="field" style="overflow-x: auto; height: 720px;">
              <book-field></book-field>
            </TabPane>
          </Tabs>
        </div>
        <div>
          <shopping-cart></shopping-cart>
        </div>
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
  created() {
    console.log(this.$route);
    console.log(this);
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
        display: inline-block;
        background: lightpink;
        &:nth-child(1) {
          background: #fff;
          width: 1000px;
        }
        &:nth-child(2) {
          width: 272px;
        }
      }
    }
  }
</style>
