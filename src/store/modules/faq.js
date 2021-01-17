import axios from "@/services/axios.js";
import { showNoti } from "@/utils/noti.js";

export const namespaced = true;
export const state = {
  faqs: [],
  page: 1,
  limit: 5,
  end: false,
};
export const mutations = {
  FETCH_FAQs(state, faqs) {
    state.faqs = state.faqs.concat(faqs);
    if (state.faqs.length > 0 && faqs.length == 0) state.end = true;
  },
  INCREMENT_PAGE(state) {
    state.page++;
  },
};

export const actions = {
  async getFAQs({ commit, state }, qurey = "") {
    const faqs = await axios()
      .get(`/faqs?page=${state.page}&limit=${state.limit}&${qurey}`)
      .then((res) => {
        commit("FETCH_FAQs", res.data.data);
        commit("INCREMENT_PAGE");
        return res.data.data;
      })
      .catch(() => {
        showNoti("error", "Error loading FAQ. Please reload and try again.");
      });
    return faqs;
  },
};
export const getters = {};
