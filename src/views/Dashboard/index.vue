<template>
  <v-container>
    <v-row class="white admin--border px-3 my-4">
      <v-col cols="12" sm="12">
        <h2 class="text-body-1 py-3 font-weight-medium text-center">
          Previous Election Results
        </h2>
        <v-divider></v-divider>
      </v-col>

      <v-col cols="12" sm="12" md="6" v-for="(result, i) in results" :key="i"
        ><BarChart
          :result="result"
          :grouped_by="['candidate', 0, 'name']"
          :seried_by="['vote_count']"
          :name="latest_election.positions[i].name"
      /></v-col>
      <v-col cols="12" sm="12" class="d-flex justify-center">
        <v-btn
          :to="{
            name: 'Dashboard-Staticstics-Election',
            params: { election: latest_election._id }
          }"
          :ripple="false"
          text
          color="deep-purple darken-4 "
          class="text-capitalize"
          >See All Staticstics
          <v-icon small class="px-1"
            >mdi-arrow-right-bold-circle-outline</v-icon
          >
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="white admin--border px-3 my-4">
      <v-col cols="12" sm="12"
        ><h2 class="text-body-1 py-3 font-weight-medium text-center">
          Elections List
        </h2>
        <v-divider></v-divider
      ></v-col>
      <v-col cols="12" sm="12">
        <ElectionTable
          :items="elections.items"
          :headings="elections.headings"
        />
      </v-col>
      <v-col cols="12" sm="12" class="d-flex justify-center">
        <v-btn
          :to="{ name: 'Dashboard-Elections' }"
          text
          color="deep-purple darken-4 "
          class="text-capitalize"
          >See All Election
          <v-icon small class="px-1"
            >mdi-arrow-right-bold-circle-outline</v-icon
          >
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="white admin--border px-3 my-4">
      <v-col cols="12" sm="12"
        ><h2 class="text-body-1 py-3 font-weight-medium text-center">
          Authorities List
        </h2>
        <v-divider></v-divider
      ></v-col>
      <v-col cols="12" sm="12">
        <ElectionTable
          :items="authorities.items"
          :headings="authorities.headings"
        />
        <v-divider></v-divider>
      </v-col>
      <v-col cols="12" sm="12" class="d-flex justify-center">
        <v-btn text color="deep-purple darken-4 " class="text-capitalize"
          >See All Authorities
          <v-icon small class="px-1"
            >mdi-arrow-right-bold-circle-outline</v-icon
          >
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="white admin--border px-3 my-4">
      <v-col cols="12" sm="12"
        ><h2 class="text-body-1 py-3 font-weight-medium text-center">
          Lastest Logs
        </h2>
        <v-divider></v-divider
      ></v-col>
      <v-col
        cols="12"
        sm="12"
        class="d-flex justify-center align-center"
        v-for="log in logs"
        :key="log._id"
      >
        <LogCard :log="log" />
      </v-col>
      <v-col cols="12" sm="12" class="d-flex justify-center">
        <v-btn text color="deep-purple darken-4 " class="text-capitalize"
          >See All Logs
          <v-icon small class="px-1"
            >mdi-arrow-right-bold-circle-outline</v-icon
          >
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const BarChart = () => import(/* webpackPrefetch: true */"@/components/Chart/Bar.vue");
const BaseTable = () => import(/* webpackPrefetch: true */"@/components/Base/BaseTable.vue");
const BaseLogCard = () => import(/* webpackPrefetch: true */"@/components/Base/BaseLogCard.vue");
import store from "@/store/index.js";
import axios from "@/services/axios.js";
import {
  candidate_votes_by_student,
  election_result
} from "@/dev-data/result.js";
export default {
  name: "Dashboard",
  components: {
    BarChart,
    ElectionTable: BaseTable,
    LogCard: BaseLogCard
  },
  data() {
    return {
      candidate_votes_by_student,
      election_result,
      elections: {
        items: [],
        headings: ["name", "startDate", "endDate", "raced"]
      },
      authorities: {
        items: [],
        headings: ["name", "email", "role"]
      },
      logs: [],
      results: null,
      latest_election: null
    };
  },
  async beforeRouteEnter(to, from, next) {
    let elections = store.state.election.elections;
    let latest_results = store.state.election.latest_results;

    if (elections.length == 0) {
      elections = await store.dispatch("election/getElections");
    }
    if (!latest_results) {
      latest_results = await store.dispatch("election/getLatestResults");
    }
    let authorities = await axios().get("/users/authorities?limit=10&page=1");
    let logs = await axios().get("/logs?limit=10&page=1");
    store.dispatch("UI/changeLoadingState", true);
    // set the data after the DOM update
    next(vm => {
      vm.elections.items = elections;
      vm.authorities.items = authorities.data.data;
      vm.logs = logs.data.data;
      vm.results = latest_results;
      vm.latest_election = store.state.election.latest_raced_election;
    });
  }
};
</script>

<style></style>
