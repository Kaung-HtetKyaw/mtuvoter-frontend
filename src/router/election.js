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
    path: "/elections/:id",
    name: "Election",
    component: () =>
      import(/* webpackChunkName: "election" */ "../views/Election.vue"),
  },
];
