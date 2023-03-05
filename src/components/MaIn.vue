<template>
  <div class="main-container">
    <div class="header-container">
      <el-menu class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1" class="logo">后台管理系统</el-menu-item>
        <div class="right">
          <el-menu-item index="2">
            <div class="block">
              <el-avatar class="userimg" :size="50" src=""></el-avatar><span>欢迎{{ this.userinfo.student_account }}！！！</span>
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
    <div class="subject">
      <div class="aside-container">
        <!-- 左侧边栏列表 -->

        <el-col :span="30">
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-menu-item index="1">
              <div class="block">
                <el-avatar class="userimg" :size="50" src=""></el-avatar><span>欢迎{{ this.userinfo.student_account }}！！！</span>
              </div>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-document"></i>
              <span slot="title"><router-link to="/main/shouye"> 首页</router-link></span>
            </el-menu-item>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>信息管理</span>
              </template>
              <el-menu-item index="3-1"><router-link to="/main/teacher">教师信息</router-link></el-menu-item>
              <el-menu-item index="3-2"><router-link to="/main/question">题目信息</router-link></el-menu-item>
              <el-menu-item index="3-2">学生信息</el-menu-item>
            </el-submenu>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">个人中心</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </div>
      <!-- 头部区域 -->
      <!-- <MyHeader :name="this.userinfo.student_account"></MyHeader> -->
      <!-- 侧边栏 -->
      <!-- <MyAside :name="this.userinfo.student_account"></MyAside> -->
      <div class="mainer">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// import MyHeader from './main/MyHeader.vue'
// import MyAside from './main/MyAside'
import { getinfo } from '../api/userAPI.js'
export default {
  data() {
    return {
      userinfo: {}
    }
  },
  created() {
    this.getinfo()
  },
  methods: {
    async getinfo() {
      // 调用 axios 的 get 方法，请求列表数据
      const { data: res } = await getinfo()
      // 只要请求回来的数据，在页面渲染期间要用到，则必须转存到 data 中
      if (res.status !== 0) {
        return alert('获取数据失败')
      }

      this.userinfo = res.data
    },
    logout() {
      // 1. 清空 token
      localStorage.removeItem('token')
      // 2. 跳转到登录页面
      alert('确定退出吗？')
      this.$router.push('/login')
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
  // components: {
  //   MyHeader,
  //   MyAside
  // }
}
</script>

<style scoped lang="less">
.header-container {
  z-index: 1;
  background-color: white;
  width: 100%;
  position: fixed;
  top: 0;
}
a {
  color: black;
}
.aside-container {
  position: fixed;
  left: 0;
}
.mainer {
  margin-left: 220px;
}
.subject {
  color: black;
  margin-top: 70px;
  display: flex;
}
/deep/a {
  text-decoration-line: none;
}
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
.userimg {
  margin-right: 10px;
}
</style>
