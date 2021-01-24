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
            <h3 class="deep-purple--text darken-2 text-body-1 my-2">Profile</h3>
            <p class="text-body-2 text--secondary">
              Your email adderss is your identity on mtuvoter and is used to log
              in.
            </p>
          </v-col>
          <v-col cols="12" sm="12" md="8" class="d-flex justify-center">
            <div class="account__form">
              <div>
                <h6
                  class="text-body-2 font-weight-medium deep-purple--text darken-2 mb-2"
                >
                  Email address
                </h6>
                <v-text-field
                  v-model="user.email"
                  :height="10"
                  outlined
                  dense
                ></v-text-field>
              </div>
              <div>
                <h6
                  class="text-body-2 font-weight-medium deep-purple--text darken-2 mb-2"
                >
                  Name
                </h6>
                <v-text-field
                  v-model="user.name"
                  :height="10"
                  outlined
                  dense
                ></v-text-field>
              </div>
              <div>
                <h6
                  class="text-body-2 font-weight-medium deep-purple--text darken-2 mb-2"
                >
                  Student ID
                </h6>
                <v-text-field
                  v-model="user.SID"
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
                color="deep-purple darken-2 text-capitalize"
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
            <h3 class="deep-purple--text darken-2 text-body-1 my-2">
              Password
            </h3>
            <p class="text-body-2 text--secondary">
              You have to log in again in other devices after changing you
              password
            </p>
          </v-col>
          <v-col cols="12" sm="12" md="8" class="d-flex justify-center">
            <div class="account__form">
              <div>
                <h6
                  class="text-body-2 font-weight-medium deep-purple--text darken-2 mb-2"
                >
                  Current Password
                </h6>
                <v-text-field :height="10" outlined dense></v-text-field>
              </div>
              <div>
                <h6
                  class="text-body-2 font-weight-medium deep-purple--text darken-2 mb-2"
                >
                  New Password
                </h6>
                <v-text-field :height="10" outlined dense></v-text-field>
              </div>
              <div>
                <h6
                  class="text-body-2 font-weight-medium deep-purple--text darken-2 mb-2"
                >
                  Confirm new password
                </h6>
                <v-text-field :height="10" outlined dense></v-text-field>
              </div>
              <v-btn
                depressed
                small
                :ripple="false"
                color="deep-purple darken-2 text-capitalize"
                class="white--text"
                >Update Password</v-btn
              >
              <div class="width-100 d-flex flex-column justify-end my-3">
                <p class="text-body-2 text--secondary">
                  You can reset password by clicking the following button and
                  password reset link will be sent to you email address.
                </p>
                <v-btn
                  depressed
                  small
                  :ripple="false"
                  color="deep-purple darken-2 text-capitalize"
                  class="white--text"
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

export default {
  name: "Account",
  computed: {
    ...mapState({
      user: (state) => state.user.user,
    }),
  },
  data() {
    return {};
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
