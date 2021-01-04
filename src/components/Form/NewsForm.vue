<template>
  <div>
    <v-form ref="form" class="">
      <div class="d-flex align-center px-2 mb-8">
        <v-btn
          elevation="0"
          color="grey lighten-1 workssan"
          class="white--text"
          :ripple="false"
        >
          <v-file-input
            show-size
            value="any"
            label="Choose a file"
            hide-input
            class="pa-0 ma-0 white--text"
            @change="emitFile"
            v-model="clonedNews.photo"
          ></v-file-input>
        </v-btn>
        <span class="text-sm-subtitle-2 text-md-h6 grey--text lighten-1 ml-3"
          >Add a Cover image</span
        >
      </div>

      <div>
        <v-textarea
          label="Solo"
          placeholder="Article title here..."
          solo
          v-model="clonedNews.title"
          @change="emitNews"
          class="text-h6 text-md-h5 font-weight-medium grey--text darken-2"
        ></v-textarea>
      </div>
      <div>
        <v-textarea
          label="Solo"
          placeholder="Write your article here..."
          solo
          auto-grow
          class="text-subtitle-1 font-weight-medium grey--text darken-1"
          v-model="clonedNews.content"
          @change="emitNews"
        ></v-textarea>
      </div>
    </v-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { previewImg } from "@/utils/utils.js";

export default {
  components: {},
  props: {
    news: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      tags: [],
      clonedNews: {},
      filePreview: null,
    };
  },

  created() {
    this.clonedNews = { ...this.news };
  },

  methods: {
    emitNews() {
      console.log("changed");
      this.$emit("newsChanged", this.clonedNews);
      console.log(this.clonedNews);
    },
    emitFile(file) {
      console.log(this.clonedNews);
      if (file) {
        let vm = this;
        previewImg(file, (preview) => {
          vm.$emit("fileChaged", preview);
        });
      }
    },
  },
  computed: {
    ...mapState({
      user: (state) => state.user.user,
    }),
  },
};
</script>

<style>
.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  box-shadow: none !important;
  padding: auto 0;
}
</style>
