import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from './config/firebase'

Vue.config.productionTip = false
Vue.prototype.$todo = firebase.ref('kanban/todo')
Vue.prototype.$ongoing = firebase.ref('kanban/ongoing')
Vue.prototype.$done = firebase.ref('kanban/done')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
