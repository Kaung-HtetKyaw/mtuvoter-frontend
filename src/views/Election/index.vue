<template>
  <div>
    <v-container
      class="loading-wrapper d-flex justify-center align-center"
      v-if="elections.length === 0"
    >
      <BaseLoader />
    </v-container>
    <v-container class="mt-4 mb-8 py-0" v-else>
      <v-row>
        <v-col cols="12" sm="12">
          <v-alert
            dismissible
            color="deep-purple darken-4"
            border="left"
            elevation="2"
            colored-border
            icon="mdi-information"
            class="text-body-2 text-md-subtitle-1"
          >
            You can
            <router-link
              :to="{ name: 'Election-New' }"
              class="text-decoration-underline"
              >create an election here
            </router-link>
            or click the button from the bottom right of the page.
          </v-alert>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="12"
          class="d-flex flex-column justify-center align-center deep-purple--text darken-4"
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
          v-for="(election, index) in elections"
          :key="election._id"
          v-observe-visibility="
            index === elections.length - 1 ? loadElections : false
          "
        >
          <ElectionCard :election="election" />
        </v-col>
      </v-row>
      <v-row>
        <v-btn
          color="deep-purple darken-4"
          :ripple="false"
          class="white--text"
          v-if="isAdmin"
          :to="{ name: 'Election-New' }"
          dark
          large
          fixed
          bottom
          right
          fab
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-row>
      <v-row class="my-6">
        <v-col
          v-if="loading"
          cols="12"
          sm="12"
          class="d-flex justify-center align-center"
        >
          <BaseLoader />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
const ElectionCard = () => import(/* webpackPrefetch: true */"@/components/Election/ElectionCard.vue");
const BaseLoader = () => import(/* webpackPrefetch: true */"@/components/Base/BaseLoader.vue");
import { mapState } from "vuex";
import store from "@/store/index.js";

export default {
  name: "Elections",
  components: {
    ElectionCard,
    BaseLoader
  },
  computed: {
    ...mapState({
      elections: state => state.election.elections,
      end: state => state.election.end
    })
  },
  data() {
    return {
      loading: false
    };
  },
  async beforeRouteEnter(to, from, next) {
    let elections = store.state.election.elections;
    if (elections.length == 0) {
      elections = await store.dispatch("election/getElections");
    }
    store.dispatch("UI/changeLoadingState", true);
    next();
  },
  methods: {
    async loadElections() {
      if (!this.loading && !this.end) {
        const vm = this;
        this.loading = true;
        await store
          .dispatch("election/getElections")
          .then(() => {
            vm.loading = false;
          })
          .catch(() => {
            vm.loading = false;
          });
      }
    }
  }
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
.loading-wrapper {
  width: 100%;
  height: 100vh;
}
</style>
