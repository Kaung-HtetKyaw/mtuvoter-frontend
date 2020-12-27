export default [
  {
    path: "/elections",
    name: "Elections",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Elections.vue"),
    meta: {
      layout: "election",
    },
  },
];
