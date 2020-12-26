<template>
  <v-app>
    <nav>
      <TheNav />
    </nav>
    <v-main> <slot /></v-main>
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
};
</script>

<style></style>
