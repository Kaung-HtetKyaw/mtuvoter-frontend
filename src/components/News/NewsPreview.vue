<template>
  <div>
    <div class="white pa-sm-6 pa-md-12 rounded-xl article-view bs-border">
      <div class="pa-4">
        <h1 class="text-center text-sm-h6 text-md-h4 font-weight-bold ">
          {{ news.title }}
        </h1>
      </div>

      <div>
        <v-sheet
          height="400px"
          v-if="filePreview || news.photo"
          :style="{
            backgroundImage: `url(${filePreview || news.photo})`,

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
};
</script>

<style lang="scss" scoped></style>
