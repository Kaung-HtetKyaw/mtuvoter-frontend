<template>
  <div
    class="access-table__mod px-6 d-flex flex-column flex-md-row justify-md-space-between align-md-center justify-center align-space-between"
  >
    <div class="mod--info">
      <div
        class="deep-purple--text darken-4 text-body-2 font-weight-bold text-decoration-underline"
      >
        {{ mod.email }}
      </div>
      <span class="text-caption">{{ mod.name }}</span
      ><span class="font-weight-bold mx-1 text-h4">.</span
      ><span class="text-capitalize">{{ mod.role }}</span>
    </div>
    <div class="mod--action">
      <v-btn
        color="red darken-4"
        class="white--text text-capitalize"
        depressed
        small
        :ripple="false"
        :loading="removing"
        @click="removeMod"
        >Remove</v-btn
      >
    </div>
  </div>
</template>

<script>
import axios from "@/services/axios.js";
import { showNoti } from "@/utils/noti.js";
export default {
  name: "BaseModCard",
  props: {
    mod: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      removing: false,
    };
  },
  methods: {
    async removeMod() {
      const vm = this;
      vm.removing = true;
      await axios()
        .patch(`/users/roles`, { email: vm.mod.email })
        .then(() => {
          vm.$emit("remove-mod", vm.mod);
          vm.removing = false;
          showNoti("success", "Moderator has been successfully removed");
        })
        .catch((e) => {
          console.log(e.response);
          vm.removing = false;
          showNoti("error", e.response.message);
        });
    },
  },
};
</script>

<style></style>
