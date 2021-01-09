<template>
  <v-container>
    <v-row class="white admin--border px-3 my-4">
      <v-col cols="12" sm="12">
        <h2 class="text-body-1 py-3 font-weight-medium text-center">
          Previous Election Results
        </h2>
        <v-divider></v-divider>
      </v-col>
      <v-col cols="12" sm="12" md="6"><BarChart /></v-col>
      <v-col cols="12" sm="12" md="6"><BarChart /></v-col>
    </v-row>
    <v-row class="white admin--border px-3 my-4">
      <v-col cols="12" sm="12"
        ><h2 class="text-body-1 py-3 font-weight-medium text-center">
          Elections List
        </h2>
        <v-divider></v-divider
      ></v-col>
      <v-col cols="12" sm="12">
        <ElectionTable />
      </v-col>
      <v-col cols="12" sm="12" class="d-flex justify-center">
        <v-btn outlined color="deep-purple darken-2 " class="text-capitalize"
          >See All Election</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BarChart from "@/components/Chart/Bar.vue";
import BaseTable from "@/components/Base/BaseTable.vue";
export default {
  name: "Dashboard",
  components: {
    BarChart,
    ElectionTable: BaseTable,
  },
};
</script>

<style></style>
