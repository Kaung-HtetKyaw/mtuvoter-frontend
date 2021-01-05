<template>
  <v-container class="mt-4 mb-8 py-0 newsletter">
    <v-row>
      <v-col cols="12" sm="12">
        <template>
          <div class="px-3">
            <v-alert
              dismissible
              color="deep-purple darken-2"
              border="left"
              elevation="2"
              colored-border
              icon="mdi-information"
              class="text-body-2 text-md-subtitle-1"
            >
              Publish <strong>News</strong>
              <router-link
                :to="{ name: 'News-Publish' }"
                class="text-decoration-underline px-1"
                >here</router-link
              >
            </v-alert>
          </div>
        </template>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        class="d-flex flex-column justify-center align-center deep-purple--text darken-2"
      >
        <h1 class="d-inline-block elections--title">Latest News</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        class="workssan d-flex justify-center align-center deep-purple--text darken-2 "
        v-for="i in 3"
        :key="i"
      >
        <NewsCard />
      </v-col>
    </v-row>
    <v-row class="my-6">
      <v-col cols="12" sm="12" class="d-flex justify-center align-center">
        <BaseLoader />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NewsCard from "@/components/News/NewsCard-2.vue";
import BaseLoader from "@/components/Base/BaseLoader.vue";
export default {
  name: "Elections",
  components: {
    NewsCard,
    BaseLoader,
  },
};
</script>

<style lang="scss" scoped>
.elections {
  &--title {
    position: relative;
    &::before {
      content: "";
      width: 50%;
      height: 2px;
      background-color: #5545a8;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
}
// .newsletter {
//   background-color: #edf3ff;
// }
</style>
