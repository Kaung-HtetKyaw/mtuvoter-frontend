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
      <v-col cols="12" sm="12" class="d-flex justify-center">
        <v-btn text color="deep-purple darken-2 " class="text-capitalize"
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
        <v-btn text color="deep-purple darken-2 " class="text-capitalize"
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
        <ElectionTable :items="users.items" :headings="users.headings" />
      </v-col>
      <v-col cols="12" sm="12" class="d-flex justify-center">
        <v-btn text color="deep-purple darken-2 " class="text-capitalize"
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
      <v-col cols="12" sm="12" class="d-flex justify-center align-center">
        <LogCard />
      </v-col>
      <v-col cols="12" sm="12" class="d-flex justify-center">
        <v-btn text color="deep-purple darken-2 " class="text-capitalize"
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
import BarChart from "@/components/Chart/Bar.vue";
import BaseTable from "@/components/Base/BaseTable.vue";
import BaseLogCard from "@/components/Base/BaseLogCard.vue";
export default {
  name: "Dashboard",
  components: {
    BarChart,
    ElectionTable: BaseTable,
    LogCard: BaseLogCard,
  },
  data() {
    return {
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
            activity: new Date().toISOString(),
          },
        ],
        headings: ["name", "email", "role", "activity"],
      },
    };
  },
};
</script>

<style></style>
