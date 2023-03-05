<template>
  <div class="header-container">
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1" class="logo">后台管理系统</el-menu-item>
      <div class="right">
        <el-menu-item index="2">
          <div class="block">
            <el-avatar class="userimg" :size="50" src=""></el-avatar><span>欢迎{{ name }}！！！</span>
          </div>
        </el-menu-item>
        <el-submenu index="3">
          <template slot="title">个人中心</template>
          <el-menu-item index="3-1">基本资料</el-menu-item>
          <el-menu-item index="3-2">查看信息</el-menu-item>
          <el-menu-item index="3-3">设置</el-menu-item>
        </el-submenu>
        <el-menu-item index="4" @click="logout">退出</el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      default: '解东伟'
    }
  },

  name: 'MyHeader',
  methods: {
    logout() {
      // 1. 清空 token
      localStorage.removeItem('token')
      // 2. 跳转到登录页面
      alert('确定退出吗？')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ :focus {
  outline: 0;
}
/deep/ .el-submenu__icon-arrow {
  right: 0;
}
.right {
  display: flex;
  justify-content: flex-end;
}
.userimg {
  margin-right: 10px;
}
.logo {
  font-size: 18px;
}
</style>
