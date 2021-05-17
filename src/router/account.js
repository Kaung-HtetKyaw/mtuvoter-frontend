export default [
  {
    path: "/me",
    name: "Account",
    component: () =>
      import(/* webpackChunkName: "Account" */ "../views/Account.vue"),
    meta: {
      requiresAuth: true
    }
  }
];
