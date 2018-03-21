import Vue from 'vue';

const getters = {
  homeData: (state: any) => state.homeData,
};

const actions = {
  getHomeData ({ commit } : { commit: any }) {
    Vue.http.get('/api/home.json').then((response: any) => {
      commit('setHomeData', response.body);
    }, (response: any) => {
      commit('setHomeData', []);
    });
    
  },
};

const mutations = {
  setHomeData (state: any, homeData: any) {
    state.homeData = homeData;
  },
};

const state = {
  homeData: {},
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
