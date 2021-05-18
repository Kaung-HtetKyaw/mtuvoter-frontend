<template>
  <div>
    <Layout class="main__wrapper">
      <NotificationContainer />
      <transition name="fade" tag="div"
        ><router-view :key="$route.fullPath"></router-view
      ></transition>
    </Layout>
  </div>
</template>

<script>
const Layout = () => import(/* webpackPrefetch: true */"@/layouts/AppLayout.vue");
const NotificationContainer = () =>
  import(/* webpackPrefetch: true */"@/components/Base/BaseNotiContainer.vue");

export default {
  name: "App",
  components: {
    Layout,
    NotificationContainer
  },

  data: () => ({
    //
  })
};
</script>

<style lang="sass">
@import "@/assets/styles/index.sass"
</style>
