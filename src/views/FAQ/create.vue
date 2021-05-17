<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="12" md="12" class="">
        <v-card class="elevation-2 pb-6">
          <v-card-title
            class="deep-purple darken-4 white--text d-flex justify-center"
            >Enter FAQ Details</v-card-title
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
                  @click="createFAQ"
                  >Create new FAQ</v-btn
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

  methods: {
    async createFAQ() {
      const vm = this;
      vm.loading = true;
      await store
        .dispatch("faq/createFAQ", { faq: vm.faq })
        .then(() => {
          vm.loading = false;
          showNoti("success", "New FAQ has been created successfully");
          vm.$router.replace({ name: "FAQ" });
        })
        .catch(() => {
          vm.loading = false;
          showNoti("error", "Error creating new FAQ");
        });
    }
  }
};
</script>

<style></style>
