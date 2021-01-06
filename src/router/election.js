export default [
  {
    path: "/elections",
    name: "Elections",
    component: () =>
      import(/* webpackChunkName: "elections" */ "../views/Elections.vue"),
    meta: {
      layout: "election",
    },
  },
  {
    path: "/elections/:election",
    name: "Election",
    component: () =>
      import(/* webpackChunkName: "election" */ "../views/Election.vue"),
  },
  {
    path: "/elections/:election/result",
    name: "Election-Result",
    component: () =>
      import(/* webpackChunkName: "election" */ "../views/Result.vue"),
  },
];
