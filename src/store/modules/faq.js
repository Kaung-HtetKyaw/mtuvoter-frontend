import axios from "@/services/axios.js";
import { showNoti } from "@/utils/noti.js";
import { replaceBy, removeBy } from "@/utils/utils.js";

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
  CREATE_FAQ(state, faq) {
    state.faqs.push(faq);
  },
  UPDATE_FAQ(state, faq) {
    replaceBy(state.faqs, faq, "_id");
  },
  DELETE_FAQ(state, faqId) {
    removeBy(state.faqs, faqId, "_id");
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
  async createFAQ({ commit }, { faq }) {
    await axios()
      .post(`/faqs`, faq)
      .then((res) => {
        commit("CREATE_FAQ", res.data.data);
        return res.data.data;
      })
      .catch((e) => {
        console.log(e);
        showNoti("error", e.response.message);
      });
  },
  async updateFAQ({ commit }, { faq }) {
    await axios()
      .patch(`faqs/${faq._id}`, faq)
      .then((res) => {
        commit("UPDATE_FAQ", faq);
        return res.data.data;
      })
      .catch((e) => {
        showNoti("error", e.response.message);
      });
  },
  async deleteFAQ({ commit }, { faqId }) {
    await axios()
      .delete(`/faqs/${faqId}`)
      .then(() => {
        commit("DELETE_FAQ", faqId);
      })
      .catch((e) => {
        showNoti("error", e.response.message);
      });
  },
};
export const getters = {
  getFaqById: (state) => (id) => {
    return state.faqs.find((el) => el._id === id);
  },
};
