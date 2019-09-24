<template>
  <div id="mapid"></div>
</template>
<script>
export default {
  mounted() {
    this.createMap();
  },
  methods: {
    createMap() {},
  },
};
</script>
<style lang="scss" scoped>
  #mapid {
    width: 1000px;
    height: 700px;
  }
</style>
