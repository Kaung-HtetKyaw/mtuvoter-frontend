<template>
  <v-container>
    <v-row class="white admin--border px-3 my-4">
      <v-col cols="12" sm="12"
        ><h2 class="text-body-1 py-3 font-weight-medium text-center">
          Logs Feed
        </h2>
        <v-divider></v-divider
      ></v-col>
      <v-col
        cols="12"
        sm="12"
        class="d-flex flex-column justify-center align-center"
      >
        <LogCard
          v-for="(log, index) in logs"
          :key="log._id"
          :log="log"
          v-observe-visibility="index === logs.length - 1 ? loadLogs : false"
        />
      </v-col>
      <v-col cols="12" sm="12" class="d-flex justify-center">
        <BaseLoader v-if="loading" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const BaseLogCard = () => import("@/components/Base/BaseLogCard.vue");
const BaseLoader = () => import("@/components/Base/BaseLoader.vue");
import {
  candidate_votes_by_student,
  election_result
} from "@/dev-data/result.js";
import axios from "@/services/axios.js";
import { showNoti } from "@/utils/noti.js";
export default {
  name: "Dashboard",
  components: {
    LogCard: BaseLogCard,
    BaseLoader
  },
  data() {
    return {
      candidate_votes_by_student,
      election_result,
      page: 1,
      limit: 10,
      end: false,
      loading: false,
      logs: []
    };
  },
  async created() {
    await this.loadLogs();
  },
  methods: {
    async loadLogs(isVisible) {
      const vm = this;
      console.log(isVisible);
      if (vm.end || vm.loading) {
        return;
      }
      vm.loading = true;
      await axios()
        .get(`/logs?page=${vm.page}&limit=${vm.limit}`)
        .then(res => {
          console.log(res.data.data.length);
          if (vm.logs.length > 0 && res.data.data.length === 0) {
            vm.end = true;
            vm.loading = false;
            return;
          }
          vm.logs = vm.logs.concat(res.data.data);
          vm.loading = false;
          vm.page++;
        })
        .catch(e => {
          vm.loading = false;
          showNoti("error", e.response.message);
        });
    }
  }
};
</script>

<style></style>
