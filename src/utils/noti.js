import NProgress from "nprogress";
import store from "@/store/index.js";

export function showNoti(type, message, to, next) {
  store.dispatch(
    "notification/addNoti",
    {
      type,
      message,
    },
    { root: true }
  );
  NProgress.done();
  if (to && next) {
    next(to);
  }
}
