import NProgress from "nprogress";
import store from "@/store/index.js";

export function showNoti(type, message, to, from, next) {
  store.dispatch(
    "notification/addNoti",
    {
      type,
      message,
    },
    { root: true }
  );
  NProgress.done();
  next({ name: from.name, params: from.params });
}
