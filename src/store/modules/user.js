import axios from "@/services/axios.js";
import { showNoti } from "@/utils/noti.js";

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
  UPDATE_ME(state, user) {
    state.user = user;
  },
  // making sure the app will try to fetch the current user from jwt only for one time
  CHANGE_FETCH_STATE(state) {
    state.fetched = true;
  },
};

export const actions = {
  async login({ commit }, user) {
    await axios()
      .post(
        `/users/login`,
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
    await axios()
      .get(`/users/me`, {
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
  async updateMe({ commit }, { user }) {
    return await axios()
      .patch(`/users/me`, { ...user })
      .then((res) => {
        commit("UPDATE_ME", res.data.data);
        return res.data.data;
      })
      .catch((e) => {
        showNoti("error", e.response.message);
      });
  },
  async logOut({ commit }) {
    await axios()
      .get(`/users/logout`)
      .then(() => {
        commit("SET_ME", null);
      })
      .catch(() => {
        showNoti("error", "Error logging out");
      });
  },
};
export const getters = {};
