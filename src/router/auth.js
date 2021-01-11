export default [
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Auth/Login.vue"),
    meta: {
      layout: "about",
    },
  },
  {
    path: "/forgot",
    name: "Forgot-Password",
    component: () =>
      import(
        /* webpackChunkName: "forgot-password" */ "../views/Auth/ForgotPassword.vue"
      ),
  },
  {
    path: "/reset",
    name: "Reset-Password",
    component: () =>
      import(
        /* webpackChunkName: "reset-password" */ "../views/Auth/ResetPassword.vue"
      ),
  },
];
