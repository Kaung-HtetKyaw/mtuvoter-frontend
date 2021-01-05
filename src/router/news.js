export default [
  {
    path: "/news",
    name: "Newsletter",
    component: () =>
      import(/* webpackChunkName: "news" */ "../views/News/index.vue"),
  },
  {
    path: "/news/publish",
    name: "News-Publish",
    component: () =>
      import(/* webpackChunkName: "news-publish" */ "../views/News/create.vue"),
  },
  {
    path: "/news/:news",
    name: "News-Single",
    component: () =>
      import(
        /* webpackChunkName: "news-single" */ "../views/News/newsSingle.vue"
      ),
  },
];
