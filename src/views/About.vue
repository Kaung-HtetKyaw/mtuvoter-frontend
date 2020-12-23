<template>
  <div class="about">
    <div class="d-flex flex-column justify-center align-center">
      <Hero />
    </div>
  </div>
</template>
<script>
import Hero from "@/components/UI/Hero.vue";
export default {
  name: "About",
  components: {
    Hero,
  },
};
</script>

<style lang="scss" scoped></style>
