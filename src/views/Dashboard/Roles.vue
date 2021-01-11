<template>
  <v-container>
    <v-row class="white admin--border px-3 my-4 ">
      <v-col cols="12" sm="12" class="px-0">
        <v-card class="elevation-1">
          <v-card-title
            class="access-table__header text--secondary d-flex  justify-space-between px-3 px-md-6"
          >
            <h1 class="text-subtitle-1 text-md-h6">Manage Access</h1>
            <AddMod>
              <template v-slot:default="{ activator }">
                <v-btn
                  color="deep-purple darken-2"
                  depressed
                  class="white--text text-capitalize "
                  small
                  :ripple="false"
                  v-bind="activator.attrs"
                  v-on="activator.on"
                  >Add Mod</v-btn
                >
              </template>
            </AddMod>
          </v-card-title>
          <v-card-text class="mt-6 px-1">
            <div class="access-table__search px-3 px-md-6">
              <v-text-field
                outlined
                dense
                label="Find a moderator by email..."
                prepend-inner-icon="mdi-magnify"
              ></v-text-field>
            </div>
            <v-divider></v-divider>
            <div v-for="i in 10" :key="i">
              <div class="access-table__mod__wrapper px-4 px-md-8 my-3">
                <div
                  class="access-table__mod px-6 d-flex flex-column flex-md-row justify-md-space-between align-md-center justify-center align-space-between"
                >
                  <div class="mod--info">
                    <div
                      class="deep-purple--text darken-2 text-body-2 font-weight-bold text-decoration-underline"
                    >
                      speed02749@gmail.com
                    </div>
                    <span class="text-caption">KaungHtetKyaw</span
                    ><span class="font-weight-bold mx-1 text-h4">.</span
                    ><span>Mod</span>
                  </div>
                  <div class="mod--action">
                    <v-btn
                      color="red darken-2"
                      class="white--text text-capitalize"
                      depressed
                      small
                      :ripple="false"
                      >Remove</v-btn
                    >
                  </div>
                </div>
              </div>
              <v-divider></v-divider>
            </div>
            <div class="d-flex flex-column justify-center align-center my-6">
              <p>No Results</p>
              <AddMod>
                <template v-slot:default="{ activator }">
                  <v-btn
                    color="deep-purple darken-2"
                    depressed
                    class="white--text text-capitalize "
                    small
                    :ripple="false"
                    v-bind="activator.attrs"
                    v-on="activator.on"
                    >Add Mod</v-btn
                  >
                </template>
              </AddMod>
            </div>
            <BaseLoader />
          </v-card-text> </v-card
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
import BaseLoader from "@/components/Base/BaseLoader.vue";
import AddMod from "@/components/Form/AddMod.vue";

export default {
  name: "Dashboard",
  components: {
    BaseLoader,
    AddMod,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.access-table {
  &__header {
    background-color: #f6f8fa;
  }
}
</style>
