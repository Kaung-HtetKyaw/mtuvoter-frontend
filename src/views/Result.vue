<template>
  <v-container class="mb-6">
    <v-row>
      <v-col cols="12" sm="12">
        <template>
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
              If you haven't voted yet, please contribute to the community by
              voting
              <router-link
                :to="{
                  name: 'Election-Single',
                  params: { election: $route.params.election },
                }"
                class="text-decoration-underline"
                >Here
              </router-link>
            </v-alert>
          </div>
        </template>
      </v-col>
    </v-row>

    <v-row v-if="!loading">
      <v-col cols="12" sm="12" class="width-100">
        <h1
          class="text-capitalize title-underline text-h5 text-md-h5 text-lg-h5 font-weight-bold text-center pb-2"
        >
          {{ election.name }}
        </h1>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="6"
        v-for="(result, i) in results"
        :key="i"
        class="d-flex flex-column justify-center align-center"
      >
        <BarChart
          :name="election.positions[i].name"
          :grouped_by="['candidate', 0, 'name']"
          :seried_by="['vote_count']"
          :result="result.result"
        />
      </v-col>
    </v-row>
    <v-row class="loader" justify="center" align="center" v-else>
      <BaseLoader />
    </v-row>
  </v-container>
</template>

<script>
import axios from "@/services/axios.js";
import { showNoti } from "@/utils/noti.js";
import {
  convertInitialElectionDataToResult,
  updateResults,
} from "@/utils/chart.js";
import { mapState } from "vuex";
import store from "@/store/index.js";
const BarChart = () => import('@/components/Chart/Bar.vue');
const BaseLoader = () => import('@/components/Base/BaseLoader.vue');
import Pusher from "pusher-js";
export default {
  name: "Result",
  components: {
    BarChart,
    BaseLoader,
  },
  data() {
    return {
      results: [],
      loading: false,
    };
  },
  computed: {
    ...mapState({
      election: (state) => state.election.election,
    }),
  },
  async beforeRouteEnter(to, from, next) {
    let election = store.state.election.singleElection;
    if (!election || election._id !== to.params.election) {
      election = await store.dispatch(
        "election/getElection",
        to.params.election
      );
    }
    store.dispatch("UI/changeLoadingState", true);
    next();
  },
  async created() {
    this.loading = true;
    await this.loadResults();
    this.subscribe();
  },
  methods: {
    async loadResults() {
      const vm = this;

      const positions = vm.election.positions.map((el) => el._id);
      await Promise.all(positions.map((el) => vm.loadForOnePosition(el)))
        .then((res) => {
          console.log(res)
          let initial_result = convertInitialElectionDataToResult(
            this.election.positions,
            this.election.candidates
          );
          vm.results = updateResults(initial_result, res);
          vm.loading = false;
        })
        .catch(() => {
          showNoti("error", "Error loading results");
        });
    },
    async addNewVote(newVote) {
      // get the position which new votes got added
      let changedPosition = Object.assign(
        {},
        this.results.find((result) => result.position === newVote.position)
      );
      let changedPositionIndex = this.results.findIndex(
        (result) => result.position === newVote.position
      );

      // get the candidate who got voted
      let changedCandidate = changedPosition.result.find(
        (el) => el.candidate[0]._id === newVote.candidate
      );
      changedCandidate.vote_count++;
      let changedCandidateIndex = changedPosition.result.findIndex(
        (el) => el.candidate[0]._id === newVote.candidate
      );

      // replace the candidate result with the new result
      changedPosition.result.splice(changedCandidateIndex, 1, changedCandidate);
      // replace with the position result which contain new votes
      this.$set(this.results, changedPositionIndex, {
        position: newVote.position,
        result: changedPosition.result,
      });
    },
    async subscribe() {
      const vm = this;
      let pusher = new Pusher(process.env.VUE_APP_PUSHER_KEY, {
        cluster: process.env.VUE_APP_PUSHER_CLUSTER,
      });
      pusher.subscribe("vote-result");
      pusher.bind("new-vote", (data) => {
        vm.addNewVote(data);
      });
    },
    async loadForOnePosition(positionId) {
      const vm = this;
      return await axios()
        .get(`/ballots/elections/${vm.election._id}/positions/${positionId}`)
        .then((res) => {
          return { position: positionId, result: res.data.data };
        })
        .catch(() => {
          showNoti("error", "Error Loading Results");
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.loader {
  height: 85vh;
  width: 100%;
}
</style>
