<template>
  <v-container>
    <v-row class="white admin--border px-3 my-4 ">
      <v-col cols="12" sm="12" class="px-0">
        <v-card class="elevation-1">
          <v-card-title
            class="access-table__header text--secondary d-flex  justify-space-between px-3 px-md-6"
          >
            <h1 class="text-subtitle-1 text-md-h6">Manage Access</h1>
            <AddMod @add-mod="addMod">
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
                v-model="email"
                type="email"
                @keyup.delete="clearMod"
                @keyup.enter="findMod"
                label="Find a moderator by email..."
                prepend-inner-icon="mdi-magnify"
              ></v-text-field>
            </div>
            <v-divider></v-divider>
            <div
              v-if="finding"
              class="width-100 d-flex justify-center align-center"
            >
              <BaseLoader />
            </div>
            <div v-else>
              <div v-if="singleMod">
                <div class="access-table__mod__wrapper px-4 px-md-8 my-3">
                  <div
                    class="access-table__mod px-6 d-flex flex-column flex-md-row justify-md-space-between align-md-center justify-center align-space-between"
                  >
                    <div class="mod--info">
                      <div
                        class="deep-purple--text darken-2 text-body-2 font-weight-bold text-decoration-underline"
                      >
                        {{ singleMod.email }}
                      </div>
                      <span class="text-caption">{{ singleMod.name }}</span
                      ><span class="font-weight-bold mx-1 text-h4">.</span
                      ><span class="text-capitalize">{{ singleMod.role }}</span>
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
              <div v-else>
                <div
                  v-for="(mod, i) in mods"
                  :key="mod._id"
                  v-observe-visibility="
                    i === mods.length - 1 ? loadMods : false
                  "
                >
                  <div
                    class="access-table__mod__wrapper px-4 px-md-8 my-3"
                    v-if="!not_found"
                  >
                    <BaseModCard :mod="mod" @remove-mod="removeMod" />
                  </div>
                  <v-divider></v-divider>
                </div>
              </div>
            </div>

            <div
              class="d-flex flex-column justify-center align-center my-6"
              v-if="(!loading && mods.length === 0) || not_found"
            >
              <p>No Results</p>
              <AddMod @add-mod="addMod">
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
            <BaseLoader v-if="loading" />
          </v-card-text> </v-card
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
import BaseLoader from "@/components/Base/BaseLoader.vue";
import AddMod from "@/components/Form/AddMod.vue";
import BaseModCard from "@/components/Base/BaseModCard.vue";
import axios from "@/services/axios.js";
import { showNoti } from "@/utils/noti.js";
import { removeBy } from "@/utils/utils.js";

export default {
  name: "Dashboard",
  components: {
    BaseLoader,
    AddMod,
    BaseModCard,
  },
  data() {
    return {
      loading: false,
      mods: [],
      page: 1,
      limit: 10,
      end: false,
      singleMod: null,
      finding: false,
      email: "",
      not_found: false,
    };
  },
  async created() {
    await this.loadMods();
  },
  methods: {
    async loadMods() {
      const vm = this;
      if (vm.end || vm.loading) {
        return;
      }
      vm.loading = true;
      await axios()
        .get(`/users?role=mod&page=${vm.page}&limit=${vm.limit}`)
        .then((res) => {
          if (res.data.data.length == 0) {
            vm.end = true;
          }
          console.log(res.data.data);
          vm.mods = vm.mods.concat(res.data.data);
          vm.loading = false;
          vm.page++;
        })
        .catch(() => {
          showNoti("error", "Error loading Moderators");
          vm.loading = false;
        });
    },
    async findMod() {
      const vm = this;
      vm.finding = true;
      // check in the existing mods first
      const mod = vm.mods.find((el) => el.email === vm.email);
      if (mod) {
        vm.singleMod = mod;
        vm.finding = false;
        return;
      }
      // check from the DB
      await axios()
        .get(`/users?role=mod&email=${vm.email}`)
        .then((res) => {
          if (!res.data.data[0]) {
            vm.not_found = true;
          }
          vm.singleMod = res.data.data[0];
          vm.finding = false;
        })
        .catch(() => {
          vm.finding = false;
          showNoti("error", "Error finding the moderator.");
        });
    },
    clearMod() {
      this.singleMod = null;
      this.not_found = false;
    },
    addMod(user) {
      this.mods.unshift(user);
      this.singleMod = null;
      this.not_found = false;
    },
    removeMod(user) {
      removeBy(this.mods, user._id, "_id");
    },
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
