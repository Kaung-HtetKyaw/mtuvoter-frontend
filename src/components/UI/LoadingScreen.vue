<template>
  <div class="loading__wrapper">
    <span>↓</span>
    <span style="--delay: 0.1s">↓</span>
    <span style="--delay: 0.3s">↓</span>
    <span style="--delay: 0.4s">↓</span>
    <span style="--delay: 0.5s">↓</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loading__wrapper {
  position: absolute;
  width: 100vw;
  top:0;
  left:0;
  z-index: 1000;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: white;
  span {
    font-size: 50px;
  }
}

@keyframes arrows {
  0%,
  100% {
    color: black;
    transform: translateY(0);
  }
  50% {
    color: #5545a8;
    transform: translateY(20px);
  }
}

span {
  --delay: 0s;
  animation: arrows 1s var(--delay) infinite ease-in;
}
</style>
