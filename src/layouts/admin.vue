<template>
  <v-app>
    <nav>
      <TheNav />
    </nav>
    <v-main class="dashboard"> <slot /></v-main>
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

<style lang="scss" scoped>
.dashboard {
  background-color: #ebedef;
}
</style>
