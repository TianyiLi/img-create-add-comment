import Vue from 'vue'
import App from './App.vue'
import { interact } from './directives'

Vue.config.productionTip = false
Vue.use(interact)

new Vue({
  render: h => h(App)
}).$mount('#app')
