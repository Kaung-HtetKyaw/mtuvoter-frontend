<template>
  <div class="admin">
    <v-app-bar elevation="1" app color="white" flat class="navbar">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <div class="d-flex flex-row align-center justify-center ml-12">
        <div class="d-none d-md-flex justify-centeer align-center">
          <router-link :to="{ name: 'Newsletter' }">
            <a class=" mx-2 font-weight-medium">Dashboard</a></router-link
          >

          <router-link :to="{ name: 'Elections' }">
            <a class="mx-2 font-weight-medium">Elections</a></router-link
          >
          <router-link :to="{ name: 'FAQ' }">
            <a class=" mx-2 font-weight-medium">Roles</a></router-link
          >
        </div>
      </div>
      <!-- <v-toolbar-title class="pl-3 pl-md-0  ">Mtuvoter</v-toolbar-title> -->
      <v-spacer class=""></v-spacer>
      <div class="d-flex flex-row align-center justify-center">
        <div class="d-flex flex-row justify-centeer align-center">
          <router-link :to="{ name: 'Login' }">
            <a class="   mx-2 mx-md-4 font-weight-medium"
              >Account</a
            ></router-link
          >
          <router-link :to="{ name: 'Login' }">
            <a class="d-none d-md-flex  mx-2 mx-md-4 font-weight-medium"
              >Sign in</a
            ></router-link
          >

          <slot name="search"></slot>
        </div>
      </div>
    </v-app-bar>

    <v-navigation-drawer color="#3C4B64" v-model="drawer" fixed app>
      <v-list>
        <AdminDrawer />
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
// import BaseSearch from "@/components/BaseSearch.vue";
import AdminDrawer from "@/components/Dashboard/Drawer.vue";
export default {
  name: "TheNav",
  components: {
    // BaseSearch,
    AdminDrawer,
  },
  data: () => ({
    drawer: true,
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
  box-shadow: 0 0 0 1px rgba(8, 9, 10, 0.2);
  &-item {
    &--text {
      font-size: 17px;
      color: #3c4b64;
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
.dashboard {
  color: #ffffffbf;
}
</style>
