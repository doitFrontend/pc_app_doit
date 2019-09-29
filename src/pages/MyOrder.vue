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
            <table>
              <thead>
                <tr>
                  <th><div class="w150">商品类型</div></th>
                  <th><div  class="w200">订单信息</div></th>
                  <th><div class="w100">单价</div></th>
                  <th><div class="w100">金额</div></th>
                  <th><div class="w100">支付金额</div></th>
                  <th><div class="w100">订单状态</div></th>
                  <th><div class="w150">操作</div></th>
                </tr>
              </thead>
            </table>
            <ul class="table-ul clearfix">
              <li>
                <table class="table2">
                  <thead>
                    <tr>
                      <th colspan="8">
                        <dl class="clearfix">
                          <dt class="pull-left">订单号：<span>201909275765a4d781</span></dt>
                          <dd class="pull-left">下单日期：<span>2019-09-27 17:00:40</span>
                          </dd>
                        </dl>
                      </th>
                      </tr>
                  </thead>
                  <tbody id="201909275765a4d781">
                    <tr>
                      <td class="w150 b-r-1">场地</td>
                      <td class="w200">
                        <h3 style="font-size: 14px;font-weight: bold;">台球-预定（非家属）</h3>
                        <p class="gray">时段：2019-09-27 17:00:00~ 2019-09-27 18:00:00</p>
                        <p class="gray">商家：大连理工体育馆</p>
                      </td>
                      <td class="w100"><span>¥100.00</span></td>
                      <td class="w100 b-r-1">
                        <div>¥100.00×1</div>
                      </td>
                      <td class="w100 b-r-1" rowspan="4">
                        <div>¥0.00</div>
                      </td>
                      <td class="w100 b-r-1" rowspan="4">
                        <div class="gray">未支付</div>
                        <a onclick="order_detail(this)" data-name=" 大连理工体育馆 " data-status=" 未支付 ">订单详情</a>
                      </td>
                      <td class="w150" rowspan="4">
                        <div class="unpaid">
                        <a onclick="pay_order(this)" data-set="201909275765a4d781">立即付款</a>
                        <a onclick="cancle_order(this)" data-set="201909275765a4d781">取消订单</a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="w150 b-r-1">场地</td>
                      <td class="w200">
                        <h3 style="font-size: 14px;font-weight: bold;">台球-预定（非家属）</h3>
                        <p class="gray">时段：2019-09-27 17:00:00~ 2019-09-27 18:00:00</p>
                        <p class="gray">商家：大连理工体育馆</p></td>
                      <td class="w100"><span>¥100.00</span></td>
                      <td class="w100 b-r-1"><div>¥100.00×1</div></td>
                    </tr>
                    <tr>
                      <td class="w150 b-r-1">场地</td>
                      <td class="w200">
                        <h3 style="font-size: 14px;font-weight: bold;">台球-预定（非家属）</h3>
                        <p class="gray">时段：2019-09-27 17:00:00~ 2019-09-27 18:00:00</p>
                        <p class="gray">商家：大连理工体育馆</p>
                      </td>
                      <td class="w100"><span>¥100.00</span></td>
                      <td class="w100 b-r-1"><div>¥100.00×1</div></td>
                    </tr>
                    <tr>
                      <td class="w150 b-r-1">场地</td>
                      <td class="w200">
                        <h3 style="font-size: 14px;font-weight: bold;">台球-预定（非家属）</h3>
                        <p class="gray">时段：2019-09-27 17:00:00~ 2019-09-27 18:00:00</p>
                        <p class="gray">商家：大连理工体育馆</p>
                      </td>
                      <td class="w100"><span>¥100.00</span></td>
                      <td class="w100 b-r-1">
                        <div>¥100.00×1</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>
                <table class="table2">
                  <thead>
                    <tr>
                      <th colspan="8">
                        <dl class="clearfix">
                          <dt class="pull-left">订单号：<span>201909272322a6fb02</span></dt>
                          <dd class="pull-left">下单日期：<span>2019-09-27 17:00:06</span></dd>
                        </dl>
                        </th>
                    </tr>
                  </thead>
                  <tbody id="201909272322a6fb02">
                    <tr>
                      <td class="w150 b-r-1">场地</td>
                      <td class="w200">
                        <h3 style="font-size: 14px;font-weight: bold;">台球-预定（非家属）</h3>
                        <p class="gray">时段：2019-09-27 18:00:00~ 2019-09-27 22:00:00</p>
                        <p class="gray">商家：大连理工体育馆</p>
                      </td>
                      <td class="w100"><span>¥400.0</span></td>
                      <td class="w100 b-r-1"><div>¥400.0×1</div></td>
                      <td class="w100 b-r-1" rowspan="1"><div>¥0.00</div></td>
                      <td class="w100 b-r-1" rowspan="1">
                        <div class="gray">未支付</div>
                        <a onclick="order_detail(this)" data-name=" 大连理工体育馆 " data-status=" 未支付 " >订单详情</a></td>
                        <td class="w150" rowspan="1">
                          <div class="unpaid"><a onclick="pay_order(this)" data-set="201909272322a6fb02">立即付款</a>
                          <a onclick="cancle_order(this)" data-set="201909272322a6fb02">取消订单</a>
                          </div>
                        </td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
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
            table tr {
              width: 916px;
            th{
              line-height: 36px;
              font-size: 14px;
            }
            }
            .w150 {width: 125px;}
            .w100 {width: 100px;}
            .w200 {width: 300px;}
            .table-ul dl, .table-ul dt, .table-ul dd {
              height: 42px;
              background: #f2f9ff;
              line-height: 42px;
              font-size: 12px;
              }
              .pull-left{float: left;padding-left: 20px}
            ul li{
              list-style: none;
            border-top: 1px solid #ddd;
            }
            .b-r-1{border-right: 1px solid #ddd; }
            .table2 tbody tr {
              border-top: 1px solid #ddd;
              margin-bottom: 10px;
              color: #1a1a1a;
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
