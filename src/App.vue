<template>
  <Layout> <router-view :key="$route.fullPath"></router-view></Layout>
</template>

<script>
import Layout from "@/layouts/AppLayout.vue";

export default {
  name: "App",
  components: {
    Layout,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="sass">
@import "@/assets/styles/index.sass"
</style>
