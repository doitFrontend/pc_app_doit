<template>
<div id="personalCenterNav">
    <ul>
      <router-link to='/MyOrder'><li>我的订单</li></router-link>
      <router-link to='/MyTicket'><li>我的票</li></router-link>
      <router-link to='/MyCard'><li>我的卡</li></router-link>
      <router-link to='/MyReserve'><li>我的场地</li></router-link>
    </ul>
</div>
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
      h2 {
        width: 100%;
      }
      ul {
        list-style:none;
        li {
          padding: 0.2em 0;
          line-height:24px;
          font-size: 16px;
          color:  #515a6e;
        }
      }
</style>
