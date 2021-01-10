<template>
  <div
    class="elevation-5 px-2 py-2 px-md-6 py-md-6 rounded chart__wrapper my-3 white"
  >
    <h2
      class="result__title--candidate text-subtitle-1 my-3 deep-purple--text darken-2 workssan font-weight-medium text-center pb-4 font-weight-bold"
    >
      {{ name }}
    </h2>
    <apexchart
      type="bar"
      :options="options"
      :height="350"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import { getNestedPropertyFromDotString } from "@/utils/utils.js";
export default {
  name: "BarChart",
  props: {
    result: {
      type: Array,
      required: true,
    },
    grouped_by: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    seried_by: {
      type: Array,
      required: true,
    },
  },
  created() {
    this.options.xaxis.categories = this.result.map((el) => {
      return getNestedPropertyFromDotString(el, this.grouped_by);
    });
    this.series[0].data = this.result.map((el) =>
      getNestedPropertyFromDotString(el, this.seried_by)
    );
    this.series[0].name = this.name;
  },
  data() {
    return {
      options: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [],
        },
      },
      series: [
        {
          name: "",
          data: [],
        },
      ],
    };
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
