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
            <WriteNews type="create">
              <template v-slot="{ create, loading }">
                <v-btn
                  depressed
                  color="deep-purple darken-2"
                  class="white--text text-capitalize"
                  :loading="loading"
                  @click="create(news)"
                  >Publish News</v-btn
                >
              </template>
            </WriteNews>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import NewsForm from "@/components/Form/NewsForm";
import NewsPreview from "@/components/News/NewsPreview";
import WriteNews from "@/components/Renderless/NewsCrud/WriteModel.vue";

export default {
  components: {
    newsForm: NewsForm,
    newsPreview: NewsPreview,
    WriteNews,
  },
  data() {
    return {
      tab: null,
      filePreview: {},
      loading: false,
      news: {
        title: "this is title",
        content: "this is content",
      },
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
  methods: {
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
