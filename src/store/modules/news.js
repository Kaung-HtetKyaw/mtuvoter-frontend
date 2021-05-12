import axios from "@/services/axios.js";
import { showNoti } from "@/utils/noti.js";
import { replaceBy, removeBy } from "@/utils/utils.js";

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
  DELETE_NEWS(state, newsId) {
    removeBy(state.news, newsId, "_id");
    state.singleNews = null;
  },
  CHANGE_PUBLISHED_FLAG(state, news){
    if(state.news.length>0) {
      replaceBy(state.news,news,"_id")
    }
    if(state.singleNews._id === news._id) {
      state.singleNews.published = news.published
    }
  },
  CLEAR_NEWS(state) {
    state.news = [];
    state.page = 1;
    state.end = false;
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
  async deleteNews({ commit }, { newsId }) {
    await axios()
      .delete(`/news/${newsId}`)
      .then(() => {
        commit("DELETE_NEWS", newsId);
      })
      .catch((e) => {
        console.log(e);
        showNoti("error", e.response.message);
      });
  },
  // change published flag to true if it was false previously and vice versa
  async changePublishedFlag({state,commit},{newsId}) {
    let wasPublished = state.singleNews.published;
    let route = `/news/${newsId}/${wasPublished?'unpublish':'publish'}`;
    return axios().patch(route)
    .then((res) => {
      commit('CHANGE_PUBLISHED_FLAG',res.data.data);
      return res.data.data;
    })
    .catch(e=>{
      if(e.response.data.message) {
        showNoti('error',e.response.data.message)
      } else {
        showNoti('error','Something went wrong')
      }
    })
  },
  clearNews({commit}) {
    commit('CLEAR_NEWS')
  }
};
export const getters = {
  getNewsByID: (state) => (id) => {
    return state.news.find((el) => {
      return el._id === id;
    });
  },
};
