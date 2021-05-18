const adminLayout = () => import(/* webpackPrefetch: true */"@/layouts/admin.vue");
export default [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackPrefetch: true */
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
      import(/* webpackPrefetch: true */
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
      import(/* webpackPrefetch: true */
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
      import(/* webpackPrefetch: true */
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
      import(/* webpackPrefetch: true */
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
      import(/* webpackPrefetch: true */
        /* webpackChunkName: "dashboard-staticstics" */ "../views/Dashboard/Candidate/staticstics.vue"
      ),
    meta: {
      layout: adminLayout,
      requiresAuth: true,
      role: "admin"
    }
  }
];
