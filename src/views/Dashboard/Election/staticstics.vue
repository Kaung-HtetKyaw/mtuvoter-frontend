<template>
  <v-container>
    <v-row>
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
            This election has already been called raced. Go
            <router-link
              :to="{
                name: 'Election',
                params: { election: 'alo' },
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
          MTU Student Union Election 2020
        </h1>
        <v-divider></v-divider>
      </v-col>
      <v-col cols="12" sm="12">
        <h2 class="text-body-1 py-3 font-weight-medium text-center">
          Previous Election Results
        </h2>
        <v-divider></v-divider>
      </v-col>
      <v-col cols="12" sm="12" md="6" v-for="i in 2" :key="i"
        ><BarChart
          :result="election_result"
          :grouped_by="['candidate', 0, 'name']"
          :seried_by="['vote_count']"
          name="Presidental Candidate Result"
      /></v-col>
      <v-col cols="12" sm="12">
        <BarChart
          :result="candidate_votes_by_student"
          :grouped_by="['student_type']"
          :seried_by="['vote_count']"
          name="Votes By Student type"
        />
      </v-col>
    </v-row>
    <v-row class="white admin--border px-3 my-4 pb-6">
      <v-col cols="12" sm="12">
        <h2 class="text-h6 py-3 font-weight-medium text-center">
          Candidates
        </h2>
        <v-divider></v-divider>
      </v-col>
      <v-col cols="12" sm="12">
        <h2 class="text-body-1 py-3 font-weight-medium text-center">
          Presidental Candidates
        </h2>
        <v-divider></v-divider>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        class="d-flex flex-column justify-center align-center"
      >
        <v-btn
          color="deep-purple darken-2 "
          class="white--text text-capitalize"
          depressed
          :ripple="false"
        >
          Load Presidental Candidates
        </v-btn>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="4" v-for="i in 3" :key="i">
        <CandidateCard />
      </v-col>

      <v-col cols="12" sm="12">
        <h2 class="text-body-1 py-3 font-weight-medium text-center">
          Secretarial Candidates
        </h2>
        <v-divider></v-divider>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        class="d-flex flex-column justify-center align-center"
      >
        <v-btn
          color="deep-purple darken-2 "
          class="white--text text-capitalize"
          depressed
          :ripple="false"
        >
          Load Secretarial Candidates
        </v-btn>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="4" v-for="i in 3" :key="i">
        <CandidateCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BarChart from "@/components/Chart/Bar.vue";
import CandidateCard from "@/components/Candidate/CandidateCardStats.vue";
import {
  candidate_votes_by_student,
  election_result,
} from "@/dev-data/result.js";

export default {
  name: "Staticstics",
  components: {
    BarChart,
    CandidateCard,
  },
  data() {
    return {
      candidate_votes_by_student,
      election_result,
    };
  },
};
</script>

<style></style>
