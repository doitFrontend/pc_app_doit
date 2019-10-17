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
  <ul class="table-ul clearfix" style="position: relative;">
    <Spin size="large" fix v-if="spinShow"></Spin>
    <li v-for="(item, i) in sublist" :key="i">
      <table class="table2">
        <thead>
          <tr>
            <th colspan="8">
              <dl class="clearfix">
                <dt class="pull-left">订单号：<span>{{item[0].orderMainId}}</span></dt>
                <dd class="pull-left">下单日期：<span>{{item[0].createTime}}</span>
                </dd>
              </dl>
            </th>
            </tr>
        </thead>
        <tbody id="201909275765a4d781">
          <tr v-for="(item2, j) in item" :key="j">
            <td class="w150 b-r-1">
              <h3 v-if="item2.orderChildProductType=='ticket'">票</h3>
              <h3 v-if="item2.orderChildProductType=='card'">卡</h3>
              <h3 v-if="item2.orderChildProductType=='field'">场地</h3>
              <h3 v-if="item2.orderChildProductType=='course'">课程</h3>
            </td>
            <td class="w200">
              <div  v-if="item2.fieldType1">
                <h3  v-if="item2.fieldType1">{{item2.fieldType1.fieldTypeName}}</h3>
                <p class="gray"  v-if="item2.fieldType1">时段：{{item2.fieldStartTime}}~ {{item2.fieldEndTime}}</p>
              </div>
              <div v-if="item2.cardType1">
                <h3>{{item2.cardType1.cardTypeName}}</h3>
                <p class="gray" v-if="JSON.parse(item2.cardType1.rcode).有效期">有效期：{{JSON.parse(item2.cardType1.rcode).有效期 }}</p>
                <P v-else>有效期：长期有效</P>
              </div>
              <div v-if="item2.ticketType1">
                <h3>{{item2.ticketType1.ticketTypeName}}</h3>
                <p class="gray"  v-if="JSON.parse(item2.ticketType1.rcode).有效期">有效期：{{JSON.parse(item2.ticketType1.rcode).有效期 }}</p>
                <P v-else>有效期：1天</P>
              </div>
              <p class="gray" style="margin-bottom:10px;">商家：大连理工体育馆</p>
            </td>
            <td class="w100"><span>¥{{item2.orderChildProductPrice}}</span></td>
            <td class="w150 b-r-1">
              <div>¥{{item2.orderChildProductNum}}×1</div>
            </td>
            <td class="w100 b-r-1"  v-if="j === 0" :rowspan="item.length" >
              <div>¥{{myOrderLists[i].orderMainSumPrice}}</div>
            </td>
            <td class="w100 b-r-1"  v-if="j === 0" :rowspan="item.length">
              <div class="gray" v-if="myOrderLists[i].orderMainPayStatus=='SUCCESS'">已付</div>
              <div class="gray" v-if="myOrderLists[i].orderMainPayStatus=='REFUND'">已退</div>
              <div class="gray" v-if="myOrderLists[i].orderMainPayStatus=='PARTREFUND'">部分已退</div>
              <div class="gray" v-if="myOrderLists[i].orderMainPayStatus=='NOTPAY'">未支付</div>
              <div class="gray" v-if="myOrderLists[i].orderMainPayStatus=='CLOSED'">已关闭</div>
              <div class="gray" v-if="myOrderLists[i].orderMainPayStatus=='USERPAYING'">支付中</div>
              <div class="gray" v-if="myOrderLists[i].orderMainPayStatus=='REVOKED'">已撤销</div>
              <div class="gray" v-if="myOrderLists[i].orderMainPayStatus=='NOPAY'">未支付支付超时</div>
              <div class="gray" v-if="myOrderLists[i].orderMainPayStatus=='cancel'">取消支付</div>
              <a  @click="toOrderDetails(myOrderLists[i])" >订单详情</a>
            </td>
            <td class="w100 b-r-1"  v-if="j === 0" :rowspan="item.length">
              <div class="unpaid">
              <a onclick="pay_order(this)" v-if="myOrderLists[i].orderMainPayStatus=='NOTPAY'" class="unpaid-a">立即付款</a>
              <a @click="toCancleOrder(myOrderLists[i].orderMainId)" style="color:rgba(68,68,68,1);">取消订单</a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </li>
  </ul>
  <div class="pull-right" style="float:right;margin-top:20px;">
    <template>
      <Page :total="total" show-elevator show-total :current="currentPage" @on-change="handleChangeNum" />
    </template>
  </div>
</div>
</template>
<script>
export default {
  name: 'MyOrder',
  components: { },
  data() {
    return {
      myOrderLists: [],
      sublist: [],
      total: 0,
      currentPage: 1,
      pageSize: 10,
      spinShow: true,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    handleChangeNum(currentPage) {
      this.spinShow = true;
      this.currentPage = currentPage;
      this.getData();
    },
    getData() {
      this.getMyOrderLists();
      setTimeout(() => {
        this.sublist.sort(this.sortByTime);
        this.spinShow = false;
      }, 500);
    },
    sortByTime(a, b) {
      if (a[0].createTime < b[0].createTime) {
        return 1;
      }
      if (a[0].createTime > b[0].createTime) {
        return -1;
      }
      return 0;
    },
    // 获取票卡所有的类别
    getMyOrderLists() {
      this.sublist = [];
      let data = {
        orgId: 'c4f67f3177d111e986f98cec4bb1848c',
        memberId: '2014011166',
        pageIndex: this.pageSize * (this.currentPage - 1),
        // sortorder: 'desc',
      };
      this.$axios({
        method: 'POST',
        url: 'listApiOrderMain.do',
        data: data,
      }).then(res => {
        if (res.data.code === 200) {
          this.myOrderLists = res.data.rows;
          this.total = res.data.total;
          return this.myOrderLists;
        } else {
          this.$Message.warning(res.code);
        }
      }).then(myOrderLists => {
        myOrderLists.forEach(item => {
          this.getsublist(item.orderMainId);
        });
      }).catch(error => {
        console.log(error);
      });
    },
    getsublist(id) {
      let data2 = {
        orgId: 'c4f67f3177d111e986f98cec4bb1848c',
        operator_id: '2014011166',
        orderMainId: id,
      };
      this.$axios({
        method: 'POST',
        url: 'selectChildListByMainId.do',
        data: data2,
      }).then(res => {
        if (res.data.code === 200) {
          this.sublist.push(res.data.data);
        } else {
          this.$Message.warning(res.code);
        }
      }).catch(error => {
        console.log(error);
      });
    },
    toOrderDetails(item) {
      this.$router.push({
        path: `MyOrder/${item.id}`,
        query: item,
      });
    },
    toCancleOrder(orderMainId) {
      let data3 = {
        orgId: 'c4f67f3177d111e986f98cec4bb1848c',
        orderMainId: orderMainId,
      };
      this.$axios({
        method: 'POST',
        url: 'cancleOrderMain.do',
        data: data3,
      }).then(res => {
        if (res.data.code === 200) {
        } else {
          this.$Message.warning(res.code);
        }
      }).catch(error => {
        console.log(error);
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
    .w200 {width: 300px;text-align: left;padding-left: 20px;}
    .table-ul{
      border-bottom: 1px solid #ddd;
      dl{
      height: 40px;
      background: rgba(242,244,245,1);
      line-height: 40px;
      font-size: 14px;
      font-weight: 400;
      width: 948px;
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
        a{display: block;margin-top: 10px;color:rgba(0,161,233,1);}
        .unpaid{
          text-align: center;
          a:last-child{color:rgba(0,161,233,1);}
          .unpaid-a{
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
