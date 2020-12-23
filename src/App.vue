<template>
  <v-app>
    <nav>
      <TheNav />
    </nav>
    <v-content>
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" md="10" lg="8"
            ><router-view :key="$route.fullPath"></router-view
          ></v-col>
        </v-row>
      </v-container>
    </v-content>
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
