<template>
  <div>
    <div class="white pa-sm-6 pa-md-12 rounded-xl article-view bs-border">
      <div class="pa-4">
        <h1
          class="text-center text-sm-h6 text-md-h4 font-weight-bold deep-purple--text darken-2"
        >
          {{ article.title }}
        </h1>
        <h3
          class="text-center opacity-7 text-subtitle-2  font-weight-medium font-italic my-4"
        >
          {{ article.description }}
        </h3>
      </div>
      <!-- 
      <div>
        <v-sheet
          height="400px"
          v-if="article.photo.url"
          :style="{
            backgroundImage: `url(${article.photo.url})`,

            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }"
          class="mb-6"
        ></v-sheet>
      </div> -->

      <vue-markdown :content="article.content"></vue-markdown>
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
    article: {
      type: Object,
      required: true,
    },
  },
  created() {
    console.log("PREVIEW", this.article);
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
