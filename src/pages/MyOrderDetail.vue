<template>
<div id="MyOrderDetail">
  <h2 id="org_name">订单详情</h2>
  <div class="ticket_detail">
    <div class="order_state">
      <div class="order_state_l">
        <div>当前状态</div>
        <h3 class="color_progress"> 未付款 </h3>
      </div>
      <div class="order_state_r">
        <template>
          <Steps :current="1">
            <Step title="已完成" content="提交订单"></Step>
            <Step title="进行中" content="买家付款"></Step>
            <Step title="待进行" content="付款成功"></Step>
            </Steps>
            </template>
        </div>
    </div>
    <div class="order_information">
      <h4>订单信息</h4>
        <Row>
          <Col span="8">
            <ul>
              <li><em>订单编号：</em><span>20191008346209301e</span></li>
              <li><em>下单时间：</em><span>2019-10-08 16:17:00</span></li>
              <li><em>支付状态：</em><span>未支付</span></li>
            </ul>
          </Col>
          <Col span="8">
            <ul>
              <li><em>商品总额：</em><span>0.01</span></li>
              <li><em>支付金额：</em><span style="color: #fd683d;">¥0.01</span></li>
              <li><em>支付方式：</em><span>CASHPAY</span></li>
            </ul>
          </Col>
          <Col span="8">
          </Col>
        </Row>
    </div>
    <div class="good_information">
      <h4>商品信息</h4>
      <!-- <table class="table2">
        <thead>
          <tr>
            <th>商品类型</th>
            <th>商品信息</th>
            <th>单价</th>
            <th>数量</th>
            <th>金额</th>
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
      </table> -->
      <template>
    <Table border :columns="columns7" :data="data6"></Table>
</template>
    </div>
  </div>
</div>
</template>
<script>
import PersonalCenterNav from '@/components/PersonalCenterNav.vue';
export default {
  name: 'MyOrderDetail',
  components: { PersonalCenterNav },
  data() {
    return {
      timer: null,
      columns7: [
        {
          title: '商品类型',
          key: 'orderChildProductType',
          width: 200,
          align: 'center',
        },
        {
          title: '商品信息',
          // key: 'age',
          render: (h, params) => {
            let strEndTime = '有效期：';
            let strOrgName = '商家：';
            // return h('div', {}, str);
            return h('div', [
              h('h3', {
              }, params.row.Name),
              h('span', {
                style: {
                  color: '#999',
                }
              }, strEndTime + params.row.EndTime),
              h('p', {
                style: {
                  color: '#999',
                }
              }, strOrgName + params.row.orgName),
            ]);
          },
          width: 400,
        },
        {
          title: '单价',
          key: 'orderChildProductPrice',
          align: 'center',
        },
        {
          title: '数量',
          align: 'center',
          key: 'orderChildProductNum',
        },
        {
          title: '金额',
          key: 'orderChildProductPrice',
          align: 'center',
        },
      ],
      data6: [
        {
          orderChildProductType: '场地',
          orderChildProductPrice: 18,
          orderChildProductNum: 1,
          orgName: 'New York No. 1 Lake Park',
          Name: '台球-预定',
          EndTime: '2016-10-03',
        },
        {
          orderChildProductType: '票',
          orderChildProductPrice: 24,
          orderChildProductNum: 1,
          orgName: 'London No. 1 Lake ParkLondon No. 1 Lake Park',
          Name: '篮球篇',
          EndTime: '2016-10-01'
        },
        {
          orderChildProductType: '卡',
          orderChildProductPrice: 30,
          orderChildProductNum: 1,
          orgName: 'Sydney No. 1 Lake Park',
          Name: '季卡',
          EndTime: '2016-10-02'
        },
        {
          orderChildProductType: '卡',
          orderChildProductPrice: 26,
          orderChildProductNum: 1,
          orgName: 'Ottawa No. 2 Lake Park',
          Name: '年卡',
          EndTime: '2016-10-04'
        },
      ],
    };
  },
  created() {
    // let d = document.getElementById('canvas');
    // console.log(d);
  },
  mounted() {
    let d = document.getElementById('canvas');
    console.log(d);
  },
  destroyed() {
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: 'User Info',
        content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
      });
    },
    remove(index) {
      this.data6.splice(index, 1);
    },
  },
};
</script>
<style lang="scss" scoped>
#MyOrderDetail {
height: 100%;
background-color: #fff;
font-size: 14px;
word-break:break-all;
font-family:Microsoft YaHei;
  h2 {
        text-align: left;
        font-size: 16px;
        font-weight: 500;
        border-bottom: 1px  solid #ddd;
        line-height: 30px;
        margin-bottom: 10px;
        padding-bottom: 10px;
        font-weight: bold;
        }
      .ticket_detail{
        margin-top: 30px;
        text-align: left;
        line-height: 40px;
        h4{
          font-size: 14px;
          line-height: 40px;
          margin: 10px;
          }
        .order_state{
          display: flex;
          .order_state_l{
            width: 200px;
            border-right: 1px solid #bbbbbb;
            text-align: center;
            color: #1a1a1a;
            h3{color: #1bbb99;}
          }
          .order_state_r{
            margin-top: 20px;
            margin-left: 60px;
            width: 800px;
          }
        }
        .order_information{
          ul{
            list-style:none;
            line-height: 32px;
            em{font-style: normal;}
          }
        }
        .good_information{
          line-height: 24px;
          & /deep/.ivu-table-wrapper{
            margin-top: 20px;
            & /deep/.ivu-table{
              font-weight: normal;
              font-size: 14px;
              h3{font-size: 14px;font-weight: normal;}
              tr td{padding: 10px 0;}
              th{
                background: #f2f4f5;
                color: #999;
                text-align: center;
              }
          }
          }
        }
      }
}
</style>
