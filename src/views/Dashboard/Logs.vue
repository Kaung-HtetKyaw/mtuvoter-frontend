<template>
  <v-container>
    <v-row class="white admin--border px-3 my-4">
      <v-col cols="12" sm="12"
        ><h2 class="text-body-1 py-3 font-weight-medium text-center">
          Log Feed
        </h2>
        <v-divider></v-divider
      ></v-col>
      <v-col
        cols="12"
        sm="12"
        class="d-flex flex-column justify-center align-center"
      >
        <LogCard v-for="i in 10" :key="i" />
      </v-col>
      <v-col cols="12" sm="12" class="d-flex justify-center">
        <BaseLoader />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BaseLogCard from "@/components/Base/BaseLogCard.vue";
import BaseLoader from "@/components/Base/BaseLoader.vue";
import { timeAgo } from "@/utils/time.js";
import {
  candidate_votes_by_student,
  election_result,
} from "@/dev-data/result.js";
export default {
  name: "Dashboard",
  components: {
    LogCard: BaseLogCard,
    BaseLoader,
  },
  data() {
    return {
      candidate_votes_by_student,
      election_result,
      elections: {
        items: [
          {
            createdAt: "2020-12-21T18:37:39.929Z",
            _id: "5fe0eb7fb96e760fb879dcb6",
            about: "br nayr sa mar ka lar",
            startDate: "2021-01-15T17:30:00.000Z",
            endDate: "2021-01-17T17:30:00.000Z",
            type: "student",
            name: "Student Union Election 2020",
            slug: "student-union-election-2020",
            raced: false,
            id: "5fe0eb7fb96e760fb879dcb6",
          },
          {
            createdAt: "2020-12-08T19:23:58.093Z",
            _id: "5fcfd2d261ad52120c1ff2b3",
            about: "Some details about studen union election 2020 ",
            startDate: "2020-12-16T17:30:00.000Z",
            endDate: "2020-12-17T17:30:00.000Z",
            type: "student",
            name: "Student Union Election 2020",
            slug: "student-union-election-2020",
            raced: true,
            id: "5fcfd2d261ad52120c1ff2b3",
          },
        ],
        headings: ["name", "startDate", "endDate", "raced"],
      },
      users: {
        items: [
          {
            name: "Kaung Htet Kyaw",
            email: "kgsama@gmail.com",
            role: "mod",
            activity: timeAgo(new Date().getTime()),
          },
        ],
        headings: ["name", "email", "role", "activity"],
      },
    };
  },
};
</script>

<style></style>
