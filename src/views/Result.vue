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
    <v-row>
      <v-btn @click="change">Increase Result</v-btn>
      <v-col
        cols="12"
        sm="12"
        md="6"
        v-for="i in 2"
        :key="i"
        class="d-flex flex-column justify-center align-center"
      >
        <BarChart
          name="MTU Student Union Candidate"
          :grouped_by="['candidate', 0, 'name']"
          :seried_by="['vote_count']"
          :result="result"
        />
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
      let changedCandidate = Object.assign({}, this.result[0]);
      changedCandidate.vote_count = changedCandidate.vote_count + 10;
      this.$set(this.result, 0, changedCandidate);
    },
  },
};
</script>
<style></style>
