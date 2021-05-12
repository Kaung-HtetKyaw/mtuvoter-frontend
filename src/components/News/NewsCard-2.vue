<template>
  <v-container class="news-card-2">
    <router-link :to="{ name: 'News-Single', params: { news: news._id } }">
      <v-row class='my-1'>
          <v-chip
            outlined
            v-if="authenticated && (userDetail.role === 'admin' || userDetail.role === 'mod')"
            small
            class="ma-2"
            color="deep-purple darken-4 white--text my-3 font-weight-bold"
          >
            {{news.published ? "Published":"Unpublished"}}
            <v-icon v-if="news.published" x-small class="ml-1">mdi-check-circle</v-icon>
          </v-chip>
      </v-row>
      <v-row class="flex-column-reverse flex-md-row">
        <v-col cols="12" sm="12" md="10">
          <h2 class="text-decoration-underline my-2 news-card-2__title">
            {{ news.title }}
          </h2>
          <p class="my-2 news-card-2__description font-weight-bold">
            {{ news.description }}
          </p>
          <p class="news-card-2__date text-right my-2">8 Aug 2020</p>
        </v-col>
        <v-col cols="12" sm="12" md="2">
          <v-sheet
            height="150px"
            :style="{
              backgroundImage: `url(/img/mtu-img.jpg)`,
            }"
            class="news-card-2__img"
          ></v-sheet>
        </v-col> </v-row
    ></router-link>
  </v-container>
</template>

<script>
export default {
  name: "News-Card-2",
  props: {
    news: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.news-card-2 {
  cursor: pointer;
  &__img {
    background-size: contain;
    background-position: center;
  }
  &__date {
    font-size: 13px;
    opacity: 0.5;
  }
  &__description {
  }
  &:hover {
    text-decoration: underline;
  }
}
</style>
