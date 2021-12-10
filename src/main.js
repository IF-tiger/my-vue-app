import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'view-design'
import 'view-design/dist/styles/iview.css';

Vue.use(iView)
Vue.config.productionTip = false

/* new Vue 启动 */
new Vue({
  el: '#app',
  router,//可以简写为router
  components: {App},
  template: '<App/>',
  render: c => c(App),
  //让vue知道我们的路由规则
})
