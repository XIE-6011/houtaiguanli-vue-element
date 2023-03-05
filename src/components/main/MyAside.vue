<template>
  <div class="aside-container">
    <!-- 左侧边栏列表 -->

    <el-col :span="3">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-menu-item index="1">
          <div class="block">
            <el-avatar class="userimg" :size="50" src=""></el-avatar><span>欢迎{{ name }}！！！</span>
          </div>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-document"></i>
          <span slot="title" @click="shouye">首页</span>
        </el-menu-item>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>信息管理</span>
          </template>
          <el-menu-item index="3-1">教师信息</el-menu-item>
          <el-menu-item index="3-2">题目信息</el-menu-item>
          <el-menu-item index="3-2">学生信息</el-menu-item>
        </el-submenu>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">个人中心</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'MyAside',
  props: {
    name: {
      default: '解东伟'
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    shouye() {
      this.$router.push('/shouye')
    }
  }
}
</script>

<style lang="less" scoped>
.userimg {
  margin-right: 10px;
}
</style>
