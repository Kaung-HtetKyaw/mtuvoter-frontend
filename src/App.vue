<template>
  <v-app>
    <nav>
      <TheNav />
    </nav>
    <v-content> <router-view :key="$route.fullPath"></router-view> </v-content>
    <footer>
      <TheFooter />
    </footer>
  </v-app>
</template>

<script>
import TheNav from "@/components/TheNav";
import TheFooter from "@/components/TheFooter";

export default {
  name: "App",
  components: {
    TheNav,
    TheFooter,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="sass">
@import "@/assets/styles/index.sass"
</style>
