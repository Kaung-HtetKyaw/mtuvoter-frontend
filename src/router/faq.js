export default [
  {
    path: "/faqs",
    name: "FAQ",
    component: () =>
      import(/* webpackPrefetch: true *//* webpackChunkName: "faq" */ "../views/FAQ/index.vue")
  },
  {
    path: "/faq/new",
    name: "FAQ-New",
    component: () =>
      import(/* webpackPrefetch: true *//* webpackChunkName: "faq-new" */ "../views/FAQ/create.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/faq/:faq/edit",
    name: "FAQ-Edit",
    component: () =>
      import(/* webpackPrefetch: true *//* webpackChunkName: "faq-edit" */ "../views/FAQ/edit.vue"),
    meta: {
      requiresAuth: true
    }
  }
];
