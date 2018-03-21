import Vue from 'vue';

const getters = {
  sliders: (state: any) => state.sliders,
};

const actions = {
  getSliders ({ commit } : { commit: any }) {
    Vue.http.get('http://localhost:8081/api/home.json').then((response: any) => {
      commit('setSliders', response.body.sliders);
    }, (response: any) => {
      commit('setSliders', []);
    });
    
  },
};

const mutations = {
  setSliders (state: any, slidersData: object) {
    state.sliders = slidersData;
  },
};

const state = {
  sliders: [],
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
