<template>
  <Layout class="main__wrapper">
    <NotificationContainer />
    <transition name="fade" tag="div"
      ><router-view :key="$route.fullPath"></router-view
    ></transition>
  </Layout>
</template>

<script>
import Layout from "@/layouts/AppLayout.vue";
import NotificationContainer from "@/components/Base/BaseNotiContainer.vue";

export default {
  name: "App",
  components: {
    Layout,
    NotificationContainer,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="sass">
@import "@/assets/styles/index.sass"
</style>
