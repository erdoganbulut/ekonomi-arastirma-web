//  import Vue from 'vue';

const getters = {
  isFooter: (state: any) => state.isFooter,
};

const actions = {
  setFooterVisibility ({ commit } : { commit: any }, fVal: boolean) {
    commit('setFooter', fVal)
  },
};

const mutations = {
  setFooter (state: any, fVal: boolean) {
    state.isFooter = fVal;
  },
};

const state = {
  isFooter: false,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
