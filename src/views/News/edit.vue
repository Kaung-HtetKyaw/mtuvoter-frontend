<template>
  <div class="test--wrapper">
    <div>
      <v-container class="px-0">
        <!-- <v-row dense v-if="!valid">
          <v-alert border="left" color="red " dark
            >Article title can't be empty</v-alert
          >
        </v-row> -->
        <v-row>
          <v-col cols="12" sm="12">
            <template>
              <div class="px-3">
                <v-alert
                  dismissible
                  color="deep-purple darken-2"
                  border="left"
                  elevation="2"
                  colored-border
                  icon="mdi-information"
                  class="text-body-2 text-md-subtitle-1"
                >
                  Use <strong>Markdown</strong> to write and format text. See
                  <a
                    href="https://www.markdownguide.org/cheat-sheet/"
                    class="text-decoration-underline"
                    target="__blank"
                    >Markdown guide
                  </a>
                  for more details
                </v-alert>
              </div>
            </template>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12" sm="12">
            <v-card
              color="white"
              outlined
              class="px-3 py-3 px-md-6 py-md-6 news-form"
            >
              <v-tabs
                v-model="tab"
                slider-color="deep-purple darken-2"
                background-color="transparent"
                color="deep-purple darken-2"
                grow
              >
                <v-tab
                  v-for="item in tabItems"
                  :key="item.title"
                  :ripple="false"
                  >{{ item.title }}</v-tab
                >
              </v-tabs>
              <v-tabs-items v-model="tab">
                <v-tab-item v-for="item in tabItems" :key="item.title">
                  <div>
                    <v-container class="px-0">
                      <v-row dense>
                        <v-col cols="12" sm="12" class="pa-sm-3 pa-md-6">
                          <component
                            v-bind:is="item.component"
                            :news="news"
                            :filePreview="filePreview"
                            @newsChanged="listenNewsChange"
                            @fileChaged="listenFileChange"
                          ></component>
                        </v-col>
                      </v-row>
                    </v-container>
                  </div>
                </v-tab-item>
              </v-tabs-items>
            </v-card>
          </v-col>
          <v-col cols="12" sm="0" md="3"></v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12" sm="12" class="d-flex justify-center align-center">
            <v-btn
              depressed
              color="deep-purple darken-2"
              class="white--text text-capitalize"
              :loading="loading"
              @click="updateNews"
              >Publish News</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import NewsForm from "@/components/Form/NewsForm";
import NewsPreview from "@/components/News/NewsPreview";
import store from "@/store/index.js";
import { showNoti } from "@/utils/noti.js";
import { convertToForm } from "@/utils/utils.js";
import { mapState } from "vuex";
export default {
  components: {
    newsForm: NewsForm,
    newsPreview: NewsPreview,
  },
  data() {
    return {
      tab: null,
      filePreview: null,
      loading: false,
      news: {},
      tabItems: [
        {
          title: "Write",
          component: "newsForm",
        },
        {
          title: "Preview",
          component: "newsPreview",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      originalNews: (state) => state.news.singleNews,
    }),
  },
  beforeRouteEnter(to, from, next) {
    const { news } = to.params;
    if (!store.state.news.singleNews) {
      showNoti(
        "error",
        "Please go to the news page to update this news.",
        { name: "News-Single", params: { news } },
        next
      );
      return;
    }
    next();
  },
  created() {
    this.news = { ...this.originalNews };
    console.log(this.news);
  },

  methods: {
    async updateNews() {
      const vm = this;
      vm.loading = true;
      console.log(vm.news);
      const formData = convertToForm(vm.news);
      console.log(formData);
      await store
        .dispatch("news/updateNews", { newsId: vm.news._id, news: formData })
        .then(() => {
          vm.loading = false;
          showNoti("success", "News has been updated successfully");
          vm.$router.replace({
            name: "News-Single",
            params: { news: vm.$route.params.news },
          });
        })
        .catch(() => {
          vm.loading = false;
          showNoti("error", "Error updating news");
        });
    },
    listenNewsChange(news) {
      this.news = news;
    },
    listenFileChange(filePreview) {
      this.filePreview = filePreview;
    },
  },
};
</script>

<style lang="scss" scoped>
.test--wrapper {
  .news-form {
    box-shadow: 0 0 0 1px rgba(8, 9, 10, 0.2);
  }
}
</style>
