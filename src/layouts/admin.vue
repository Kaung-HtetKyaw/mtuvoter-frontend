<template>
  <v-app>
    <nav>
      <TheNav />
    </nav>
    <v-main> <slot /></v-main>
  </v-app>
</template>

<script>
import TheNav from "@/components/TheNavAdmin.vue";

export default {
  name: "App",
  components: {
    TheNav,
  },
};
</script>

<style></style>
