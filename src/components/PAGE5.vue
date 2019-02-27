<template>
  <div class="page">
    <el-container style="height:100%">
      <el-tabs style="margin-left: 10px" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户权限管理" name="first">

        </el-tab-pane>
        <el-tab-pane label="培训课件审核" name="second">
          <el-table border
                    ref="multipleTable"
                    :data="tableData1"
                    tooltip-effect="dark"
                    style="width: 100%">
            <el-table-column
              label="课件编号"
              width="120">
              <template slot-scope="scope">{{ scope.row[1] }}</template>
            </el-table-column>
            <el-table-column
              prop="2"
              label="课件名称"
              width="120">
            </el-table-column>
            <el-table-column
              prop="3"
              label="课件类型"
              width="120">
            </el-table-column>
            <el-table-column
              prop="4"
              label="课件大小"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="5"
              label="上传时间"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="6"
              label="负责人"
              width="120">
            </el-table-column>
            <el-table-column
              type="selection"
              label="通过"
              width="55">
            </el-table-column>
          </el-table>
          <span style="display: flex;height: 30px;margin: 30px 0">
            <el-button type="primary">通过</el-button>
            <el-button type="primary">取消</el-button>
          </span>
        </el-tab-pane>
        <el-tab-pane label="培训计划发布" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="学员总评" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "page5",
    data() {
      return {
        activeName: 'second',
        tableData1: [
          {
            1: "001",
            2: "泌尿外科理论",
            3: "ppt",
            4: "3.5M",
            5: '2019-02-05',
            6: "张天",
          }, {
            1: "002",
            2: "护士基本礼仪",
            3: "ppt",
            4: "1.5M",
            5: '2019-02-05',
            6: "李志",
          }, {
            1: "003",
            2: "泌尿外科实操",
            3: "ppt",
            4: "3.2M",
            5: '2019-02-05',
            6: "王林",
          }, {
            1: "004",
            2: "泌尿外科病症",
            3: "ppt",
            4: "2.1M",
            5: '2019-02-05',
            6: "刘默",
          }]
      }
    }
  }
</script>

<style scoped>

</style>
