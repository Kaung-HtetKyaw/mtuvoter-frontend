<template>
  <div class="about">
    <div class="d-flex flex-column justify-center align-center">
      <Hero />
    </div>
    <div class="deep-purple darken-2 white--text">
      <ElectionOverview :elections="elections" />
    </div>
    <div class="deep-purple--text darken-2">
      <NewsOverview :news="news" />
    </div>
  </div>
</template>
<script>
import Hero from "@/components/UI/Hero.vue";
import ElectionOverview from "@/components/UI/ElectionOverview.vue";
import NewsOverview from "@/components/UI/NewsOverview.vue";
import axios from "@/services/axios.js";
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
    const elections = await axios().get("/elections?limit=3");
    const news = await axios().get("/news");
    store.dispatch("UI/changeLoadingState", true);
    next((vm) => {
      vm.elections = elections.data.data;
      vm.news = news.data.data;
    });
  },
};
</script>

<style lang="scss" scoped></style>
