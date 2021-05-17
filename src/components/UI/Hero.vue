<template>
  <v-container class="py-0 py-md-3">
    <v-row>
      <v-col cols="12" sm="12" md="6" class="px-3 px-md-0">
        <div
          class="workssan hero-wrapper d-flex flex-column justify-center align-center align-md-start deep-purple--text darken-4 "
        >
          <div class="hero-title text-h6 py-4">
            <h1
              class="text-center text-md-left workssan deep-purple--text darken-4"
            >
              Let's Change Something .
            </h1>
          </div>
          <div class="wordCarousel ">
            <div class=" word-list">
              <!--        Use classes 2,3, or 4 to match the number of words -->
              <ul class="flip2 worrkssan px-0 text-center text-md-left">
                <li>Vote Now</li>
                <li>Change Now</li>
              </ul>
            </div>
          </div>
          <div>
            <p class="my-4 text-center text-md-left">
              We've produced cutting-edge creative for startups and Fortune 500
              companies spanning tech, crypto, hospitality, healthcare, and
              beyond.
            </p>
          </div>
          <div class="my-4">
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Learn More</span>
            </button>
          </div>
        </div></v-col
      >
      <v-col
        cols="12"
        sm="0"
        md="6"
        class="py-0 px-0 hero-image"
        :style="{
          backgroundImage: `url(/img/pinky-finger.png)`
        }"
      >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Hero"
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

.hero {
  &-wrapper {
    width: 100%;
    height: 80vh;
    //  background-color:#6a4db7 ;
  }
  &-title {
  }
  &-image {
    width: 100%;
    // background: url("@/assets/img/pinky-finger.png");
    background-size: fit;
    background-position: center top;
    background-repeat: no-repeat;
  }
  &-btn {
    text-transform: capitalize !important;
    font-weight: 600;
  }
}

.wordCarousel {
  color: #939393;
  .word-list {
    overflow: hidden;
    height: 65px;
    font-size: 36px;
    font-weight: 600;
    ul {
      width: 100%;
    }
    li {
      color: #aaa;
      height: 45px;
      margin-bottom: 45px;
      display: block;
      position: relative;
      &:before {
        content: "";
        width: 100%;
        height: 4px;
        position: absolute;
        bottom: -10px;
        left: 0%;
        transform: translate(0%, -50%);
        background-color: #363a92;
      }
    }
  }
}

.flip2 {
  animation: flip2 6s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
}
.flip3 {
  animation: flip3 8s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
}
.flip4 {
  animation: flip4 10s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
}

@keyframes flip2 {
  0% {
    margin-top: -180px;
  }
  5% {
    margin-top: -90px;
  }
  50% {
    margin-top: -90px;
  }
  55% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -270px;
  }
}

@keyframes flip3 {
  0% {
    margin-top: -270px;
  }
  5% {
    margin-top: -180px;
  }
  33% {
    margin-top: -180px;
  }
  38% {
    margin-top: -90px;
  }
  66% {
    margin-top: -90px;
  }
  71% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -270px;
  }
}

@keyframes flip4 {
  0% {
    margin-top: -360px;
  }
  5% {
    margin-top: -270px;
  }
  25% {
    margin-top: -270px;
  }
  30% {
    margin-top: -180px;
  }
  50% {
    margin-top: -180px;
  }
  55% {
    margin-top: -90px;
  }
  75% {
    margin-top: -90px;
  }
  80% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -270px;
  }
}

// explore btn
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
