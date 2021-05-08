<template>
  <v-container fluid class="account__wrapper">
    <v-row class="account__title d-flex align-center">
      <v-container>
        <v-row class="workssan font-weight-medium">
          Manage Account
        </v-row>
      </v-container>
    </v-row>
    <v-row>
      <v-container>
        <v-row class="my-6 account__section">
          <v-col cols="12" sm="12" md="4" class="text-center text-md-left">
            <h3 class="deep-purple--text darken-4 text-body-1 my-2 font-weight-bold">Profile</h3>
            <p class="text-body-2 ">
              Your email adderss is your identity on mtuvoter and is used to log
              in.
            </p>
          </v-col>
          <v-col cols="12" sm="12" md="8" class="d-flex justify-center">
            <div class="account__form">
              <div>
                <h6
                  class="text-body-2 font-weight-medium deep-purple--text darken-4 mb-2"
                >
                  Email address
                </h6>
                <p
                  class="text-body-2 text--secondary"
                  v-if="user && user.verified"
                >
                  <v-icon small color="deep-purple darken-4"
                    >mdi-check-circle</v-icon
                  >
                  Your email address is verified
                </p>
                <v-text-field
                  v-model="account.email"
                  :height="10"
                  outlined
                  dense
                  :disabled="true"
                ></v-text-field>
              </div>
              <div>
                <h6
                  class="text-body-2 font-weight-medium deep-purple--text darken-4 mb-2"
                >
                  Name
                </h6>
                <v-text-field
                  v-model="account.name"
                  :height="10"
                  outlined
                  dense
                ></v-text-field>
              </div>
              <div>
                <h6
                  class="text-body-2 font-weight-medium deep-purple--text darken-4 mb-2"
                >
                  Student ID
                </h6>
                <v-text-field
                  v-model="account.SID"
                  :height="10"
                  outlined
                  dense
                  disabled
                ></v-text-field>
              </div>
              <v-btn
                depressed
                small
                :ripple="false"
                @click="updateMe"
                :loading="updating_account"
                color="deep-purple darken-4 text-capitalize"
                class="white--text"
                >Update Profile</v-btn
              >
            </div>
          </v-col>
          <v-col cols="12" sm="12">
            <v-divider></v-divider>
          </v-col>
        </v-row>
        <v-row class="my-6 account__section">
          <v-col cols="12" sm="12" md="4" class="text-center text-md-left">
            <h3 class="deep-purple--text darken-4 text-body-1 my-2 font-weight-bold">
              Password
            </h3>
            <p class="text-body-2 ">
              You have to log in again in other devices after changing you
              password
            </p>
          </v-col>
          <v-col cols="12" sm="12" md="8" class="d-flex  justify-center">
            <div class="account__form">
              <div>
                <h6
                  class="text-body-2 font-weight-medium deep-purple--text darken-4 mb-2"
                >
                  Current Password
                </h6>
                <v-text-field
                  :height="10"
                  outlined
                  dense
                  v-model="oldPassword"
                  type="password"
                ></v-text-field>
              </div>
              <div>
                <h6
                  class="text-body-2 font-weight-medium deep-purple--text darken-4 mb-2"
                >
                  New Password
                </h6>
                <v-text-field
                  :height="10"
                  outlined
                  dense
                  v-model="newPassword"
                  type="password"
                ></v-text-field>
              </div>
              <div>
                <h6
                  class="text-body-2 font-weight-medium deep-purple--text darken-4 mb-2"
                >
                  Confirm new password
                </h6>
                <v-text-field
                  :height="10"
                  outlined
                  dense
                  v-model="confirmedPassword"
                  type="password"
                ></v-text-field>
              </div>
              <div class="width-100 d-flex justify-end mb-4">
                <v-btn
                  depressed
                  block
                  small
                  :ripple="false"
                  color="deep-purple darken-4 text-capitalize"
                  class="white--text"
                  @click="updatePassword"
                  :loading="updating_password"
                  >Update Password</v-btn
                >
              </div>

              <div class="width-100 d-flex flex-column justify-end my-3">
                <p class="text-body-2 text--secondary">
                  You can reset password by clicking the following button and
                  password reset link will be sent to you email address.
                </p>
                <v-btn
                  depressed
                  small
                  :ripple="false"
                  color="deep-purple darken-4 text-capitalize"
                  class="white--text"
                  :loading="forgetting_password"
                  @click="forgotPassword"
                  >Forgot Password</v-btn
                >
              </div>
            </div>
          </v-col>

          <v-col cols="12" sm="12">
            <v-divider></v-divider>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import store from "@/store/index.js";
import { convertToObjWithPropProvided } from "@/utils/utils.js";
import { showNoti } from "@/utils/noti.js";
import axios from "@/services/axios.js";
export default {
  name: "Account",
  computed: {
    ...mapState({
      user: (state) => state.user.user,
    }),
  },
  data() {
    return {
      account: {},
      oldPassword: "",
      newPassword: "",
      confirmedPassword: "",
      updating_account: false,
      updating_password: false,
      forgetting_password: false,
    };
  },
  created() {
    this.account = { ...this.user };
  },
  methods: {
    async updateMe() {
      const vm = this;
      vm.updating_account = true;
      await store
        .dispatch("user/updateMe", {
          user: convertToObjWithPropProvided(vm.account, ["name"]),
        })
        .then((res) => {
          console.log(res);
          vm.updating_account = false;
          showNoti("success", "Account has been updated successfully");
        })
        .catch(() => {
          vm.updating_account = false;
          showNoti("error", "Error updating the account");
        });
    },
    async updatePassword() {
      const vm = this;
      vm.updating_password = true;
      await store
        .dispatch("user/updatePassword", {
          email: vm.account.email,
          oldPassword: vm.oldPassword,
          newPassword: vm.newPassword,
          confirmedPassword: vm.confirmedPassword,
        })
        .then(() => {
          vm.updating_password = false;
          showNoti("success", "Password has been updated successfully");
        })
        .catch(() => {
          vm.updating_password = false;
          showNoti("error", "Error updating password");
        });
    },
    async forgotPassword() {
      const vm = this;
      vm.forgetting_password = true;
      await axios()
        .post(`/users/forgot`, { email: vm.account.email })
        .then(() => {
          vm.forgetting_password = false;
          showNoti(
            "success",
            "Password reset email has been sent to your email address"
          );
        })
        .catch(() => {
          vm.forgetting_password = false;
          showNoti("error", "Something went wrong");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.account {
  &__wrapper {
  }
  &__title {
    background-color: #f6f8fa;
    height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.39);
    border-top: 1px solid rgba(0, 0, 0, 0.39);
    font-size: 17px;
  }
  &__section {
  }
  &__form {
    width: 290px;
  }
}
</style>
