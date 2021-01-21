<template>
  <v-container class="news__wrapper">
    <v-row v-if="!news">
      <h1>Loading.....</h1>
    </v-row>
    <v-row v-else>
      <v-col cols="12" sm="12">
        <div class="mb-3 mb-md-6">
          <h1
            class="deep-purple--text darken-2 text-h5 text-md-h5 text-lg-h5 font-weight-bold workssan news__title text-center text-md-left py-3"
          >
            {{ news.title }}
          </h1>
          <div class="width-100 my-6">
            <v-btn
              depressed
              block
              :to="{ name: 'News-Edit', params: { news: news._id } }"
              color="deep-purple darken-2"
              :ripple="false"
              class="white--text text-capitalize"
              >Update the news</v-btn
            >
          </div>
          <div class="width-100 mb-6">
            <v-btn
              depressed
              block
              color="red darken-2"
              :ripple="false"
              class="white--text text-capitalize"
              >Delete this news</v-btn
            >
          </div>
        </div>
        <v-container fluid class="px-0 py-0">
          <v-row class="flex-column-reverse flex-md-row">
            <v-col cols="12" sm="12" md="9" class="py-0">
              <div class="news__content">
                <vue-markdown :content="news.content"></vue-markdown>
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="3" class=" py-0">
              <div
                :style="{
                  backgroundImage: `url(${news.photo})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                }"
                class="news__cover"
              ></div
            ></v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import store from "@/store/index.js";
import { mapState } from "vuex";
import Markdown from "@/components/Base/BaseMarkdown.vue";
export default {
  name: "News-Single",
  components: {
    "vue-markdown": Markdown,
  },
  computed: {
    ...mapState({
      news: (state) => state.news.singleNews,
    }),
  },
  data() {
    return {};
  },

  async beforeRouteEnter(to, from, next) {
    let id = to.params.news;
    let news = store.state.news.news.find((el) => el._id === to);
    // check for already fetched as a single
    if (!news) {
      if (store.state.news.singleNews && store.state.news.singleNews._id === id)
        news = store.state.news.singleNews;
    }

    if (!news) {
      news = await store.dispatch("news/getSingleNews", id);
    }
    next();
  },
  watch: {
    news(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.news {
  &__title {
    width: 100%;
    display: block;
    position: relative;
    line-height: 1.75;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #5545a8;
    }
  }
  &__cover {
    width: 100%;
    height: 300px;
  }
}
</style>
