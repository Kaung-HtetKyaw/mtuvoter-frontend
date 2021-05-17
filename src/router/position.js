export default [
  {
    path: "/positions/:position/edit",
    name: "Election-Position-Edit",
    component: () =>
      import(
        /* webpackChunkName: "election-edit" */ "../views/Position/edit.vue"
      )
  }
];
