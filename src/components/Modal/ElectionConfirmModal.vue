<template>
  <v-row>
    <v-dialog scrollable v-model="dialog" persistent max-width="620px">
      <template v-slot:activator="{ on, attrs }">
        <slot v-bind:activator="{ on, attrs }"></slot>
      </template>
      <v-card class="px-0 py-0 px-md-3 py-md-3 px-lg-5 py-lg-5">
        <div class="width-100 d-flex justify-end">
          <v-btn
            :ripple="false"
            class="mx-2"
            fab
            icon
            dark
            depressed
            color="deep-purple darken-2 rotate-45 my-2"
            x-small
            @click="dialog = false"
          >
            <v-icon dark class="rotate-45">
              mdi-plus
            </v-icon>
          </v-btn>
        </div>
        <v-card-title
          class="px-4  px-lg-6 text-center d-flex justify-center align-center"
        >
          <span
            class=" text-subtitle-1 text-center text-md-h6 font-weight-bold red--text darken-2"
            >Are you sure to delete this election ?</span
          >

          <p
            class="text-body-2 text-center my-0 font-weight-medium text--secondary mt-6 px-6"
          >
            Notice that the election and the related datas cannot be restored
            after the deletion.
          </p>
        </v-card-title>
        <v-card-text class="add-mod mt-6">
          <v-btn
            dense
            color="red darken-2"
            class="white--text text-capitalize mb-6"
            depressed
            block
            :loading="loading"
            @click="deleteElection"
            >Continue</v-btn
          >
          <!-- <v-btn
            dense
            color="deep-purple darken-2"
            class="text-capitalize"
            depressed
            block
            text
            :disabled="false"
            >Cancel</v-btn
          > -->
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import store from "@/store/index.js";
import { showNoti } from "@/utils/noti.js";
export default {
  name: "Confirm-Modal",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    dialog: false,
    loading: false,
  }),
  methods: {
    async deleteElection() {
      const vm = this;
      vm.loading = true;
      await store
        .dispatch("election/deleteElection", {
          electionId: vm.id,
        })
        .then(() => {
          vm.loading = false;
          showNoti("success", "Election has been successfully deleted.");
          vm.$router.replace({ name: "Elections" });
        })
        .catch(() => {
          vm.loading = false;
          showNoti("error", "Error deleting election");
        });
    },
  },
};
</script>
<style lang="scss">
.v-text-field.v-text-field--enclosed .v-text-field__details {
  margin-bottom: 0px;
}
.auth-info {
  li {
    margin: 10px 0;
  }
}
.add-mod {
  .access-table__mod {
    &__wrapper {
      background-color: #f6f8fa;
      border: 1px solid rgba(0, 0, 0, 0.39);
      cursor: pointer;
    }
  }
  .no-result {
    border: 1px solid rgba(0, 0, 0, 0.39);
    background-color: #f6f8fa;
  }
}
</style>
