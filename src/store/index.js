import Vue from "vue";
import Vuex from "vuex";
import * as notification from "./modules/notification";
import * as user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { notification, user },
});
