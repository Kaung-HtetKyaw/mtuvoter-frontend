<template>
  <div>
    <v-card color="#fff" :rounded="true" class="workssan" elevation="6">
      <div>
        <div>
          <v-chip
            v-if="election.raced"
            small
            class="ma-2"
            color="red darken-4 white--text my-3 font-weight-bold"
          >
            Raced
          </v-chip>
          <v-chip
            v-if="holding"
            small
            class="ma-2"
            color="light-green lighten-1 white--text my-3 font-weight-bold"
          >
            Live
          </v-chip>

          <v-chip
            v-if="Date.now() < new Date(dates.start)"
            small
            class="ma-2"
            color="deep-purple darken-4 white--text my-3 font-weight-bold"
          >
            Soon
          </v-chip>
          <v-divider></v-divider>
          <v-chip
            v-if="
              authenticated &&
                (userDetail.role === 'admin' || userDetail.role === 'mod')
            "
            small
            outlined
            class="ma-2"
            color="deep-purple darken-4 white--text my-3 font-weight-bold"
          >
            {{ election.published ? "Published" : "Unpublished" }}
            <v-icon v-if="election.published" x-small class="ml-1"
              >mdi-check-circle</v-icon
            >
          </v-chip>
          <v-divider></v-divider>
          <v-card-title class="election-title  font-weight-bold text-center">{{
            election.name
          }}</v-card-title>
          <v-divider></v-divider>
          <v-timeline align-top dense>
            <v-timeline-item color="#54AF51" small>
              <template v-slot:opposite>
                <span>Starts</span>
              </template>
              <div>
                <div class="font-weight-normal">
                  {{ new Date(dates.start).toLocaleString() }}
                </div>
              </div>
            </v-timeline-item>

            <v-timeline-item color="#E53935" small>
              <div>
                <div class="font-weight-normal">
                  {{ new Date(dates.end).toLocaleString() }}
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>

          <v-divider></v-divider>
          <v-card-actions class="px-4 py-4 d-flex justify-center">
            <v-btn
              class="text-capitalize election-btn deep-purple darken-4 white--text font-weight-medium"
              :ripple="false"
              elevation="0"
              :to="{
                name: 'Election-Single',
                params: { election: election.id }
              }"
              >View Details</v-btn
            >
            <v-btn
              v-if="stats"
              class="text-capitalize election-btn deep-purple darken-4 white--text font-weight-medium"
              :ripple="false"
              elevation="0"
              :to="{
                name: 'Dashboard-Staticstics-Election',
                params: { election: election.id }
              }"
              >View Statictics</v-btn
            >
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
// import { formatISODate } from "@/utils/time.js";
export default {
  name: "ElectionCard",
  props: {
    election: {
      type: Object,
      required: true
    },
    stats: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    holding() {
      return (
        Date.now() > new Date(this.dates.start) &&
        Date.now() < new Date(this.dates.end)
      );
    },
    dates() {
      return {
        start: this.election.startDate,
        end: this.election.endDate
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>
