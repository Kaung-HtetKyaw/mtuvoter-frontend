<template>
  <v-container class="px-0">
    <v-row justify="center">
      <v-col cols="12" sm="12">
        <div class="px-3">
          <v-alert
            dismissible
            color="deep-purple darken-4"
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
                params: { election: election._id }
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
            class="deep-purple darken-4 white--text d-flex justify-center"
            >Enter Positions Details</v-card-title
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
                  color="deep-purple darken-4"
                  class="white--text text-capitalize"
                  block
                  depressed
                  :ripple="false"
                  :loading="loading"
                  @click="addPosition"
                  >Add Position</v-btn
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
      loading: false
    };
  },
  computed: {
    ...mapState({
      election: state => state.election.election
    })
  },
  beforeRouteEnter(to, from, next) {
    if (!store.state.election.election) {
      showNoti(
        "error",
        "You must go to the election page to add new position to the election",
        { name: "Elections" },
        next
      );
      return;
    }
    next();
  },
  created() {
    this.position._election = this.$route.params.election;
  },

  methods: {
    async addPosition() {
      const vm = this;
      this.loading = true;

      await store
        .dispatch("election/addPosition", {
          position: vm.position
        })
        .then(() => {
          vm.loading = false;
          showNoti(
            "success",
            "Position has been added to the election successfully"
          );
          vm.$router.replace({
            name: "Election-Single",
            params: { election: vm.position._election }
          });
        })
        .catch(() => {
          vm.loading = false;
          showNoti("error", "Error creating new position for the election");
        });
    }
  }
};
</script>

<style></style>
