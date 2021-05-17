<template>
  <div
    class="elevation-5 px-2 py-2 px-md-6 py-md-6 rounded chart__wrapper my-3 white"
  >
    <h2
      class="result__title--candidate text-subtitle-1  my-3 deep-purple--text darken-4 workssan font-weight-medium text-center pb-4 "
    >
      {{ name }}
    </h2>
    <apexchart
      type="pie"
      :options="chartOptions"
      :height="350"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
// import { getNestedPropertyFromDotString } from "@/utils/utils.js";
export default {
  name: "BarChart",
  props: {
    name: {
      type: String,
      required: true
    },
    pie_labels: {
      type: Array,
      required: true
    },
    series: {
      type: Array,
      required: true
    }
  },
  created() {
    this.chartOptions.labels = this.pie_labels;
  },
  data() {
    return {
      chartOptions: {
        chart: {
          width: 380,
          height: 800,
          type: "pie"
        },
        labels: [],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {},
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      }
    };
  }
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
