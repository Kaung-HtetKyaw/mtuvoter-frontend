const plainLayout = () => import(/* webpackPrefetch: true */"@/layouts/about.vue");
export default [
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackPrefetch: true *//* webpackChunkName: "login" */ "../views/Auth/Login.vue"),
    meta: {
      layout: plainLayout
    }
  },
  {
    path: "/forgot",
    name: "Forgot-Password",
    component: () =>
      import(/* webpackPrefetch: true */
        /* webpackChunkName: "forgot-password" */ "../views/Auth/ForgotPassword.vue"
      ),
    meta: {
      layout: plainLayout
    }
  },

  {
    path: "/reset/:token",
    name: "Reset-Password",
    component: () =>
      import(/* webpackPrefetch: true */
        /* webpackChunkName: "reset-password" */ "../views/Auth/ResetPassword.vue"
      ),
    meta: {
      layout: plainLayout
    }
  },
  {
    path: "/verify/:token",
    name: "Verify",
    component: () =>
      import(/* webpackPrefetch: true *//* webpackChunkName: "verify" */ "../views/Auth/Verify.vue"),
    meta: {
      layout: plainLayout
    }
  }
];
