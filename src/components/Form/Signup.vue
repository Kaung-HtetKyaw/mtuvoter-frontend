<template>
  <form action="#" class="sign-up-form">
    <h2 class="title">Sign up</h2>
    <p v-if="error">{{error}}</p>
    <p v-if="success" class="success--text font-weight-medium">{{success}}</p>
    <div class="input-field">
      <i class="fas fa-user"></i>
      <input type="text" placeholder="Student ID" v-model="account.SID" />
    </div>
    <div class="input-field">
      <i class="fas fa-user"></i>
      <input type="text" placeholder="Username" v-model="account.name" />
    </div>
    <div class="input-field">
      <i class="fas fa-envelope"></i>
      <input type="email" placeholder="Email" v-model="account.email" />
    </div>
    <div class="input-field">
      <i class="fas fa-lock"></i>
      <input type="password" placeholder="Password" v-model="account.password" />
    </div>
    <div class="input-field">
      <i class="fas fa-lock"></i>
      <input type="password" placeholder="Confirm password" v-model="account.confirmedPassword"/>
    </div>
    <v-btn
      rounded
      large
      class="white--text font-weight-bold px-12 my-4"
      color="deep-purple darken-4"
      depressed
      :ripple="false"
      :loading='loading'
      @click="signup"
      >Sign Up</v-btn
    >
  </form>
</template>

<script>
import store from "@/store/index.js";
import { showNoti } from "@/utils/noti.js";
export default {
  name: "Login",
  data() {
    return {
      account: {
        email: "",
        password: "",
        name:'',
        confirmedPassword:'',
        SID:''
      },
      loading: false,
      error:null,
      success:null
    };
  },
  methods: {
    async signup(e) {
      e.preventDefault();
      const vm = this;
      vm.loading = true;
      vm.error = null;
      await store
        .dispatch("user/signup", this.account)
        .then(() => {
          vm.loading = false;
          vm.success = 'Verification email has been sent to your email address'
          vm.$router.push({ name: "Elections" });
        })
        .catch((e) => {
          vm.loading = false;
          if(e.response.data.message) {
            vm.error  = e.response.data.message
          } else {
            showNoti("error", "Something went wrong");
          }
        });
    },
  },
};
</script>

<style></style>
