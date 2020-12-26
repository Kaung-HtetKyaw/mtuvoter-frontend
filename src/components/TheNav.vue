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
      <div class="d-flex flex-row align-center justify-center ml-12">
        <div class="d-none d-md-flex justify-centeer align-center">
          <a class="navbar-item--text mx-2 font-weight-medium">Newsletter</a>
          <a class="navbar-item--text mx-2 font-weight-medium">Elections</a>
          <a class="navbar-item--text mx-2 font-weight-medium">FAQ</a>
        </div>

        <!-- <BaseSearch /> -->
      </div>
      <!-- <v-toolbar-title class="pl-3 pl-md-0  ">Mtuvoter</v-toolbar-title> -->
      <v-spacer class=""></v-spacer>
      <div class="d-flex flex-row align-center justify-center">
        <div class="d-flex flex-row justify-centeer align-center">
          <BaseUserAvatar />

          <a
            class="d-none d-md-flex  navbar-item--text mx-2 mx-md-4 font-weight-medium"
            >Sign in</a
          >
          <v-btn
            elevation="0"
            class="d-none d-md-flex  deep-purple darken-2 white--text text-capitalize mx-2 font-weight-medium"
            >Create account</v-btn
          >
        </div>

        <!-- <BaseSearch /> -->
      </div>
    </v-app-bar>

    <v-navigation-drawer bottom v-model="drawer" temporary fixed app>
      <v-list>
        <UserDrawer />
        <BaseNavigationDrawer />
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
// import BaseSearch from "@/components/BaseSearch.vue";
import BaseUserAvatar from "@/components/Base/BaseUserAvatar.vue";
import BaseNavigationDrawer from "@/components/Base/BaseNavigationDrawer.vue";
import UserDrawer from "@/components/User/UserDrawer.vue";
export default {
  name: "TheNav",
  components: {
    // BaseSearch,
    BaseUserAvatar,
    BaseNavigationDrawer,
    UserDrawer,
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

<style lang="scss" scoped>
.navbar {
  &-item {
    &--text {
      font-size: 17px;
      position: relative;
      padding: 4px 0px;
      transition: all 0.2s ease-in;
      &::before {
        content: "";
        width: 50%;
        height: 3px;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #5545a7;
        transition: all 0.2s ease-in;
      }
      &:hover {
        &::before {
          width: 100%;
        }
      }
    }
  }
}
</style>
