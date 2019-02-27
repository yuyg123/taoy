<template>
  <div class="page">
    <el-container style="height:100%;padding-left: 10px">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="资料管理" name="first">
          <el-upload
            class="upload-demo"
            ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          </el-upload>
          <el-table border
                    ref="multipleTable"
                    :data="tableData3"
                    tooltip-effect="dark"
                    style="width: 100%">
            <el-table-column
              label="资料名称"
              width="240">
              <template slot-scope="scope">{{ scope.row[1] }}</template>
            </el-table-column>
            <el-table-column
              prop="2"
              label="所属分类"
              width="120">
            </el-table-column>
            <el-table-column
              prop="3"
              width="240"
              label="文件说明"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="4"
              label="文件大小"
              width="120"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="5"
              label="上传人员"
              width="120"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="6"
              label="上传时间"
              width="120"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="100">
              <template slot-scope="scope">
                <el-button type="text" size="small">下载</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="资料分类管理" name="second">配置管理</el-tab-pane>
      </el-tabs>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "page2",
    data() {
      return {
        activeName: 'first',
        fileList: [],
        tableData3: [
          {
            1: '护士培训手册',
            2: '教育',
            3: '全面地介绍了护士的概念',
            4: '0.5M',
            5: '李峰',
            6: '2016-03-05',
          }, {
            1: '病理学基础',
            2: '教育',
            3: '适合中职学生的知识水平和生理、心理特点，可供中专、中职护理专业及医学技术类相关专业使用。',
            4: '1.2M',
            5: '洪东来',
            6: '2015-02-05',
          }, {
            1: '解剖学图普',
            2: '教育',
            3: '首次用数字人技术构建出与人体经络走行一致的影像结构，进一步从形态结构上验证了筋膜与经络的密切关系，同时根据发育生物学基础提出人体解剖学新的分科方法一筋膜解剖学。',
            4: '27M',
            5: '李峰',
            6: '2018-08-05',
          }, {
            1: '三基护士分册',
            2: '教育',
            3: '对适合医院分级管理要求的内容全部保留，并增加了部分新的内容',
            4: '3.2M',
            5: '李峰',
            6: '2013-03-05',
          }, {
            1: '护理操作基本流程',
            2: '教育',
            3: '本书以简明的操作流程详细阐述了基础护理和专科护理的工作方法，着眼于实际运用、临床实践，充分体现了基础护理及专科护理的发展趋势，并把“质量、安全、服务、费用”的工作方针贯穿其中，为临床护理工作提供明确指引，充分体现了护理工作的科学化、规范化、标准化，以及护理服务的专业化、人性化，对保障护理安全、保证护理质量起到了良好的指导作用',
            4: '0.5M',
            5: '李峰',
            6: '2016-03-05',
          }],
      };
    },
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>

<style scoped>
  .upload-demo {
    display: flex;
    margin-bottom: 10px;
  }

</style>
