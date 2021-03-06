<template>
  <v-container class="faq mb-8">
    <v-row class="mb-4">
      <v-col
        cols="12"
        sm="12"
        class="d-flex flex-column justify-center align-center deep-purple--text darken-4"
      >
        <h1
          class="d-inline-block text-h6 text-md-h5 text-lg-h5 font-weight-bold workssan text-center faq--title py-2 mb-3"
        >
          Frequently Asked Questions
        </h1>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        class="d-flex justify-end py-0"
               v-if="
              authenticated &&
                (userDetail.role === 'admin' || userDetail.role === 'mod')
            "
      >
        <v-btn
          color="deep-purple darken-4"
          class="white--text text-capitalize"
          small
          depressed
          :ripple="false"
          :to="{ name: 'FAQ-New' }"
        >
          Create new FAQ
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        class="d-flex justify-center align-center"
        v-for="(faq, index) in faqs"
        :key="faq._id"
        v-observe-visibility="index === faqs.length - 1 ? loadFAQs : false"
      >
        <BaseAccordion :faq="faq" />
      </v-col>
    </v-row>
    <v-row>
      <v-btn
        color="deep-purple darken-4"
        :ripple="false"
        class="white--text"
        :to="{ name: 'FAQ-New' }"
        dark
        large
        fixed
        bottom
        right
        fab
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-row>
    <v-row class="my-6">
      <v-col
        cols="12"
        sm="12"
        class="d-flex justify-center align-center"
        v-if="loading"
      >
        <BaseLoader />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
const BaseAccordion = () => import(/* webpackPrefetch: true */"@/components/Base/BaseAccordion.vue");
const BaseLoader = () => import(/* webpackPrefetch: true */"@/components/Base/BaseLoader.vue");
import store from "@/store/index.js";
import { mapState } from "vuex";

export default {
  name: "faq",
  components: {
    BaseAccordion,
    BaseLoader
  },
  computed: {
    ...mapState({
      faqs: state => state.faq.faqs,
      end: state => state.faq.end
    })
  },
  data() {
    return {
      loading: false
    };
  },
  async beforeRouteEnter(to, from, next) {
    let faqs = store.state.faq.faqs;
    if (faqs.length == 0) {
      faqs = await store.dispatch("faq/getFAQs");
    }
    store.dispatch("UI/changeLoadingState", true);
    next();
  },
  methods: {
    async loadFAQs() {
      if (!this.end) {
        const vm = this;
        this.loading = true;
        await store
          .dispatch("faq/getFAQs")
          .then(() => {
            vm.loading = false;
          })
          .catch(() => {
            vm.loading = false;
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.faq {
  &--title {
    position: relative;
    &::before {
      content: "";
      width: 50%;
      height: 2px;
      background-color: #5545a8;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
}
</style>
