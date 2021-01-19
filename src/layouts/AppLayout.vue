<template>
  <div>
    <transition name="fade" mode="out-in">
      <LoadingScreen v-if="loading"/>
      <component v-else :is="this.$route.meta.layout || 'div'">
        <slot /> </component
    ></transition>
  </div>
</template>

<script>
import DefaultLayout from "@/layouts/default.vue";
import LoadingScreen from "@/components/UI/LoadingScreen.vue";
import { mapState } from "vuex";
export default {
  name: "AppLayout",
  components: {
    LoadingScreen,
  },
  computed: {
    ...mapState({
      loading: (state) => state.UI.loading,
    }),
  },

  data() {
    return {
      layout: DefaultLayout,
    };
  },
};
</script>

<style></style>
