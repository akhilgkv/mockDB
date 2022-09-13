import '@babel/polyfill'
import 'mutationobserver-shim'
import '../src/config/global.scss'
import { Themes } from '../src/Theme'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.$Themes = new Themes();

new Vue({
  render: h => h(App),
}).$mount('#app')
