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
              :to="{ name: 'Election-Edit', params: { election } }"
              class="text-decoration-underline px-1"
              >here</router-link
            >
            to update the <strong>related Election</strong> detail.
          </v-alert>
        </div>
      </v-col>
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
                name: 'Election-Position-Edit',
                params: {
                  election: candidate._election,
                  position: candidate._post,
                },
              }"
              class="text-decoration-underline px-1"
              >here</router-link
            >
            to update the <strong>related Position</strong> detail.
          </v-alert>
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-card class="elevation-2 pb-6">
          <v-card-title
            class="deep-purple darken-2 white--text d-flex justify-center"
            >Update Candidates Details</v-card-title
          >
          <v-card-text class="mt-6 px-1">
            <v-form ref="form" class="px-2">
              <div>
                <v-text-field
                  outlined
                  label="Enter Candidate name"
                  required
                  v-model="candidate.name"
                ></v-text-field>
                <v-text-field
                  outlined
                  label="Enter Candidate email"
                  required
                  v-model="candidate.email"
                ></v-text-field>
                <v-text-field
                  outlined
                  label="Enter Candidate major"
                  required
                  v-model="candidate.major"
                ></v-text-field>
                <v-select
                  :items="yearArray"
                  label="Candidate's attending year"
                  dense
                  v-model="candidate.year"
                  outlined
                ></v-select>
                <v-file-input
                  class="user-photo"
                  accept="image/*"
                  label="Upload Candidate Photo Here"
                  outlined
                  dense
                  show-size
                  v-model="candidate.photo"
                ></v-file-input>
                <v-textarea
                  outlined
                  label="Enter Candidate's Election or Campaign Promise"
                  required
                  v-model="candidate.promise"
                ></v-textarea>
              </div>

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
                  @click="updateCandidate"
                  >Update Candidates</v-btn
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
import { yearArray } from "@/utils/constants.js";
import { showNoti } from "@/utils/noti.js";
import { convertToForm } from "@/utils/utils.js";
// import axios from "@/services/axios.js";
import store from "@/store/index.js";
import { mapState } from "vuex";

export default {
  name: "Election-Edit-Candidate",
  data() {
    return {
      candidate: { name: "", email: "", promise: "", photo: "", year: "" },
      yearArray: yearArray,
      loading: false,
    };
  },
  computed: {
    ...mapState({
      election: (state) => state.election.election,
    }),
    originalCandidate() {
      return this.election.candidates.find(
        (el) => el._id === this.$route.params.candidate
      );
    },
    electionId() {
      return this.candidate._election;
    },
    positionId() {
      return this.candidate._post;
    },
  },
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
  },
  created() {
    console.log(this.originalCandidate);
    this.candidate = { ...this.originalCandidate };
  },
  methods: {
    async updateCandidate() {
      const vm = this;
      this.loading = true;
      // take the original image if no new image is selected
      if (!vm.candidate.photo) {
        vm.candidate.photo = vm.originalCandidate.photo;
      }
      const formData = convertToForm(vm.candidate, "PATCH");
      console.log(vm.candidate, formData, vm.electionId, vm.positionId);
      await store
        .dispatch("election/updateCandidate", {
          electionId: vm.electionId,
          positionId: vm.positionId,
          formData,
          candidate: vm.candidate,
        })
        .then(() => {
          vm.loading = false;
        })
        .catch(() => {
          vm.loading = false;
        });
    },
  },
};
</script>

<style lang="scss">
.user-photo {
  .v-input__prepend-outer {
    display: none !important;
  }
}
</style>
