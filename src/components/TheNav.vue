<template>
  <div>
    <v-app-bar app color="white" flat fixed class="nav-bar px-0 px-md-16 ">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="d-flex d-md-none"
      ></v-app-bar-nav-icon>

      <v-img
        class="d-none d-md-flex"
        src="/img/mtuvoter.png"
        max-width="150px"
      ></v-img>
      <!-- <v-toolbar-title class="pl-3 pl-md-0  ">Mtuvoter</v-toolbar-title> -->
      <v-spacer></v-spacer>

      <div class="d-flex flex-row align-center justify-center">
        <BaseSearch />
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary fixed app>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text darken-2 text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import BaseSearch from "@/components/BaseSearch.vue";
export default {
  name: "TheNav",
  components: {
    BaseSearch,
  },
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="sass" scoped>
.logo
  font-size: 30px
</style>
