<template>
  <div>
    <el-form :model="userForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item><h2>后台注册界面</h2></el-form-item>
      <el-form-item label="账户名" prop="username">
        <el-input v-model="userForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="userForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="userForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="adduser">确定</el-button>
        <el-button @click="resetForm('userForm')">重置</el-button>
        <el-button @click="goback">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { adduser } from '../../api/userAPI.js'
export default {
  data() {
    return {
      userForm: {
        username: '',
        password: '',
        checkPass: ''
      },
      rules: {
        pass: [{ trigger: 'blur' }],
        checkPass: [{ trigger: 'blur' }]
      }
    }
  },
  methods: {
    async adduser() {
      const info = { username: this.userForm.username, password: this.userForm.password }
      // 调用 axios 的 get 方法，请求列表数据
      const { data: res } = await adduser(info)
      // 只要请求回来的数据，在页面渲染期间要用到，则必须转存到 data 中
      console.log(res)
      console.log(this.userForm)
      if (res.status !== 0) {
        return alert('注册失败')
      }
      alert('注册成功 去登陆')
      this.$router.push('/login')
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    goback() {
      // go(-1) 表示后退一层
      // 如果后退的层数超过上限，则原地不动
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
}
</style>
