<template>
  <v-app>
    <nav>
      <TheNav>
        <template #search>
          <BaseSearch />
        </template>
      </TheNav>
    </nav>
    <v-main class="main__wrapper"> <slot /></v-main>
    <footer>
      <TheFooter />
    </footer>
  </v-app>
</template>

<script>
import TheNav from "@/components/TheNav";
import TheFooter from "@/components/TheFooter";
import BaseSearch from "@/components/Base/BaseSearch.vue";

export default {
  name: "App",
  components: {
    TheNav,
    TheFooter,
    BaseSearch
  }
};
</script>

<style lang="scss" scope>
.main__wrapper {
  background-color: #fff;
}
</style>
