export default [
  {
    path: "/candidates/:candidate/edit",
    name: "Election-Candidate-Edit",
    component: () =>
      import(
        /* webpackChunkName: "election-edit" */ "../views/Candidate/edit.vue"
      ),
  },
];
