<template>
  <form action="#" class="sign-in-form">
    <h2 class="title">Sign in</h2>
    <p v-if="error" class="red--text font-weight-medium">{{ error }}</p>
    <p v-if="info" class="success--text font-weight-medium">{{ info }}</p>
    <div class="input-field">
      <i class="fas fa-user"></i>
      <input v-model="account.email" type="email" placeholder="Email" />
    </div>
    <div class="input-field">
      <i class="fas fa-lock"></i>
      <input
        v-model="account.password"
        type="password"
        placeholder="Password"
      />
    </div>

    <!-- <input
      @click="login($event)"
      type="submit"
      value="Login"
      class="btn solid"
    /> -->
    <v-btn
      rounded
      large
      class="white--text font-weight-bold px-12 my-4"
      color="deep-purple darken-4"
      depressed
      :ripple="false"
      :loading="loading"
      @click="login($event)"
      >Login</v-btn
    >
    <router-link :to="{ name: 'Forgot-Password' }" exact>
      <a class="text-decoration-underline my-3 deep-purple--text darken-4"
        >Forgot password ?</a
      >
    </router-link>
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
        password: ""
      },
      loading: false,
      error: null,
      info: null
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
      const vm = this;
      vm.loading = true;
      vm.error = null;
      await store
        .dispatch("user/login", this.account)
        .then(res => {
          console.log(res);
          vm.loading = false;
          if (res.message) {
            vm.info = res.message;
            return;
          }
          vm.$router.push({ name: "Elections" });
        })
        .catch(e => {
          vm.loading = false;
          if (e.response.data.message) {
            vm.error = e.response.data.message;
          } else {
            showNoti("error", "Something went wrong");
          }
        });
    }
  }
};
</script>
