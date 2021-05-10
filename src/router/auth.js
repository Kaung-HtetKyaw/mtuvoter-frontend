const plainLayout = () => import("@/layouts/about.vue");
export default [
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Auth/Login.vue"),
    meta: {
      layout: plainLayout,
    },
  },
  {
    path: "/forgot",
    name: "Forgot-Password",
    component: () =>
      import(
        /* webpackChunkName: "forgot-password" */ "../views/Auth/ForgotPassword.vue"
      ),
    meta: {
      layout: plainLayout,
    },
  },

  {
    path: "/reset",
    name: "Reset-Password",
    component: () =>
      import(
        /* webpackChunkName: "reset-password" */ "../views/Auth/ResetPassword.vue"
      ),
    meta: {
      layout: plainLayout,
    },
  },
];
