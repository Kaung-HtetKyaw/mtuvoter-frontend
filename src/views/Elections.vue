<template>
  <v-container class="mt-4 mb-8 py-0 ">
    <v-row>
      <v-col
        cols="12"
        sm="12"
        class="d-flex flex-column justify-center align-center deep-purple--text darken-2"
      >
        <h1 class="d-inline-block elections--title">Elections</h1>
        <ElectionQuote />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="6" lg="4">
        <ElectionCard />
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="4">
        <ElectionCard />
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="4">
        <ElectionCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ElectionCard from "@/components/Election/ElectionCard.vue";
import ElectionQuote from "@/components/UI/BlockquoteElection.vue";
export default {
  name: "Elections",
  components: {
    ElectionCard,
    ElectionQuote,
  },
};
</script>

<style lang="scss" scoped>
.elections {
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
