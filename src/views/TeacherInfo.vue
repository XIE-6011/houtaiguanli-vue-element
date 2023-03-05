<template>
  <div class="questioninfo-container">
    <h1>教师信息</h1>
    <el-table :data="questionData" height="500" border style="width: 100%">
      <el-table-column type="selection" width="50"> </el-table-column>
      <el-table-column prop="teacher_id" label="ID" width="50"> </el-table-column>
      <el-table-column prop="power" label="权限" width="70" sortable> </el-table-column>
      <el-table-column prop="teacher_name" label="教师名" width="180"> </el-table-column>
      <el-table-column prop="teacher_account" label="账户名" width="180"> </el-table-column>
      <el-table-column prop="teacher_email" label="邮件" width="180"> </el-table-column>
      <el-table-column prop="teacher_pwd" width="180"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="140">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// 导入数据请求
import { getteacher } from '../api/userAPI.js'
export default {
  data() {
    return {
      questionData: []
    }
  },
  methods: {
    async gette() {
      // 调用 axios 的 get 方法，请求列表数据
      const { data: res } = await getteacher()
      // 只要请求回来的数据，在页面渲染期间要用到，则必须转存到 data 中
      if (res.status !== 0) {
        return alert('获取数据失败')
      }

      this.questionData = res.data
      console.log(this.questionData)
    }
  },
  created() {
    this.gette()
  }
}
</script>

<style scoped>
.questioninfo-container {
  text-align: center;
}
h1,
div {
  margin: 0;
  padding: 0;
}
</style>
