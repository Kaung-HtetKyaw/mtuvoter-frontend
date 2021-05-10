import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "nprogress/nprogress.css";
import axios from "@/services/axios.js";
import VueAxios from "vue-axios";
import VueApexCharts from "vue-apexcharts";
import VueObserveVisibility from "vue-observe-visibility";
import Clipboard from 'v-clipboard';

import baseMixin from "@/mixins/base.js";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueApexCharts);
Vue.use(VueObserveVisibility);
Vue.use(Clipboard);
Vue.component("apexchart", VueApexCharts);
Vue.mixin(baseMixin);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
