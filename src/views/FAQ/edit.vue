<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="12" md="12" class="">
        <v-card class="elevation-2 pb-6">
          <v-card-title
            class="deep-purple darken-4 white--text d-flex justify-center"
            >Update FAQ Details</v-card-title
          >
          <v-card-text class="mt-6 px-1">
            <v-form ref="form" class="px-2">
              <v-text-field
                outlined
                label="Enter the frequently asked question"
                required
                v-model="faq.question"
              ></v-text-field>
              <v-textarea
                outlined
                label="Provide the answer"
                required
                v-model="faq.answer"
              ></v-textarea>

              <div
                class="width-100 d-flex flex-column justify-center align-center"
              >
                <v-btn
                  color="deep-purple darken-4"
                  class="white--text text-capitalize"
                  block
                  depressed
                  :ripple="false"
                  :loading="loading"
                  @click="updateFAQ"
                  >Update new FAQ</v-btn
                >
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import store from "@/store/index.js";
import { showNoti } from "@/utils/noti.js";
import { mapGetters } from "vuex";
export default {
  name: "FAQ-New",
  data() {
    return {
      loading: false,
      faq: {
        question: "",
        answer: ""
      }
    };
  },
  computed: {
    ...mapGetters({
      originalFAQ: "faq/getFaqById"
    })
  },
  async beforeRouteEnter(to, from, next) {
    const faqs = store.state.faq.faqs;
    const faqId = to.params.faq;
    if (faqs.length == 0) {
      showNoti(
        "error",
        "Please go to the FAQ page first to update this FAQ",
        { name: "FAQ" },
        next
      );
      return;
    }
    const currenFaq = faqs.find(el => el._id === faqId);
    if (!currenFaq) {
      showNoti(
        "error",
        "Please go to the FAQ page first to update this FAQ",
        { name: "FAQ" },
        next
      );
      return;
    }
    next();
  },
  created() {
    this.faq = { ...this.originalFAQ(this.$route.params.faq) };
  },

  methods: {
    async updateFAQ() {
      const vm = this;
      vm.loading = true;
      await store
        .dispatch("faq/updateFAQ", { faq: vm.faq })
        .then(() => {
          vm.loading = false;
          showNoti("success", "FAQ has been updated successfully");
          vm.$router.replace({ name: "FAQ" });
        })
        .catch(() => {
          vm.loading = false;
          showNoti("error", "Error updating FAQ");
        });
    }
  }
};
</script>

<style></style>
