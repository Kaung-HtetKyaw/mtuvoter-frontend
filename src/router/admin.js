export default [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(
        /* webpackChunkName: "Dashboard" */ "../views/Dashboard/index.vue"
      ),
    meta: {
      layout: "admin",
    },
  },
  {
    path: "/dashboard/elections",
    name: "Dashboard-Elections",
    component: () =>
      import(
        /* webpackChunkName: "dashboard-elections" */ "../views/Dashboard/Election/index.vue"
      ),
    meta: {
      layout: "admin",
    },
  },
  {
    path: "/dashboard/elections/:election/stats",
    name: "Dashboard-Staticstics-Election",
    component: () =>
      import(
        /* webpackChunkName: "dashboard-staticstics" */ "../views/Dashboard/Election/staticstics.vue"
      ),
    meta: {
      layout: "admin",
    },
  },
  {
    path: "/dashboard/elections/:election/candidates/:candidate/stats",
    name: "Dashboard-Staticstics-Candidate",
    component: () =>
      import(
        /* webpackChunkName: "dashboard-staticstics" */ "../views/Dashboard/Candidate/staticstics.vue"
      ),
    meta: {
      layout: "admin",
    },
  },
];
