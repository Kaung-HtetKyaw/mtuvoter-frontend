import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";

import NotFound from "@/views/Error.vue";

// routes
import electionRoutes from "./election";
import newsRoutes from "./news";
import candidateRoutes from "./candidate";
import positionRoutes from "./position";
import adminRoutes from "./admin";
import accountRoutes from "./account";
import authRoutes from "./auth";

const options = {
  latencyThreshold: 200, // Number of ms before progressbar starts showing, default: 100,
};
Vue.use(NProgress, options);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },

  {
    path: "/test",
    name: "Test",
    component: () => import(/* webpackChunkName: "test" */ "../views/Test.vue"),
  },
  ...electionRoutes,
  ...newsRoutes,
  ...candidateRoutes,
  ...positionRoutes,
  ...adminRoutes,
  ...authRoutes,
  ...accountRoutes,
  {
    path: "/faq",
    name: "FAQ",
    component: () => import(/* webpackChunkName: "faq" */ "../views/FAQ.vue"),
  },
  {
    path: "/error",
    name: "404",
    component: NotFound,
    meta: {
      layout: "error",
    },
  },
  {
    path: "*",
    redirect: { name: "404" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
