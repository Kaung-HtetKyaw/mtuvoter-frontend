<template>
  <v-container class="faq mb-8">
    <v-row class="mb-4">
      <v-col
        cols="12"
        sm="12"
        class="d-flex flex-column justify-center align-center deep-purple--text darken-2"
      >
        <h1
          class="d-inline-block text-h6 text-md-h5 text-lg-h5 font-weight-bold workssan text-center faq--title py-2"
        >
          Frequently Asked Questions
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        class="d-flex justify-center align-center"
        v-for="i in 3"
        :key="i"
      >
        <BaseAccordion />
      </v-col>
    </v-row>
    <v-row class="my-6">
      <v-col cols="12" sm="12" class="d-flex justify-center align-center">
        <BaseLoader />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import BaseAccordion from "@/components/Base/BaseAccordion.vue";
import BaseLoader from "@/components/Base/BaseLoader.vue";
export default {
  name: "faq",
  components: {
    BaseAccordion,
    BaseLoader,
  },
};
</script>

<style lang="scss" scoped>
.faq {
  &--title {
    position: relative;
    &::before {
      content: "";
      width: 50%;
      height: 2px;
      background-color: #5545a8;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
}
</style>
