import axios from "@/services/axios.js";
import { showNoti } from "@/utils/noti.js";
// import { replaceBy, removeBy } from "@/utils/utils.js";

export const namespaced = true;
export const state = {
  logs: [],
  page: 1,
  limit: 10,
  end: false
};
export const mutations = {
  FETCH_LOGS(state, logs) {
    state.logs = state.logs.concat(logs);
    if (state.logs.length > 0 && logs.length == 0) state.end = true;
  },

  INCREMENT_PAGE(state) {
    state.page++;
  }
};

export const actions = {
  async getLogs({ commit, state }, query = "") {
    const logs = await axios()
      .get(`/logs?page=${state.page}&limit=${state.limit}&${query}`)
      .then(res => {
        commit("FETCH_LOGS", res.data.data);
        commit("INCREMENT_PAGE");
        return res.data.data;
      })
      .catch(() => {
        showNoti("error", "Error loading Logs. Please reload and try again.");
      });
    return logs;
  }
};
export const getters = {};
