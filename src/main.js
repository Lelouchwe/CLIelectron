import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

// import renderer from '../src/assets/js/renderer'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // renderer,
  render: h => h(App)
}).$mount('#app');
