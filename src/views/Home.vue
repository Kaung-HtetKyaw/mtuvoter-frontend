<template>
  <div class="about">
    <div class="d-flex flex-column justify-center align-center">
      <Hero />
    </div>
    <div class="deep-purple darken-4 white--text">
      <ElectionOverview :elections="elections" />
    </div>
    <div class="deep-purple--text darken-4">
      <NewsOverview :news="news" />
    </div>
  </div>
</template>
<script>
const Hero = () => import("@/components/UI/Hero.vue")
const ElectionOverview = () => import("@/components/UI/ElectionOverview.vue")
const NewsOverview = () => import("@/components/UI/NewsOverview.vue");
import store from "@/store/index.js";
export default {
  name: "About",
  components: {
    Hero,
    ElectionOverview,
    NewsOverview,
  },
  data() {
    return {
      elections: [],
      news: [],
    };
  },
  async beforeRouteEnter(to, from, next) {
    // fetch only if not present in local state
    let elections = store.state.election.elections.slice(0, 5);
    let news = store.state.news.news.slice(0, 5);
    if (elections.length == 0) {
      elections = await store.dispatch("election/getElections");
    }
    if (news.length == 0) {
      news = await store.dispatch("news/getNews");
    }
    store.dispatch("UI/changeLoadingState", true);
    next((vm) => {
      vm.elections = elections;
      vm.news = news;
    });
  },
};
</script>

<style lang="scss" scoped></style>
