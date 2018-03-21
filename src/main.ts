import Vue from 'vue';

// Bootstrap & Bootstrap Vue
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Vue Resource
import VueResource from 'vue-resource';

import App from './App.vue';
import router from './router';
import store from './store/index';
import Icons from './components/Icons.vue'

Vue.use(BootstrapVue);

Vue.use(VueResource);

Vue.component('icon', Icons);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
