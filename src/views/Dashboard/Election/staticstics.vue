<template>
  <v-container>
    <v-row>
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
            This election has already been called raced. Go
            <router-link
              :to="{
                name: 'Election-Single',
                params: { election: election._id }
              }"
              class="text-decoration-underline px-1"
              >here</router-link
            >
            to see the details.
          </v-alert>
        </div>
      </v-col>
    </v-row>
    <v-row class="white admin--border px-3 my-4 pb-6">
      <v-col cols="12" sm="12">
        <h1 class="text-h6 py-3 font-weight-medium text-center">
          {{ election.name }}
        </h1>
        <v-divider></v-divider>
      </v-col>
      <v-col cols="12" sm="12">
        <h2 class="text-body-1 py-3 font-weight-medium text-center">
          Previous Election Results
        </h2>
        <v-divider></v-divider>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="6"
        v-for="(result, i) in result_by_position"
        :key="i"
        ><BarChart
          :result="result"
          :grouped_by="['candidate', 0, 'name']"
          :seried_by="['vote_count']"
          :name="election.positions[i].name"
      /></v-col>
      <v-col cols="12" sm="12">
        <BarChart
          :result="result_by_student"
          :grouped_by="['student_type']"
          :seried_by="['vote_count']"
          name="Votes By Student type"
        />
      </v-col>
    </v-row>
    <v-row class="white admin--border px-3 mt-4 pb-6">
      <v-col cols="12" sm="12">
        <h2 class="text-h6 py-3 font-weight-medium text-center">
          Candidates
        </h2>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row
      v-for="position in election.positions"
      :key="position._id"
      class="white admin--border px-3 mb-4 pb-6"
    >
      <v-col cols="12" sm="12">
        <h2 class="text-body-1 py-3 font-weight-medium text-center">
          {{ position.name }} Candidates
        </h2>
        <v-divider></v-divider>
      </v-col>

      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="4"
        v-for="candidate in election.candidates.filter(
          el => el._post === position._id
        )"
        :key="candidate._id"
      >
        <CandidateCard :candidate="candidate" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const BarChart = () => import("@/components/Chart/Bar.vue");
const CandidateCard = () =>
  import("@/components/Candidate/CandidateCardStats.vue");
import {
  candidate_votes_by_student,
  election_result
} from "@/dev-data/result.js";

import store from "@/store/index.js";
import { mapState } from "vuex";

export default {
  name: "Staticstics",
  components: {
    BarChart,
    CandidateCard
  },
  data() {
    return {
      candidate_votes_by_student,
      election_result
    };
  },
  computed: {
    ...mapState({
      election: state => state.election.election,
      result_by_position: state => state.result.result_by_position,
      result_by_student: state => state.result.result_by_student
    })
  },
  async beforeRouteEnter(to, from, next) {
    // load election detail
    let election = store.state.election.election;
    if (!election || election._id !== to.params.election) {
      election = await store.dispatch(
        "election/getElection",
        to.params.election
      );
    }
    await store.dispatch("result/getElectionResultsByPositions", { election });
    await store.dispatch("result/getElectionResultByStudentType", {
      electionId: election._id
    });
    // chage the ui state
    store.dispatch("UI/changeLoadingState", true);

    next();
  }
};
</script>

<style></style>
