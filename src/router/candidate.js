export default [
  {
    path: "/elections/:election/candidates/:candidate",
    name: "Candidate",
    component: () =>
      import(/* webpackChunkName: "candidate" */ "../views/Candidate.vue"),
  },
];
