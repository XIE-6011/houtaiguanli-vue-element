import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '@/components/login/LoginView'
import RegView from '@/components/reg/RegView'
import main from '@/components/MaIn'
import pathArr from '@/router/pathArr'
import shouye from '@/views/ShouYe'
import question from '@/views/QuestionInfo.vue'
import teacher from '@/views/TeacherInfo.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/Reg', name: 'reg', component: RegView },
  { path: '/main', name: 'main', component: main, children: [{ path: '/main', redirect: '/main/shouye' }, { path: 'shouye', name: 'shouye', component: shouye }, { path: 'question', name: 'question', component: question }, { path: 'teacher', name: 'teacher', component: teacher }] },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(function(to, from, next) {
  console.log(to.path)
  if (pathArr.indexOf(to.path) !== -1) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
