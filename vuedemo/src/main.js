// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResourse from 'vue-resource'
// 引入iview依赖
import iView from 'iview'
//引入iview css样式
import 'iview/dist/styles/iview.css'
//使用iview组件
Vue.use(iView)
Vue.use(VueResourse)
Vue.config.productionTip=false
Vue.prototype.rootUrl='/demo'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
