<template>
  <v-container class="mt-4 mb-8 py-0 newsletter">
    <v-row>
      <v-col cols="12" sm="12">
        <div class="px-3">
          <v-alert
            dismissible
            color="deep-purple darken-4"
            border="left"
            elevation="2"
            colored-border
            icon="mdi-information"
            class="text-body-2 text-md-subtitle-1"
          >
            Publish <strong>News</strong>
            <router-link
              :to="{ name: 'News-Publish' }"
              class="text-decoration-underline px-1"
              >here</router-link
            >
            and let the users know.
          </v-alert>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        class="d-flex flex-column justify-center align-center deep-purple--text darken-4"
      >
        <h1 class="d-inline-block elections--title">Latest News</h1>
      </v-col>
    </v-row>
    <v-row v-for="el in news" :key="el.id">
      <v-col
        cols="12"
        sm="12"
        class="workssan d-flex justify-center align-center deep-purple--text darken-4 "
      >
        <NewsCard :news="el" />
      </v-col>
      <v-col cols="12" sm="12">
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row class="my-6">
      <v-col
        cols="12"
        sm="12"
        class="d-flex justify-center align-center"
        v-if="loading"
      >
        <BaseLoader />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const NewsCard = () => import("@/components/News/NewsCard-2.vue");
const BaseLoader = () => import("@/components/News/NewsCard-2.vue")
import store from "@/store/index.js";
import { mapState } from "vuex";

export default {
  name: "Elections",
  components: {
    NewsCard,
    BaseLoader,
  },
  computed: {
    ...mapState({
      news: (state) => state.news.news,
      end: (state) => state.news.end,
    }),
  },
  data() {
    return {
      loading: false,
    };
  },
  async beforeRouteEnter(to, from, next) {
    let news = store.state.news.news;
    if (news.length == 0) {
      news = await store.dispatch("news/getNews");
    }
    store.dispatch("UI/changeLoadingState", true);
    next();
  },
  methods: {
    async loadNews() {
      if (!this.end) {
        const vm = this;
        this.loading = true;
        await store
          .dispatch("news/getNews")
          .then(() => {
            vm.loading = false;
          })
          .catch(() => {
            vm.loading = false;
          });
      }
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
// .newsletter {
//   background-color: #edf3ff;
// }
</style>
