<template>
  <div id="app" style="height:100%">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="rgba(49, 106, 167, 1)"
      text-color="#fff"

      active-text-color="#ffd04b">
      <el-menu-item class="index-title" index="0">泌尿外科实习护士培训管理系统</el-menu-item>
      <el-menu-item index="1">用户信息管理</el-menu-item>
      <el-menu-item index="2">培训资源管理</el-menu-item>
      <el-menu-item index="3">培训考核</el-menu-item>
      <el-menu-item index="4">在线交流</el-menu-item>
      <el-menu-item index="5">后台管理</el-menu-item>
      <span class="fa fa-user-circle fa-lg user-manage"></span>
    </el-menu>
    <el-breadcrumb style="padding: 10px;background-color: #ebeef5;" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-if="activeKey=='1'">用户信息管理</el-breadcrumb-item>
      <el-breadcrumb-item v-if="activeKey=='2'">培训资源管理</el-breadcrumb-item>
      <el-breadcrumb-item v-if="activeKey=='3'">培训考核</el-breadcrumb-item>
      <el-breadcrumb-item v-if="activeKey=='4'">在线交流</el-breadcrumb-item>
      <el-breadcrumb-item v-if="activeKey=='5'">后台管理</el-breadcrumb-item>
    </el-breadcrumb>
    <router-view style="height: calc(100% - 100px);"/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {},
    data() {
      return {
        activeIndex: '0',
        activeKey: '0',
        pageKey: {
          '0': '/',
          '1': '/page1',
          '2': '/page2',
          '3': '/page3',
          '4': '/page4',
          '5': '/page5',
        }
      };
    },
    methods: {
      handleSelect(key) {
        this.activeKey = key;
        this.$router.push({path: this.pageKey[key]});
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }


  .index-title {
    display: flex;
    background-color: rgba(49, 106, 167, 1);
    left: 0px;
    height: 60px;
    width: 350px;
    line-height: 60px;
    font-size: 22px;
  }

  .user-manage {
    color: white;
    position: absolute;
    right: 20px;
    top: 20px;
  }
</style>
