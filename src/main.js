// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router/routes'
import api from './router/api'
Vue.prototype.$api = api
// 使用配置文件规则
const router = new VueRouter({
  routes
})
// 光引用不成，还得使用
Vue.use(VueRouter)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
