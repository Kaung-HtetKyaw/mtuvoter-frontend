<template>
  <v-snackbar
    light
    top
    v-model="snackbar"
    :timeout="timeout"
    rounded="lg"
    class="elevation-21"
  >
    <div>
      <p
        class="mb-0 text-body-2 font-weight-medium darken-2"
        :class="{
          'deep-purple--text': noti.type === 'success',
          'red--text': noti.type === 'error',
        }"
      >
        {{ noti.message }}
      </p>
    </div>

    <template v-slot:action="{ attrs }">
      <v-btn
        :ripple="false"
        class="mx-2"
        fab
        icon
        dark
        depressed
        color="deep-purple darken-2 rotate-45 my-2"
        x-small
        v-bind="attrs"
        @click="snackbar = false"
      >
        <v-icon dark class="rotate-45">
          mdi-plus
        </v-icon>
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
      timeout: 4000,
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
