<template>
  <div>
      <Button v-if="hasPermission('sys:role:add')" type="info">Info</Button>
      <Button type="success">Success</Button>
      <Button type="warning">Warning</Button>
      <Button type="error">Error</Button>
      <Table border :columns="columns1" :data="data1"></Table>
      <router-link to="foo">Foo</router-link>
      <router-link to="bar">Bar</router-link>
      <router-view></router-view>
      <div>动态路由匹配--{{ $route.params }}</div>
      <span style="color: red;" v-text="msg"></span>
      <div class="img">
        <div class="e"></div>
        <div class="r"></div>
        <div class="i"></div>
        <div class="c"></div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
      ],
      msg: Date(),
    };
  },
  created() {
    console.log(this);
    console.log(Date());
    console.log(this.$route.params);
    this.msg = Date() + 'c';
    this.atest();
  },
  // watch: {
  //   '$route'(to, from) {
  //     this.msg = Date();
  //   }
  // },
  beforeRouteUpdate(to, from, next) {
    this.msg = Date() + 'd';
    next();
  },
  methods: {
    atest() {
      console.log(this);
    },
  },
};
</script>
<style lang="scss" scoped>
  .router-link-active {
    color: red;
  }
  .img {
    display: flex;
    & > div {
      width: 120px;
      height: 120px;
      background: url('../assets/az.png');
    }
    .e {
      background-position: -470px 0;
    }
    .r {
      background-position: -130px -410px;
    }
    .i {
      width: 60px;
      background-position: -326px -130px;
    }
    .c {
      background-position: -230px 0;
    }
  }
</style>
