const defaultLayout = () => import(/* webpackPrefetch: true */"@/layouts/default.vue");
export default [
  {
    path: "/elections",
    name: "Elections",
    component: () =>
      import(/* webpackPrefetch: true *//* webpackChunkName: "elections" */ "../views/Election/index.vue"),
    meta: {
      layout: defaultLayout
    }
  },
  {
    path: "/elections/new",
    name: "Election-New",
    component: () =>
      import(/* webpackPrefetch: true */
        /* webpackChunkName: "new-election" */ "../views/Election/new/index.vue"
      ),
    meta: {
      layout: defaultLayout,
      requiresAuth: true,
      role: "admin"
    }
  },

  {
    path: "/elections/new/:election/positions",
    name: "Election-New-Position",
    component: () =>
      import(/* webpackPrefetch: true */
        /* webpackChunkName: "new-election-position" */ "../views/Election/new/_position.vue"
      ),
    meta: {
      layout: defaultLayout,
      requiresAuth: true,
      role: "admin"
    }
  },
  {
    path: "/elections/new/:election/positions/:position/candidates",
    name: "Election-New-Candidate",
    component: () =>
      import(/* webpackPrefetch: true */
        /* webpackChunkName: "new-election-position" */ "../views/Election/new/_candidate.vue"
      ),
    meta: {
      layout: defaultLayout,
      requiresAuth: true,
      role: "admin"
    }
  },
  {
    path: "/elections/:election/edit",
    name: "Election-Edit",
    component: () =>
      import(/* webpackPrefetch: true */
        /* webpackChunkName: "election-edit" */ "../views/Election/edit.vue"
      ),
    meta: {
      layout: defaultLayout,
      requiresAuth: true,
      role: "admin"
    }
  },
  {
    path: "/elections/:election",
    name: "Election-Single",
    component: () =>
      import(/* webpackPrefetch: true */
        /* webpackChunkName: "election" */ "../views/Election/electionSingle.vue"
      ),
    meta: {
      layout: defaultLayout
    }
  },

  {
    path: "/elections/:election/result",
    name: "Election-Result",
    component: () =>
      import(/* webpackPrefetch: true *//* webpackChunkName: "election-result" */ "../views/Result.vue"),
    meta: {
      layout: defaultLayout
    }
  },
  {
    path: "/elections/:election/guest",
    name: "Generate-Guest-Token",
    component: () =>
      import(/* webpackPrefetch: true */
        /* webpackChunkName: "reset-password" */ "../views/Auth/GuestToken.vue"
      )
  }
];
