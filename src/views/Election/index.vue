<template>
  <v-container class="mt-4 mb-8 py-0">
    <v-row>
      <v-col cols="12" sm="12">
        <v-alert
          dismissible
          color="deep-purple darken-2"
          border="left"
          elevation="2"
          colored-border
          icon="mdi-information"
          class="text-body-2 text-md-subtitle-1"
        >
          Create an election
          <router-link
            :to="{ name: 'Election-New' }"
            class="text-decoration-underline"
            >Here
          </router-link>
        </v-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        class="d-flex flex-column justify-center align-center deep-purple--text darken-2"
      >
        <h1 class="d-inline-block elections--title">Elections</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="4"
        v-for="election in elections"
        :key="election.id"
      >
        <ElectionCard :election="election" />
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
import ElectionCard from "@/components/Election/ElectionCard.vue";
import BaseLoader from "@/components/Base/BaseLoader.vue";
import axios from "@/services/axios.js";
export default {
  name: "Elections",
  components: {
    ElectionCard,
    BaseLoader,
  },
  data() {
    return {
      elections: [],
      page: 1,
      limit: 5,
      loading: false,
    };
  },
  async beforeRouteEnter(to, from, next) {
    const elections = await axios().get(`/elections?limit=5&page=1`);
    next((vm) => {
      vm.elections = elections.data.data;
      vm.page++;
    });
  },

  methods: {
    async loadElections() {
      this.loading = true;
      await axios()
        .get(`/elections?limit=${this.limit}&page=${this.page}`)
        .then((res) => {
          this.elections = res.data.data;
          this.page++;
          this.loading = false;
        });
    },
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
