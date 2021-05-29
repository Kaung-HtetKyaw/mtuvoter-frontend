<template>
  <v-container class="">
    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="6"
        offset-md="3"
        class="reset__wrapper d-flex justify-center align-center"
      >
        <v-card class="elevation-0 pb-6 width-100 reset__form">
          <v-card-title
            class="deep-purple darken-4 white--text d-flex justify-center"
            >Reset Password</v-card-title
          >
          <v-card-text class="mt-6 px-1">
            <v-form ref="form" class="px-2">
              <div>
                <div>
                  <p v-if="errorMsg" class="red--text font-weight-medium text-center">{{ errorMsg }}</p>
                  <p v-if="successMsg" class="success--text font-weight-medium text-center">{{ successMsg }}</p>
                </div>
                <div>
                  <h6
                    class="text-body-2 font-weight-medium deep-purple--text darken-4 mb-2"
                  >
                    Email Address
                  </h6>
                  <v-text-field
                    outlined
                    type="email"
                    v-model="resetInfo.email"
                    required
                    dense
                  ></v-text-field>
                </div>
                <div>
                  <h6
                    class="text-body-2 font-weight-medium deep-purple--text darken-4 mb-2"
                  >
                    New Password
                  </h6>
                  <v-text-field
                    outlined
                    type="password"
                    v-model="resetInfo.password"
                    required
                    dense
                  ></v-text-field>
                </div>
                <div>
                  <h6
                    class="text-body-2 font-weight-medium deep-purple--text darken-4 mb-2"
                  >
                    Confirm new password
                  </h6>
                  <v-text-field
                    outlined
                    type="password"
                    v-model="resetInfo.confirmedPassword"
                    required
                    dense
                  ></v-text-field>
                </div>
              </div>

              <div
                class="width-100 d-flex flex-column justify-center align-center"
              >
                <v-btn
                  color="deep-purple darken-4"
                  class="white--text text-capitalize"
                  depressed
                  :loading='resettingPassword'
                  @click="resetPassword"
                  :ripple="false"
                  >Reset Password</v-btn
                >
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import store from '@/store/index.js';
import {showNoti} from '@/utils/noti.js';
export default {
  data() {
    return {
      resettingPassword:false,
      successMsg:'',
      errorMsg:'',
      resetInfo:{
        email:'',
        password:'',
        confirmedPassword:''
      }
    }
  },
  methods:{
    async resetPassword() {
      const vm = this;
      vm.resettingPassword = true;
      return store.dispatch('user/resetPassword',{resetInfo:vm.resetInfo,token:vm.$route.params.token})
      .then(() => {
        vm.successMsg = 'Password reset link has been sent to your email address. Please check your email.'
        vm.resettingPassword = false;
        showNoti('success','Password has been changed successfully. Now logging you in.........')
        this.$router.push({ name: "Elections" });
      })
      .catch((e)=> {
        vm.resettingPassword = false;
        if(e.response.data.message) {
          vm.errorMsg = e.response.data.message
        }
        vm.errorMsg = "Something went wrong.Please try again."
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.reset__wrapper {
  width: 100%;
  height: 90vh;
}
.reset__form {
  border: 1px solid rgba(0, 0, 0, 0.39);
}
</style>
