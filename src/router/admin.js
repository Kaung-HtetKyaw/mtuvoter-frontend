const adminLayout = () => import("@/layouts/admin.vue");
export default [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(
        /* webpackChunkName: "Dashboard" */ "../views/Dashboard/index.vue"
      ),
    meta: {
      layout: adminLayout,
      requiresAuth: true,
      role: "admin"
    }
  },
  {
    path: "/dashboard/logs",
    name: "Dashboard-Logs",
    component: () =>
      import(
        /* webpackChunkName: "dashboard-logs" */ "../views/Dashboard/Logs.vue"
      ),
    meta: {
      layout: adminLayout,
      requiresAuth: true,
      role: "admin"
    }
  },
  {
    path: "/dashboard/roles",
    name: "Dashboard-Roles",
    component: () =>
      import(
        /* webpackChunkName: "dashboard-roles" */ "../views/Dashboard/Roles.vue"
      ),
    meta: {
      layout: adminLayout,
      requiresAuth: true,
      role: "admin"
    }
  },
  {
    path: "/dashboard/elections",
    name: "Dashboard-Elections",
    component: () =>
      import(
        /* webpackChunkName: "dashboard-elections" */ "../views/Dashboard/Election/index.vue"
      ),
    meta: {
      layout: adminLayout,
      requiresAuth: true,
      role: "admin"
    }
  },

  {
    path: "/dashboard/elections/:election/stats",
    name: "Dashboard-Staticstics-Election",
    component: () =>
      import(
        /* webpackChunkName: "dashboard-staticstics" */ "../views/Dashboard/Election/staticstics.vue"
      ),
    meta: {
      layout: adminLayout,
      requiresAuth: true,
      role: "admin"
    }
  },
  {
    path:
      "/dashboard/elections/:election/positions/:position/candidates/:candidate/stats",
    name: "Dashboard-Staticstics-Candidate",
    component: () =>
      import(
        /* webpackChunkName: "dashboard-staticstics" */ "../views/Dashboard/Candidate/staticstics.vue"
      ),
    meta: {
      layout: adminLayout,
      requiresAuth: true,
      role: "admin"
    }
  }
];
