export default [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "test" */ "../views/Dashboard.vue"),
    meta: {
      layout: "admin",
    },
  },
];
