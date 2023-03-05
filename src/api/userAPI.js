// 文章相关的 API 接口，都封装到这个模块中
import request from '@/utils/request.js'

// 向外按需导出一个 API 函数
// 注册用户
export const adduser = function(info) {
  return request.post('/api/reguser', info)
}
// 登录验证
export const getuser = function(info) {
  return request.post('/api/login', info)
}
// 获取用户信息
export const getinfo = function() {
  return request({
    method: 'get',
    url: '/my/userinfo',
    headers: {
      Authorization: localStorage.getItem('token') || ''
    }

  })
}
// 获取题目信息
export const getquestion = function() {
  return request({
    method: 'get',
    url: '/my/article/getqu',
    headers: {
      Authorization: localStorage.getItem('token') || ''
    }

  })
}
// 获取教师信息
export const getteacher = function() {
  return request({
    method: 'get',
    url: '/my/article/gette',
    headers: {
      Authorization: localStorage.getItem('token') || ''
    }

  })
}
// 添加题目信息
export const addquestion = function(info) {
  return request({
    method: 'post',
    data: info,
    url: '/my/article/addqu',
    headers: {
      Authorization: localStorage.getItem('token') || ''
    }

  })
}
export const inquestion = function(info) {
  return request({
    method: 'post',
    data: info,
    url: '/my/article/inqu',
    headers: {
      Authorization: localStorage.getItem('token') || ''
    }

  })
}
export const upquestion = function(info) {
  return request({
    method: 'post',
    data: info,
    url: '/my/article/upqu',
    headers: {
      Authorization: localStorage.getItem('token') || ''
    }

  })
}
