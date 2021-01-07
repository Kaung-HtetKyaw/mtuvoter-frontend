export default [
  {
    path: "/elections",
    name: "Elections",
    component: () =>
      import(/* webpackChunkName: "elections" */ "../views/Election/index.vue"),
    meta: {
      layout: "election",
    },
  },
  {
    path: "/elections/new",
    name: "Election-New",
    component: () =>
      import(
        /* webpackChunkName: "new-election" */ "../views/Election/new/index.vue"
      ),
  },

  {
    path: "/elections/new/:election/positions",
    name: "Election-New-Position",
    component: () =>
      import(
        /* webpackChunkName: "new-election-position" */ "../views/Election/new/_position.vue"
      ),
  },
  {
    path: "/elections/new/:election/positions/:position/candidates",
    name: "Election-New-Candidate",
    component: () =>
      import(
        /* webpackChunkName: "new-election-position" */ "../views/Election/new/_candidate.vue"
      ),
  },
  {
    path: "/elections/:election/edit",
    name: "Election-Edit",
    component: () =>
      import(
        /* webpackChunkName: "election-edit" */ "../views/Election/edit.vue"
      ),
  },
  {
    path: "/elections/:election",
    name: "Election",
    component: () =>
      import(
        /* webpackChunkName: "election" */ "../views/Election/electionSingle.vue"
      ),
  },

  {
    path: "/elections/:election/result",
    name: "Election-Result",
    component: () =>
      import(/* webpackChunkName: "election" */ "../views/Result.vue"),
  },
];
