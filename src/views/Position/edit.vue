<template>
  <v-container class="px-0">
    <v-row justify="center">
      <v-col cols="12" sm="12">
        <div class="px-3">
          <v-alert
            dismissible
            color="deep-purple darken-2"
            border="left"
            elevation="2"
            colored-border
            icon="mdi-information"
            class="text-body-2 text-md-subtitle-1"
          >
            Go
            <router-link
              :to="{
                name: 'Election-Edit',
                params: { election: position._id },
              }"
              class="text-decoration-underline px-1"
              >here</router-link
            >
            to update the <strong>related Election</strong> detail.
          </v-alert>
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-card class="elevation-2 pb-6">
          <v-card-title
            class="deep-purple darken-2 white--text d-flex justify-center"
            >Update Positions Details</v-card-title
          >
          <v-card-text class="mt-6 px-1">
            <v-form ref="form" class="px-2">
              <v-text-field
                outlined
                label="Provide Position's name"
                required
                v-model="position.name"
              ></v-text-field>
              <v-textarea
                outlined
                label="Provide Position's information briefly"
                required
                v-model="position.description"
              ></v-textarea>

              <div
                class="width-100 d-flex flex-column justify-center align-center"
              >
                <v-btn
                  color="deep-purple darken-2"
                  class="white--text text-capitalize"
                  block
                  depressed
                  :ripple="false"
                  :loading="loading"
                  @click="updatePosition"
                  >Update Positions</v-btn
                >
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import store from "@/store/index.js";
import { showNoti } from "@/utils/noti.js";
import { mapState } from "vuex";
export default {
  name: "Election-New-Position",
  data() {
    return {
      position: {},
      loading: false,
    };
  },
  computed: {
    ...mapState({
      election: (state) => state.election.election,
    }),
    originalPosition() {
      return this.election.positions.find(
        (el) => el._id === this.$route.params.position
      );
    },
  },
  beforeRouteEnter(to, from, next) {
    if (
      !store.state.election.election ||
      store.state.election._id !== to.params.position._election
    ) {
      showNoti(
        "error",
        "You must go to the election page to update this position",
        { name: "Elections" },
        next
      );
      return;
    }
    next();
  },
  created() {
    this.position = { ...this.originalPosition };
  },
  methods: {
    async updatePosition() {
      const vm = this;
      this.loading = true;

      await store
        .dispatch("election/updatePosition", {
          position: vm.position,
        })
        .then(() => {
          vm.loading = false;
          showNoti(
            "success",
            "Position informations have been updated successfully"
          );
          vm.$router.replace({
            name: "Election",
            params: { election: vm.position._election },
          });
        })
        .catch(() => {
          vm.loading = false;
          showNoti("error", "Error updating position informations");
        });
    },
  },
};
</script>

<style></style>
