<template>
  <div class="page">
    <el-container style="height:100%">

      <el-header class='yg-header' height="30px" style="display: flex;padding: 10px;">
        <span style="display: flex;height: 30px;margin-right: 30px">
          <el-button type="primary">新建</el-button>
          <el-button type="primary">修改</el-button>
          <el-button type="primary">删除</el-button>
          <el-button type="primary">查询</el-button>
        </span>
        <span class="yg-title">姓名</span>
        <el-input class="yg-input" v-model="input" placeholder="请输入内容"></el-input>
        <span class="yg-title">身份证号</span>
        <el-input class="yg-input" v-model="input" placeholder="请输入内容"></el-input>
        <span class="yg-title">证件编号</span>
        <el-input class="yg-input" v-model="input" placeholder="请输入内容"></el-input>
        <span class="yg-title">地址</span>
        <el-select class="yg-input" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-header>
      <el-main>

        <el-table border
                  ref="multipleTable"
                  :data="tableData3"
                  tooltip-effect="dark"
                  style="width: 100%">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="姓名"
            width="120">
            <template slot-scope="scope">{{ scope.row[1] }}</template>
          </el-table-column>
          <el-table-column
            prop="2"
            label="性别"
            width="120">
          </el-table-column>
          <el-table-column
            prop="3"
            label="出生日期"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="4"
            label="联系电话"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="5"
            label="证件编号"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="6"
            label="行业"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="7"
            label="所在单位"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="8"
            label="所在地"
            show-overflow-tooltip>
          </el-table-column>
        </el-table>
      </el-main>
      <el-footer>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="17">
          </el-pagination>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "page1",
    data() {
      return {
        tableData3: [
          {
            1: '张米',
            2: '男',
            3: '1992-03-05',
            4: '13674574545',
            5: '01120344',
            6: '商业',
            7: "北京120救护中心",
            8: '北京'
          }, {
            1: '李峰',
            2: '男',
            3: '1992-03-05',
            4: '13674574545',
            5: '01020441',
            6: '教育',
            7: "北京省教育中心",
            8: '北京'
          }, {
            1: '洪东来',
            2: '男',
            3: '1994-01-05',
            4: '13674574545',
            5: '01020344',
            6: '医疗',
            7: "上海人民医院",
            8: '上海'
          }, {

            1: '齐思思',
            2: '女',
            3: '1992-03-05',
            4: '13674574545',
            5: '01020344',
            6: '商业',
            7: "北京120救护中心",
            8: '北京'
          }, {
            1: '李子',
            2: '女',
            3: '1982-03-05',
            4: '13674574345',
            5: '01020344',
            6: '商业',
            7: "北京120救护中心",
            8: '北京'
          }, {
            1: '洪东来',
            2: '男',
            3: '1994-01-05',
            4: '13674574545',
            5: '01020344',
            6: '医疗',
            7: "上海人民医院",
            8: '上海'
          }, {

            1: '齐思思',
            2: '女',
            3: '1992-03-05',
            4: '13674574545',
            5: '01020344',
            6: '商业',
            7: "北京120救护中心",
            8: '北京'
          }, {
            1: '洪东来',
            2: '男',
            3: '1994-01-05',
            4: '13674574545',
            5: '01020344',
            6: '医疗',
            7: "上海人民医院",
            8: '上海'
          }, {

            1: '齐思思',
            2: '女',
            3: '1992-03-05',
            4: '13674574545',
            5: '01020344',
            6: '商业',
            7: "北京120救护中心",
            8: '北京'
          }, {
            1: '洪东来',
            2: '男',
            3: '1994-01-05',
            4: '13674574545',
            5: '01020344',
            6: '医疗',
            7: "上海人民医院",
            8: '上海'
          }, {

            1: '齐思思',
            2: '女',
            3: '1992-03-05',
            4: '13674574545',
            5: '01020344',
            6: '商业',
            7: "北京120救护中心",
            8: '北京'
          }, {
            1: '洪东来',
            2: '男',
            3: '1994-01-05',
            4: '13674574545',
            5: '01020344',
            6: '医疗',
            7: "上海人民医院",
            8: '上海'
          }, {

            1: '齐思思',
            2: '女',
            3: '1992-03-05',
            4: '13674574545',
            5: '01020344',
            6: '商业',
            7: "北京120救护中心",
            8: '北京'
          }, {
            1: '洪东来',
            2: '男',
            3: '1994-01-05',
            4: '13674574545',
            5: '01020344',
            6: '医疗',
            7: "上海人民医院",
            8: '上海'
          }, {

            1: '齐思思',
            2: '女',
            3: '1992-03-05',
            4: '13674574545',
            5: '01020344',
            6: '商业',
            7: "北京120救护中心",
            8: '北京'
          }, {
            1: '洪东来',
            2: '男',
            3: '1994-01-05',
            4: '13674574545',
            5: '01020344',
            6: '医疗',
            7: "上海人民医院",
            8: '上海'
          }, {

            1: '齐思思',
            2: '女',
            3: '1992-03-05',
            4: '13674574545',
            5: '01020344',
            6: '商业',
            7: "北京120救护中心",
            8: '北京'
          }],
        currentPage4: '1'
      }
    },
  }
</script>

<style scoped>
  .yg-title {
    font-size: 14px;
    vertical-align: middle;
    line-height: 30px;
  }

  .yg-input {
    width: 160px;
    margin-left: 10px;
    margin-right: 20px;
  }
</style>
