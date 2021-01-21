import axios from "@/services/axios.js";
import { showNoti } from "@/utils/noti.js";
import { replaceBy } from "@/utils/utils.js";

export const namespaced = true;
export const state = {
  news: [],
  page: 1,
  limit: 5,
  end: false,
  singleNews: null,
};
export const mutations = {
  FETCH_NEWS(state, news) {
    state.news = state.news.concat(news);
    if (state.news.length > 0 && news.length == 0) state.end = true;
  },
  FETCH_SINGLE_NEWS(state, news) {
    state.singleNews = news;
  },
  CREATE_NEWS(state, news) {
    state.news.unshift(news);
    state.singleNews = news;
  },
  UPDATE_NEWS(state, news) {
    replaceBy(state.news, news, "_id");
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
  async createNews({ commit }, { news }) {
    await axios()
      .post(`/news`, news)
      .then((res) => {
        commit("CREATE_NEWS", res.data.data);
        return res.data.data;
      })
      .catch((e) => {
        console.log(e.response);
        showNoti("error", e.response.message);
      });
  },
  async updateNews({ commit }, { newsId, news }) {
    await axios()
      .patch(`news/${newsId}`, news)
      .then((res) => {
        commit("UPDATE_NEWS", res.data.data);
      })
      .catch((e) => {
        console.log(e.response);
        showNoti("error", e.response.message);
      });
  },
};
export const getters = {
  getNewsByID: (state) => (id) => {
    return state.news.find((el) => {
      return el._id === id;
    });
  },
};
