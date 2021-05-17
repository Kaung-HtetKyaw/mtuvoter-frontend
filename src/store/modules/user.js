import axios from "@/services/axios.js";
import { showNoti } from "@/utils/noti.js";

export const namespaced = true;
export const state = {
  user: null,
  fetched: false
};
export const mutations = {
  LOGIN(state, user) {
    state.user = user;
  },
  SIGNUP(state, user) {
    state.user = user;
  },
  SET_ME(state, user) {
    state.user = user;
  },
  UPDATE_PASSWORD() {},
  UPDATE_ME(state, user) {
    state.user = user;
  },
  CHANGE_SUBSCRIBED_FLAG(state, flag) {
    state.user.subscribed = flag;
  },
  // making sure the app will try to fetch the current user from jwt only for one time
  CHANGE_FETCH_STATE(state) {
    state.fetched = true;
  }
};

export const actions = {
  async login({ commit, dispatch }, user) {
    commit("CHANGE_FETCH_STATE");
    return axios()
      .post(
        `/users/login`,
        {
          ...user
        },
        {
          withCredentials: true
        }
      )
      .then(res => {
        if (res.data.message) {
          return res.data;
        }
        commit("LOGIN", res.data.data);
        dispatch("election/clearElections", null, { root: true });
        dispatch("news/clearNews", null, { root: true });
        return res.data.data;
      });
  },
  async signup({ commit, dispatch }, user) {
    commit("CHANGE_FETCH_STATE");
    await axios()
      .post(
        `/users/signup`,
        {
          ...user
        },
        {
          withCredentials: true
        }
      )
      .then(res => {
        commit("SIGNUP", res.data.data);
        dispatch("election/clearElections", null, { root: true });
        dispatch("news/clearNews", null, { root: true });
        return res.data.data;
      });
  },
  async getMe({ commit }) {
    console.log(axios())
    await axios()
      .get(`/users/me`, {
        withCredentials: true
      })
      .then(res => {
        commit("SET_ME", res.data.data);
        commit("CHANGE_FETCH_STATE");
      })
      .catch(e => {
        commit("CHANGE_FETCH_STATE");
        console.log(e.response);
      });
  },
  async updateMe({ commit }, { user }) {
    return await axios()
      .patch(`/users/me`, { ...user })
      .then(res => {
        commit("UPDATE_ME", res.data.data);
        return res.data.data;
      })
      .catch(e => {
        showNoti("error", e.response.message);
      });
  },
  async updatePassword(
    { commit },
    { email, oldPassword, newPassword, confirmedPassword }
  ) {
    await axios()
      .patch(`/users/pass`, {
        email,
        oldPassword,
        newPassword,
        confirmedPassword
      })
      .then(res => {
        commit("UPDATE_PASSWORD");
        return res.data;
      });
  },
  async logOut({ commit, dispatch }) {
    await axios()
      .get(`/users/logout`)
      .then(() => {
        commit("SET_ME", null);
        // clear the elections for authenticated user
        dispatch("election/clearElections", null, { root: true });
        dispatch("news/clearNews", null, { root: true });
      })
      .catch(() => {
        showNoti("error", "Error logging out");
      });
  },

  async changeSubscribedFlag({ commit }, wasSubscribed) {
    let route = `/users/me/${wasSubscribed ? "unsubscribe" : "subscribe"}`;
    return axios()
      .patch(route)
      .then(res => {
        commit("CHANGE_SUBSCRIBED_FLAG", res.data.data.subscribed);
        return res.data.data;
      })
      .catch(e => {
        if (e.response.data.message) {
          showNoti("error", e.response.data.message);
        } else {
          showNoti("error", "Something went wrong");
        }
      });
  }
};
export const getters = {};
