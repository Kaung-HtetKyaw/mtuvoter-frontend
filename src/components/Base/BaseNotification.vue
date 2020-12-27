<template>
  <v-snackbar v-model="snackbar" :timeout="timeout">
    {{ noti.message }}

    <template v-slot:action="{ attrs }">
      <v-btn
        class="workssan"
        :color="noti.type"
        text
        v-bind="attrs"
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import store from "@/store/index.js";
export default {
  props: {
    noti: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      snackbar: true,
      timeout: 3000,
    };
  },
  computed: {},
  mounted() {
    setTimeout(() => {
      store.dispatch("notification/deleteNoti", this.noti).then(() => {
        this.snackbar = false;
      });
    }, this.timeout);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
};
</script>

<style></style>
