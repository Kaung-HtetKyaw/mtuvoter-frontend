import axios from "axios";

export const namespaced = true;
export const state = {
  user: null,
  fetched: false,
};
export const mutations = {
  LOGIN(state, user) {
    state.user = user;
    state.fetched = true;
    console.log(user);
  },
};

export const actions = {
  async login({ commit }, user) {
    await axios
      .post(`${process.env.VUE_APP_BASE_API_URL}/users/login`, {
        ...user,
      })
      .then((res) => {
        commit("LOGIN", res.data.data);
        return res.data.data;
      })
      .catch((e) => console.log(e));
  },
};
export const getters = {};
