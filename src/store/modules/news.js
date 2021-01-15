import axios from "@/services/axios.js";
import showNoti from "@/utils/noti.js";

export const namespaced = true;
export const state = {
  news: [],
  page: 1,
  limit: 5,
  end: false,
  singleNews: {},
};
export const mutations = {
  FETCH_NEWS(state, news) {
    state.news = state.news.concat(news);
    if (state.news.length > 0 && news.length == 0) state.end = true;
  },
  FETCH_SINGLE_NEWS(state, news) {
    state.singleNews = news;
  },
  INCREMENT_PAGE(state) {
    state.page++;
  },
};

export const actions = {
  async getNews({ commit, state }, qurey = "") {
    const news = await axios()
      .get(`/news?page=${state.page}&limit=${state.limit}&${qurey}`)
      .then((res) => {
        commit("FETCH_NEWS", res.data.data);
        commit("INCREMENT_PAGE");
        return res.data.data;
      })
      .catch(() => {
        showNoti("error", "Error loading news. Please reload and try again.");
      });
    return news;
  },
  async getSingleNews({ commit }, id) {
    const news = await axios()
      .get(`/news/${id}`)
      .then((res) => {
        commit("FETCH_SINGLE_NEWS", res.data.data);
      })
      .catch(() => showNoti("error", "Error loading news. Please try again."));
    return news;
  },
};
export const getters = {
  getNewsByID: (state) => (id) => {
    return state.news.find((el) => {
      return el._id === id;
    });
  },
};
