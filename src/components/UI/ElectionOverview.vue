<template>
  <v-container class="elections-overview">
    <v-row>
      <v-col cols="12" sm="12" class="px-3 px-md-0 d-flex justify-center">
        <h2 class="text-h5 elections-overview--title workssan d-inline-block">
          Elections
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="4" v-for="i in 3" :key="i">
        <ElectionCard />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12">
        <div class="d-flex justify-center">
          <button class="learn-more workssan">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">View All</span>
          </button>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ElectionCard from "@/components/Election/ElectionCard.vue";

export default {
  name: "ElectionOverview",
  components: {
    ElectionCard,
  },
};
</script>

<style lang="scss" scoped>
.elections-overview {
  &--title {
    position: relative;
    &:before {
      content: "";
      width: 50%;
      height: 2px;
      background-color: white;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  $bg: #f3f8fa;
  $white: #fff;
  $deep-purple: #6a4db7;

  @mixin transition(
    $property: all,
    $duration: 0.45s,
    $ease: cubic-bezier(0.65, 0, 0.076, 1)
  ) {
    transition: $property $duration $ease;
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
        background: $white;
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
              border-top: 0.125rem solid #6a4db7;
              border-right: 0.125rem solid #6a4db7;
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
        color: $white;
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
            background: $deep-purple;
            transform: translate(1rem, 0);
          }
        }
      }
      .button-text {
        color: $deep-purple;
      }
    }
  }
}
</style>
