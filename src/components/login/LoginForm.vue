<template>
  <div class="form">
    <el-form :model="userForm" status-icon :rules="rules" ref="userForm" label-width="100px" class="demo-ruleForm">
      <el-form-item><h2>后台登陆界面</h2></el-form-item>
      <el-form-item label="账号" prop="username">
        <el-input v-model="userForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="userForm.password" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="initCartList">登录</el-button>
        <el-button @click="resetForm('userForm')">重置</el-button>
        <el-button @click="reg">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getuser } from '../../api/userAPI.js'
export default {
  data() {
    return {
      userForm: {
        password: '',
        username: ''
      },
      rules: {
        pass: [{ trigger: 'blur' }],
        checkPass: [{ trigger: 'blur' }]
      }
    }
  },
  methods: {
    async initCartList() {
      // 调用 axios 的 get 方法，请求列表数据
      const { data: res } = await getuser(this.userForm)
      // 只要请求回来的数据，在页面渲染期间要用到，则必须转存到 data 中
      console.log(res)
      console.log(this.userForm)
      if (res.status !== 0) {
        return alert('登录失败')
      }
      alert('登录成功')
      localStorage.setItem('token', res.token)
      this.$router.push('/main')
    },

    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    reg() {
      this.$router.push('/Reg')
    }
  }
}
</script>
<style scoped>
h2 {
  text-align: center;
}
.form {
  width: 350px;
}
</style>
