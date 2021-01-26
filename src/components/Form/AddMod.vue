<template>
  <v-row justify="end" class="py-3">
    <v-dialog scrollable v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <slot v-bind:activator="{ on, attrs }"></slot>
      </template>
      <v-card class="px-0 py-0 px-lg-6 py-lg-6">
        <div class="width-100 d-flex justify-end mt-3">
          <v-btn
            :ripple="false"
            class="mx-2"
            fab
            icon
            dark
            depressed
            color="deep-purple darken-2 rotate-45 my-2"
            x-small
            @click="clearData"
          >
            <v-icon dark class="rotate-45">
              mdi-plus
            </v-icon>
          </v-btn>
        </div>
        <v-card-title
          class="px-2   px-lg-6 text-center d-flex justify-center align-center"
        >
          <span
            class=" text-subtitle-1 text-center text-md-h6 font-weight-bold deep-purple--text darken-2"
            >Add a Moerator for MTU Voter</span
          >
        </v-card-title>
        <v-card-text class="add-mod">
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            type="email"
            outlined
            label="Search by email...."
            v-model="email"
            required
            dense
            class="pt-2"
            @keyup.enter="findUser"
          ></v-text-field>
          <div
            class="width-100 mt-3 mb-6 d-flex justify-center align-center"
            v-if="loading"
          >
            <BaseLoader />
          </div>

          <div v-if="!!user">
            <div
              class="access-table__mod__wrapper px-4 py-4 rounded px-md-8 mb-3 rounded"
            >
              <div
                class="access-table__mod px-6 d-flex flex-column flex-md-row justify-md-space-between align-md-center justify-center align-space-between"
              >
                <div class="mod--info">
                  <div
                    class="deep-purple--text darken-2 text-body-2 font-weight-bold text-decoration-underline"
                  >
                    {{ user.email }}
                  </div>
                  <span class="text-caption">{{ user.name }}</span
                  ><span class="font-weight-bold mx-1 text-h4">.</span
                  ><span class="text-capitalize">{{ user.role }}</span>
                </div>
              </div>
            </div>
            <v-btn
              dense
              color="deep-purple darken-2"
              class="white--text text-capitalize"
              depressed
              block
              @click="addMod"
              :ripple="false"
              :loading="adding"
              :disabled="!user || user.role === 'admin' || user.role === 'mod'"
              >Add {{ user.name }} as a moderator</v-btn
            >
            <div
              v-if="user.role === 'admin' || user.role === 'mod'"
              class="width-100 d-flex justify-center align-center no-result my-3 py-3 rounded"
            >
              This account already have Admin or Moderator Priviledges
            </div>
          </div>

          <div
            v-if="not_found"
            class="width-100 d-flex justify-center align-center no-result my-3 py-3 rounded"
          >
            Cannot find an account matching alflaflj@gmal
          </div>
          <div
            v-if="!user"
            class="width-100 d-flex justify-center align-center no-result my-3 py-3 px-3 rounded"
          >
            Moderator privildeges include publishing the news, generating guest
            token, managing the FAQs,etc.
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import axios from "@/services/axios.js";
import { showNoti } from "@/utils/noti.js";
import BaseLoader from "@/components/Base/BaseLoader.vue";
export default {
  name: "AddMod",
  components: {
    BaseLoader,
  },
  data: () => ({
    dialog: false,
    loading: false,
    user: null,
    email: "",
    not_found: false,
    adding: false,
    removing: false,
  }),
  methods: {
    async findUser() {
      const vm = this;
      vm.loading = true;
      await axios()
        .get(`/users?email=${vm.email}`)
        .then((res) => {
          vm.user = res.data.data[0];
          vm.loading = false;
          if (!res.data.data[0]) vm.not_found = true;
          console.log(res.data.data[0]);
        })
        .catch((e) => {
          console.log(e.response);
          showNoti("error", "Error finding the user");
        });
    },
    async addMod() {
      const vm = this;
      vm.adding = true;
      await axios()
        .post(`/users/roles`, {
          email: vm.email,
        })
        .then(() => {
          vm.adding = false;
          vm.user.role = "mod";
          vm.$emit("add-mod", vm.user);
          showNoti("success", "New Moderator has been added successfully");
          vm.clearData();
        })
        .catch((e) => {
          vm.adding = false;
          showNoti("error", e.response.message);
        });
    },

    clearData() {
      this.dialog = false;
      this.user = null;
      this.not_found = false;
      this.email = "";
    },
  },
};
</script>
<style lang="scss">
.v-text-field.v-text-field--enclosed .v-text-field__details {
  margin-bottom: 0px;
}
.auth-info {
  li {
    margin: 10px 0;
  }
}
.add-mod {
  .access-table__mod {
    &__wrapper {
      background-color: #f6f8fa;
      border: 1px solid rgba(0, 0, 0, 0.39);
      cursor: pointer;
    }
  }
  .no-result {
    border: 1px solid rgba(0, 0, 0, 0.39);
    background-color: #f6f8fa;
  }
}
</style>
