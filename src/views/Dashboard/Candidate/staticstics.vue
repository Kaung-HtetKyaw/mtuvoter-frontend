<template>
  <v-container>
    <v-row v-if="loading">
      <BaseLoader/>
    </v-row>
    <v-row class="white admin--border px-3 my-4 pb-6" v-else>
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
      <v-col cols="12" sm="12">
        <PieChart
          :series="pie_chart_data.series"
          :pie_labels="pie_chart_data.labels"
          name="Vote Percentage for the position"
        />
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import BarChart from "@/components/Chart/Bar.vue";
import PieChart from '@/components/Chart/Pie.vue';
import BaseLoader from '@/components/Base/BaseLoader.vue'
import {
  candidate_votes_by_student,
  election_result,
} from "@/dev-data/result.js";
import store from "@/store/index.js";
import axios from '@/services/axios.js'
import { mapState } from "vuex";
import {showNoti} from '@/utils/noti.js'

export default {
  name: "Staticstics",
  components: {
    BarChart,
    PieChart,
    BaseLoader
  },
  data() {
    return {
      candidate_votes_by_student,
      election_result,
      pie_chart_data:null,
      loading:false
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
  async created() {
    await this.getCandidateVotePercentage()
  },
  methods:{
    async getCandidateVotePercentage() {
      const {election, position} = this.$route.params;
      const vm = this;
      vm.loading = true;
      return await axios().get(`/ballots/elections/${election}/positions/${position}`)
      .then((res)=>{
        vm.loading = false;
        vm.pie_chart_data = vm.convertRawdataToPiechartData(res.data.data);
        console.log(vm.pie_chart_data)
      })
      .catch(e=>{
        vm.loading = false;
        showNoti("error","Something went wrong");
        console.log(e)
      })
    },
    convertRawdataToPiechartData(raw) {
      const vm = this;
      let candidate_data = raw.find(el=>{
        return el.candidate[0]._id === vm.$route.params.candidate
      });

      let candidate = candidate_data.candidate[0]
      let candidate_vote_by_position = candidate_data.vote_count;
      let total_vote = raw.reduce((accumulator,cur)=>accumulator+cur.vote_count,0);
      return {
        series : [candidate_vote_by_position, total_vote-candidate_vote_by_position],
        labels:[candidate.name,"Other candidates"]
      }
    }
  }
};
</script>

<style></style>
