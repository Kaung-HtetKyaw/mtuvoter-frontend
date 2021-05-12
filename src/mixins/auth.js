import store from "@/store/index.js";
import { showNoti } from "@/utils/noti.js";

export default {
  data() {
    return {
      logging_out: false,
    };
  },
  methods: {
    async signOut() {
      const vm = this;
      vm.logging_out = true;
      await store
        .dispatch("user/logOut")
        .then(() => {
          vm.logging_out = false;
          if (vm.$route.name !== "Elections") {
            vm.$router.push({ name: "Elections" });
          } else {
            vm.$router.push({name:"Home"})
          }
        })
        .catch(() => {
          showNoti("error", "Error signing out");
        });
    },
  },
};
