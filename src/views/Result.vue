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
        <div
          class="elevation-5 px-2 py-2 px-md-6 py-md-6 rounded chart__wrapper my-3 white"
        >
          <h2
            class="result__title--candidate my-3 workssan font-weight-medium text-center py-2"
          >
            Presidental Candidates
          </h2>
          <apexchart
            type="bar"
            :options="options"
            :height="350"
            :series="series"
          ></apexchart>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Result",
  data() {
    return {
      options: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [
            "Kyaw Toe Toe Han",
            "Zayar Min Htin",
            "Pyae Htoo Khant",
            "Kyi Khaing Khant Soe",
          ],
        },
      },
      series: [
        {
          name: "MTUSU Presidental Candidate",
          data: [400, 430, 448, 300],
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

<style lang="scss" scoped>
.chart {
  &__wrapper {
    width: 100%;
  }
}
.result__title {
  &--candidate {
    position: relative;
    // color: #301934;
    &::before {
      content: "";
      width: 100%;
      height: 2px;
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: #5545a8;
    }
  }
}
</style>
