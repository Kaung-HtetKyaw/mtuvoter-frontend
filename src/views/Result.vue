<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12">
        <template>
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
              If you haven't voted yet, please contribute to the community by
              voting
              <router-link
                :to="{ name: 'Election', params: { election: 'alo' } }"
                class="text-decoration-underline"
                >Here
              </router-link>
            </v-alert>
          </div>
        </template>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="6"
        v-for="i in 2"
        :key="i"
        class="d-flex flex-column justify-center align-center"
      >
        <BarChart name="MTU Student Union Candidate" :result="result" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BarChart from "@/components/Chart/Bar.vue";
export default {
  name: "Result",
  components: {
    BarChart,
  },
  data() {
    return {
      result: [
        {
          vote_count: 20,
          candidate: [
            {
              name: "Kaung Htet Kyaw",
            },
          ],
        },
        {
          vote_count: 30,
          candidate: [
            {
              name: "Pyae Htoo Khant",
            },
          ],
        },
        {
          vote_count: 44,
          candidate: [
            {
              name: "Kyaw Toe Toe Han",
            },
          ],
        },
      ],
    };
  },
  methods: {
    change() {
      let newSeries = [...this.series];
      newSeries[0].data[0] = newSeries[0].data[0] + 10;
      this.series = newSeries;
    },
  },
};
</script>
<style></style>
