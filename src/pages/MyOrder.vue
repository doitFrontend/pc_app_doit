<template>
<div id="MyOrder">
  <h2 id="org_name">我的订单</h2>
  <table style="background:rgba(243,243,243,1);margin-bottom:20px;">
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
            <td class="w150 b-r-1"> <h3>场地</h3></td>
            <td class="w200">
              <h3>台球-预定（非家属）</h3>
              <p class="gray">时段：2019-09-27 17:00:00~ 2019-09-27 18:00:00</p>
              <p class="gray">商家：大连理工体育馆</p>
            </td>
            <td class="w100"><span>¥100.00</span></td>
            <td class="w150 b-r-1">
              <div>¥100.00×1</div>
            </td>
            <td class="w100 b-r-1" rowspan="4">
              <div>¥0.00</div>
            </td>
            <td class="w100 b-r-1" rowspan="4">
              <div class="gray">未支付</div>
              <a onclick="order_detail(this)" data-name=" 大连理工体育馆 " data-status=" 未支付 " @click="toMyOrderDetails(item)">订单详情</a>
            </td>
            <td class="w100 b-r-1" rowspan="4">
              <div class="unpaid">
              <a onclick="pay_order(this)" data-set="201909275765a4d781" style="">立即付款</a>
              <a onclick="cancle_order(this)" data-set="201909275765a4d781" style="color:rgba(68,68,68,1);">取消订单</a>
              </div>
            </td>
          </tr>
          <tr>
            <td class="w150 b-r-1"><h3>场地</h3></td>
            <td class="w200">
              <h3>台球-预定（非家属）</h3>
              <p class="gray">时段：2019-09-27 17:00:00~ 2019-09-27 18:00:00</p>
              <p class="gray">商家：大连理工体育馆</p></td>
            <td class="w100"><span>¥100.00</span></td>
            <td class="w150 b-r-1"><div>¥100.00×1</div></td>
          </tr>
          <tr>
            <td class="w150 b-r-1"><h3>场地</h3></td>
            <td class="w200">
              <h3>台球-预定（非家属）</h3>
              <p class="gray">时段：2019-09-27 17:00:00~ 2019-09-27 18:00:00</p>
              <p class="gray">商家：大连理工体育馆</p>
            </td>
            <td class="w100"><span>¥100.00</span></td>
            <td class="w150 b-r-1"><div>¥100.00×1</div></td>
          </tr>
          <tr>
            <td class="w150 b-r-1"><h3>场地</h3></td>
            <td class="w200">
              <h3>台球-预定（非家属）</h3>
              <p class="gray">时段：2019-09-27 17:00:00~ 2019-09-27 18:00:00</p>
              <p class="gray">商家：大连理工体育馆</p>
            </td>
            <td class="w100"><span>¥100.00</span></td>
            <td class="w150 b-r-1">
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
            <td class="w150 b-r-1"><h3>场地</h3></td>
            <td class="w200">
              <h3>台球-预定（非家属）</h3>
              <p class="gray">时段：2019-09-27 18:00:00~ 2019-09-27 22:00:00</p>
              <p class="gray">商家：大连理工体育馆</p>
            </td>
            <td class="w100"><span>¥400.0</span></td>
            <td class="w150 b-r-1"><div>¥400.0×1</div></td>
            <td class="w100 b-r-1" rowspan="1"><div>¥0.00</div></td>
            <td class="w100 b-r-1" rowspan="1">
              <div class="gray">未支付</div>
              <a onclick="order_detail(this)" data-name=" 大连理工体育馆 " data-status=" 未支付 " @click="toMyOrderDetails(item)">订单详情</a></td>
              <td class="w100 b-r-1" rowspan="1">
                <div class="unpaid">
                  <a onclick="pay_order(this)" data-set="201909272322a6fb02">立即付款</a>
                  <a onclick="cancle_order(this)" data-set="201909272322a6fb02" style="color:rgba(68,68,68,1);">取消订单</a>
                </div>
              </td>
          </tr>
        </tbody>
      </table>
    </li>
  </ul>
  <div class="pull-right" style="float:right;margin-top:20px;">
    <template>
      <Page :total="1000"  show-elevator />
    </template>
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
        path: `MyOrder/${item.id}`,
        query: item,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#MyOrder {
height: 100%;
background-color: #fff;
font-family:Microsoft YaHei;
  h2 {
    text-align: left;
    font-size: 18px;
    font-weight: 500;
    border-bottom: 1px  solid #ddd;
    line-height: 30px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    font-weight: bold;
  }
  table {border-collapse:collapse;}
    table tr {
      width: 916px;
      th{
        line-height: 50px;
        font-size: 14px;
        font-weight: 400;

      }
      h3{
        margin-top:10px;
        font-size: 14px;
        font-weight: normal;
        color:rgba(51,51,51,1);
        font-family: MicrosoftYaHei;
        letter-spacing: 1px;
        font-size:14px;
        }
    }
    .w150 {width: 125px;}
    .w100 {width: 100px;}
    .w200 {width: 300px;}
    .table-ul{
      border-bottom: 1px solid #ddd;
      dl{
      height: 40px;
      background: rgba(242,244,245,1);
      line-height: 40px;
      font-size: 14px;
      font-weight: 400;
      dt,dd {
        float: left;padding-left: 20px
      }
    }
    li{
      list-style: none;
      font-size: 14px;
      color:rgba(153,153,153,1);
      .table2{
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
      tr th{border-top: 1px solid #ddd;}
      tbody tr {
      border-top: 1px solid #ddd;
      margin-bottom: 10px;
      line-height: 24px;
      height: 24px;
      color:rgba(68,68,68,1);
      .gray {
        color: #999999;
        }
      p:last-child{
        margin-bottom: 10px;
        }
        a{display: block;margin-top: 10px;color:rgba(0,161,233,1);}
        .unpaid{
          text-align: center;
          a:last-child{color:rgba(0,161,233,1);}
          a:first-child{
            display:block;
            width:78px;
            height:26px;
            background:rgba(0,161,233,1);
            border-radius:4px;
            color:rgba(255,255,255,1);
            margin: auto;
            }

        }
      }
      }

    }
    }
    .b-r-1{border-right: 1px solid #ddd;}
    ul.pagination {
      display: inline-block;
      padding: 0;
      margin: 0;
      li {
        display: inline;
        border: none;
        ul.pagination li a {
          color: black;
          float: left;
          padding: 8px 16px;
          border: none;
          text-decoration: none;
          }
        }
      }
}
</style>
