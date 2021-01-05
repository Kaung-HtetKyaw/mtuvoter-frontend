<template>
  <div class="form-slider">
    <v-card color="white" outlined class="px-3 py-3  news-form">
      <v-tabs
        v-model="tab"
        slider-color="deep-purple darken-2"
        background-color="transparent"
        color="deep-purple darken-2"
        grow
      >
        <v-tab v-for="item in tabItems" :key="item.title" :ripple="false">{{
          item.title
        }}</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in tabItems" :key="item.title">
          <div>
            <v-container class="px-0">
              <v-row dense>
                <v-col cols="12" sm="12" class="pa-sm-3 pa-md-6">
                  <component
                    v-bind:is="item.component"
                    :news="clonedNews"
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
  </div>
</template>

<script>
import NewsForm from "@/components/Form/NewsForm";
import NewsPreview from "@/components/News/NewsPreview";

export default {
  name: "NewsFormSlider",
  components: {
    newsForm: NewsForm,
    newsPreview: NewsPreview,
  },
  props: {
    news: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      tab: null,
      clonedNews: {},
      filePreview: {},
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
      this.clonedNews = news;
    },
    listenFileChange(filePreview) {
      this.filePreview = filePreview;
    },
  },
  created() {
    this.clonedNews = { ...this.news };
  },
};
</script>

<style lang="scss" scoped>
.form-slider {
  .news-form {
    box-shadow: 0 0 0 1px rgba(8, 9, 10, 0.2);
  }
}
</style>
