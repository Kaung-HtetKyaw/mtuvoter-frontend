<template>
  <div class="error-wrapper d-flex flex-column justify-center align-center">
    <h1 class="line-1 anim-typewriter my-3">404 Page Not Found</h1>
    <v-btn
      color="white"
      class="deep-purple--text darken-2 text-capitalize"
      depressed
      >Back to home</v-btn
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.error-wrapper {
  width: 100%;
  height: 100vh;
  background-color: #5545a8;
}

.line-1 {
  margin: 0 auto;
  border-right: 2px solid #fff;
  color: #fff;
  font-size: 180%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
}

/* Animation */
.anim-typewriter {
  animation: typewriter 4s steps(44) 1s 1 normal both,
    blinkTextCursor 500ms steps(44) infinite normal;
}
@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes blinkTextCursor {
  from {
    border-right-color: #fff;
  }
  to {
    border-right-color: transparent;
  }
}
</style>
