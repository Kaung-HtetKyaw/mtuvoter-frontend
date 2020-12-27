<template>
  <div>
    <h1>This is the fucking error</h1>
    <button @click="addNoti">Noti</button>
  </div>
</template>

<script>
import store from "@/store/index.js";
export default {
  computed: {},
  methods: {
    async addNoti() {
      await store.dispatch("notification/addNoti", {
        type: "error",
        message: "Error alsjfl",
      });
    },
  },
};
</script>

<style></style>
