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
];
