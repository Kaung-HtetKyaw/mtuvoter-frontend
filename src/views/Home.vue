<template>
  <div class="about">
    <div class="d-flex flex-column justify-center align-center">
      <Hero />
    </div>
    <div class="deep-purple darken-2 white--text">
      <ElectionOverview />
    </div>
    <div class="deep-purple--text darken-2">
      <NewsOverview />
    </div>
  </div>
</template>
<script>
import Hero from "@/components/UI/Hero.vue";
import ElectionOverview from "@/components/UI/ElectionOverview.vue";
import NewsOverview from "@/components/UI/NewsOverview.vue";
export default {
  name: "About",
  components: {
    Hero,
    ElectionOverview,
    NewsOverview,
  },
};
</script>

<style lang="scss" scoped></style>
