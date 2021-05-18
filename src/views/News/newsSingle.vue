<template>
  <v-container class="news__wrapper">
    <v-row
      v-if="!news"
      class="loading-wrapper d-flex justify-center align-center"
    >
      <BaseLoader />
    </v-row>
    <v-row v-else>
      <v-col cols="12" sm="12">
        <div class="mb-3 mb-md-6">
          <h1
            class="deep-purple--text darken-4 text-h5 text-md-h5 text-lg-h5 font-weight-bold workssan news__title text-center text-md-left py-3"
          >
            {{ news.title }}
          </h1>
          <div class="width-100 mt-6 mb-3">
            <v-btn
              depressed
              block
              :to="{ name: 'News-Edit', params: { news: news._id } }"
              color="deep-purple darken-4"
              :ripple="false"
              class="white--text text-capitalize"
              >Update the news</v-btn
            >
          </div>
          <div
            class="width-100 mt-6 mb-3"
            v-if="
              authenticated &&
                (userDetail.role === 'admin' || userDetail.role === 'mod')
            "
          >
            <v-btn
              depressed
              block
              color="deep-purple darken-4"
              :ripple="false"
              class="white--text text-capitalize"
              @click="changePublishedFlag"
              :loading="changing_published_flag"
              >{{ news.published ? "Unpublish" : "Publish" }} the news</v-btn
            >
          </div>
          <div class="width-100 mb-6">
            <NewsConfirmModal :id="news._id">
              <template v-slot:default="{ activator }">
                <v-btn
                  depressed
                  block
                  text
                  color="red darken-4"
                  v-bind="activator.attrs"
                  v-on="activator.on"
                  :ripple="false"
                  class="white--text text-capitalize"
                  >Delete this news</v-btn
                >
              </template>
            </NewsConfirmModal>
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
                  backgroundPosition: 'center'
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
import NewsConfirmModal from "@/components/Modal/NewsConfirmModal.vue";
import { showNoti } from "@/utils/noti.js";
const BaseLoader = () => import(/* webpackPrefetch: true */"@/components/Base/BaseLoader.vue");
export default {
  name: "News-Single",
  components: {
    "vue-markdown": Markdown,
    NewsConfirmModal,
    BaseLoader
  },
  computed: {
    ...mapState({
      news: state => state.news.singleNews
    })
  },
  data() {
    return {
      changing_published_flag: false
    };
  },

  async beforeRouteEnter(to, from, next) {
    let id = to.params.news;
    let news = store.state.news.news.find(el => el._id === to);
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
  methods: {
    async changePublishedFlag() {
      const vm = this;
      vm.changing_published_flag = true;
      await store
        .dispatch("news/changePublishedFlag", { newsId: vm.news._id })
        .then(res => {
          vm.changing_published_flag = false;
          showNoti(
            "success",
            `This news has been ${res.published ? "published" : "unpublished"}`
          );
        })
        .catch(() => {
          vm.changing_published_flag = false;
        });
    }
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
.loading-wrapper {
  width: 100%;
  height: 100vh;
}
</style>
