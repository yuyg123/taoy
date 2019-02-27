<template>
  <el-carousel class="index-content" :interval="5000" arrow="always">
    <el-carousel-item class="index1"></el-carousel-item>
    <el-carousel-item class="index2"></el-carousel-item>
    <el-carousel-item class="index3"></el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .index-content {
    height: 100%;
  }

  .index1 {
    background-image: url(../assets/index1.jpg);
    background-repeat:no-repeat;
    background-size:100% 100%;
    -moz-background-size:100% 100%;
    height:100%;
  }

  .index2 {
    background-image: url(../assets/index2.jpg);
    background-repeat:no-repeat;
    background-size:100% 100%;
    -moz-background-size:100% 100%;
    height:100%;
  }

  .index3 {
    background-image: url(../assets/index3.jpg);
    background-repeat:no-repeat;
    background-size:100% 100%;
    -moz-background-size:100% 80%;
  }
  .el-carousel__container{
    height:100%;
  }
</style>
