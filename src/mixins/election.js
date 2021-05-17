import store from "@/store/index.js";
import { showNoti } from "@/utils/noti.js";
export const checkElection = {
  beforeRouteEnter(to, from, next) {
    if (!store.state.election.election) {
      showNoti(
        "error",
        "You must go to the election page to update candidate",
        { name: "Elections" },
        next
      );
      return;
    }
    next();
  }
};
