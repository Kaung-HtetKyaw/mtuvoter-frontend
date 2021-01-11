<template>
  <form action="#" class="sign-in-form">
    <h2 class="title">Sign in</h2>
    <div class="input-field">
      <i class="fas fa-user"></i>
      <input type="text" placeholder="Username" />
    </div>
    <div class="input-field">
      <i class="fas fa-lock"></i>
      <input type="password" placeholder="Password" />
    </div>
    <input type="submit" value="Login" class="btn solid" />
    <router-link :to="{ name: 'Forgot-Password' }">
      <a class="text-decoration-underline my-3">Forgot password ?</a>
    </router-link>
  </form>
</template>

<script>
export default {};
</script>
