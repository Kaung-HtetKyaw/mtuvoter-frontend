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
import faqRoutes from "./faq";

import store from "@/store/index.js";
import { showNoti } from "@/utils/noti.js";
// import { setDefaultAuthMetaForRoutes } from "@/utils/utils.js";

// layouts
const defaultLayout = () => import("@/layouts/default.vue");
const errorLayout = () => import("@/layouts/error.vue");

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
    meta: {
      layout: defaultLayout,
    },
  },

  {
    path: "/test",
    name: "Test",
    component: () => import(/* webpackChunkName: "test" */ "../views/Test.vue"),
    meta: {
      layout: defaultLayout,
    },
  },
  ...electionRoutes,
  ...newsRoutes,
  ...candidateRoutes,
  ...positionRoutes,
  ...adminRoutes,
  ...authRoutes,
  ...accountRoutes,
  ...faqRoutes,
  {
    path: "/error",
    name: "404",
    component: NotFound,
    meta: {
      layout: errorLayout,
    },
  },
  {
    path: "*",
    redirect: { name: "404" },
  },
];

function setDefaultLayout(routes) {
  let result = routes.map((route) => {
    if (!route.meta?.layout) {
      route.meta = {
        layout: defaultLayout,
      };
    }
    return route;
  });
  return result;
}

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: setDefaultLayout(routes),
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((el) => !!el.meta.requiresAuth);
  const requiresMod = to.matched.some(
    (el) => el.meta.role === "mod" || el.meta.role === "admin"
  );
  const requiresAdmin = to.matched.some((el) => el.meta.role === "admin");
  let currentUser = store.state.user.user;
  const fetchedAlready = store.state.user.fetched;

  NProgress.start();
  // make initial fetch (only for one time)
  if (!fetchedAlready) {
    try {
      await store.dispatch("user/getMe");
    } catch (error) {
      NProgress.done();
    }
  }
  console.log("requires auth"+requiresAuth)
  // guard for the auth routes
  if (requiresAuth && !currentUser) {
    showNoti(
      "error",
      "You are no authenticated. Please log in to continue",
      { name: "Login" },
      next
    );
    return;
  }

  // pass for all routes if admin
  if (requiresAuth && currentUser.role === "admin") {
    return next();
  }
  if (
    requiresAuth &&
    requiresMod &&
    !["admin", "mod"].includes(currentUser.role)
  ) {
    showNoti("error", "You are not allowed to do this action", to, from, next);
    return;
  }

  if (requiresAuth && requiresAdmin && currentUser.role != "admin") {
    showNoti("error", "You are not allowed to do this action", to, from, next);
    return;
  }

  next();
});

router.afterEach(() => {
  NProgress.done();
  store.dispatch("UI/changeLoadingState", false);
});

export default router;
