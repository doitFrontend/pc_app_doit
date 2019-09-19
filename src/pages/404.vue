<template>
  <div>
    <h1>该模块暂未开放</h1>
      <div @click="$router.go(-1)">
        《返回前一页面
      </div>
  </div>
</template>
<script>
export default {
  created() {
    console.log(this);
  },
};
</script>
