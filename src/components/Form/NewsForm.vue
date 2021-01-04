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
            v-model="clonedFile"
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
          v-model="clonedArticle.title"
          @change="emitArticle"
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
          v-model="clonedArticle.content"
          @change="emitArticle"
        ></v-textarea>
      </div>
    </v-form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {},
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      clonedFile: {},
      tags: [],
      clonedArticle: {},
    };
  },
  watch: {
    "clonedArticle.tags": {
      deep: true,
      handler: function() {
        this.$emit("articleChanged", this.clonedArticle);
      },
    },
  },
  created() {
    this.clonedArticle = { ...this.article };
    this.clonedFile = this.file;
  },

  methods: {
    emitArticle() {
      this.$emit("articleChanged", this.clonedArticle);
      console.log(this.clonedArticle);
    },
    emitFile(file) {
      this.previewImg(file);
      this.$emit("fileChaged", this.clonedFile);
    },
    previewImg(file) {
      if (file) {
        console.log(file);
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
