import Vue from 'vue';
import Vuex from 'vuex';

import footer from './modules/footer.module';
import home from './modules/home.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    footer,
    home,
  },
});
