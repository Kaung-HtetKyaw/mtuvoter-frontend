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
        v-for="(election, index) in elections"
        :key="election.id"
        v-observe-visibility="
          index === elections.length - 1 ? loadElections : false
        "
      >
        <ElectionCard :stats="true" :election="election" />
      </v-col>

      <v-col cols="12" sm="12" class="d-flex justify-center align-center">
        <BaseLoader v-if="loading" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const ElectionCard = () => import("@/components/Election/ElectionCard.vue");
const BaseLoader = () => import("@/components/Base/BaseLoader.vue");
import store from "@/store/index.js";
import { mapState } from "vuex";

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
      if (!this.end) {
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
</style>
