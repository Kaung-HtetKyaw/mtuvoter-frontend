import Vue from "vue";
import Vuex from "vuex";
import * as notification from "./modules/notification";
import * as user from "./modules/user";
import * as UI from "./modules/ui";
import * as election from "./modules/election";
import * as news from "./modules/news";
import * as faq from "./modules/faq";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { notification, user, UI, election, news, faq },
});
