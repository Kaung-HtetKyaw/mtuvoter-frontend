<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="10" lg="8">
        <v-app>
          <nav>
            <TheNav />
          </nav>
          <v-main>
            <router-view :key="$route.fullPath"></router-view>
          </v-main>
        </v-app>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TheNav from "@/components/TheNav";

export default {
  name: "App",
  components: {
    TheNav,
  },

  data: () => ({
    //
  }),
};
</script>
