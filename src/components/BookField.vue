<template>
  <div id="BookField">
    <div style="display: none;">{{fieldCart}}</div>
    <div class="fieldType">
      <Row>
        <Col :sm="4" :md="4" :lg="4"  class="leibie">
          <div class="label">场地类别 <span>|</span></div>
        </Col>
        <Col :sm="20" :md="20" :lg="20"  class="leibie2">
          <RadioGroup v-model="default_button" type="button" @on-change="changeField">
            <Radio v-for="(item, i) in fieldTypeList" :key="i" :label="`${item.sportItem}-${item.fieldId}`">{{item.sportItem}}</Radio>
          </RadioGroup>
        </Col>
      </Row>
    </div>
    <Divider />
    <div style="display: flex;padding-left:25px;font-size:14px;line-height:24px;">
      <div  style="width: 100px">预约日期：</div><DatePicker type="date" placeholder="选择日期" style="width: 200px" v-model="currentDate" @on-change="changeTime"></DatePicker>
        <div class="signs">
          <!-- *图例说明：#acce22-上课专属场地-88 lightblue-可选场地-0 已预订场地 已过期 -->
          <div><span style="color: #f76900;">*</span>&nbsp;图例说明：</div>
          <div><span></span>可选场地</div>
          <div><span></span>已选场地</div>
          <div><span></span>已预订场地</div>
          <div><span></span>已过时段</div>
          <!-- <div><span></span>上课专属</div> -->
        </div>
    </div>
    <div v-if="!fieldTypeList.length" style="text-align: center;line-height:100px;">暂无数据</div>
    <div v-else class="table">
      <div class="line" ref="line"></div>
      <div class="container">
        <div class="content time" v-for="(item, i) in timeLineList" :key="i">{{item.time}}</div>
      </div>
      <template>
        <div v-for="(item, index) in tableFieldData" :key="index" class="container">
          <div class="title">{{item.place}}</div>
          <div v-for="(itemIn, indexIn) in item.data" :key="indexIn" class="content"
          :style="{'background': (itemIn.status === 2 || itemIn.status === 88) ? '#ff9000': itemIn.status === 100 ? '#bebebe' : itemIn.status === 0 ? '#fff': '#00a1e9',
          'cursor': (itemIn.status === 0 || itemIn.status === 1) ? 'pointer' : 'not-allowed',
          'color': (itemIn.status === 1) ? '#fff' : ''}"
          @click="handleCellClick($event, item, itemIn)">
            <Tooltip placement="top" :delay="500">
              ￥{{Number(itemIn.money).toFixed(2)}}
              <div slot="content">
                <p>{{itemIn.status}}</p>
                <p>{{itemIn.time}}</p>
              </div>
            </Tooltip>
          </div>
        </div>
      </template>
    </div>
    <div style="height:1px;"></div>
  </div>
</template>
<script>
import moment from 'moment';
moment.locale('zh-cn'); // 局部设置moment语言
export default {
  name: 'BookField',
  props: {
    orgId: {
      type: String,
    },
  },
  data() {
    return {
      tableFieldData: [],
      column: [
        {
          title: 'place',
          key: 'place',
        },
        {
          title: 'test',
          key: 'test',
        },
      ],
      line_timer: null,
      fieldTypeList: [],
      default_button: '',
      timeLineList: [],
      currentDate: new Date(),
    };
  },
  computed: {
    fieldCart() { // TODO: 必须触发场地?
      this.getFieldTypes();
      return this.$store.state.shoppingCartObj.fieldCart;
    },
  },
  created() {
    this.getFieldTypes();
  },
  mounted() {
    // 每60s调用一次
    this.line_timer = setInterval(() => {
      console.log('open timer...');
      this.draw_line();
    }, 1000 * 60);
  },
  beforeDestroy() {
    console.log('close timer...');
    this.line_timer && clearInterval(this.line_timer);
  },
  methods: {
    changeTime(newDate) {
      if (newDate) {
        let arr = this.default_button.split('-');
        let id = arr[arr.length - 1];
        this.getFieldTableData(id, newDate);
      }
    },
    changeField(temp) {
      let arr = temp.split('-');
      let id = arr[arr.length - 1];
      this.getFieldTableData(id);
    },
    getFieldTableData(id, date = this.currentDate) {
      let data = {
        fieldSaleId: id,
        operator_id: '2014011166',
        operator_role: 'admin',
        orgId: this.orgId,
        today: moment(date).format('YYYY-MM-DD'),
        week: moment(date).format('dddd'),
      };
      this.$axios({
        method: 'POST',
        url: 'fieldSale/listFieldSale.do',
        data: data,
      }).then(res => {
        if (res.data.code === 200) {
          if (res.data.data.length) {
            this.tableFieldData = res.data.data;
            this.tableFieldData.forEach(element => {
              element.data.forEach(elementIn => {
                elementIn.setCustomTimeMe = moment(date).format('YYYY-MM-DD'); // 给每张票加上日期属性，提供购物车使用
              });
            });
            this.timeLineList = res.data.data[0].data;
            this.disableFieldCell();
          } else {
            // todo 无数据页面展示
          }
        } else {
          this.$Message.warning(res.code);
        }
      }).then(() => {
        this.reRenderData(); // 渲染购物车的已选场地
        this.draw_line();
      }).catch(error => {
        console.log(error);
      });
    },
    // 过期场地置灰要把有状态的排除在外
    // 除了比较时间还要比较日期
    disableFieldCell() {
      let now = moment().format('HH:mm');
      moment(this.currentDate).format('YYYY-MM-DD');
      if (moment(this.currentDate).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')) {
        this.tableFieldData.forEach(item => {
          item.data.forEach(itemIn => {
            if (this.formatDate(itemIn.time.split('-')[1]) <= this.formatDate(now) && (itemIn.status !== 88 && itemIn.status !== 2)) {
              itemIn.status = 100;
            }
          });
        });
      } else if (moment(this.currentDate).format('YYYY-MM-DD') < moment().format('YYYY-MM-DD')) {
        this.tableFieldData.forEach(item => {
          item.data.forEach(itemIn => {
            if (itemIn.status !== 88 && itemIn.status !== 2) {
              itemIn.status = 100;
            }
          });
        });
      }
    },
    draw_line() {
      console.log(moment().format('HH:mm'));
      this.disableFieldCell();
      if (this.tableFieldData.length) {
        const SINGAL_CELL_HEIGHT = 45; // 表格单元格的高度 + margin的高度，与下面样式同时修改
        const SINGAL_CELL_WIDTH = 101; // 表格单元格的宽度，与下面样式同时修改
        // 场地开始时间，结束时间
        let startTime = this.tableFieldData[0].data[0].time.split('-')[0];
        let endTime = this.tableFieldData[0].data[this.tableFieldData[0].data.length - 1].time.split('-')[1];
        let total_count = this.tableFieldData[0].data.length;
        // 现在时间
        let now = moment().format('HH:mm');
        // 总分钟数-已过分钟数
        let total_mins = parseInt(endTime.split(':')[0]) * 60 + parseInt(endTime.split(':')[1]) - (parseInt(startTime.split(':')[0]) * 60 + parseInt(startTime.split(':')[1]));
        let past_mins = parseInt(now.split(':')[0]) * 60 + parseInt(now.split(':')[1]) - (parseInt(startTime.split(':')[0]) * 60 + parseInt(startTime.split(':')[1]));
        // 计算高度
        // 1320 / 40 * 22 = 1173 / x
        let line_top = (total_count * SINGAL_CELL_HEIGHT * past_mins / total_mins).toFixed(2);
        this.$refs['line'].style.top = `${50 + parseFloat(line_top)}px`; // 表头的高度 需要同时改变
        this.$refs['line'].style.borderTop = '1px solid red';
        this.$refs['line'].style.width = `${SINGAL_CELL_WIDTH * (this.tableFieldData.length + 1)}px`;
        // 结束的红线停止在表格底部
        if (now >= this.formatDate(endTime)) {
          this.$refs['line'].style.top = `${50 + (SINGAL_CELL_HEIGHT * this.tableFieldData[0].data.length)}px`; // 时间结束
        } else if (now < this.formatDate(startTime)) {
          this.$refs['line'].style.top = `50px`; // 时间未开始
        }
      }
    },
    /**
     * 根据状态判断是否可以点击
     * 0-可预定
     * 1-预定
     * 2-已经预定
     * 88-上课
     */
    handleCellClick(event, item, itemIn) {
      let fData = { ...itemIn, place: item.place };
      if (itemIn.status !== 0 && itemIn.status !== 1) {
        event.preventDefault();
      } else {
        if (itemIn.status) {
          itemIn.status = 0;
          this.$store.commit('delField', fData);
        } else {
          itemIn.status = 1;
          this.$store.commit('addField', fData);
        }
      }
    },
    // 获取所有场地
    getFieldTypes() {
      let data = {
        operator_id: '2014011166',
        operator_role: 'admin',
        orgId: this.orgId,
        fieldSaleStatus: 1,
      };
      this.$axios({
        method: 'POST',
        url: 'fieldSale/listApiFieldSaleNew1.do',
        data: data,
      }).then(res => {
        if (res.data.code === 200) {
          this.fieldTypeList = res.data.rows;
          let temp = null;
          if (this.fieldTypeList.length) {
            this.default_button = `${this.fieldTypeList[0].sportItem}-${this.fieldTypeList[0].fieldId}`;
            temp = this.default_button;
          }
          return temp;
        } else {
          this.$Message.warning(res.code);
        }
      }).then((temp) => {
        temp && this.changeField(temp);
      }).catch(error => {
        console.log(error);
      });
    },
    // 给购物车里的场地重新渲染
    reRenderData() {
      let fieldCart = this.$store.state.shoppingCartObj.fieldCart;
      if (moment(this.currentDate).format('YYYY-MM-DD') >= moment().format('YYYY-MM-DD') && fieldCart.length) {
        let newFieldCart = fieldCart.filter(item => item.setCustomTimeMe === moment(this.currentDate).format('YYYY-MM-DD'));
        newFieldCart.forEach(newFItem => {
          this.tableFieldData.forEach(tFItem => {
            if (tFItem.place === newFItem.place) {
              tFItem.data.forEach(tFItemIn => {
                if (tFItemIn.time === newFItem.time) {
                  tFItemIn.status = 1;
                }
              });
            }
          });
        });
      }
    },
    // 给时间字符串添加加0 '1:00'->'01:00'
    formatDate(dateStr) {
      let dateStrArr = dateStr.split(':');
      let tempArr = dateStrArr.map(element => {
        if (element.length <= 1) {
          element = `0${element}`;
        }
        return element;
      });
      return tempArr.join(':');
    },
  }
};
</script>
<style lang="scss" scoped>
  $border: 1px solid #fff;
  #BookField {
    position: relative;
    height: 100%;
    .fieldType {
      .label {
        text-align: center;
        font-size: 16px;
        line-height: 24px;
        padding-top: 5px;
        letter-spacing:2px;
        span{padding-left: 10px;padding-right: 15px}
      }
    }
    .signs {
      width: 100%;
      height: 30px;
      padding: 0 25px;
      text-align: right;
      display: inline-block;
      & > div{
        padding-left: 10px;display: inline-block;
        span{
          display: inline-block;
          width: 16px;
          height: 16px;
          border-radius: 4px;
          margin-right: 5px;
          position: relative;
          top: 2px;
      }
      &:nth-child(2) span{
          background: #fff;
          border: 1px solid #d6d6d6;
      }
      &:nth-child(3) span{
        background: rgb(0, 161, 233);
      }
      &:nth-child(4) span{
        background: #ffad30;
      }
      &:nth-child(5) span{
        background: rgb(190, 190, 190);
      }
      &:nth-child(6) span{
        background:rgba(172,206,34,1);
      }
        // justify-content: center;
        align-items: center;
      }
    }
    .table {
      margin: 25px;
      width:-webkit-calc(100% - 50px);
      width:-moz-calc(100% - 50px);
      width:calc(100% - 50px);
      white-space: nowrap; // 重要 设置水平滚动
      overflow-x: auto;
      overflow-y: hidden;
      position: relative;
      background: #EDF1F2;
      border-radius: 8px;
      .line {
        border-top: 1px solid red;
        position: absolute;
        // left: 0;
      }
      .container {
        display: inline-block;
        width: 100px;
        color: #333;
        font-size: 14px;
        .title {
          padding-top: 5px;
          height: 50px;
          text-align: center;
          line-height: 50px;
        }
        .content {
          height: 40px; // 单元格高度。修改的时候，上面计算公式也需要修改
          width: 96px;
          text-align: center;
          line-height: 40px;
          border-radius: 10px;
          margin: 5px;
          &:hover {
            cursor: pointer;
            background: #ff6600;
          }
          .ivu-tooltip { // tooltip和单元格大小相等C
            width: inherit;
            height: inherit;
            div > p {
              white-space: normal;
            }
          }
        }
        .time {
          &:hover {
            background: $g_default_color;
            color: #fff;
          }
        }
      }
    }
    .ivu-table .demo-table-info-cell-name {
      background-color: #2db7f5;
      color: #fff;
    }
    .ivu-table .demo-table-info-cell-age {
      background-color: #ff6600;
      color: #fff;
    }
    .ivu-table .demo-table-info-cell-address {
      background-color: #187;
      color: #fff;
    }
  }
</style>
