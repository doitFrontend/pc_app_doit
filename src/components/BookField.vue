<template>
  <div id="BookField">
    <div class="fieldType">场地类别：
      <RadioGroup v-model="default_button" type="button" @on-change="changeField">
        <Radio v-for="(item, i) in fieldTypeList" :key="i" :label="`${item.sportItem}-${item.fieldId}`">{{item.sportItem}}</Radio>
      </RadioGroup>
      <DatePicker type="date" placeholder="选择日期" style="width: 200px" v-model="date" @click="changeTime"></DatePicker>
    </div>
    <div class="signs">
      <!-- *图例说明：#acce22-上课专属场地-88 lightblue-可选场地-0 已预订场地 已过期 -->
      *图例说明：
      <div></div>上课专属场地
      <div></div>可选场地
      <div></div>已预订场地
    </div>
    <div class="table">
      <div class="line" ref="line"></div>
      <div class="container">
        <div class="content time" v-for="(item, i) in timeLineList" :key="i">{{item.time}}</div>
      </div>
      <template>
        <div v-for="(item, index) in tableFieldData" :key="index" class="container">
          <div class="title">{{item.place}}</div>
          <div v-for="(itemIn, indexIn) in item.data" :key="indexIn" class="content"
          :style="{'background': itemIn.status === 0 ? 'lightblue' : itemIn.status === 2 ? '#ff9000': itemIn.status === 88 ? '#acce22': '#00a1e9',
          'cursor': (itemIn.status === 0 || itemIn.status === 1) ? 'pointer' : 'not-allowed'}"
          @click="handleCellClick($event, item, itemIn)">
            <Tooltip placement="top" :delay="500">
              {{itemIn.money}}
              <div slot="content">
                <p>{{itemIn.status}}</p>
                <p>{{itemIn.time}}</p>
              </div>
            </Tooltip>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
moment.locale('zh-cn'); // 局部设置moment语言
export default {
  name: 'BookField',
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
      date: '',
    };
  },
  computed: {},
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
    changeTime(currentDate) { // TODO: 根据时间切换场地
      console.log(currentDate);
    },
    changeField(temp) {
      let arr = temp.split('-');
      let id = arr[arr.length - 1];
      this.getFieldTableData(id);
    },
    getFieldTableData(id) {
      let data = {
        fieldSaleId: id,
        operator_id: '9b778c8c1ee711e98e8c000c2983e74a',
        operator_role: 'admin',
        orgId: '123456',
        today: moment().format('YYYY-MM-DD'),
        week: moment().format('dddd'),
      };
      this.$axios({
        method: 'POST',
        url: 'fieldSale/listFieldSale.do',
        data: data,
      }).then(res => {
        if (res.data.code === 200) {
          if (res.data.data.length) {
            this.tableFieldData = res.data.data;
            this.timeLineList = res.data.data[0].data;
          } else {
            // todo 无数据页面展示
          }
        } else {
          this.$Message.warning(res.code);
        }
      }).then(() => {
        this.draw_line();
      }).catch(error => {
        console.log(error);
      });
    },
    draw_line() {
      console.log(moment().format('HH:mm'));
      if (this.tableFieldData.length) {
        const SINGAL_CELL_HEIGHT = 40; // 表格单元格的高度，与下面样式同时修改
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
        this.$refs['line'].style.top = `${80 + parseFloat(line_top)}px`; // 表头的高度 需要同时改变
        this.$refs['line'].style.borderTop = '1px solid red';
        this.$refs['line'].style.width = `${SINGAL_CELL_WIDTH * (this.tableFieldData.length + 1)}px`;
        // 结束的红线停止在表格底部
        if (now >= endTime) {
          this.$refs['line'].style.top = `${80 + (SINGAL_CELL_HEIGHT * this.tableFieldData[0].data.length)}px`; // 时间结束
        } else if (now <= startTime) {
          this.$refs['line'].style.top = `80px`; // 时间未开始
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
      if (itemIn.status !== 0 && itemIn.status !== 1) {
        event.preventDefault();
      } else {
        if (itemIn.status) { // TODO: 添加到购物车
          itemIn.status = 0;
        } else {
          itemIn.status = 1;
        }
      }
    },
    // 获取所有场地
    getFieldTypes() {
      let data = {
        operator_id: '"9b778c8c1ee711e98e8c000c2983e74a"',
        operator_role: 'admin',
        orgId: '123456',
        fieldSaleStatus: 1,
      };
      this.$axios({
        method: 'POST',
        url: 'fieldSale/listApiFieldSaleNew1.do',
        data: data,
      }).then(res => {
        if (res.data.code === 200) {
          this.fieldTypeList = res.data.rows;
          this.default_button = `${this.fieldTypeList[0].sportItem}-${this.fieldTypeList[0].fieldId}`;
          let temp = this.default_button;
          return temp;
        } else {
          this.$Message.warning(res.code);
        }
      }).then((temp) => {
        this.changeField(temp);
      }).catch(error => {
        console.log(error);
      });
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
      padding: 0 0 1em 1em;
    }
    .signs {
      width: 100%;
      height: 50px;
      padding: 0 0 1em 1em;
      & > div {
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 4px;
        // justify-content: center;
        align-items: center;
        &:nth-child(1) {
          background: #acce22;
        }
        &:nth-child(2) {
          background: lightblue;
        }
        &:nth-child(3) {
          background: #ffad30;
        }
      }
    }
    .table {
      padding: 0 2em 2em 2em;
      width: 100%;
      white-space: nowrap; // 重要 设置水平滚动
      overflow-x: auto;
      overflow-y: hidden;
      position: relative;
      &:hover {
        background: #e8eaec;
        border-radius: 8px;
      }
      .line {
        border-top: 1px solid red;
        position: absolute;
        // left: 0;
      }
      .container {
        border: $border;
        display: inline-block;
        width: 100px;
        color: #fff;
        .title {
          height: 80px;
          background: $g_default_color;
          font-weight: 600;
          font-size: 16px;
          text-align: center;
          line-height: 80px;
        }
        .content {
          height: 40px; // 单元格高度。修改的时候，上面计算公式也需要修改
          width: (100px - 2px);
          border-top: $border;
          font-weight: 600;
          font-size: 16px;
          text-align: center;
          line-height: 40px;
          &:hover {
            cursor: pointer;
            background: #ff6600;
          }
          .ivu-tooltip { // tooltip和单元格大小相等
            width: inherit;
            height: inherit;
            div > p {
              white-space: normal;
            }
          }
        }
        .time {
          background: $g_default_color;
          &:hover {
            background: $g_default_color;
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

