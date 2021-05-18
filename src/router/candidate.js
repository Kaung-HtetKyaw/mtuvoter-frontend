export default [
  {
    path: "/candidates/:candidate/edit",
    name: "Election-Candidate-Edit",
    component: () =>
      import(/* webpackPrefetch: true */
        /* webpackChunkName: "election-edit" */ "../views/Candidate/edit.vue"
      ),
    meta: {
      requiresAuth: true,
      role: "admin"
    }
  }
];
