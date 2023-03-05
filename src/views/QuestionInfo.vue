<template>
  <div class="questioninfo-container">
    <h1>题目信息</h1>
    <div class="search">
      <el-button type="primary" @click="dialogFormVisible = true">添加题目</el-button>
      <div class="searc">
        <el-input style="width: 300px; margin-right: 50px" v-model="input.question_id" placeholder="请输入内容"></el-input>
        <el-button type="primary" @click="inqu">查询</el-button>
        <el-button type="primary" @click="getqu">查看全部</el-button>
      </div>
    </div>
    <el-table @row-click="allinfo" :data="questionData.slice((currentPage - 1) * pageSize, currentPage * pageSize)" height="500" border style="width: 100%; margin-top: 10px">
      <el-table-column type="selection" width="50"> </el-table-column>
      <el-table-column prop="question_course" label="课程" width="50"> </el-table-column>
      <el-table-column prop="question_id" label="ID" width="70" sortable> </el-table-column>
      <el-table-column prop="question_name" label="题目信息" width="180"> </el-table-column>
      <el-table-column prop="question_opa" label="选项A" width="170"> </el-table-column>
      <el-table-column prop="question_opb" label="选项B" width="170"> </el-table-column>
      <el-table-column prop="question_opc" label="选项C" width="170"> </el-table-column>
      <el-table-column prop="question_opd" label="选项D" width="170"> </el-table-column>
      <el-table-column prop="question_opright" label="正确选项" width="50"> </el-table-column>
      <el-table-column prop="question_type" label="类别" width="50"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="140">
        <!-- eslint-disable-next-line -->
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="dialogFormVisible = true">查看</el-button>
          <el-button type="text" size="small" @click="dialogFormVisible = true">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination" style="text-align: center">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[5, 10, 15, 20, 25]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="questionData.length"> </el-pagination>
    </div>
    <!-- // 添加题目弹出层 -->
    <el-dialog width="30%" title="添加题目" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="id">
          <el-input v-model="form.question_id" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="课程">
          <el-input v-model="form.question_course" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="题目信息">
          <el-input v-model="form.question_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="选项b">
          <el-input v-model="form.question_opa" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="选项c">
          <el-input v-model="form.question_opb" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="选项d">
          <el-input v-model="form.question_opc" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="正确">
          <el-input v-model="form.question_opd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="题目类型">
          <el-select v-model="form.question_type" placeholder="请选择活动区域">
            <el-option label="选择" value="x"></el-option>
            <el-option label="填空" value="y"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addqu">添加题目</el-button>
        <el-button type="primary" @click="upqu">修改题目</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// 导入数据请求
import { getquestion, addquestion, inquestion, upquestion } from '../api/userAPI.js'
export default {
  data() {
    return {
      questionData: [],
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 5, // 每页的数据条数
      input: { question_id: '' },
      dialogFormVisible: false,
      form: {
        question_id: '',
        question_course: '',
        question_name: '',
        question_opa: '',
        question_opb: '',
        question_opc: '',
        question_opd: '',
        question_opright: '',
        question_type: ''
      }
    }
  },
  methods: {
    async getqu() {
      // 调用 axios 的 get 方法，请求列表数据
      const { data: res } = await getquestion()
      // 只要请求回来的数据，在页面渲染期间要用到，则必须转存到 data 中
      if (res.status !== 0) {
        return alert('获取数据失败')
      }

      this.questionData = res.data
    },
    async addqu() {
      // 调用 axios 的 get 方法，请求列表数据
      const { data: res } = await addquestion(this.form)
      // 只要请求回来的数据，在页面渲染期间要用到，则必须转存到 data 中
      if (res.status !== 0) {
        return alert('添加数据失败')
      }
      this.dialogFormVisible = false
      this.getqu()
    },
    async inqu() {
      // 调用 axios 的 get 方法，请求列表数据
      const { data: res } = await inquestion(this.input)
      // 只要请求回来的数据，在页面渲染期间要用到，则必须转存到 data 中
      if (res.status !== 0) {
        return alert('查询数据失败')
      }
      this.questionData = res.data
    },
    async upqu() {
      // 调用 axios 的 get 方法，请求列表数据
      const { data: res } = await upquestion(this.form)
      // 只要请求回来的数据，在页面渲染期间要用到，则必须转存到 data 中
      if (res.status !== 0) {
        return alert('更新数据失败')
      }
      this.dialogFormVisible = false
    },
    // 每页条数改变时触发 选择一页显示多少行
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.currentPage = 1
      this.pageSize = val
    },
    // 当前页改变时触发 跳转其他页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
    },
    allinfo(row) {
      this.form = row
    }
  },
  created() {
    this.getqu()
  }
}
</script>

<style scoped lang="less">
.search {
  display: flex;
  justify-content: space-between;
}
.pagination {
  margin-top: 10px;
}
.questioninfo-container h1 {
  text-align: center;
}
h1,
div {
  margin: 0;
  padding: 0;
}
</style>
