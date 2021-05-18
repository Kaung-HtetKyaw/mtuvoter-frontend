export default [
  {
    path: "/me",
    name: "Account",
    component: () =>
      import(/* webpackPrefetch: true *//* webpackChunkName: "Account" */ "../views/Account.vue"),
    meta: {
      requiresAuth: true
    }
  }
];
