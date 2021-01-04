<template>
  <div class="test--wrapper">
    <div>
      <v-container class="px-0">
        <v-row dense v-if="!valid">
          <v-alert border="left" color="red " dark
            >Article title can't be empty</v-alert
          >
        </v-row>
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
                            :article="article"
                            :file="file"
                            @articleChanged="listenArticleChange"
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
          <v-col cols="12" sm="12" md="9">
            <div>
              <v-btn
                color="purple"
                class="white--text"
                depressed
                :loading="loading"
                @click="createArticle(writeFB)"
                >Publish</v-btn
              >
              <v-btn
                depressed
                color="indigo lighten-4"
                class="white--text"
                @click="cancelArticle"
                >Cancel</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import NewsForm from "@/components/Form/NewsForm";
import NewsPreview from "@/components/News/NewsPreview";

export default {
  components: {
    newsForm: NewsForm,
    newsPreview: NewsPreview,
  },
  data() {
    return {
      tab: null,
      article: {
        content: "",
      },
      file: {},
      valid: true,
      loading: false,
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
    listenArticleChange(article) {
      this.article = article;
    },
    listenFileChange(file) {
      this.file = file;
    },
    createArticle() {
      let vm = this;
      vm.loading = true;
      vm.valid = true;
      //terminate if title is empty
    },
    cancelArticle() {
      this.$router.push("/");
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
