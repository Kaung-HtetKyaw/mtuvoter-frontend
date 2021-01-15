import axios from "@/services/axios.js";
import showNoti from "@/utils/noti.js";

export const namespaced = true;
export const state = {
  elections: [],
  election: null,
  page: 1,
  limit: 5,
  end: false,
};
export const mutations = {
  FETCH_ELECTIONS(state, elections) {
    state.elections = state.elections.concat(elections);
    if (state.elections.length > 0 && elections.length == 0) state.end = true;
  },
  FETCH_ELECTION(state, election) {
    state.election = election;
  },
  INCREMENT_PAGE(state) {
    state.page++;
  },
};

export const actions = {
  async getElections({ commit, state }, qurey = "") {
    const elections = await axios()
      .get(`/elections?page=${state.page}&limit=${state.limit}&${qurey}`)
      .then((res) => {
        commit("FETCH_ELECTIONS", res.data.data);
        commit("INCREMENT_PAGE");
        return res.data.data;
      })
      .catch(() => {
        showNoti(
          "error",
          "Error loading election. Please reload and try again."
        );
      });

    return elections;
  },
  async getElection({ commit }, id) {
    const election = await axios()
      .get(`/elections/${id}`)
      .then((res) => {
        commit("FETCH_ELECTION", res.data.data);
        return res.data.data;
      })
      .catch((e) => {
        showNoti("error", e.response.data.message);
      });
    return election;
  },
};
export const getters = {};
