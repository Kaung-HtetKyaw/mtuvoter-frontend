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
        ><BarChart name="Presidental Candidate Result"
      /></v-col>
      <v-col cols="12" sm="12">
        <BarChart name="Votes By Student type" />
      </v-col>
    </v-row>
    <v-row class="white admin--border px-3 my-4 pb-6">
      <v-col cols="12" sm="12">
        <h2 class="text-body-1 py-3 font-weight-medium text-center">
          Candidate Staticstics
        </h2>
        <v-divider></v-divider>
      </v-col>

      <v-col cols="12" sm="12" md="6"
        ><PieChart name="Candidate votes by Student type"
      /></v-col>
    </v-row>
  </v-container>
</template>

<script>
import BarChart from "@/components/Chart/Bar.vue";
import PieChart from "@/components/Chart/Pie.vue";
export default {
  name: "Staticstics",
  components: {
    PieChart,
    BarChart,
  },
};
</script>

<style></style>
