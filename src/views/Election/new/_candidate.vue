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
              :to="{ name: 'Election-Edit', params: { election: electionId } }"
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
                params: { election: electionId, position: positionId },
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
            >Enter Candidates Details</v-card-title
          >
          <v-card-text class="mt-6 px-1">
            <v-form ref="form" class="px-2">
              <div v-for="i in candidates.length" :key="i">
                <div class="width-100 d-flex justify-end">
                  <v-btn
                    v-if="i - 1 > 0"
                    :ripple="false"
                    class="mx-2"
                    fab
                    dark
                    depressed
                    color="deep-purple darken-2 rotate-45 my-2"
                    x-small
                    @click="removeCandidate(i - 1)"
                  >
                    <v-icon dark>
                      mdi-plus
                    </v-icon>
                  </v-btn>
                </div>
                <v-text-field
                  outlined
                  label="Enter Candidate name"
                  required
                  v-model="candidates[i - 1].name"
                ></v-text-field>
                <v-text-field
                  outlined
                  label="Enter Candidate email"
                  required
                  v-model="candidates[i - 1].email"
                ></v-text-field>
                <v-text-field
                  outlined
                  label="Enter Candidate major"
                  required
                  v-model="candidates[i - 1].major"
                ></v-text-field>
                <v-select
                  :items="yearArray"
                  label="Candidate's attending year"
                  dense
                  v-model="candidates[i - 1].year"
                  outlined
                ></v-select>
                <v-file-input
                  class="user-photo"
                  accept="image/*"
                  label="Upload Candidate Photo Here"
                  outlined
                  dense
                  show-size
                  v-model="candidates[i - 1].photo"
                ></v-file-input>
                <v-textarea
                  outlined
                  label="Enter Candidate's Election or Campaign Promise"
                  required
                  v-model="candidates[i - 1].promise"
                ></v-textarea>
              </div>

              <div
                class="width-100 d-flex flex-column justify-center align-center"
              >
                <v-btn
                  :ripple="false"
                  class="mx-2 mb-6"
                  fab
                  dark
                  color="deep-purple darken-2"
                  @click="addCandidate"
                >
                  <v-icon dark>
                    mdi-plus
                  </v-icon>
                </v-btn>
                <v-btn
                  color="deep-purple darken-2"
                  class="white--text text-capitalize"
                  block
                  depressed
                  :ripple="false"
                  :loading="loading"
                  @click="createCandidates"
                  >Create Candidates</v-btn
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
import store from "@/store/index.js";
export default {
  name: "Election-New-Position",
  data() {
    return {
      candidates: [],
      yearArray: yearArray,
      loading: false,
    };
  },
  computed: {
    electionId() {
      return this.$route.params.election;
    },
    positionId() {
      return this.$route.params.position;
    },
  },
  beforeRouteEnter(to, from, next) {
    const { election } = to.params;
    if (
      !store.state.election.election ||
      store.state.election.election._id !== election
    ) {
      showNoti(
        "error",
        "Please go to the election page or create an election first to add new candidates.",
        { name: "Election-Single", params: { election } },
        next
      );
      return;
    }
    next();
  },
  created() {
    // add the first candidate
    this.addCandidate();
  },
  methods: {
    async createCandidates() {
      const vm = this;
      vm.loading = true;
      console.log(vm.convertToFormArray(vm.candidates));
      await store
        .dispatch("election/addCandidates", {
          electionId: vm.electionId,
          positionId: vm.positionId,
          candidates: vm.convertToFormArray(vm.candidates),
        })
        .then((res) => {
          vm.loading = false;
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
          showNoti("error", "Error creating new candidates.");
        });
    },
    addCandidate() {
      this.candidates.push({
        _election: this.electionId,
        _post: this.positionId,
        name: "",
        email: "",
        promise: "",
        photo: "",
        year: "",
      });
      console.log(this.candidates);
    },
    removeCandidate(index) {
      this.candidates.splice(index, 1);
      console.log(this.candidates);
    },
    convertToFormArray(data) {
      return data.map((el) => convertToForm(el));
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
