<template>
  <v-container>
    <v-row class="white admin--border px-3 my-4 pb-6">
      <v-col cols="12" sm="12">
        <h1 class="text-h6 py-3 font-weight-medium text-center">
          MTU Student Union Election 2020
        </h1>
        <v-divider></v-divider>
      </v-col>
      <v-col cols="12" sm="12">
        <h2 class="text-body-1 py-3 font-weight-medium text-center">
          Candidate Staticstics
        </h2>
        <v-divider></v-divider>
      </v-col>
      <v-col cols="12" sm="12">
        <BarChart
          :result="candidate_result"
          :grouped_by="['student_type']"
          :seried_by="['vote_count']"
          name="Votes By Student type"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BarChart from "@/components/Chart/Bar.vue";
import {
  candidate_votes_by_student,
  election_result,
} from "@/dev-data/result.js";
import store from "@/store/index.js";
import { mapState } from "vuex";

export default {
  name: "Staticstics",
  components: {
    BarChart,
  },
  data() {
    return {
      candidate_votes_by_student,
      election_result,
    };
  },
  computed: {
    ...mapState({
      candidate_result: (state) => state.result.candidate_result,
    }),
  },
  async beforeRouteEnter(to, from, next) {
    const { election, position, candidate } = to.params;
    await store.dispatch("result/getCandidateResultByStudentType", {
      electionId: election,
      positionId: position,
      candidateId: candidate,
    });
    store.dispatch("UI/changeLoadingState", true);
    next();
  },
};
</script>

<style></style>
