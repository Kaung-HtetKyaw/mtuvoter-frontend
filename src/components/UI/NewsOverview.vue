<template>
  <v-container class="py-10">
    <v-row>
      <v-col cols="12" sm="12" class="px-3 px-md-0 d-flex justify-center">
        <h2
          class="text-h5 news-overview--title workssan d-inline-block font-weight-medium deep-purple--text darken-4"
        >
          Latest News
        </h2>
      </v-col>
    </v-row>
    <v-row justify="center" class="my-6">
      <v-col cols="12" sm="12" md="6" lg="4" v-for="el in news" :key="el.id">
        <NewsCard :news="el" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" class="d-flex justify-center">
        <button class="more learn-more">
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">View All</span>
        </button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const NewsCard = () => import(/* webpackPrefetch: true */"@/components/News/NewsCard.vue");
export default {
  name: "NewsOverview",
  components: {
    NewsCard
  },
  props: {
    news: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
$bg: #f3f8fa;
$white: #fff;
$deep-purple: #363a92;

@mixin transition(
  $property: all,
  $duration: 0.45s,
  $ease: cubic-bezier(0.65, 0, 0.076, 1)
) {
  transition: $property $duration $ease;
}

.news-overview {
  &--title {
    position: relative;
    &:before {
      content: "";
      width: 50%;
      height: 2px;
      background-color: #363a92;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
}
button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  &.learn-more {
    width: 12rem;
    height: auto;
    .circle {
      @include transition(all, 0.45s, cubic-bezier(0.65, 0, 0.076, 1));
      position: relative;
      display: block;
      margin: 0;
      width: 3rem;
      height: 3rem;
      background: $deep-purple;
      border-radius: 4px;
      .icon {
        @include transition(all, 0.45s, cubic-bezier(0.65, 0, 0.076, 1));
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        background: $white;
        &.arrow {
          @include transition(all, 0.45s, cubic-bezier(0.65, 0, 0.076, 1));
          left: 0.625rem;
          width: 1.125rem;
          height: 0.125rem;
          background: none;
          &::before {
            position: absolute;
            content: "";
            top: -0.25rem;
            right: 0.0625rem;
            width: 0.625rem;
            height: 0.625rem;
            border-top: 0.125rem solid #fff;
            border-right: 0.125rem solid #fff;
            transform: rotate(45deg);
          }
        }
      }
    }
    .button-text {
      @include transition(all, 0.45s, cubic-bezier(0.65, 0, 0.076, 1));
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0.75rem 0;
      margin: 0 0 0 1.85rem;
      color: $deep-purple;
      font-weight: 700;
      line-height: 1.6;
      text-align: center;
      text-transform: uppercase;
    }
  }
  &:hover {
    .circle {
      width: 100%;
      .icon {
        &.arrow {
          background: $white;
          transform: translate(1rem, 0);
        }
      }
    }
    .button-text {
      color: $white;
    }
  }
}
</style>
