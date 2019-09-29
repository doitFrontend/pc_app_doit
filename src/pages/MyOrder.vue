<template>
<div id="MyOrder">
      <div class="container">
      <div class="inner">
        <div class="personalCenter">
          <div class="personalCenter_left">
            <personal-center-nav></personal-center-nav>
          </div>
          <div class="personalCenter_right">
            <h2 id="org_name">我的订单</h2>
            <table class="first_floor">
              <thead>
                <tr>
                <th><div>订单号</div></th>
                <th><div>下单时间</div></th>
                <th><div>单价</div></th>
                <th><div>数量</div></th>
                <th><div>支付金额</div></th>
                <th><div>订单状态</div></th>
                <th><div>操作</div></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <table class="second_floor">
                    <thead>
                      <tr>
                        <th><div>订单号：201909275765a4d781</div></th>
                      <th><div>下单日期：2019-09-27 17:00:40</div></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><div>场地</div></td>
                        <td>
                          <div>
                            <h3>台球-预定（非家属）</h3>
                          <p>时段：2019-09-27 17:00:00~ 2019-09-27 18:00:00</p>
                          <p>商家：大连理工体育馆</p>
                          </div>
                        </td>
                        <td><div>¥200.00</div></td>
                        <td><div>×1</div></td>
                        <td><div>¥200.00</div></td>
                        <td>
                          <div>
                          <div class="gray">未支付</div>
                          <a>订单详情</a>
                          </div>
                        </td>
                        <td>
                          <div class="unpaid"><a onclick="pay_order(this)" data-set="201909275765a4d781">立即付款</a><a onclick="cancle_order(this)" data-set="201909275765a4d781">取消订单</a></div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import PersonalCenterNav from '@/components/PersonalCenterNav.vue';
import { ticketLists } from '@/utils/mockdata';
export default {
  name: 'MyOrder',
  components: { PersonalCenterNav },
  data() {
    return {
      ticketLists: [],
      MockData: {},
    };
  },
  created() {
    this.ticketLists = ticketLists;
    console.log(this.ticketLists);
  },
  methods: {
    toTicketDetails(item) {
      console.log(item);
      this.$router.push({
        path: `MyTicket/${item.id}`,
        query: item,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#MyOrder {
height: 100%;
background-color: $g_background;
.container {
    padding-bottom: 6em;
    background: $g_background;
    .inner {
    height: 100%;
    width: $g_width;
    margin: auto;
    padding: 1em;
    background: #fff;
    border-radius: 4px;
    .personalCenter {
        margin-top: 4em;
        display: flex;
        .personalCenter_right {
          background: #fff;
          width: 1000px;
          border: 1px solid #ddd;
          text-align: center;
          padding:20px;
          h2 {
            text-align: left;
            font-size: 20px;
            font-weight: 500;
            border-bottom: 1px  solid #ddd;
            line-height: 30px;
            margin-bottom: 10px;
            padding-bottom: 10px;
            }
            .first_floor, .first_floor tr{width: 100%;}
            .first_floor tr td div,.first_floor tr th div{
              width: 100px;
            }
            .second_floor,.second_floor tr{width: 100%;}
            .second_floor tr td div,.second_floor tr th div{
              width: 100px;
            }
        }
        .personalCenter_left {
          width: 260px;
          background: #fff;
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
    &:nth-child(2) {
    padding-top: 6em;
    }
}
}
</style>
