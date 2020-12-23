<template>
  <v-container class="py-0 py-md-3">
    <v-row>
      <v-col cols="12" sm="12" md="6">
        <div
          class="workssan hero-wrapper d-flex flex-column justify-center align-center align-md-start deep-purple--text darken-4 "
        >
          <div class="hero-title text-h6 py-4">
            <h1 class="text-center text-md-left workssan ">
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
            <v-btn
              tile
              elevation="0"
              class="workssan deep-purple darken-2 white--text hero-btn"
              >See Elections</v-btn
            >
          </div>
        </div></v-col
      >
      <v-col cols="12" sm="0" md="6" class="py-0 px-0 hero-image"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  &-wrapper {
    width: 100%;
    height: 400px;
    //  background-color:#6a4db7 ;
  }
  &-title {
  }
  &-image {
    width: 100%;
    background: url("/img/pinky-finger.png");
    background-size: fit;
    background-position: center top;
    background-repeat: no-repeat;
  }
  &-btn {
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
      color: #ccc;
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
        background-color: #6a4db7;
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

// Layout //////////////////////////////////////////
</style>
