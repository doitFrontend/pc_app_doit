<template>
  <div id="BookField">
    <div class="fieldType">场地类别：
      <RadioGroup v-model="default_button" type="button">
        <!-- <Radio label="所有"></Radio> -->
        <Radio v-for="(item, i) in fieldTypeList" :key="i" :label="item.sportItem"></Radio>
      </RadioGroup>
    </div>
    <div class="signs">
      <!-- *图例说明：#acce22-上课专属场地-88 lightblue-可选场地-0 已预订场地 已过期 -->
      *图例说明：
      <div></div>上课专属场地
      <div></div>可选场地
      <div></div>已预订场地
    </div>
    <div class="container">
      <div class="content time" v-for="(item, i) in timeLineList" :key="i">{{item.time}}</div>
    </div>
    <template>
      <div v-for="(item, index) in tableFieldData" :key="index" class="container">
        <div class="title">{{item.place}}</div>
        <div v-for="(itemIn, indexIn) in item.data" :key="indexIn" class="content"
        :style="{'background': itemIn.status === 0 ? 'lightblue' : itemIn.status === 2 ? '#ff9000': itemIn.status === 88 ? '#acce22': 'red',
        'cursor': itemIn.status === 0 ? 'pointer' : 'not-allowed'}"
        :class="content_style" @click.stop="handleCellClick($event, itemIn)">
          <Tooltip placement="top" :delay="500">
            {{itemIn.money}}
            <div slot="content">
              <p>{{itemIn.status}}</p>
              <p>{{itemIn.time}}</p>
            </div>
          </Tooltip>
        </div>
      </div>
      <div class="line" ref="line"></div>
    </template>
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
      isActive: false, // 选中样式
      line_timer: null,
      fieldTypeList: [],
      default_button: '',
      timeLineList: [],
    };
  },
  computed: {
    content_style: function() {
      return {
        active: this.isActive,
      };
    },
    // timeLineList: function() {
    //   return this.tableFieldData[0].data || [];
    // }
  },
  created() {
    this.getFieldTableData();
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
    getFieldTableData() {
      let data = {
        fieldSaleId: '3d67c980cb9111e984598866394de9ee',
        operator_id: '2014011166',
        operator_role: 'admin',
        orgId: 'c4f67f3177d111e986f98cec4bb1848c',
        today: moment().format('YYYY-MM-DD'),
        week: moment().format('dddd'),
      };
      console.log(data);
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
        const SINGAL_CELL_HEIGHT = 40; // 表格单元格的高度
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
        this.$refs['line'].style.top = `${130 + parseFloat(line_top)}px`;
        this.$refs['line'].style.borderTop = '1px solid red';
      }
    },
    /**
     * 根据状态判断是否可以点击
     * 0-空
     * 2-已经预定
     * 88-上课
     */
    handleCellClick(event, itemIn) {
      if (parseInt(itemIn.status)) {
        event.preventDefault();
        return;
      }
      event.target.classList.toggle('active');
      console.log(event);
      console.log(event.target);
      this.isActive = !this.isActive;
    },
    // 获取所有场地
    getFieldTypes() {
      let data = {
        operator_id: 'c4fb984777d111e986f98cec4bb1848c',
        operator_role: 'admin',
        orgId: 'c4f67f3177d111e986f98cec4bb1848c',
        fieldSaleStatus: 1,
      };
      this.$axios({
        method: 'POST',
        url: 'fieldSale/listApiFieldSaleNew1.do',
        data: data,
      }).then(res => {
        if (res.data.code === 200) {
          this.fieldTypeList = res.data.rows;
          this.default_button = this.fieldTypeList[0].sportItem;
        } else {
          this.$Message.warning(res.code);
        }
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
    width: 1200px;
    position: relative;
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
        height: 40px;
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
    .line {
      border-top: 1px solid #fff;
      position: absolute;
      top: 130px;
      width: 100%;
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
  .active {
    background: $g_default_color !important;
  }
</style>
