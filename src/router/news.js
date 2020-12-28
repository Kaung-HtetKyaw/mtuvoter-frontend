export default [
  {
    path: "/news",
    name: "Newsletter",
    component: () =>
      import(/* webpackChunkName: "news" */ "../views/Newsletter.vue"),
    meta: {
      layout: "election",
    },
  },
];
