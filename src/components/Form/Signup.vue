<template>
  <form action="#" class="sign-up-form">
    <h2 class="title">Sign up</h2>
    <div class="input-field">
      <i class="fas fa-user"></i>
      <input type="text" placeholder="Student ID" />
    </div>
    <div class="input-field">
      <i class="fas fa-user"></i>
      <input type="text" placeholder="Username" />
    </div>
    <div class="input-field">
      <i class="fas fa-envelope"></i>
      <input type="email" placeholder="Email" />
    </div>
    <div class="input-field">
      <i class="fas fa-lock"></i>
      <input type="password" placeholder="Password" />
    </div>
    <div class="input-field">
      <i class="fas fa-lock"></i>
      <input type="password" placeholder="Confirm password" />
    </div>
    <v-btn
      rounded
      large
      class="white--text font-weight-bold px-12 my-4"
      color="deep-purple darken-2"
      depressed
      :ripple="false"
      >Sign Up</v-btn
    >
  </form>
</template>

<script>
export default {};
</script>

<style></style>
