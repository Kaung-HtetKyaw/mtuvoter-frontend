export const namespaced = true;
export const state = {
  loading: true
};
export const mutations = {
  CHANGE_LOADING_STATE(state, loading) {
    state.loading = loading;
  }
};

export const actions = {
  changeLoadingState({ commit }, loading) {
    commit("CHANGE_LOADING_STATE", loading);
  }
};
export const getters = {};
