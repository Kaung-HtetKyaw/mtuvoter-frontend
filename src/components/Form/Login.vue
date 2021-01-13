<template>
  <form action="#" class="sign-in-form">
    <h2 class="title">Sign in</h2>
    <div class="input-field">
      <i class="fas fa-user"></i>
      <input v-model="account.email" type="email" placeholder="Username" />
    </div>
    <div class="input-field">
      <i class="fas fa-lock"></i>
      <input
        v-model="account.password"
        type="password"
        placeholder="Password"
      />
    </div>

    <input
      @click="login($event)"
      type="submit"
      value="Login"
      class="btn solid"
    />
    <router-link :to="{ name: 'Forgot-Password' }" exact>
      <a class="text-decoration-underline my-3">Forgot password ?</a>
    </router-link>
  </form>
</template>

<script>
import store from "@/store/index.js";
export default {
  name: "Login",
  data() {
    return {
      account: {
        email: "speed02749@gmail.com",
        password: "",
      },
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
      const user = await store.dispatch("user/login", this.account);
      console.log(user);
    },
  },
};
</script>
