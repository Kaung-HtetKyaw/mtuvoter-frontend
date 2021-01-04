<template>
  <div>
    <v-container class="px-0">
      <v-row dense>
        <v-col aria-colspan="12" sm="12">
          <div v-html="md" class="news workssan"></div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import marked from "marked";
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      md: "",
    };
  },
  mounted() {
    this.md = marked(this.content);
  },
  watch: {
    content(value) {
      this.md = marked(value);
    },
  },
};
</script>
<style lang="scss">
.news {
  line-height: 2.5;
  font-weight: 600;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #5545a8;
    width: 100%;
    display: block;
    position: relative;
    margin-bottom: 2rem;
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
  p,
  li,
  ul {
    font-size: 17px;
    line-height: 2.5;
    opacity: 0.8;
  }
}
</style>
