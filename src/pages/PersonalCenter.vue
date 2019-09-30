<template>
<div id="personalCenter">
      <div class="container">
      <div class="inner">
        <div class="personalCenter">
          <div class="personalCenter_left">
            <div class="personal_information">
              <div class="personal_photo"></div>
              <div class="personal_name">一条寻水的鱼</div>
            </div>
            <template>
              <Menu :theme="theme3" active-name="1">
                <MenuGroup title="">
              <router-link to='MyOrder'>
                <MenuItem name="1">
                我的订单
                </MenuItem>
              </router-link>
              <router-link to='MyTicket'>
                <MenuItem name="2">
                我的票
                </MenuItem>
              </router-link>
              <router-link to='MyCard'>
                <MenuItem name="3">
                我的卡
                </MenuItem>
              </router-link>
              <router-link to='MyReserve'>
                <MenuItem name="4">
                我的场地
                </MenuItem>
              </router-link>
              </MenuGroup>
              </Menu>
          </template>
          </div>
          <div class="personalCenter_right">
            <router-view></router-view>
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
  name: 'MyTicket',
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
#personalCenter {
height: 100%;
background-color: $g_background;
.container {
    padding-bottom: 6em;
    background: $g_background;
    .inner {
    height: 100%;
    width: $g_width;
    margin: auto;
    padding: 1em 0;
    background: #f7f7f7;
    border-radius: 4px;
    .personalCenter {
        display: flex;
        min-height: 600px;
        .personalCenter_right {
          background: #fff;
          width: 1000px;
          border: 1px solid #ddd;
          text-align: center;
          padding:20px;
          margin-left: 20px;
        }
        .personalCenter_left {
          width: 200px;
          background: #fff;
          /deep/ .ivu-menu-vertical .ivu-menu-item-group-title{height: 10px !important;}
          /deep/ .ivu-menu-vertical{width: 200px !important;}
          /deep/ .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):after {left: 0;}
          .personal_information{
            margin-top: 30px;
            text-align: center;
            .personal_photo{
            width: 60px;
            height: 60px;
            border-radius: 50px;
            background-color: #f3f3f3;
            margin: 0 auto;
            }
            .personal_name{
              font-size: 14px;
              line-height: 40px;
            }
          }
          h2 {
            width: 100%;
          }
          ul {
            a{
              color: #515a6e;
              li {
                padding: 10px 30px;
                font-size: 16px;
              }
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
