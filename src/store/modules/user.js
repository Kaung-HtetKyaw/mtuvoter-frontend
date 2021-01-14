import axios from "axios";

export const namespaced = true;
export const state = {
  user: null,
  fetched: false,
};
export const mutations = {
  LOGIN(state, user) {
    state.user = user;
  },
  SET_ME(state, user) {
    state.user = user;
  },
  // making sure the app will try to fetch the current user from jwt only for one time
  CHANGE_FETCH_STATE(state) {
    state.fetched = true;
  },
};

export const actions = {
  async login({ commit }, user) {
    await axios
      .post(
        `${process.env.VUE_APP_BASE_API_URL}/users/login`,
        {
          ...user,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        commit("LOGIN", res.data.data);
        commit("CHANGE_FETCH_STATE");
        return res.data.data;
      })
      .catch((e) => {
        commit("CHANGE_FETCH_STATE");
        console.log(e);
      });
  },
  async getMe({ commit }) {
    await axios
      .get(`${process.env.VUE_APP_BASE_API_URL}/users/me`, {
        withCredentials: true,
      })
      .then((res) => {
        commit("SET_ME", res.data.data);
        commit("CHANGE_FETCH_STATE");
      })
      .catch((e) => {
        commit("CHANGE_FETCH_STATE");
        console.log(e.response);
      });
  },
};
export const getters = {};
