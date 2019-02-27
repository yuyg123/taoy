<template>
  <div class="page">
    <el-container style="height:100%">
      <el-tabs style="margin-left: 10px" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="学员选课管理" name="first">
          <el-table border
                    ref="multipleTable"
                    :data="tableData1"
                    tooltip-effect="dark"
                    style="width: 100%">
            <el-table-column
              label="课程名称"
              width="120">
              <template slot-scope="scope">{{ scope.row[1] }}</template>
            </el-table-column>
            <el-table-column
              prop="2"
              label="培训导师"
              width="120">
            </el-table-column>
            <el-table-column
              prop="3"
              label="培训时间"
              width="120">
            </el-table-column>
            <el-table-column
              prop="4"
              label="培训地点"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="5"
              label="已选人数"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="6"
              label="学分"
              width="120">
            </el-table-column>
            <el-table-column
              prop="7"
              label="学时"
              width="120">
            </el-table-column>
            <el-table-column
              prop="8"
              label="修学学期"
              width="120">
            </el-table-column>
            <el-table-column
              prop="9"
              label="修学年份"
              width="120">
            </el-table-column>
            <el-table-column
              type="selection"
              label="选课"
              width="55">
            </el-table-column>
          </el-table>
          <el-button style="display: flex;" type="primary">保存</el-button>
        </el-tab-pane>
        <el-tab-pane label="培训考勤" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="在线考试" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="老师考评" name="fourth">定时任务补偿</el-tab-pane>
        <el-tab-pane label="成绩查询" name="five">
          <el-table border
                    ref="multipleTable"
                    :data="tableData2"
                    tooltip-effect="dark"
                    style="width: 100%">
            <el-table-column
              label="课程名称"
              width="120">
              <template slot-scope="scope">{{ scope.row[1] }}</template>
            </el-table-column>
            <el-table-column
              prop="2"
              label="培训导师"
              width="120">
            </el-table-column>
            <el-table-column
              prop="6"
              label="学分"
              width="120">
            </el-table-column>
            <el-table-column
              prop="7"
              label="学时"
              width="120">
            </el-table-column>
            <el-table-column
              prop="8"
              label="修学学期"
              width="120">
            </el-table-column>
            <el-table-column
              prop="9"
              label="修学年份"
              width="120">
            </el-table-column>
            <el-table-column
              prop="10"
              label="成绩"
              width="120">
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "page3",
    data() {
      return {
        activeName: 'first',
        tableData1: [
          {
            1: "泌尿外科理论",
            2: "张天",
            3: "每周一上午",
            4: "301会议室",
            5: 123,
            6: 2,
            7: 18,
            8: '春',
            9: 2019
          }, {
            1: "护士基本礼仪",
            2: "李志",
            3: "每周二上午",
            4: "301会议室",
            5: 123,
            6: 2,
            7: 18,
            8: '春',
            9: 2019
          }, {
            1: "泌尿外科实操",
            2: "张天",
            3: "每周一下午",
            4: "301会议室",
            5: 123,
            6: 2,
            7: 18,
            8: '春',
            9: 2019
          }, {
            1: "泌尿外科病症",
            2: "张天",
            3: "每周二下午",
            4: "301会议室",
            5: 123,
            6: 2,
            7: 18,
            8: '春',
            9: 2019
          }],
        tableData2: [{
          1: "泌尿外科理论",
          2: "张天",
          6: 2,
          7: 18,
          8: '春',
          9: 2019,
          10:34
        }, {
          1: "护士基本礼仪",
          2: "李志",
          6: 2,
          7: 18,
          8: '春',
          9: 2019,
          10:87
        }, {
          1: "泌尿外科实操",
          2: "张天",
          6: 2,
          7: 18,
          8: '春',
          9: 2019,
          10:79
        }, {
          1: "泌尿外科病症",
          2: "张天",
          6: 2,
          7: 18,
          8: '春',
          9: 2019,
          10:91
        }]
      }
    }
  }
</script>

<style scoped>

</style>
