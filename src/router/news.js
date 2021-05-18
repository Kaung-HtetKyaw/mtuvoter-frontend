const defaultLayout = () => import(/* webpackPrefetch: true */"@/layouts/default.vue");

export default [
  {
    path: "/news",
    name: "Newsletter",
    component: () =>
      import(/* webpackPrefetch: true *//* webpackChunkName: "news" */ "../views/News/index.vue"),
    meta: {
      layout: defaultLayout
    }
  },
  {
    path: "/news/publish",
    name: "News-Publish",
    component: () =>
      import(/* webpackPrefetch: true *//* webpackChunkName: "news-publish" */ "../views/News/create.vue"),
    meta: {
      layout: defaultLayout
    }
  },
  {
    path: "/news/:news",
    name: "News-Single",
    component: () =>
      import(/* webpackPrefetch: true */
        /* webpackChunkName: "news-single" */ "../views/News/newsSingle.vue"
      ),
    meta: {
      layout: defaultLayout
    }
  },
  {
    path: "/news/:news/edit",
    name: "News-Edit",
    component: () =>
      import(/* webpackPrefetch: true *//* webpackChunkName: "news-eidt" */ "../views/News/edit.vue"),
    meta: {
      layout: defaultLayout
    }
  }
];
