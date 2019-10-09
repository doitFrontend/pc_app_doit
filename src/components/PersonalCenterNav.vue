<template>
    <Menu :theme="theme3" active-name="1">
        <MenuGroup title="个人中心">
              <router-link to='/PersonalCenter/MyOrder'>
                <MenuItem name="1">
                  <Icon type="md-document" />
                我的订单
                </MenuItem>
              </router-link>
              <router-link to='/PersonalCenter/MyTicket'>
                <MenuItem name="2">
                <Icon type="md-chatbubbles" />
                我的票
                </MenuItem>
              </router-link>
              <router-link to='/PersonalCenter/MyCard'>
                <MenuItem name="3">
                <Icon type="md-chatbubbles" />
                我的卡
                </MenuItem>
              </router-link>
              <router-link to='/PersonalCenter/MyReserve'>
                <MenuItem name="4">
                <Icon type="md-chatbubbles" />
                我的场地
                </MenuItem>
              </router-link>
        </MenuGroup>
    </Menu>
</template>
<script>
export default {
  name: 'personalCenterNav',
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
  },
};
</script>
<style lang="scss" scoped>
  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):after {left: 0;}
  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu){background: #f0faff}
  .ivu-menu-vertical .ivu-menu-item-group-title {font-size: 18px !important;font-weight: 700}
  a{color: #515a6e;}
</style>
