<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        class="forgot__wrapper d-flex justify-center align-center"
      >
        <v-container>
          <v-row justify="center">
            <v-col cols="12" sm="12" md="6">
              <v-card class="elevation-0 pb-6 width-100 forgot__form">
                <v-card-title
                  class="deep-purple darken-4 white--text d-flex justify-center"
                  >Forgot Password</v-card-title
                >
                <v-card-text class="mt-6 px-1">
                  <v-form ref="form" class="px-2">
                    <div class="px-3">
                      <div class="width-100">
                        <p v-if="errorMsg" class="red--text font-weight-medium text-center">{{ errorMsg }}</p>
                        <p v-if="successMsg" class="success--text font-weight-medium text-center">{{ successMsg }}</p>
                        <p class="text-center text-body-2">
                          Enter your email address below. Reset link will be
                          sent to that address
                        </p>
                      </div>
                      <v-text-field
                        outlined
                        type="email"
                        v-model="emailToSentResetLink"
                        label="Your email address"
                        required
                        dense
                      ></v-text-field>
                    </div>

                    <div
                      class="width-100 d-flex flex-column justify-center align-center"
                    >
                        <v-btn
                          color="deep-purple darken-4"
                          class="white--text text-capitalize"
                          depressed
                          :loading='sendingResetLink'
                          :ripple="false"
                          @click="sendResetLink()"
                          >Send Reset link</v-btn
                        >
                    </div>
                    <div class="mt-2">
                      <router-link :to="{ name: 'Home' }">
                        <a class="text-decoration-underline">Back to Home</a>
                      </router-link>
                    </div>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import store from '@/store/index.js'
export default {
  data() {
    return {
      emailToSentResetLink: "",
      successMsg:'',
      errorMsg:'',
      sendingResetLink:false
    };
  },
  methods: {
    async sendResetLink() {
      const vm = this;
      vm.sendingResetLink =true;
      await store.dispatch('user/forgotPassword',{email:vm.emailToSentResetLink})
      .then(() => {
        vm.successMsg = 'Password reset link has been sent to your email address. Please check your email.'
        vm.sendingResetLink = false;
      })
      .catch((e)=> {
        console.log(e)
        vm.sendingResetLink = false;
        if(e.response?.data.message) {
          vm.errorMsg = e.response.data.message
        }
        vm.errorMsg = "Something went wrong. Please try again."
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.forgot__wrapper {
  width: 100%;
  height: 90vh;
}
.forgot__form {
  border: 1px solid rgba(0, 0, 0, 0.39);
}
</style>
