<template>
  <v-container class="mt-4 mb-8 py-0">
    <v-row class="white admin--border px-0 px-md-3 my-4 py-4 px-0">
      <v-col cols="12" sm="12">
        <h2 class="text-subtitle-1 py-3 font-weight-medium text-center">
          Election Lists
        </h2>
        <v-divider></v-divider>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="6"
        v-for="(item, i) in [1, 2, 3]"
        :key="i"
      >
        <ElectionCard :stats="true" />
      </v-col>

      <v-col cols="12" sm="12" class="d-flex justify-center align-center">
        <BaseLoader />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ElectionCard from "@/components/Election/ElectionCard.vue";
import BaseLoader from "@/components/Base/BaseLoader.vue";
export default {
  name: "Elections",
  components: {
    ElectionCard,
    BaseLoader,
  },
  data() {
    return {};
  },
  methods: {},
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
