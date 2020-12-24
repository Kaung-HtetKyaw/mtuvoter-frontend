<template>
  <div class="about">
    <div class="d-flex flex-column justify-center align-center">
      <Hero />
    </div>
    <div class="deep-purple darken-2 white--text">
      <ElectionOverview />
    </div>
  </div>
</template>
<script>
import Hero from "@/components/UI/Hero.vue";
import ElectionOverview from "@/components/UI/ElectionOverview.vue";
export default {
  name: "About",
  components: {
    Hero,
    ElectionOverview,
  },
};
</script>

<style lang="scss" scoped></style>
