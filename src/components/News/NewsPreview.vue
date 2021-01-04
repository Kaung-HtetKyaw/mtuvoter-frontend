<template>
  <div>
    <div class="white pa-sm-6 pa-md-12 rounded-xl article-view bs-border">
      <div class="pa-4">
        <h1
          class="text-center text-sm-h6 text-md-h4 font-weight-bold deep-purple--text darken-2"
        >
          {{ news.title }}
        </h1>
        <h3
          class="text-center opacity-7 text-subtitle-2  font-weight-medium font-italic my-4"
        >
          {{ news.description }}
        </h3>
      </div>

      <div>
        <v-sheet
          height="400px"
          v-if="filePreview"
          :style="{
            backgroundImage: `url(${filePreview})`,

            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }"
          class="mb-6"
        ></v-sheet>
      </div>

      <vue-markdown :content="news.content"></vue-markdown>
    </div>
  </div>
</template>

<script>
import MarkDown from "@/components/Base/BaseMarkdown";
import { mapGetters } from "vuex";
export default {
  components: {
    "vue-markdown": MarkDown,
  },
  props: {
    news: {
      type: Object,
      required: true,
    },
    filePreview: {
      required: false,
    },
  },
  created() {
    console.log("PREVIEW", this.news);
  },
  methods: {},
  computed: {
    ...mapGetters({
      getTagByID: "tag/getTagByID",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
